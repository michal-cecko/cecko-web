import { redirect } from 'next/navigation';
import { WORKS } from '../../data';
import { defaultLocale, locales, type Locale } from '../../i18n/config';

export default async function CaseStudyIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = ((locales as readonly string[]).includes(raw) ? raw : defaultLocale) as Locale;
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  redirect(`${prefix}/pripadova-studia/${WORKS[0].id}`);
}
