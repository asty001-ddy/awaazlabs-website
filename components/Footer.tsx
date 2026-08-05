import Link from "next/link";
import { TAGLINE, FOOTER_LINKS } from "@/lib/site";

/*
 * Simplified rendition of the Finova Solutions shield mark.
 * Swap for the official asset by dropping finova.svg into /public
 * and replacing this component with an <img>.
 */
function FinovaMark() {
  return (
    <svg
      viewBox="0 0 44 50"
      width="20"
      height="23"
      aria-hidden
      className="shrink-0"
    >
      <defs>
        <linearGradient id="finova-g1" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#123057" />
          <stop offset="0.55" stopColor="#1B5C93" />
          <stop offset="1" stopColor="#2D9CD6" />
        </linearGradient>
        <linearGradient id="finova-g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1B2A5E" />
          <stop offset="1" stopColor="#2D9CD6" />
        </linearGradient>
      </defs>
      {/* Left body of the shield with the integrated F */}
      <path
        d="M3 2 H17 V12 H10 V19 H16 V27 H10 V34.5 C10 38 13.5 41.5 22 45.5 V50 C9 44.5 3 38 3 28 Z"
        fill="url(#finova-g1)"
      />
      {/* Top bar of the F reaching right */}
      <path d="M20 2 H41 V12 H20 Z" fill="url(#finova-g2)" />
      {/* Right bracket of the shield */}
      <path
        d="M34 15 H41 V28 C41 38 35 44.5 22 50 V45.5 C30.5 41.5 34 38 34 34.5 Z"
        fill="url(#finova-g2)"
      />
    </svg>
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
