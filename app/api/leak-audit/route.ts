import { NextResponse } from "next/server";

/**
 * Leak-audit intake. Forwards submissions to LEAK_AUDIT_WEBHOOK_URL
 * (Make/Zapier/n8n) which owns fulfillment: CRM row, confirmation
 * email, and the 3-email post-audit sequence. Fails soft: if the
 * webhook is down we still accept the lead and log it server-side
 * so outreach never loses a submission.
 */
export async function POST(req: Request) {
  let data: Record<string, string>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const required = ["business", "industry", "country", "city", "phone", "email"];
  const missing = required.filter((f) => !data[f]?.trim());
  if (missing.length) {
    return NextResponse.json(
      { error: `Missing fields: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  const payload = {
    ...data,
    submitted_at: new Date().toISOString(),
    source: "website/leak-audit",
  };

  const webhook = process.env.LEAK_AUDIT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("leak-audit webhook failed", err, payload);
    }
  } else {
    console.log("leak-audit submission (no webhook configured)", payload);
  }

  return NextResponse.json({ ok: true });
}
