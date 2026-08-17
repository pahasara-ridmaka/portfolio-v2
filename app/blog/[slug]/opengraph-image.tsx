import { ImageResponse } from "next/og";
import { getBlogPostBySlug } from "@/lib/blog";
import {
  clampText,
  INTER_FONT_WEIGHT_RANGE,
  loadInterFont,
} from "@/lib/og";
import { OgCardFrame, OgPill } from "@/lib/og-card";

export const alt = "Pahasara Ridmaka — Blog Post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface OgImageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostOgImage({ params }: OgImageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  const interFont = loadInterFont();

  const fonts = [
    ...(interFont
      ? [
          {
            name: "Inter",
            data: interFont,
            weight: INTER_FONT_WEIGHT_RANGE[0],
            style: "normal" as const,
          },
        ]
      : []),
  ];

  return new ImageResponse(
    (
      <OgCardFrame subtitle="BLOG">
        {post ? (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <OgPill>{post.date}</OgPill>
              {post.tags.slice(0, 4).map((tag) => (
                <OgPill key={tag}>{tag}</OgPill>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                maxWidth: 1000,
              }}
            >
              <h1
                style={{
                  fontSize: 64,
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "#fafafa",
                  margin: 0,
                }}
              >
                {clampText(post.title, 60)}
              </h1>
              <p
                style={{
                  fontSize: 26,
                  lineHeight: 1.5,
                  color: "#a1a1aa",
                  margin: 0,
                }}
              >
                {clampText(post.excerpt, 120)}
              </p>
            </div>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <h1
              style={{
                fontSize: 64,
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#fafafa",
                margin: 0,
              }}
            >
              Blog Post Not Found
            </h1>
            <p
              style={{
                fontSize: 26,
                lineHeight: 1.5,
                color: "#a1a1aa",
                margin: 0,
              }}
            >
              Check out the latest notes and write-ups on pahasara.me
            </p>
          </div>
        )}
      </OgCardFrame>
    ),
    {
      ...size,
      fonts,
    }
  );
}