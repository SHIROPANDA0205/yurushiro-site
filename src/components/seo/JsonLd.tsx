import { site } from "@/data/site";
import { profile } from "@/data/profile";
import { xLink } from "@/data/socialLinks";

/**
 * Google向けの構造化データ（JSON-LD）。
 * Person / WebSite / ProfessionalService を埋め込み、
 * 「ゆるしろ」「早稲田」「IT副業」などの関連を明示します。
 */
export default function JsonLd() {
  const sameAs = [xLink?.url].filter(Boolean) as string[];

  const graph = [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.fullName,
      description: site.description,
      inLanguage: "ja-JP",
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: profile.name,
      alternateName: "yurushiro",
      url: site.url,
      jobTitle: "ITエンジニア",
      description: site.description,
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "早稲田大学",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "早稲田大学大学院 先進理工学研究科",
        },
      ],
      knowsAbout: [
        "AI活用",
        "Claude Code",
        "Web制作",
        "Web開発",
        "IT副業",
        "ローコード開発",
      ],
      sameAs,
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: "ゆるしろ｜AI活用・Web制作・IT副業支援",
      url: site.url,
      description:
        "早稲田院卒ITエンジニア・ゆるしろによる、Claude Codeを活用したAI開発支援・Web制作・IT副業のご相談。",
      areaServed: "JP",
      availableLanguage: "Japanese",
      provider: { "@id": `${site.url}/#person` },
      serviceType: ["AI活用支援", "Web制作", "IT副業相談", "Claude Code開発支援"],
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
