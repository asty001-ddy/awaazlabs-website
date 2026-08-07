import Link from "next/link";
import { TAGLINE, FOOTER_LINKS } from "@/lib/site";

/* Official Finova Solutions shield (public/finova-icon.png, from
 * finovasolutions.tech). White chip keeps the navy legible on ink. */
function FinovaMark() {
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-md bg-white p-1">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/finova-icon.png"
        alt=""
        width={16}
        height={18}
        className="h-[18px] w-4 object-contain"
      />
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-void-line bg-void pt-16 pb-10 text-void-muted">
      {/* Oversized editorial wordmark, barely-there, anchors the page */}
      <p
        aria-hidden
        className="mx-auto -mb-4 max-w-[1200px] px-5 text-center font-display text-[13.5vw] leading-[0.85] font-semibold tracking-tight whitespace-nowrap text-paper/[0.05] select-none lg:px-8"
      >
        Awaaz Labs
      </p>

      <div className="mx-auto grid max-w-[1200px] gap-10 border-t border-void-line/60 px-5 pt-10 sm:grid-cols-2 lg:grid-cols-7 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-display text-lg font-semibold tracking-tight text-paper">
            Awaaz Labs
          </p>
          <p className="mt-1 text-sm">{TAGLINE}</p>
          <p className="label mt-3 text-signal-bright">
            No customer left unattended
          </p>
          <a
            href="https://finovasolutions.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-2.5 text-sm transition-opacity duration-200 hover:opacity-80"
          >
            <FinovaMark />
            <span>
              A product of{" "}
              <span className="font-medium text-paper group-hover:underline">
                Finova Solutions
              </span>
            </span>
          </a>
        </div>

        {FOOTER_LINKS.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <p className="label text-void-muted/70">{col.heading}</p>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-void-muted transition-colors hover:text-paper"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-[1200px] flex-col justify-between gap-3 border-t border-void-line/60 px-5 pt-6 text-sm opacity-70 sm:flex-row lg:px-8">
        <p>&copy; {new Date().getFullYear()} Awaaz Labs. All rights reserved.</p>
        <p>Built for businesses that live and die by the calendar.</p>
      </div>
    </footer>
  );
}
