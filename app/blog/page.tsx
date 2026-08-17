import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { HyperText } from "@/components/ui/hyper-text";
import { getAllBlogPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes, experiments, and write-ups by Pahasara Ridmaka.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog",
    description: "Notes, experiments, and write-ups by Pahasara Ridmaka.",
    type: "website",
    url: "/blog",
    images: [
      {
        url: "/profile.jpg",
        alt: "Pahasara Ridmaka",
      },
    ],
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="flex flex-col gap-8">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-md text-zinc-400 hover:text-white transition-colors duration-200"
        >
          <FaArrowLeft className="w-3 h-3" />
          Back to home
        </Link>
      </div>

      <header className="flex flex-col gap-3">
        <h1>
          <HyperText className="text-sm">Blog</HyperText>
        </h1>
        <p className="text-zinc-400 text-sm">
          Notes, experiments, and write-ups. Post content is written in markdown.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors"
          >
            <p className="text-xs text-zinc-500 mb-2">{post.date}</p>
            <h2 className="text-lg text-white font-medium mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-zinc-400 mb-4">{post.excerpt}</p>
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
          </article>
        ))}
      </div>
    </main>
  );
}
