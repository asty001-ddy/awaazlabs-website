import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Partners';

export default function Image() {
  return ogImage(
    'Your clients leak bookings.',
    'Referral, implementation and technology partnerships.',
  );
}
