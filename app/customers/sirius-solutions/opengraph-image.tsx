import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Sirius Solutions Case Study';

export default function Image() {
  return ogImage(
    'Around 50 calls a day, in production.',
    'Sirius Solutions Global, United States. Live on Awaaz Labs.',
  );
}
