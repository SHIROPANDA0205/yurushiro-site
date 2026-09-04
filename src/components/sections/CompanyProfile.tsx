import Image from "next/image";
import { BookOpen, Dumbbell, MessageCircle, Spade } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Tag from "@/components/ui/Tag";
import { certificationCount, profile } from "@/data/profile";

/** profile.ts の icon キーと lucide-react のアイコンの対応 */
const hobbyIcons = {
  dumbbell: Dumbbell,
  spade: Spade,
  book: BookOpen,
  chat: MessageCircle,
} as const;

/**
 * 代表プロフィール。/company で使用します。
 */
export default function CompanyProfile() {
  return (
    <section
      id="profile"
      aria-label="代表プロフィール"
      className="scroll-mt-24 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionTitle eyebrow="REPRESENTATIVE" title="代表について" />

        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-14">
          {/* 左：写真と基本情報 */}
          <div>
            <Reveal>
              <div className="relative aspect-square overflow-hidden rounded-card border border-line bg-bg-surface">
                {profile.photoSrc ? (
                  <Image
                    src={profile.photoSrc}
                    alt={profile.photoAlt}
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 grid-lines opacity-50"
                    />
                    <span className="relative font-display text-5xl font-bold grad-text">
                      {profile.name}
                    </span>
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <dl className="mt-6 overflow-hidden rounded-card border border-line">
                {profile.items.map((item, index) => (
                  <div
                    key={item.label}
                    className={`px-5 py-4 ${index === 0 ? "" : "border-t border-line"}`}
                  >
                    <dt className="font-mono text-[11px] tracking-[0.14em] text-fg-dim">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {/* 趣味 */}
            <Reveal delay={0.1}>
              <div className="mt-6 rounded-card border border-line bg-bg-surface p-5">
                <p className="font-mono text-[11px] tracking-[0.2em] text-brand-blue">
                  好きなこと
                </p>
                <ul className="mt-4 space-y-3">
                  {profile.hobbies.map((hobby) => {
                    const Icon = hobbyIcons[hobby.icon];
                    return (
                      <li
                        key={hobby.label}
                        className="flex items-center gap-3 text-sm text-fg-muted"
                      >
                        <Icon
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-fg-dim"
                          strokeWidth={1.6}
                        />
                        {hobby.label}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* 右：本文・経歴・資格 */}
          <div>
            <Reveal>
              <div className="space-y-5">
                {profile.bio.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 20)}
                    className="text-sm leading-relaxed text-fg-muted sm:text-base sm:leading-loose"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* 経歴 */}
            <Reveal delay={0.06} className="mt-14">
              <p className="font-mono text-[11px] tracking-[0.22em] text-brand-blue">
                CAREER
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-fg">
                経歴
              </h3>

              <ol className="relative mt-7">
                <span
                  aria-hidden="true"
                  className="absolute left-[5px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-blue/50 via-brand-purple/30 to-transparent"
                />
                {profile.career.map((event) => (
                  <li key={`${event.date}-${event.title}`} className="relative pb-7 pl-7 last:pb-0">
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border ${
                        event.category === "work"
                          ? "border-brand-blue bg-brand-blue/30"
                          : "border-line-strong bg-bg"
                      }`}
                    />
                    <p className="font-mono text-[11px] tracking-wide text-fg-dim">
                      {event.date}
                    </p>
                    <p className="mt-1.5 text-sm font-bold text-fg">
                      {event.title}
                    </p>
                    {event.description && (
                      <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                        {event.description}
                      </p>
                    )}
                  </li>
                ))}
              </ol>
            </Reveal>

            {/* 資格 */}
            <Reveal delay={0.08} className="mt-14">
              <p className="font-mono text-[11px] tracking-[0.22em] text-brand-blue">
                CERTIFICATIONS
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-fg">
                保有資格
                <span className="ml-2 font-mono text-xs font-normal text-fg-dim">
                  {certificationCount}件
                </span>
              </h3>

              <div className="mt-7 space-y-6">
                {profile.certificationGroups.map((group) => (
                  <div key={group.label}>
                    <p className="font-mono text-[11px] tracking-wide text-fg-dim">
                      {group.label}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <li key={item}>
                          <Tag>{item}</Tag>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
