import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'About Awaaz Labs';

export default function Image() {
  return ogImage(
    'Awaaz means voice.',
    'The AI front desk, in production on three continents.',
  );
}
