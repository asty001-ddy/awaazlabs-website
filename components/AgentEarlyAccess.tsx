"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";
import { getAttribution } from "@/lib/attribution";

const FIELD =
  "w-full rounded-xl border border-hairline bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-faint focus:border-ink focus:outline-none";

/**
 * Early-access queue for the voice demo agent. The live WebRTC session
 * (LiveKit/Retell) ships behind NEXT_PUBLIC_AGENT_DEMO_URL once the
 * cost guardrails are wired; until then this captures the queue
 * through the same webhook as the leak audit, tagged by source.
 */
export default function AgentEarlyAccess() {
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const entries = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/leak-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          business: String(entries.website ?? ""),
          industry: "agent-demo-early-access",
          country: "-",
          city: "-",
          phone: "-",
          email: entries.email,
          website: entries.website,
          attribution: getAttribution(),
          source: "website/build-your-agent",
        }),
      });
      if (!res.ok) throw new Error("Something went wrong. Try again.");
      track("agent_session_started", { mode: "early_access" });
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="card p-8">
        <p className="text-lg font-semibold text-ink">You are in the queue.</p>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
          We will email you the moment your demo agent is ready to talk. No
          spam, just the link.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8">
      <div className="grid gap-5">
        <div>
          <label htmlFor="ba-url" className="label mb-2 block text-ink-soft">
            Your website
          </label>
          <input id="ba-url" name="website" type="url" required className={FIELD} placeholder="https://yourclinic.com" />
        </div>
        <div>
          <label htmlFor="ba-email" className="label mb-2 block text-ink-soft">
            Email
          </label>
          <input id="ba-email" name="email" type="email" required className={FIELD} placeholder="owner@yourclinic.com" />
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
        className="btn-shimmer label mt-6 w-full cursor-pointer rounded-full bg-ink px-8 py-4 text-paper transition-opacity hover:opacity-85 disabled:opacity-60"
      >
        {busy ? "Joining" : "Get my demo agent"}
      </button>
      <p className="mt-4 text-[13px] leading-relaxed text-faint">
        Demo quality, built from your public website only. Sessions are capped
        at a few minutes and expire automatically.
      </p>
    </form>
  );
}
