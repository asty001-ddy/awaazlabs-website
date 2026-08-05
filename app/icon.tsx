import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Browser tab favicon: ink tile, paper A, magenta signal dot. */
export default function Icon() {
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
          borderRadius: 14,
          color: "#FAFAF7",
          fontSize: 40,
          fontWeight: 700,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        A
        <div
          style={{
            position: "absolute",
            right: 9,
            bottom: 9,
            width: 10,
            height: 10,
            borderRadius: 5,
            background: "#D946EF",
          }}
        />
      </div>
    ),
    size,
  );
}
