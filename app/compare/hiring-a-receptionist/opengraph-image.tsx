import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Vs Hiring a Receptionist';

export default function Image() {
  return ogImage(
    '40 hours vs all 168.',
    'The honest coverage comparison, with your numbers one click away.',
  );
}
