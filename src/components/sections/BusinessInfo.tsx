import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import ReadableText from "@/components/ui/ReadableText";
import { business } from "@/data/business";

/**
 * 事業者情報。
 * 取引先の確認に使われる前提の情報のため、装飾は最小限にしています。
 */
export default function BusinessInfo() {
  return (
    <section
      id="business"
      aria-label="事業者情報"
      className="scroll-mt-24 border-t border-line bg-bg-surface/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="BUSINESS"
          title="事業者情報"
          lead={business.lead}
        />

        <Reveal>
          <dl className="overflow-hidden rounded-card border border-line">
            {business.items.map((item, index) => (
              <div
                key={item.label}
                className={`grid gap-1 px-5 py-5 sm:grid-cols-[160px_1fr] sm:gap-4 sm:px-6 ${
                  index === 0 ? "" : "border-t border-line"
                }`}
              >
                <dt className="font-mono text-[11px] tracking-[0.14em] text-fg-dim sm:pt-0.5">
                  {item.label}
                </dt>
                <dd className="text-sm leading-relaxed text-fg-muted">
                  {item.email && (
                    <a
                      href={`mailto:${item.email}`}
                      className="text-brand-blue underline decoration-brand-blue/40 underline-offset-4 transition-colors hover:text-brand-cyan"
                    >
                      {item.email}
                    </a>
                  )}
                  <ReadableText text={item.value} maxChars={28} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
