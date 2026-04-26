import { NextResponse, type NextRequest } from 'next/server';
import { Resend } from 'resend';
import { CONTACT } from '../../data';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Payload = {
  name?: unknown;
  email?: unknown;
  type?: unknown;
  budget?: unknown;
  customBudget?: unknown;
  msg?: unknown;
  /** Honeypot — populated by bots, never by humans. */
  company?: unknown;
};

function asString(v: unknown, max = 500): string | null {
  if (typeof v !== 'string') return null;
  const trimmed = v.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, max);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  // Honeypot — silently accept then drop.
  if (typeof body.company === 'string' && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = asString(body.name, 120);
  const email = asString(body.email, 200);
  const msg = asString(body.msg, 4000);
  const type = asString(body.type, 40) ?? 'web';
  const budget = asString(body.budget, 40) ?? '—';
  const customBudget = asString(body.customBudget, 80);

  if (!name || !email || !msg) {
    return NextResponse.json({ error: 'missing_fields' }, { status: 422 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set');
    return NextResponse.json({ error: 'mail_not_configured' }, { status: 503 });
  }

  // Sender: until cecko.dev is verified at Resend, the only sender
  // allowed in free/test mode is onboarding@resend.dev. Once the
  // domain is verified, set CONTACT_FROM env to e.g. "Michal Čečko
  // <noreply@cecko.dev>".
  const from = process.env.CONTACT_FROM ?? 'cecko.dev contact <onboarding@resend.dev>';
  const to = process.env.CONTACT_TO ?? CONTACT.email;

  const budgetLine = budget === 'custom' && customBudget ? `Custom: ${customBudget}` : budget;
  const subject = `[cecko.dev] ${name} — ${type}`;

  const text = [
    `New contact-form submission from cecko.dev`,
    ``,
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Type:    ${type}`,
    `Budget:  ${budgetLine}`,
    ``,
    `Message:`,
    msg,
  ].join('\n');

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; color: #0c0d0a;">
      <h2 style="margin: 0 0 16px; font-size: 18px;">New contact-form submission</h2>
      <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
        <tr><td style="padding: 6px 12px 6px 0; color: #555; width: 90px;">Name</td><td style="padding: 6px 0;"><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="padding: 6px 12px 6px 0; color: #555;">Email</td><td style="padding: 6px 0;"><a href="mailto:${escapeAttr(email)}" style="color: #0e8a82;">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding: 6px 12px 6px 0; color: #555;">Type</td><td style="padding: 6px 0;">${escapeHtml(type)}</td></tr>
        <tr><td style="padding: 6px 12px 6px 0; color: #555;">Budget</td><td style="padding: 6px 0;">${escapeHtml(budgetLine)}</td></tr>
      </table>
      <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
      <div style="font-size: 14px; line-height: 1.55; white-space: pre-wrap;">${escapeHtml(msg)}</div>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });
    if (error) {
      console.error('[contact] Resend error:', error);
      return NextResponse.json({ error: 'send_failed' }, { status: 502 });
    }
    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
function escapeAttr(s: string): string {
  return escapeHtml(s);
}
