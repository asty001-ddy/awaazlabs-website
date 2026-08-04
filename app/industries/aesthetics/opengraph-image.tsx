import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "AI Front Desk for Aesthetics and Med Spas";

export default function Image() {
  return ogImage(
    "AI Front Desk for Aesthetics and Med Spas",
    "40 to 60 percent of aesthetic inquiries arrive after hours. Answer all of them.",
  );
}
