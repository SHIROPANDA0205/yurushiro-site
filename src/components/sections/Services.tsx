import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

/**
 * SERVICES セクション。データは src/data/services.ts で管理しています。
 */
export default function Services() {
  return (
    <section
      id="services"
      aria-label="できること"
      className="scroll-mt-20 bg-base-soft py-20 sm:py-28"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionTitle
          eyebrow="SERVICES"
          title="できること"
          lead="技術だけでなく、対話を大切に。AIとコミュニケーションを掛け合わせ、あなたの目的を一緒に形にします。まずは「こんなことできる？」からお気軽にどうぞ。"
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.title}>
              <Reveal delay={index * 0.07} className="h-full">
                <ServiceCard service={service} index={index} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
