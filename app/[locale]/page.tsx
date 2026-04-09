import { notFound } from "next/navigation";

import LandingPage from "../LandingPage";
import { getSiteMetadata, isValidLocale, type Locale } from "../site";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "es" }];
}

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  return getSiteMetadata(locale);
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  return <LandingPage locale={locale as Locale} />;
}
