export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  coverImage?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-data-pipelines-notes",
    title: "Notes on Building Reliable Data Pipelines",
    date: "2026-08-17",
    excerpt:
      "A practical checklist I use to make ETL workflows repeatable, observable, and safer to deploy.",
    tags: ["Data Engineering", "Airflow", "Best Practices"],
    coverImage: "/images/blog/pipeline-cover.jpg",
    content: `# Why Reliability Matters

When a pipeline fails silently, trust in analytics drops quickly. I now design pipelines around three pillars:

1. **Idempotency**: re-runs should produce the same result.
2. **Observability**: failures should be visible quickly.
3. **Reproducibility**: environments and dependencies should be pinned.

## My Default Checklist

- Validate incoming schema before transformation.
- Keep staging and marts separated.
- Add quality tests for nulls, duplicates, and referential integrity.
- Log with enough context to debug without rerunning locally.

## Example Image In Markdown

Add images directly from the public folder:

![Pipeline Overview](/images/certifications/js-algorithms.png)

## Simple SQL Snippet

\`\`\`sql
select date_key, count(*) as orders
from fct_orders
group by 1
order by 1 desc;
\`\`\`

---

You can create more posts by adding new objects in \`lib/blog.ts\` with a unique \`slug\`.
`,
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAdjacentBlogPosts(slug: string): {
  prev?: BlogPost;
  next?: BlogPost;
} {
  const orderedPosts = getAllBlogPosts();
  const index = orderedPosts.findIndex((post) => post.slug === slug);

  if (index === -1) return {};

  return {
    prev: index > 0 ? orderedPosts[index - 1] : undefined,
    next: index < orderedPosts.length - 1 ? orderedPosts[index + 1] : undefined,
  };
}
