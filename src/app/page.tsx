import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WorksPreview from "@/components/sections/WorksPreview";
import ProcessFlow from "@/components/sections/ProcessFlow";
import Representative from "@/components/sections/Representative";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WorksPreview />
      <ProcessFlow />
      <Representative />
      <CTA />
    </>
  );
}
