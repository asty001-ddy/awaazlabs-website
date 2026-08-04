import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "AI Front Desk for Real Estate";

export default function Image() {
  return ogImage(
    "AI Front Desk for Real Estate",
    "Listing leads go cold in minutes. Answer every one in seconds.",
  );
}
