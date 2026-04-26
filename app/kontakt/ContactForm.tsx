'use client';

import { useState } from 'react';

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
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', budget: '25k', type: 'web', msg: '' });
  const [submitted, setSubmitted] = useState(false);

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
          Správa odoslaná
        </h3>
        <p style={{ color: 'var(--fg-dim)' }}>Ďakujem — ozvem sa do 24 hodín.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
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
        <Field label="Meno" val={form.name} on={(v) => setForm({ ...form, name: v })} req />
        <Field label="Email" val={form.email} on={(v) => setForm({ ...form, email: v })} type="email" req />
      </div>
      <div>
        <FieldLabel>Typ projektu</FieldLabel>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {(
            [
              ['web', 'Web / aplikácia'],
              ['mobile', 'Mobilná appka'],
              ['saas', 'SaaS MVP'],
              ['ai', 'AI integrácia'],
              ['design', 'UI/UX / Branding'],
            ] as [string, string][]
          ).map(([k, l]) => (
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
        <FieldLabel>Rozpočet</FieldLabel>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          {(
            [
              ['5k', '< 5 000 €'],
              ['15k', '5–15k €'],
              ['25k', '15–30k €'],
              ['50k', '30–60k €'],
              ['100k', '60k+ €'],
            ] as [string, string][]
          ).map(([k, l]) => (
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
            Vlastné
          </button>
          {form.budget === 'custom' && (
            <input
              type="text"
              autoFocus
              value={form.customBudget || ''}
              onChange={(e) => setForm({ ...form, customBudget: e.target.value })}
              placeholder="Zadajte sumu…"
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
        <FieldLabel>Opíšte projekt</FieldLabel>
        <textarea
          value={form.msg}
          onChange={(e) => setForm({ ...form, msg: e.target.value })}
          required
          rows={6}
          placeholder="Pár viet o tom, čo potrebujete, časovom rámci, a kde ste v procese..."
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
      <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', padding: '16px' }}>
        Odoslať správu →
      </button>
      <p style={{ fontSize: 12, color: 'var(--fg-muted)', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
        Odpoviem do 24 hodín. Informácie sú dôverné.
      </p>
    </form>
  );
}
