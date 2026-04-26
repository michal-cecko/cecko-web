import type { Locale } from '../../i18n/config';

export default function PrintButton({ label, locale }: { label: string; locale: Locale }) {
  const filename = `cv-${locale}.pdf`;
  const downloadName = `Michal_Cecko_CV_${locale.toUpperCase()}.pdf`;
  return (
    <a
      href={`/${filename}`}
      download={downloadName}
      data-print-hide
      className="btn btn-ghost"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 1v9m-3-3l3 3 3-3M2 12h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </a>
  );
}
