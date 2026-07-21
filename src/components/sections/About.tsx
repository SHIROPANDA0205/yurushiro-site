import {
  Award,
  BookOpen,
  Briefcase,
  Dumbbell,
  GraduationCap,
  MessagesSquare,
  Spade,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { profile, type Hobby } from "@/data/profile";

const categoryIcons = {
  education: GraduationCap,
  work: Briefcase,
} as const;

const hobbyIcons: Record<Hobby["icon"], typeof Dumbbell> = {
  dumbbell: Dumbbell,
  spade: Spade,
  book: BookOpen,
  chat: MessagesSquare,
};

/** 「英字 + 日本語 + 金の罫線」で構成する、ABOUTセクション内の小見出し */
function SubHeading({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <h3 className="shrink-0 font-serif text-xl font-bold tracking-[0.08em] text-ink sm:text-2xl">
        {ja}
      </h3>
      <p
        aria-hidden="true"
        className="shrink-0 font-serif-en text-sm italic tracking-[0.22em] text-gold"
      >
        {en}
      </p>
      <span
        aria-hidden="true"
        className="h-px flex-1 translate-y-[-0.35em] bg-gradient-to-r from-gold/40 to-transparent"
      />
    </div>
  );
}

/** ABOUT セクション。プロフィール写真は Hero で表示します。 */
export default function About() {
  return (
    <section id="about" aria-label="プロフィール" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionTitle eyebrow="ABOUT" title="プロフィール" />

        {/* 基本情報（活動名など）: 上質なスペック表としてページ中央に配置 */}
        <Reveal>
          <dl className="mx-auto max-w-2xl divide-y divide-gold/15 border-y border-gold/25">
            {profile.items.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-[6.5rem_1fr] items-baseline gap-4 px-2 py-4 sm:grid-cols-[9rem_1fr] sm:gap-8 sm:px-4 sm:py-5"
              >
                <dt className="font-serif text-xs font-medium tracking-[0.28em] text-gold sm:text-sm">
                  {item.label}
                </dt>
                <dd className="font-serif text-sm font-medium leading-relaxed text-ink sm:text-base">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* 趣味 */}
        <Reveal delay={0.1} className="mt-16 sm:mt-20">
          <SubHeading en="Hobbies" ja="趣味" />
          <ul className="mt-6 flex flex-wrap gap-3">
            {profile.hobbies.map((hobby) => {
              const Icon = hobbyIcons[hobby.icon];
              return (
                <li
                  key={hobby.label}
                  className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-base px-5 py-2.5 font-serif text-sm font-medium tracking-wide text-ink shadow-card"
                >
                  <Icon className="h-4 w-4 text-gold" aria-hidden="true" strokeWidth={1.5} />
                  {hobby.label}
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* 経歴タイムライン */}
        <Reveal delay={0.1} className="mt-16 sm:mt-20">
          <SubHeading en="History" ja="経歴" />
          <ol className="mt-8">
            {profile.career.map((event, index) => {
              const Icon = categoryIcons[event.category];
              const isLast = index === profile.career.length - 1;
              return (
                <li key={`${event.date}-${event.title}`} className="relative flex gap-6 pb-10 last:pb-0">
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[15px] top-9 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-gold/40 to-gold/10"
                    />
                  )}
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-base text-gold">
                    <Icon className="h-4 w-4" aria-hidden="true" strokeWidth={1.5} />
                  </span>
                  <div className="pt-0.5">
                    <p className="font-serif-en text-base font-semibold italic tracking-wide text-gold">
                      {event.date}
                    </p>
                    <p className="mt-1 font-serif font-medium text-ink">{event.title}</p>
                    {event.description && (
                      <p className="mt-0.5 font-serif text-sm text-ink-soft">{event.description}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </Reveal>

        {/* 保有資格 */}
        <Reveal delay={0.15} className="mt-16 sm:mt-20">
          <SubHeading en="Certifications" ja="保有資格" />
          <ul className="mt-6 grid gap-x-10 gap-y-0 sm:grid-cols-2">
            {profile.certifications.map((cert) => (
              <li
                key={cert}
                className="flex items-center gap-3 border-b border-gold/10 py-3 font-serif text-sm font-medium tracking-[0.02em] text-ink sm:text-base"
              >
                <Award className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" strokeWidth={1.5} />
                {cert}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* プロフィール文 */}
        <Reveal delay={0.1} className="mt-16 sm:mt-20">
          <SubHeading en="Introduction" ja="自己紹介" />
          <div className="mt-8 max-w-3xl space-y-5 font-serif text-[15px] leading-[2.1] tracking-[0.02em] text-ink sm:text-base">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
