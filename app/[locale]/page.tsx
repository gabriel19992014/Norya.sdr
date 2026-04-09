import { notFound } from "next/navigation";

import LandingPage from "../LandingPage";
import { getSiteMetadata, isValidLocale, type Locale } from "../site";

type LocalePageProps = {
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "es" }];
}

export function generateMetadata({ params }: LocalePageProps) {
  if (!isValidLocale(params.locale)) {
    notFound();
  }

  return getSiteMetadata(params.locale);
}

export default function LocalePage({ params }: LocalePageProps) {
  if (!isValidLocale(params.locale)) {
    notFound();
  }

  return <LandingPage locale={params.locale as Locale} />;
}
