import type { Metadata } from "next";
import { Check, Layout, Sparkles, Workflow } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Process from "@/components/sections/Process";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import CTA from "@/components/sections/CTA";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "AI LINK CRAFT のサービス。Webサイト・LP制作、業務効率化ツール開発、AI活用・業務自動化の支援を行っています。企画から実装・運用まで一貫して対応します。",
  alternates: { canonical: "/services" },
};

const icons = {
  layout: Layout,
  workflow: Workflow,
  sparkles: Sparkles,
} as const;

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="SERVICES"
        title="サービス"
        lead="ご相談の入口は3つですが、実際の案件はこれらをまたぐことがほとんどです。どこに当てはまるか分からない段階でも、まずはお話をお聞かせください。"
        crumbs={[{ label: "SERVICES" }]}
      />

      <div className="mx-auto max-w-content px-4 sm:px-6">
        {services.map((service) => {
          const Icon = icons[service.icon];
          return (
            <section
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 border-b border-line py-16 last:border-b-0 sm:py-20"
            >
              <Reveal>
                <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
                  {/* 見出し側 */}
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-fg/[0.03] text-brand-blue">
                        <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
                      </span>
                      <span className="font-mono text-xs tracking-[0.22em] text-fg-dim">
                        {service.number}
                      </span>
                    </div>

                    <h2 className="mt-6 font-display text-2xl font-bold leading-tight text-fg sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-2 font-mono text-xs tracking-[0.2em] text-fg-dim">
                      {service.titleEn}
                    </p>

                    <p className="mt-6 text-sm leading-relaxed text-fg-muted sm:text-base sm:leading-loose">
                      {service.description}
                    </p>

                    <ul className="mt-7 flex flex-wrap gap-1.5">
                      {service.tech.map((tech) => (
                        <li key={tech}>
                          <Tag>{tech}</Tag>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 内訳側 */}
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <div className="rounded-card border border-line bg-bg-surface p-6">
                      <p className="font-mono text-[11px] tracking-[0.2em] text-brand-blue">
                        こんなご相談
                      </p>
                      <ul className="mt-4 space-y-3">
                        {service.forWho.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-fg-muted"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-brand-cyan"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-card border border-line bg-bg-surface p-6">
                      <p className="font-mono text-[11px] tracking-[0.2em] text-brand-blue">
                        対応範囲
                      </p>
                      <ul className="mt-4 space-y-3">
                        {service.scope.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-fg-muted"
                          >
                            <Check
                              aria-hidden="true"
                              className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue"
                              strokeWidth={2}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>
          );
        })}
      </div>

      <Process />

      {/* 料金についての考え方 */}
      <section className="border-t border-line bg-bg-surface/40 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.22em] text-brand-blue">
              PRICING
            </p>
            <h2 className="mt-5 font-display text-xl font-bold text-fg sm:text-2xl">
              費用は、内容を伺ってからお見積りします
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-fg-muted sm:text-base sm:leading-loose">
              同じ「Webサイト制作」でも、必要な作業は案件ごとに大きく変わります。
              一律の料金表をお出しするより、伺った内容に対して必要な工程を積み上げてご提示するほうが、
              納得いただける形になると考えています。ご予算が決まっている場合は、その範囲で何ができるかをご提案します。
            </p>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
