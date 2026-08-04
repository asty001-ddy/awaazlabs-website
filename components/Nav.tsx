"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LINKS } from "@/lib/site";
import { EASE_OUT } from "./motion-primitives";

const NAV_LINKS = [
  { label: "The leak", href: "#problem" },
  { label: "The fix", href: "#system" },
  { label: "Setup", href: "#how-it-works" },
  { label: "Who it's for", href: "#industries" },
  { label: "Results", href: "#proof" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <div className="w-full max-w-md lg:w-auto lg:max-w-fit">
        <nav className="flex items-center justify-between gap-1 rounded-full border border-hairline bg-paper/85 py-1.5 pr-1.5 pl-5 shadow-[0_2px_8px_rgba(15,14,12,0.06),0_12px_32px_-12px_rgba(15,14,12,0.14)] backdrop-blur-md lg:justify-start">
          <a
            href="#top"
            className="mr-3 font-display text-lg font-semibold tracking-tight"
          >
            Awaaz Labs
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="label cursor-pointer rounded-full px-3.5 py-2.5 text-faint transition-colors duration-200 hover:bg-ink/5 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={LINKS.leakAudit}
              className="btn-shimmer label ml-2 cursor-pointer rounded-full bg-ink px-5 py-3 text-paper transition-opacity duration-200 hover:opacity-80"
            >
              Free leak audit
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="cursor-pointer rounded-full p-2.5 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -8 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mt-2 overflow-hidden rounded-2xl border border-hairline bg-paper/95 shadow-lg backdrop-blur-md lg:hidden"
            >
              <div className="flex flex-col px-5 py-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="label border-b border-hairline py-4 text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={LINKS.leakAudit}
                  onClick={() => setOpen(false)}
                  className="label mt-3 mb-1 rounded-full bg-ink px-5 py-4 text-center text-paper"
                >
                  Free leak audit
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
