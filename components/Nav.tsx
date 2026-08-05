"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { LINKS, NAV } from "@/lib/site";
import { EASE_OUT } from "./motion-primitives";

function Dropdown({
  label,
  hub,
  items,
}: {
  label: string;
  hub: string;
  items: readonly { label: string; href: string }[];
}) {
  return (
    <div className="group relative">
      {/* The trigger routes to the hub page; hovering reveals children */}
      <Link
        href={hub}
        className="label flex cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-2.5 text-faint transition-colors duration-200 group-hover:bg-ink/5 group-hover:text-ink"
      >
        {label}
        <ChevronDown size={12} aria-hidden className="transition-transform duration-200 group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute top-full left-0 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="min-w-[230px] rounded-2xl border border-hairline bg-paper/95 p-2 shadow-lg backdrop-blur-md">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl px-3.5 py-2.5 text-[14px] font-medium text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  /* Grouped mobile menu: hubs as section headers, children indented */
  const mobileGroups: {
    heading: string;
    hub: string;
    children: readonly { label: string; href: string }[];
  }[] = [
    { heading: "Industries", hub: NAV.industriesHub, children: NAV.industries },
    { heading: "Tools", hub: NAV.toolsHub, children: NAV.tools },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <div className="w-full max-w-md lg:w-auto lg:max-w-fit">
        <nav className="flex items-center justify-between gap-1 rounded-full border border-hairline bg-paper/85 py-1.5 pr-1.5 pl-5 shadow-[0_2px_8px_rgba(15,14,12,0.06),0_12px_32px_-12px_rgba(15,14,12,0.14)] backdrop-blur-md lg:justify-start">
          <Link
            href="/"
            className="mr-3 font-display text-lg font-semibold tracking-tight"
          >
            Awaaz Labs
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <Dropdown label="Industries" hub={NAV.industriesHub} items={NAV.industries} />
            <Dropdown label="Tools" hub={NAV.toolsHub} items={NAV.tools} />
            {NAV.single.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label cursor-pointer rounded-full px-3.5 py-2.5 text-faint transition-colors duration-200 hover:bg-ink/5 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={LINKS.leakAudit}
              className="btn-shimmer label ml-2 cursor-pointer rounded-full bg-ink px-5 py-3 text-paper transition-opacity duration-200 hover:opacity-80"
            >
              Free leak audit
            </Link>
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
                {mobileGroups.map((group) => (
                  <div key={group.heading} className="border-b border-hairline py-3">
                    <Link
                      href={group.hub}
                      onClick={() => setOpen(false)}
                      className="label block py-1.5 text-ink transition-colors hover:text-signal"
                    >
                      {group.heading}
                    </Link>
                    {group.children.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block py-1.5 pl-4 text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
                {NAV.single.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="label border-b border-hairline py-4 text-ink transition-colors hover:text-signal"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={LINKS.leakAudit}
                  onClick={() => setOpen(false)}
                  className="label mt-3 rounded-full bg-ink px-5 py-4 text-center text-paper"
                >
                  Get your free leak audit
                </Link>
                <Link
                  href={LINKS.bookCall}
                  onClick={() => setOpen(false)}
                  className="label mt-2 mb-1 rounded-full border border-ink px-5 py-4 text-center text-ink"
                >
                  Book a free sales call
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
