"use client";

import { useState } from "react";
import Link from "next/link";
import { Radar } from "lucide-react";
import { track } from "@/lib/analytics";

const FIELD =
  "w-full rounded-xl border border-hairline bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-faint focus:border-ink focus:outline-none";
const LABEL = "label mb-2 block text-ink-soft";

const CURRENCIES = ["AED", "USD", "SAR", "QAR", "PKR", "GBP", "EUR"] as const;

/**
 * Ungated on-screen estimate (master-build-v5 section 5). The user
 * supplies their own numbers; the benchmark miss-rate range (23 to 42
 * percent) is industry data, defaulted to its midpoint.
 */
export default function MissedRevenueCalculator() {
  const [inquiries, setInquiries] = useState(120);
  const [missRate, setMissRate] = useState(32);
  const [bookRate, setBookRate] = useState(40);
  const [value, setValue] = useState(350);
  const [currency, setCurrency] = useState<(typeof CURRENCIES)[number]>("AED");
  const [result, setResult] = useState<{
    missed: number;
    bookings: number;
    revenue: number;
  } | null>(null);

  function calculate() {
    const missedMonthly = inquiries * (missRate / 100) * 4.33;
    const bookings = missedMonthly * (bookRate / 100);
    const revenue = bookings * value;
    setResult({
      missed: Math.round(missedMonthly),
      bookings: Math.round(bookings),
      revenue: Math.round(revenue),
    });
    track("calculator_completed", {
      inquiries,
      miss_rate: missRate,
      currency,
    });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      <div className="card p-6 sm:p-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="inq" className={LABEL}>
              Inbound inquiries per week
            </label>
            <input
              id="inq"
              type="number"
              min={1}
              value={inquiries}
              onChange={(e) => setInquiries(Number(e.target.value))}
              className={FIELD}
            />
            <p className="mt-1.5 text-[12px] text-faint">
              Calls, WhatsApp, texts, emails and forms combined
            </p>
          </div>
          <div>
            <label htmlFor="value" className={LABEL}>
              Average appointment value
            </label>
            <div className="flex gap-2">
              <select
                aria-label="Currency"
                value={currency}
                onChange={(e) =>
                  setCurrency(e.target.value as (typeof CURRENCIES)[number])
                }
                className="rounded-xl border border-hairline bg-white px-3 py-3.5 text-[15px] text-ink focus:border-ink focus:outline-none"
              >
                {CURRENCIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <input
                id="value"
                type="number"
                min={1}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className={FIELD}
              />
            </div>
          </div>
          <div>
            <label htmlFor="miss" className={LABEL}>
              Share of inquiries missed: {missRate}%
            </label>
            <input
              id="miss"
              type="range"
              min={10}
              max={60}
              value={missRate}
              onChange={(e) => setMissRate(Number(e.target.value))}
              className="w-full accent-[#A21CAF]"
            />
            <p className="mt-1.5 text-[12px] text-faint">
              Industry benchmark: 23 to 42 percent of inbound calls are missed
            </p>
          </div>
          <div>
            <label htmlFor="book" className={LABEL}>
              Share of answered inquiries that book: {bookRate}%
            </label>
            <input
              id="book"
              type="range"
              min={10}
              max={80}
              value={bookRate}
              onChange={(e) => setBookRate(Number(e.target.value))}
              className="w-full accent-[#A21CAF]"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={calculate}
          className="btn-shimmer label mt-8 w-full cursor-pointer rounded-full bg-ink px-8 py-4 text-paper transition-opacity hover:opacity-85 sm:w-auto"
        >
          Estimate my leak
        </button>
      </div>

      <div className="panel-void dots flex flex-col justify-center p-8 text-paper sm:p-10">
        {result ? (
          <>
            <p className="label text-void-muted">
              Estimated revenue at risk each month
            </p>
            <p className="mt-4 font-display text-5xl font-medium tracking-tight sm:text-6xl">
              {currency} {result.revenue.toLocaleString()}
            </p>
            <dl className="mt-8 space-y-3 border-t border-void-line pt-6 text-[15px]">
              <div className="flex justify-between gap-4">
                <dt className="text-void-muted">Inquiries missed per month</dt>
                <dd className="font-semibold tabular-nums">{result.missed}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-void-muted">
                  Bookings those would have produced
                </dt>
                <dd className="font-semibold tabular-nums">{result.bookings}</dd>
              </div>
            </dl>
            <p className="mt-8 text-[15px] leading-relaxed text-void-muted">
              This is the estimate. The free leak audit gets you the real
              number.
            </p>
            <Link
              href="/leak-audit"
              className="btn-shimmer btn-shimmer-dark label mt-5 inline-flex w-fit cursor-pointer items-center gap-3 rounded-full bg-paper py-3 pr-7 pl-3 text-ink transition-opacity hover:opacity-90"
            >
              <span className="chip-amber" aria-hidden>
                <Radar size={15} strokeWidth={2.2} />
              </span>
              Get your free leak audit
            </Link>
          </>
        ) : (
          <>
            <p className="label text-void-muted">Your estimate appears here</p>
            <p className="mt-4 max-w-sm text-lg leading-relaxed text-void-muted">
              Enter your numbers and press the button. The result stays on
              screen, no email required.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
