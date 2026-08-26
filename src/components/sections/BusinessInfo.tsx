import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { business } from "@/data/business";

/**
 * BUSINESS セクション。
 *
 * 屋号「AI LINK CRAFT」としての事業者情報を掲載します。
 * サイトのブランドは活動名「ゆるしろ」ですが、契約・請求・口座はすべて屋号で行うため、
 * 「活動名 = 代表者 = 屋号」の対応づけをここで一度だけ明示しています。
 * 掲載内容は src/data/business.ts に分離しています。
 */
export default function BusinessInfo() {
  return (
    <section
      id="business"
      aria-label="事業者情報"
      className="scroll-mt-20 bg-base py-20 sm:py-28"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionTitle
          eyebrow="BUSINESS"
          title="事業者情報"
          lead={business.lead}
        />

        <Reveal className="mx-auto max-w-2xl">
          <dl className="divide-y divide-gold/15 rounded-card border border-ink/5 bg-base-soft px-6 shadow-card sm:px-10">
            {business.items.map((item) => (
              <div
                key={item.label}
                className="grid gap-1 py-5 sm:grid-cols-[150px_1fr] sm:gap-6"
              >
                <dt className="font-serif text-sm font-bold tracking-[0.12em] text-primary-dark">
                  {item.label}
                </dt>
                <dd className="text-sm leading-relaxed text-ink">
                  {item.email ? (
                    <>
                      <a
                        href={`mailto:${item.email}`}
                        className="rounded-sm border-b border-gold/40 transition-colors hover:text-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                      >
                        {item.email}
                      </a>
                      {item.value}
                    </>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
