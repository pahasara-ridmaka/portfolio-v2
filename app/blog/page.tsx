import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { FaArrowLeft } from "react-icons/fa";

export const metadata = {
  title: "Blog",
  description: "Writing on data engineering, analytics, and web dev.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col gap-8">
      {/* Back link */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-md text-zinc-400 hover:text-white transition-colors duration-200"
        >
          <FaArrowLeft className="w-3 h-3" />
          Back to home
        </Link>
      </div>

      <h2 className="text-sm font-medium text-zinc-200">Blog</h2>

      {/* Posts List */}
      <div className="flex flex-col">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="font-light flex flex-col sm:flex-row gap-1 sm:gap-4 items-start sm:items-center justify-start text-zinc-400 text-sm py-2 transition-colors duration-200 hover:bg-zinc-800/30 rounded-lg px-2 -mx-2"
          >
            <span className="text-xs whitespace-nowrap">{post.date}</span>
            <div className="flex-1 flex flex-col sm:flex-row gap-1 sm:gap-4 items-start sm:items-center justify-start">
              <p className="text-white underline wrap-break-word">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}