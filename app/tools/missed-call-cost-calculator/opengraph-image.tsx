import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Missed Revenue Calculator";

export default function Image() {
  return ogImage(
    "What are missed calls costing you monthly?",
    "Free calculator. On-screen result, no email required.",
  );
}
