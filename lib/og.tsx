import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * Shared OG template (GAP 16): wordmark, page title, one stat or line.
 * Used by every opengraph-image.tsx. WhatsApp-share is the primary
 * distribution channel, so contrast and size are tuned for small previews.
 */
export function ogImage(title: string, line: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAFAF7",
          color: "#0F0E0C",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9,
              background: "#A21CAF",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>
            Awaaz Labs
          </div>
        </div>
        <div
          style={{
            fontSize: title.length > 40 ? 64 : 76,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.05,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #E5E2DC",
            paddingTop: 28,
            fontSize: 28,
            color: "#57534E",
          }}
        >
          <div style={{ maxWidth: 900 }}>{line}</div>
          <div style={{ color: "#A21CAF", fontWeight: 700 }}>awaazlabs.io</div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
