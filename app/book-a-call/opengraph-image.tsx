import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Book a Free Sales Call';

export default function Image() {
  return ogImage(
    '30 minutes. Your leak numbers either way.',
    'No obligation. No slide deck. Just your channels and your calendar.',
  );
}
