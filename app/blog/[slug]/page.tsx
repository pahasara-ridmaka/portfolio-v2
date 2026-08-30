import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { FaArrowLeft } from "react-icons/fa";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Back to Blog */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-md text-zinc-400 hover:text-white transition-colors duration-200"
        >
          <FaArrowLeft className="w-3 h-3" />
          Back to blog
        </Link>
      </div>

      {/* Post Header */}
      <header className="flex flex-col gap-2">
        <h1 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-xs text-zinc-400 font-light">
          <span>{post.date}</span>
          {post.tags && post.tags.length > 0 && (
            <>
              <span>•</span>
              <div className="flex gap-1.5">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-zinc-500">
                    #{tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </header>

      <hr className="border-zinc-800" />

      {/* Post Content */}
      <article className="prose prose-invert prose-zinc max-w-none text-zinc-400 font-light text-sm sm:text-base leading-relaxed prose-headings:text-zinc-100 prose-headings:font-normal prose-a:text-white prose-a:underline prose-strong:text-zinc-200 prose-code:text-zinc-200 prose-pre:border prose-pre:border-zinc-800 prose-pre:bg-zinc-900/50">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]],
            },
          }}
        />
      </article>
    </div>
  );
}