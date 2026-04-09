import { permanentRedirect } from "next/navigation";

type HomeProps = {
  searchParams?: {
    lang?: string | string[];
  };
};

export default function Home({ searchParams }: HomeProps) {
  const lang = Array.isArray(searchParams?.lang) ? searchParams?.lang[0] : searchParams?.lang;
  const locale = lang === "es" || lang === "es-AR" ? "es" : "pt";
  permanentRedirect(`/${locale}`);
}
