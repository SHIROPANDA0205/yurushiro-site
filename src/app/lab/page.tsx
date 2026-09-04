import type { Metadata } from "next";
import { ArrowUpRight, BookOpen } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import SectionTitle from "@/components/ui/SectionTitle";
import CTA from "@/components/sections/CTA";
import { githubAccount, learnings, repositories } from "@/data/lab";
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

      {/* Udemyでの学習 */}
      <section
        id="learning"
        aria-label="Udemyでの学習"
        className="scroll-mt-24 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <SectionTitle
            eyebrow="LEARNING"
            title="Udemyでの学習"
            lead="受講した講座と、そこで学んだことを実際にどこで使ったのかを残しています。"
          />

          {learnings.length > 0 ? (
            <ul className="space-y-4">
              {learnings.map((learning, index) => (
                <li key={learning.title}>
                  <Reveal delay={index * 0.05}>
                    <article className="rounded-card border border-line bg-bg-surface p-6">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <Tag tone="accent">{learning.provider}</Tag>
                        <span className="font-mono text-[11px] text-fg-dim">
                          {learning.completedAt}
                        </span>
                      </div>

                      <h3 className="mt-4 font-display text-base font-bold text-fg">
                        {learning.title}
                      </h3>

                      <ul className="mt-4 space-y-2">
                        {learning.learned.map((item) => (
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

                      {learning.applied && (
                        <p className="mt-4 font-mono text-[11px] leading-relaxed tracking-wide text-fg-dim">
                          活かした場所：{learning.applied}
                        </p>
                      )}
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          ) : (
            <Reveal>
              <div className="flex items-start gap-4 rounded-card border border-dashed border-line-strong bg-bg-surface/60 p-6 sm:p-8">
                <BookOpen
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-fg-dim"
                  strokeWidth={1.6}
                />
                <div>
                  <p className="text-sm font-bold text-fg">
                    受講した講座の記録を準備中です
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    学んだことと、それを実際にどこで使ったのかをセットで残していく予定です。
                  </p>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* 保有資格 */}
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

      {/* GitHub */}
      <section
        id="github"
        aria-label="GitHubのポートフォリオ"
        className="scroll-mt-24 border-t border-line py-16 sm:py-20"
      >
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionTitle
              eyebrow="GITHUB"
              title="公開しているポートフォリオ"
              lead="つくったものはできるかぎり公開しています。"
            />
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {repositories.map((repo, index) => (
              <li key={repo.name}>
                <Reveal delay={index * 0.06} className="h-full">
                  <a
                    href={repo.url ?? `${githubAccount}/${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-card border border-line bg-bg-surface p-6 transition-colors duration-300 hover:border-line-strong"
                  >
                    <h3 className="flex items-start justify-between gap-3 font-mono text-sm font-medium text-fg">
                      {repo.name}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-fg-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue"
                      />
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                      {repo.description}
                    </p>

                    {repo.reason && (
                      <p className="mt-4 border-l-2 border-brand-purple/40 pl-4 text-sm leading-relaxed text-fg-dim">
                        {repo.reason}
                      </p>
                    )}

                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {repo.tech.map((tech) => (
                        <li key={tech}>
                          <Tag>{tech}</Tag>
                        </li>
                      ))}
                    </ul>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>

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

      <CTA />
    </>
  );
}
