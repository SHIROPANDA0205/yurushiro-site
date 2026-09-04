import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceRow from "@/components/ui/ServiceRow";
import ButtonLink from "@/components/ui/ButtonLink";
import { services } from "@/data/services";

/**
 * トップページの「できること」。
 * 3本柱を全幅の行で並べ、それぞれ実際に頼めることまで見せます。
 */
export default function ServicesOverview() {
  return (
    <section
      id="services"
      aria-label="できること"
      className="border-t border-line py-20 sm:py-28"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionTitle
          eyebrow="SOLUTION"
          title="できること"
          lead="ご相談の入口は3つですが、実際にはこれらをまたぐことがほとんどです。どこに当てはまるか分からない段階でも構いません。"
        />

        <ul className="overflow-hidden rounded-card border border-line">
          {services.map((service, index) => (
            <li
              key={service.slug}
              className={index > 0 ? "border-t border-line" : undefined}
            >
              <Reveal delay={index * 0.08}>
                <ServiceRow service={service} />
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <ButtonLink href="/services" variant="ghost">
            サービスの詳細を見る
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
