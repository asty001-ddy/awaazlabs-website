import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Platform';

export default function Image() {
  return ogImage(
    'One system, the whole inbound journey.',
    'Capture, qualify, book, remind, recover, review, QA. 24/7.',
  );
}
