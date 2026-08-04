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
      viewBox="0 0 24 28"
      width="18"
      height="21"
      aria-hidden
      className="shrink-0"
    >
      <defs>
        <linearGradient id="finova-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#16355F" />
          <stop offset="1" stopColor="#2FA3DC" />
        </linearGradient>
      </defs>
      <path
        d="M2 1.5h20v13.2c0 6.2-4.6 9.8-10 11.8-5.4-2-10-5.6-10-11.8Z"
        fill="url(#finova-g)"
      />
      <path d="M7.5 6h9.5v3H11v3.2h5v3H11v6.3H7.5Z" fill="#FAFAF7" />
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

      <div className="mx-auto grid max-w-[1200px] gap-10 border-t border-void-line/60 px-5 pt-10 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
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
