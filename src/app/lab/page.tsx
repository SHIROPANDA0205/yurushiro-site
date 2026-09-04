import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import CTA from "@/components/sections/CTA";
import LearningList from "@/components/sections/LearningList";
import RepositoryList from "@/components/sections/RepositoryList";
import { githubAccount } from "@/data/lab";
import { certificationCount, profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "ラボ",
  description:
    "Udemyでの学習記録、保有資格、GitHubに公開しているポートフォリオをまとめています。日々どんな技術を学び、何をつくっているかの記録です。",
  alternates: { canonical: "/lab" },
};

export default function LabPage() {
  return (
    <>
      <PageHeader
        eyebrow="LAB"
        title="ラボ"
        lead="日々どんな技術を学び、何をつくっているかの記録です。仕事として納めたものは実績ページに、学習や個人開発はこちらにまとめています。"
        crumbs={[{ label: "LAB" }]}
      />

      {/* GitHub */}
      <section
        id="github"
        aria-label="GitHubのポートフォリオ"
        className="scroll-mt-24 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <SectionTitle
            eyebrow="GITHUB"
            title="公開しているポートフォリオ"
            lead="つくったものはできるかぎり公開しています。"
          />

          <RepositoryList />

          <Reveal delay={0.1} className="mt-8">
            <a
              href={githubAccount}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-wide text-fg-dim transition-colors hover:text-fg-muted"
            >
              GitHubアカウントを見る
              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>
      </section>

      <section
        id="certifications"
        aria-label="保有資格"
        className="scroll-mt-24 border-t border-line bg-bg-surface/40 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <SectionTitle
            eyebrow="CERTIFICATIONS"
            title={`保有資格（${certificationCount}件）`}
            lead="特定の技術に閉じないよう、分野をまたいで取得してきました。"
          />

          <div className="grid gap-px overflow-hidden rounded-card border border-line bg-fg/[0.06] sm:grid-cols-3">
            {profile.certificationGroups.map((group, index) => (
              <div key={group.label} className="bg-bg p-6">
                <Reveal delay={index * 0.05}>
                  <p className="font-mono text-[11px] tracking-[0.2em] text-brand-blue">
                    {group.label}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
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
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Udemyでの学習 */}
      <section
        id="learning"
        aria-label="Udemyでの学習"
        className="scroll-mt-24 border-t border-line py-16 sm:py-20"
      >
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <SectionTitle
            eyebrow="LEARNING"
            title="Udemyでの学習"
            lead="要件定義や案件の進め方など、上流工程の講座を中心に受講しています。特に語れる講座は、学んだことと活かした場所も残しています。"
          />

          <LearningList />
        </div>
      </section>

      <CTA />
    </>
  );
}
