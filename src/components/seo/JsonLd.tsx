import { site } from "@/data/site";
import { business } from "@/data/business";
import { profile } from "@/data/profile";
import { activeSocialLinks } from "@/data/socialLinks";
import { services } from "@/data/services";

/**
 * Google向けの構造化データ（JSON-LD）。
 *
 * 事業主体は AI LINK CRAFT（ProfessionalService）、
 * 代表のゆるしろ（Person）はその提供者として関連づけています。
 */
export default function JsonLd() {
  const sameAs = activeSocialLinks.map((link) => link.url);

  const graph = [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      alternateName: [...site.aliases],
      description: site.description,
      inLanguage: "ja-JP",
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#organization`,
      name: business.tradeName,
      alternateName: [...site.aliases],
      url: site.url,
      description: site.description,
      slogan: site.tagline,
      areaServed: "JP",
      availableLanguage: "Japanese",
      founder: { "@id": `${site.url}/#person` },
      foundingDate: "2026-08-01",
      knowsAbout: [
        "AI活用",
        "業務自動化",
        "Web制作",
        "業務効率化ツール開発",
        "ローコード開発",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "サービス",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.summary,
          },
        })),
      },
      sameAs,
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: profile.name,
      url: `${site.url}/company`,
      jobTitle: profile.role,
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "早稲田大学" },
        {
          "@type": "CollegeOrUniversity",
          name: "早稲田大学大学院 先進理工学研究科",
        },
      ],
      worksFor: { "@id": `${site.url}/#organization` },
      sameAs,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
