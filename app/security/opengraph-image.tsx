import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Security';

export default function Image() {
  return ogImage(
    'Conversations are business records.',
    'In-region residency. HIPAA-architected. ISO 27001 aligned. Full audit trail.',
  );
}
