import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "AI Front Desk for Dubai Aesthetics Clinics";

export default function Image() {
  return ogImage(
    "AI Front Desk for Dubai Aesthetics Clinics",
    "Arabic and English, switched mid-conversation. Live in the UAE.",
  );
}
