import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Free Tools';

export default function Image() {
  return ogImage(
    'See the leak before you fix it.',
    'Free tools for appointment-based businesses. No email gates on results.',
  );
}
