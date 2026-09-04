import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Reveal from "@/components/ui/Reveal";
import WorkCard from "@/components/ui/WorkCard";
import DayJobTimeline from "@/components/sections/DayJobTimeline";
import SectionTitle from "@/components/ui/SectionTitle";
import CTA from "@/components/sections/CTA";
import { works } from "@/data/works";
import { dayJobWorks } from "@/data/dayjob";

export const metadata: Metadata = {
  title: "実績",
  description:
    "AI LINK CRAFT で手がけた受託案件と、本業のエンジニアとしての実績をまとめています。どのような課題に対して何をつくったのか、背景から結果までを掲載しています。",
  alternates: { canonical: "/works" },
};

export default function WorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="WORKS"
        title="実績"
        lead="つくったものだけでなく、過程まで書いています。同じような課題の参考になれば幸いです。"
        crumbs={[{ label: "WORKS" }]}
      />

      {/* 受託案件。見込み客が最初に見る情報のため先に置く */}
      <section
        id="client"
        aria-label="AI LINK CRAFT での実績"
        className="scroll-mt-24 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <SectionTitle
            eyebrow="CLIENT WORK"
            title="AI LINK CRAFT での実績"
            lead="屋号として承った案件です。要件定義から公開まで一貫して対応しています。"
          />

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((work, index) => (
              <li key={work.slug}>
                <Reveal delay={index * 0.06} className="h-full">
                  <WorkCard work={work} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 本業での実績 */}
      <section
        id="main-job"
        aria-label="本業での実績"
        className="scroll-mt-24 border-t border-line bg-bg-surface/40 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <SectionTitle
            eyebrow="MAIN JOB"
            title="本業での実績"
            lead="会社員として担当した業務のうち、公開できる範囲のものです。顧客名・システム名は記載していません。担当した立場の変化が分かるよう、古い順に並べています。"
          />

          {dayJobWorks.length > 0 ? (
            <DayJobTimeline works={dayJobWorks} />
          ) : (
            <Reveal>
              <div className="flex items-start gap-4 rounded-card border border-dashed border-line-strong bg-bg p-6 sm:p-8">
                <Briefcase
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-fg-dim"
                  strokeWidth={1.6}
                />
                <div>
                  <p className="text-sm font-bold text-fg">
                    本業での取り組みを準備中です
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    公開できる範囲の内容を整理して、随時こちらに追記していきます。
                  </p>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
