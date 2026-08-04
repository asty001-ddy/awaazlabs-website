import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Guides and Blog';

export default function Image() {
  return ogImage(
    'The numbers behind the front desk.',
    'Short, useful reads on missed calls, response times and coverage.',
  );
}
