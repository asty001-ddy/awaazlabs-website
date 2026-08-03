import { TAGLINE } from "@/lib/site";

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
      <path
        d="M7.5 6h9.5v3H11v3.2h5v3H11v6.3H7.5Z"
        fill="#FAFAF7"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-void-line bg-void py-12 text-void-muted">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 sm:flex-row sm:items-center lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-paper">
            Awaaz Labs
          </p>
          <p className="mt-1 text-sm">{TAGLINE}</p>
        </div>
        <div className="text-sm sm:text-right">
          <a
            href="https://finovasolutions.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-80"
          >
            <FinovaMark />
            <span>
              A product of{" "}
              <span className="font-medium text-paper group-hover:underline">
                Finova Solutions
              </span>
            </span>
          </a>
          <p className="mt-2 opacity-70">
            &copy; {new Date().getFullYear()} Awaaz Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
