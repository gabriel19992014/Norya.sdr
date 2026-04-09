# NORYA Landing Page

Landing page institucional da NORYA com foco em geracao de oportunidades B2B, suporte multilingue (PT/ES) e base tecnica de SEO para indexacao organica.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## Principais recursos

- Rotas por idioma: `/pt` e `/es`
- Redirecionamento da raiz `/` para idioma padrao (com compatibilidade de `?lang=`)
- SEO tecnico com:
  - canonical e hreflang
  - Open Graph e Twitter metadata
  - JSON-LD (Organization, WebSite, ProfessionalService)
  - `sitemap.xml` e `robots.txt` dinamicos
- Cluster SEO com paginas satelite:
  - `/pt/servicos`
  - `/pt/prospeccao`
  - `/pt/geracao-de-reunioes`
  - `/es/servicios`
  - `/es/prospeccion`
  - `/es/generacion-de-reuniones`
- FAQ com schema `FAQPage` nas paginas satelite
- Formulario de contato com endpoint em `/api/contact`

## Estrutura resumida

```text
app/
  [locale]/
    page.tsx
    servicos/page.tsx
    prospeccao/page.tsx
    geracao-de-reunioes/page.tsx
    servicios/page.tsx
    prospeccion/page.tsx
    generacion-de-reuniones/page.tsx
  api/contact/route.ts
  components/
  LandingPage.tsx
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
  site.ts
public/
  img/
styles/
  globals.css
```

## Como rodar localmente

```bash
npm install
npm run dev
```

A aplicacao sera iniciada em `http://localhost:3000`.

## Scripts disponiveis

```bash
npm run dev         # desenvolvimento
npm run dev:clean   # limpa .next e inicia dev
npm run build       # build de producao
npm run build:clean # limpa .next e gera build
npm run start       # sobe build de producao
npm run lint        # lint com Next.js
npm run clean       # remove .next
```

## Solucao para erro de cache/chunks no Next

Se aparecer erro como `Cannot find module './xxx.js'` durante hot reload, execute:

```bash
npm run dev:clean
```

Isso limpa o cache de build da pasta `.next` e recompila tudo.

## Boas praticas para deploy

- Definir `metadataBase` em producao com dominio oficial
- Garantir variaveis de ambiente no provedor
- Validar sitemap em `/sitemap.xml`
- Validar robots em `/robots.txt`
- Conectar Google Search Console nas versoes de idioma

## Licenca

Projeto privado NORYA.
