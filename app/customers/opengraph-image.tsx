import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Awaaz Labs Customers";

export default function Image() {
  return ogImage(
    "Running in production on three continents.",
    "United States. United Arab Emirates. Pakistan. Named deployments.",
  );
}
