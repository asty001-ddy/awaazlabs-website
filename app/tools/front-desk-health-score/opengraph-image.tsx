import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Front Desk Health Score';

export default function Image() {
  return ogImage(
    'How healthy is your front desk?',
    '8 questions, scored out of 100. Free, instant, no email.',
  );
}
