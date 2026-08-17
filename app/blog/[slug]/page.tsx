import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaLinkedin } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";

import { getAdjacentBlogPosts, getBlogPostBySlug } from "@/lib/blog";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pahasara.me";
  const canonicalPath = `/blog/${post.slug}`;
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { prev, next } = getAdjacentBlogPosts(slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pahasara.me";
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${siteUrl}/blog/${post.slug}`)}`;

  return (
    <main className="flex flex-col gap-8">
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-md text-zinc-400 hover:text-white transition-colors duration-200"
        >
          <FaArrowLeft className="w-3 h-3" />
          Back to blog
        </Link>
      </div>

      <header className="flex flex-col gap-3">
        <p className="text-xs text-zinc-500">{post.date}</p>
        <h1 className="text-2xl font-semibold text-white">{post.title}</h1>
        <p className="text-zinc-400">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="pt-2">
          <a
            href={linkedInShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700 hover:bg-zinc-700 hover:text-white transition-colors duration-200"
          >
            <FaLinkedin className="w-4 h-4" />
            Share on LinkedIn
          </a>
        </div>
      </header>

      <article className="markdown-prose">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            img: ({ alt, src }) => (
              // Render markdown images directly from /public paths.
              <img src={src ?? ""} alt={alt ?? "blog image"} loading="lazy" />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>

      <hr className="border-zinc-800" />

      <nav className="flex justify-between gap-4">
        {prev ? (
          <Link href={`/blog/${prev.slug}`} className="text-sm text-zinc-300 hover:text-white">
            Previous: {prev.title}
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className="text-sm text-zinc-300 hover:text-white text-right"
          >
            Next: {next.title}
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}
