import type { ReactNode } from "react";

/**
 * Shared visual frame for Open Graph cards.
 * Rendered inside `ImageResponse` (Satori), so only the CSS
 * subset supported by Satori is used.
 */
export function OgCardFrame({
  children,
  subtitle,
}: {
  children: ReactNode;
  subtitle: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "56px 64px",
        color: "#fafafa",
        backgroundColor: "#09090b",
        backgroundImage:
          "radial-gradient(circle at 85% 15%, rgba(59, 130, 246, 0.25), transparent 45%), linear-gradient(135deg, #09090b 0%, #18181b 100%)",
        position: "relative",
      }}
    >
      {/* subtle top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: "linear-gradient(90deg, #3b82f6, #6366f1, #3b82f6)",
        }}
      />

      {/* header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: "linear-gradient(135deg, #3b82f6, #6366f1)",
            }}
          />
          <div style={{ fontSize: 22, fontWeight: 700, color: "#fafafa" }}>
            pahasara.me
          </div>
        </div>
        <div style={{ fontSize: 18, color: "#a1a1aa", fontWeight: 500 }}>
          {subtitle}
        </div>
      </div>

      {/* body */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          maxWidth: 1000,
        }}
      >
        {children}
      </div>

      {/* footer */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "#27272a",
            border: "2px solid #3f3f46",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            fontWeight: 700,
            color: "#fafafa",
          }}
        >
          PR
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <div style={{ fontSize: 18, fontWeight: 600, color: "#fafafa" }}>
            Pahasara Ridmaka
          </div>
          <div style={{ fontSize: 15, color: "#a1a1aa" }}>
            Data Engineering & Software Development
          </div>
        </div>
      </div>
    </div>
  );
}

/** Rounded pill used for tags and metadata on the card. */
export function OgPill({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "8px 16px",
        borderRadius: 999,
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        border: "1px solid rgba(255, 255, 255, 0.14)",
        fontSize: 16,
        fontWeight: 500,
        color: "#d4d4d8",
      }}
    >
      {children}
    </div>
  );
}