import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Industries';

export default function Image() {
  return ogImage(
    'Built for businesses that live and die by the calendar.',
    'Aesthetics, dental, real estate, restaurants, home services.',
  );
}
