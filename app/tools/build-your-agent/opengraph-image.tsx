import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Build Your Agent';

export default function Image() {
  return ogImage(
    'Hear an AI answer for your business.',
    'Paste your website. Talk to your demo agent in the browser.',
  );
}
