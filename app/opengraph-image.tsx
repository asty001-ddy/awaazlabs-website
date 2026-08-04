import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Awaaz Labs, the 24/7 AI front desk";

export default function Image() {
  return ogImage(
    "Never lose another customer to a missed call.",
    "The 24/7 AI front desk. Answers, books, reminds, recovers, reviews.",
  );
}
