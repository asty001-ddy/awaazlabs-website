import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Integrations';

export default function Image() {
  return ogImage(
    'It plugs into what you already run.',
    'WhatsApp Business, Google Calendar, Calendly and more.',
  );
}
