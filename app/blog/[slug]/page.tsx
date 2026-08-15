import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
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
      url: `/blog/${slug}`, // resolved against metadataBase, see step 7
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
    <article className="mx-auto max-w-3xl px-4 py-16 prose prose-neutral dark:prose-invert">
      <h1>{post.title}</h1>
      <p className="text-sm text-muted-foreground">{post.date}</p>
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
  );
}