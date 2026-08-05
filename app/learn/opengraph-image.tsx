import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Learn';

export default function Image() {
  return ogImage(
    'Plain answers, no jargon.',
    'AI receptionists, what they cost, and who gets the booking.',
  );
}
