import About from "./components/About";
import Benefits from "./components/Benefits";
import Challenges from "./components/Challenges";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Deliverables from "./components/Deliverables";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Methodology from "./components/Methodology";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Solutions from "./components/Solutions";
import WhatsAppFloat from "./components/WhatsAppFloat";
import {
  contentByLocale,
  getNavItems,
  getOrganizationLdJson,
  getServiceLdJson,
  getWebSiteLdJson,
  getWhatsappLabel,
  getWhatsappUrls,
  type Locale
} from "./site";

type LandingPageProps = {
  locale: Locale;
};

export default function LandingPage({ locale }: LandingPageProps) {
  const content = contentByLocale[locale];
  const whatsappUrlBySource = getWhatsappUrls(locale);
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
        whatsappUrl={whatsappUrlBySource.navbar}
        items={navItems}
      />

      <Hero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        cta={content.hero.cta}
        imageAlt={content.hero.imageAlt}
        whatsappLabel={whatsappLabel}
        whatsappUrl={whatsappUrlBySource.hero}
      />
      <Clients title={content.clients.title} subtitle={content.clients.subtitle} items={content.clients.items} />
      <Challenges title={content.challenges.title} items={content.challenges.items} />
      <Solutions
        title={content.solutions.title}
        subtitle={content.solutions.subtitle}
        cta={content.solutions.cta}
        proofPoints={content.solutions.proofPoints}
        whatsappLabel={whatsappLabel}
        whatsappUrl={whatsappUrlBySource.solutions}
        items={content.solutions.items}
      />
      <Process title={content.process.title} steps={content.process.steps} />
      <Deliverables title={content.deliverables.title} items={content.deliverables.items} />
      <Benefits title={content.benefits.title} items={content.benefits.items} />
      <About
        title={content.about.title}
        description={content.about.description}
        highlights={content.about.highlights}
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
        whatsappUrl={whatsappUrlBySource.contact}
        trustPoints={content.contact.trustPoints}
        nameLabel={content.contact.nameLabel}
        emailLabel={content.contact.emailLabel}
        messageLabel={content.contact.messageLabel}
        submitLabel={content.contact.submitLabel}
        loadingLabel={content.contact.loadingLabel}
        successMessage={content.contact.successMessage}
        errorMessage={content.contact.errorMessage}
      />
      <Footer locale={locale} whatsappUrl={whatsappUrlBySource.footer} items={navItems} />
      <WhatsAppFloat whatsappUrl={whatsappUrlBySource.floating} label={whatsappLabel} />
    </main>
  );
}
