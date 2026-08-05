"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { INDUSTRIES } from "@/lib/site";
import { track } from "@/lib/analytics";
import { getAttribution } from "@/lib/attribution";

const FIELD =
  "w-full rounded-xl border border-hairline bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-faint focus:border-ink focus:outline-none";
const LABEL = "label mb-2 block text-ink-soft";

export default function LeakAuditForm() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const form = new FormData(e.currentTarget);
    const attribution = getAttribution();
    const entries = Object.fromEntries(form.entries());
    const data = { ...entries, attribution };

    try {
      const res = await fetch("/api/leak-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Try again.");
      }
      track("audit_submitted", {
        industry: String(entries.industry ?? ""),
        ...attribution,
      });
      router.push("/leak-audit/thanks");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="business" className={LABEL}>
            Business name
          </label>
          <input id="business" name="business" required className={FIELD} placeholder="Glow Aesthetics Clinic" />
        </div>
        <div>
          <label htmlFor="industry" className={LABEL}>
            Industry
          </label>
          <select id="industry" name="industry" required className={FIELD} defaultValue="">
            <option value="" disabled>
              Select your industry
            </option>
            {INDUSTRIES.map((i) => (
              <option key={i.slug} value={i.slug}>
                {i.name}
              </option>
            ))}
            <option value="other">Other appointment-based business</option>
          </select>
        </div>
        <div>
          <label htmlFor="country" className={LABEL}>
            Country
          </label>
          <input id="country" name="country" required className={FIELD} placeholder="United Arab Emirates" />
        </div>
        <div>
          <label htmlFor="city" className={LABEL}>
            City
          </label>
          <input id="city" name="city" required className={FIELD} placeholder="Dubai" />
        </div>
        <div>
          <label htmlFor="phone" className={LABEL}>
            Business phone
          </label>
          <input id="phone" name="phone" type="tel" required className={FIELD} placeholder="+971 4 000 0000" />
        </div>
        <div>
          <label htmlFor="whatsapp" className={LABEL}>
            WhatsApp number
          </label>
          <input id="whatsapp" name="whatsapp" type="tel" className={FIELD} placeholder="Same as phone" />
        </div>
        <div>
          <label htmlFor="email" className={LABEL}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={FIELD} placeholder="owner@business.com" />
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-4 text-sm text-ink">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={busy}
        className="btn-shimmer label mt-7 w-full cursor-pointer rounded-full bg-ink px-8 py-4 text-paper transition-opacity duration-200 hover:opacity-85 disabled:opacity-60 sm:w-auto"
      >
        {busy ? "Sending" : "Request my free audit"}
      </button>
      <p className="mt-4 text-[13px] leading-relaxed text-faint">
        We call and message your business like a customer would, log where
        inquiries die, and send you the findings on one page. Free. No pitch
        attached. Your report arrives within 2 business days and stays
        confidential: never shared with competitors.
      </p>
    </form>
  );
}
