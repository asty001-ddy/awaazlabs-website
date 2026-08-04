import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Contact';

export default function Image() {
  return ogImage(
    'Talk to a team that answers.',
    'Audit requests, sales calls, partnerships, security reviews.',
  );
}
