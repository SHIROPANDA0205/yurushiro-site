import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import CompanyProfile from "@/components/sections/CompanyProfile";
import Values from "@/components/sections/Values";
import BusinessInfo from "@/components/sections/BusinessInfo";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "事業者情報",
  description:
    "AI LINK CRAFT の事業者情報と、代表・ゆるしろの経歴・保有資格・大事にしていること。",
  alternates: { canonical: "/company" },
};

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        eyebrow="COMPANY"
        title="事業者情報"
        lead="AI LINK CRAFT は、代表・ゆるしろが個人事業として運営する屋号です。どんな人間が、どんな考えでつくっているのかをまとめています。"
        crumbs={[{ label: "COMPANY" }]}
      />
      <CompanyProfile />
      <Values />
      <BusinessInfo />
      <CTA />
    </>
  );
}
