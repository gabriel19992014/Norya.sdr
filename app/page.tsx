import { permanentRedirect } from "next/navigation";

type HomeProps = {
  searchParams?: Promise<{
    lang?: string | string[];
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const lang = Array.isArray(params?.lang) ? params?.lang[0] : params?.lang;
  const locale = lang === "es" || lang === "es-AR" ? "es" : "pt";
  permanentRedirect(`/${locale}`);
}
