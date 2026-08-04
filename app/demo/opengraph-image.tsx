import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Demo';

export default function Image() {
  return ogImage(
    'Hear it answer, qualify and book.',
    'Sample calls in English and Arabic from the 24/7 AI front desk.',
  );
}
