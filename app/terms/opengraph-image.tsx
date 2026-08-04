import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Terms of Service';

export default function Image() {
  return ogImage(
    'Terms of service',
    'Terms governing the Awaaz Labs website and free tools.',
  );
}
