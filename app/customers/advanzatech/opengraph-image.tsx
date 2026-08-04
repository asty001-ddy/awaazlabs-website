import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Advanzatech Case Study';

export default function Image() {
  return ogImage(
    '70 meetings booked in month two.',
    'Advanzatech, United Arab Emirates. One Awaaz Labs deployment.',
  );
}
