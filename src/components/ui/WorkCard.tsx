import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import Tag from "@/components/ui/Tag";
import { workCategoryLabels, type Work } from "@/data/works";

/**
 * 実績一覧のカード。
 * comingSoon の実績はリンクにせず、準備中の表示になります。
 */
export default function WorkCard({ work }: { work: Work }) {
  const inner = (
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-bg-surface transition-colors duration-300 group-hover:border-line-strong">
      {/* サムネイル */}
      <div className="relative aspect-[16/10] overflow-hidden bg-bg-raised">
        {work.thumbnail ? (
          <Image
            src={work.thumbnail}
            alt={work.thumbnailAlt ?? `${work.title}の画面`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 grid-lines opacity-60"
            style={{
              background:
                "linear-gradient(135deg, rgba(91,140,255,0.18), rgba(166,108,255,0.10) 50%, rgba(34,211,238,0.12))",
            }}
          />
        )}

        <div className="absolute left-3 top-3">
          <Tag tone={work.comingSoon ? "default" : "accent"}>
            {work.comingSoon ? "準備中" : workCategoryLabels[work.category]}
          </Tag>
        </div>
      </div>

      {/* 本文 */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="flex items-start justify-between gap-3 font-display text-base font-bold leading-snug text-fg">
          <span>{work.title}</span>
          {!work.comingSoon && (
            <ArrowUpRight
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 text-fg-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue"
            />
          )}
        </h3>

        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-fg-muted">
          {work.summary}
        </p>

        {work.tech.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {work.tech.slice(0, 4).map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );

  if (work.comingSoon) {
    return <TiltCard className="group h-full opacity-70">{inner}</TiltCard>;
  }

  return (
    <TiltCard className="group h-full">
      <Link
        href={`/works/${work.slug}`}
        className="block h-full rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
      >
        {inner}
      </Link>
    </TiltCard>
  );
}
