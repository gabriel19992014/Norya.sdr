import dynamic from "next/dynamic";

// Imports estáticos (acima da dobra)
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { SectionSkeleton } from "./components/Skeleton";

// Lazy load components não-críticos
const Challenges = dynamic(() => import("./components/Challenges"), {
  loading: () => <SectionSkeleton />,
});

const Solutions = dynamic(() => import("./components/Solutions"), {
  loading: () => <SectionSkeleton />,
});

const Process = dynamic(() => import("./components/Process"), {
  loading: () => <SectionSkeleton />,
});

const Deliverables = dynamic(() => import("./components/Deliverables"), {
  loading: () => <SectionSkeleton />,
});

const Benefits = dynamic(() => import("./components/Benefits"), {
  loading: () => <SectionSkeleton />,
});

const About = dynamic(() => import("./components/About"), {
  loading: () => <SectionSkeleton />,
});

const Methodology = dynamic(() => import("./components/Methodology"), {
  loading: () => <SectionSkeleton />,
});

const Contact = dynamic(() => import("./components/Contact"), {
  loading: () => <SectionSkeleton />,
});

const ServiceLinks = dynamic(() => import("./components/ServiceLinks"), {
  loading: () => <SectionSkeleton />,
});

const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => <div className="h-40 bg-norya-ink animate-pulse" />,
});

import {
  contentByLocale,
  getNavItems,
  getOrganizationLdJson,
  getServiceLdJson,
  getWebSiteLdJson,
  getWhatsappLabel,
  getWhatsappUrl,
  type Locale
} from "./site";

type LandingPageProps = {
  locale: Locale;
};

export default function LandingPage({ locale }: LandingPageProps) {
  const content = contentByLocale[locale];
  const whatsappUrl = getWhatsappUrl(locale);
  const whatsappLabel = getWhatsappLabel(locale);
  const navItems = getNavItems(locale);

  const organizationLdJson = getOrganizationLdJson();
  const webSiteLdJson = getWebSiteLdJson(locale);
  const serviceLdJson = getServiceLdJson(locale);

  return (
    <main id="top" lang={locale === "pt" ? "pt-BR" : "es-AR"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationLdJson, webSiteLdJson, serviceLdJson]) }}
      />

      <Navbar
        locale={locale}
        switchLabel={content.switchLabel}
        ctaLabel={content.navCta}
        whatsappLabel={whatsappLabel}
        whatsappUrl={whatsappUrl}
        items={navItems}
      />

      <Hero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        cta={content.hero.cta}
        imageAlt={content.hero.imageAlt}
        whatsappLabel={whatsappLabel}
        whatsappUrl={whatsappUrl}
      />
      <Clients title={content.clients.title} subtitle={content.clients.subtitle} items={content.clients.items} />
      <Challenges title={content.challenges.title} challengeLabel={content.challenges.challengeLabel} items={content.challenges.items} />
      <Solutions
        title={content.solutions.title}
        subtitle={content.solutions.subtitle}
        cta={content.solutions.cta}
        proofPoints={content.solutions.proofPoints}
        whatsappLabel={whatsappLabel}
        whatsappUrl={whatsappUrl}
        items={content.solutions.items}
      />
      <ServiceLinks locale={locale} />
      <Process title={content.process.title} steps={content.process.steps} />
      <Deliverables title={content.deliverables.title} items={content.deliverables.items} />
      <Benefits title={content.benefits.title} items={content.benefits.items} />
      <About
        title={content.about.title}
        description={content.about.description}
        highlights={content.about.highlights}
        highlightDescriptions={content.about.highlightDescriptions}
      />
      <Methodology
        title={content.methodology.title}
        text={content.methodology.text}
        nodes={content.methodology.nodes}
      />
      <Contact
        title={content.contact.title}
        subtitle={content.contact.subtitle}
        locale={locale}
        whatsappUrl={whatsappUrl}
        trustPoints={content.contact.trustPoints}
        nameLabel={content.contact.nameLabel}
        emailLabel={content.contact.emailLabel}
        messageLabel={content.contact.messageLabel}
        submitLabel={content.contact.submitLabel}
        loadingLabel={content.contact.loadingLabel}
        successMessage={content.contact.successMessage}
        errorMessage={content.contact.errorMessage}
      />
      <Footer locale={locale} whatsappUrl={whatsappUrl} items={navItems} />
      <WhatsAppFloat whatsappUrl={whatsappUrl} label={whatsappLabel} />
    </main>
  );
}
