import { pageMeta } from "@/lib/meta";
import { Breadcrumbs, PageHero, TrustStrip } from "@/components/subpage";
import SchedulerEmbed from "@/components/SchedulerEmbed";

export const metadata = pageMeta({
  title: "Book a Free Sales Call | Awaaz Labs",
  description:
    "30 minutes, no obligation. You leave with your leak numbers either way. Pick a time that works in your timezone.",
  path: "/book-a-call",
});

const PROMISES = [
  "30 minutes, no obligation",
  "You leave with your leak numbers either way",
  "No slide deck, just your channels and your calendar",
];

export default function BookACallPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Book a call", href: "/book-a-call" }]} />
      <PageHero
        label="Secondary route: talk first"
        title="30 minutes. You leave with your leak numbers either way."
        lede="Bring your booking volume and your channels. We will map where your inquiries leak and what capturing them would look like. If it is not a fit, you still keep the numbers."
      />
      <div className="mx-auto max-w-[1200px] px-5 pb-20 lg:px-8">
        <ul className="mb-10 flex flex-wrap gap-x-8 gap-y-2">
          {PROMISES.map((p) => (
            <li key={p} className="label text-ink-soft">
              {p}
            </li>
          ))}
        </ul>
        <SchedulerEmbed />
      </div>
      <TrustStrip />
    </>
  );
}
