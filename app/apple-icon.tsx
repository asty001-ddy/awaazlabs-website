import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon: same mark at Apple touch size. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F0E0C",
          color: "#FAFAF7",
          fontSize: 110,
          fontWeight: 700,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        A
        <div
          style={{
            position: "absolute",
            right: 26,
            bottom: 26,
            width: 26,
            height: 26,
            borderRadius: 13,
            background: "#D946EF",
          }}
        />
      </div>
    ),
    size,
  );
}
