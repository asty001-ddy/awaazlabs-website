import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Get Your Free Leak Audit";

export default function Image() {
  return ogImage(
    "Find out where your inquiries go to die.",
    "Free leak audit. We mystery-shop your business and send the findings.",
  );
}
