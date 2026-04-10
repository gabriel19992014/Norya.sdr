import { notFound } from "next/navigation";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { getServicePageData } from "../../lib/service-pages";

const data = getServicePageData("generacion-de-reuniones")!;

export const metadata = data.metadata;

type Props = { params: Promise<{ locale: string }> };

export default async function GeneracionReunionesPage({ params }: Props) {
  const { locale } = await params;
  if (locale !== data.locale) notFound();
  return <ServicePageTemplate data={data} />;
}
