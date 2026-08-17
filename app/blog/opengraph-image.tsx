import { ImageResponse } from "next/og";
import { INTER_FONT_WEIGHT_RANGE, loadInterFont } from "@/lib/og";
import { OgCardFrame } from "@/lib/og-card";

export const alt = "Pahasara Ridmaka — Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function BlogIndexOgImage() {
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
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h1
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#fafafa",
              margin: 0,
            }}
          >
            Notes, experiments,
            <br />
            and write-ups
          </h1>
          <p
            style={{
              fontSize: 28,
              lineHeight: 1.5,
              color: "#a1a1aa",
              margin: 0,
              maxWidth: 900,
            }}
          >
            Practical guides and insights on data engineering, pipelines, and
            software development.
          </p>
        </div>
      </OgCardFrame>
    ),
    {
      ...size,
      fonts,
    }
  );
}