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
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-paper/90 backdrop-blur-sm"
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 lg:px-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Awaaz Labs
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label cursor-pointer text-faint transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={LINKS.leakAudit}
            className="label cursor-pointer rounded-full bg-ink px-5 py-3 text-paper transition-opacity duration-200 hover:opacity-80"
          >
            Free leak audit
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="cursor-pointer rounded-md p-2 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-hairline bg-paper lg:hidden"
          >
            <div className="flex flex-col px-5 py-4">
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
                className="label mt-4 rounded-full bg-ink px-5 py-4 text-center text-paper"
              >
                Free leak audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
