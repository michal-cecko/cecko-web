'use client';

import { useState } from 'react';
import type { Dict } from '../../i18n/dictionaries';

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mono" style={{ marginBottom: 8, color: 'var(--fg-dim)' }}>
      {children}
    </div>
  );
}

function Field({
  label,
  val,
  on,
  type = 'text',
  req,
}: {
  label: string;
  val: string;
  on: (v: string) => void;
  type?: string;
  req?: boolean;
}) {
  return (
    <div>
      <FieldLabel>
        {label}
        {req && <span style={{ color: 'var(--lime)' }}> *</span>}
      </FieldLabel>
      <input
        type={type}
        value={val}
        onChange={(e) => on(e.target.value)}
        required={req}
        style={{
          width: '100%',
          padding: '14px 16px',
          background: 'var(--bg)',
          border: '1px solid var(--border-hi)',
          borderRadius: 10,
          color: 'var(--fg)',
          fontFamily: 'inherit',
          fontSize: 14,
        }}
      />
    </div>
  );
}

type FormState = {
  name: string;
  email: string;
  budget: string;
  customBudget?: string;
  type: string;
  msg: string;
  /** Honeypot field — bots fill it, humans don't see it. */
  company?: string;
};

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm({ t }: { t: Dict }) {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    budget: '1-2.5k',
    type: 'web',
    msg: '',
    company: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const tc = t.contact;
  const submitted = status === 'success';

  if (submitted) {
    return (
      <div
        style={{
          padding: 40,
          background: 'var(--bg-2)',
          border: '1px solid var(--lime)',
          borderRadius: 20,
          textAlign: 'center',
        }}
      >
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, color: 'var(--lime)', marginBottom: 16 }}>✓</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 12, fontWeight: 500, letterSpacing: '-0.01em' }}>
          {tc.formSuccessTitle}
        </h3>
        <p style={{ color: 'var(--fg-dim)' }}>{tc.formSuccessBody}</p>
      </div>
    );
  }

  const projectTypes: [string, string][] = [
    ['web', tc.typeWeb],
    ['mobile', tc.typeMobile],
    ['saas', tc.typeSaas],
    ['ai', tc.typeAi],
    ['design', tc.typeDesign],
  ];
  const budgets: [string, string][] = [
    ['<1k', '< 1 000 €'],
    ['1-2.5k', '1 000 – 2 500 €'],
    ['2.5-5k', '2 500 – 5 000 €'],
    ['5k+', '5 000+ €'],
  ];

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (status === 'sending') return;
        setStatus('sending');
        setErrorMsg(null);
        try {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
          });
          if (!res.ok) {
            const data = (await res.json().catch(() => ({}))) as { error?: string };
            setErrorMsg(data.error || `HTTP ${res.status}`);
            setStatus('error');
            return;
          }
          setStatus('success');
        } catch (err) {
          setErrorMsg(err instanceof Error ? err.message : 'network');
          setStatus('error');
        }
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        padding: 32,
        background: 'var(--bg-2)',
        border: '1px solid var(--border)',
        borderRadius: 20,
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <Field label={tc.formName} val={form.name} on={(v) => setForm({ ...form, name: v })} req />
        <Field label={tc.formEmail} val={form.email} on={(v) => setForm({ ...form, email: v })} type="email" req />
      </div>
      <div>
        <FieldLabel>{tc.formType}</FieldLabel>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {projectTypes.map(([k, l]) => (
            <button
              type="button"
              key={k}
              onClick={() => setForm({ ...form, type: k })}
              style={{
                padding: '10px 16px',
                border: '1px solid ' + (form.type === k ? 'var(--lime)' : 'var(--border-hi)'),
                background: form.type === k ? 'var(--lime)' : 'transparent',
                color: form.type === k ? 'var(--bg)' : 'var(--fg-dim)',
                borderRadius: 999,
                cursor: 'pointer',
                fontSize: 12,
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
      <div>
        <FieldLabel>{tc.formBudget}</FieldLabel>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          {budgets.map(([k, l]) => (
            <button
              type="button"
              key={k}
              onClick={() => setForm({ ...form, budget: k, customBudget: '' })}
              style={{
                padding: '10px 16px',
                border: '1px solid ' + (form.budget === k ? 'var(--lime)' : 'var(--border-hi)'),
                background: form.budget === k ? 'var(--lime)' : 'transparent',
                color: form.budget === k ? 'var(--bg)' : 'var(--fg-dim)',
                borderRadius: 999,
                cursor: 'pointer',
                fontSize: 12,
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {l}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setForm({ ...form, budget: 'custom' })}
            style={{
              padding: '10px 16px',
              border: '1px solid ' + (form.budget === 'custom' ? 'var(--lime)' : 'var(--border-hi)'),
              background: form.budget === 'custom' ? 'var(--lime)' : 'transparent',
              color: form.budget === 'custom' ? 'var(--bg)' : 'var(--fg-dim)',
              borderRadius: 999,
              cursor: 'pointer',
              fontSize: 12,
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {tc.formCustom}
          </button>
          {form.budget === 'custom' && (
            <input
              type="text"
              autoFocus
              value={form.customBudget || ''}
              onChange={(e) => setForm({ ...form, customBudget: e.target.value })}
              placeholder={tc.formCustomPlaceholder}
              style={{
                padding: '10px 16px',
                border: '1px solid var(--lime)',
                background: 'var(--bg)',
                color: 'var(--fg)',
                borderRadius: 999,
                fontSize: 12,
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.05em',
                width: 160,
                outline: 'none',
              }}
            />
          )}
        </div>
      </div>
      <div>
        <FieldLabel>{tc.formMessage}</FieldLabel>
        <textarea
          value={form.msg}
          onChange={(e) => setForm({ ...form, msg: e.target.value })}
          required
          rows={6}
          placeholder={tc.formMessagePlaceholder}
          style={{
            width: '100%',
            padding: 16,
            background: 'var(--bg)',
            border: '1px solid var(--border-hi)',
            borderRadius: 12,
            color: 'var(--fg)',
            fontFamily: 'inherit',
            fontSize: 14,
            resize: 'vertical',
          }}
        />
      </div>
      {/* Honeypot — hidden from real users, bots fill it. */}
      <div style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }} aria-hidden="true">
        <label>
          Company (leave empty)
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.company || ''}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === 'sending'}
        style={{
          justifyContent: 'center',
          padding: '16px',
          opacity: status === 'sending' ? 0.6 : 1,
          cursor: status === 'sending' ? 'wait' : 'pointer',
        }}
      >
        {status === 'sending' ? tc.formSending : tc.formSubmit}
      </button>
      {status === 'error' && (
        <p style={{ fontSize: 12, color: '#ff6b4a', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
          {tc.formError} {errorMsg ? <span style={{ opacity: 0.6 }}>({errorMsg})</span> : null}
        </p>
      )}
      <p style={{ fontSize: 12, color: 'var(--fg-muted)', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
        {tc.formNote}
      </p>
    </form>
  );
}
