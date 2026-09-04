import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/brand/Logo";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import ButtonLink from "@/components/ui/ButtonLink";
import ReadableText from "@/components/ui/ReadableText";
import { homeBio, profile, profileCardItems } from "@/data/profile";

/**
 * トップページの「つくる人」。
 *
 * 顔写真を出さない方針のため、左に名刺のようなカードを置いて
 * 学歴・本業・資格といった事実を並べ、右に考え方を書いています。
 * 以前は「本業の活動」と2セクションに分かれていましたが、
 * どちらも同じ人物の話で内容が重なるため1つにまとめています。
 */
export default function Representative() {
  return (
    <section
      id="representative"
      aria-label="つくる人"
      className="border-t border-line bg-bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionTitle eyebrow="REPRESENTATIVE" title="つくる人" />

        <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-14">
          {/* 左：名刺カード */}
          <Reveal>
            <div
              className="rounded-card border border-line p-6"
              style={{
                backgroundImage:
                  "linear-gradient(160deg, rgba(59,111,224,0.05), rgba(14,165,196,0.03))",
              }}
            >
              <Logo variant="mark" size={38} />

              <p className="mt-5 font-mono text-[11px] tracking-[0.18em] text-brand-blue">
                {profile.role}
              </p>
              <p className="mt-1.5 font-display text-2xl font-bold text-fg">
                {profile.name}
              </p>

              <dl className="mt-6">
                {profileCardItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-baseline justify-between gap-3 border-t border-line py-2.5"
                  >
                    <dt className="shrink-0 font-mono text-[11px] tracking-wide text-fg-dim">
                      {item.label}
                    </dt>
                    <dd className="text-right text-[13px] leading-snug text-fg">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {/* 右：考え方 */}
          <Reveal delay={0.08}>
            <div className="space-y-4">
              {homeBio.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 20)}
                  className="text-sm leading-relaxed text-fg-muted sm:text-base sm:leading-loose"
                >
                  <ReadableText text={paragraph} maxChars={28} />
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ButtonLink href="/company" variant="ghost">
                経歴・事業者情報を見る
              </ButtonLink>

              <Link
                href="/works#main-job"
                className="group inline-flex items-center gap-1.5 text-sm font-bold text-fg-muted transition-colors hover:text-fg"
              >
                本業での実績を見る
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
