'use client';

export default function PrintButton() {
  return (
    <button onClick={() => window.print()} className="btn btn-ghost">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M4 2h6v3H4V2zM2 5h10v5H9v3H5v-3H2V5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
      Stiahnuť PDF
    </button>
  );
}
