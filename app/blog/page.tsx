import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Writing on data engineering, analytics, and web dev.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <h2 className="text-xl font-semibold group-hover:underline">
              {post.title}
            </h2>
            <p className="text-sm text-muted-foreground">{post.date}</p>
            <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}