import Image from "next/image";
import { ExternalLink, Github, Hourglass, PanelsTopLeft } from "lucide-react";
import type { Work } from "@/data/works";

/**
 * WORKS セクションのカード。
 * - thumbnailSrc 未設定時はグラデーションのプレースホルダーを表示
 * - detailUrl / githubUrl / siteUrl が未設定のボタンは表示されません
 */
export default function WorkCard({ work, index }: { work: Work; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  if (work.comingSoon) {
    return (
      <div className="flex h-full min-h-[18rem] flex-col items-center justify-center gap-4 rounded-card border-2 border-dashed border-ink/15 bg-primary-soft/60 p-7 text-center">
        <Hourglass className="h-8 w-8 text-gold/70" aria-hidden="true" />
        <p className="font-serif-en text-lg font-semibold italic tracking-[0.18em] text-ink-soft">
          Coming Soon
        </p>
        <p className="text-sm text-ink-soft">{work.description}</p>
      </div>
    );
  }

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-card border border-ink/5 bg-primary-soft shadow-card transition-all duration-300 hover:border-gold/40 hover:shadow-card-hover">
      {/* サムネイル */}
      <div className="relative aspect-[16/9] w-full">
        {work.thumbnailSrc ? (
          <Image
            src={work.thumbnailSrc}
            alt={work.thumbnailAlt ?? `${work.title}のサムネイル`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center bg-base-soft transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          >
            <PanelsTopLeft className="h-10 w-10 text-primary/50" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="font-serif-en text-sm italic text-gold">{number}</span>
        <h3 className="mt-1 font-serif text-lg font-bold tracking-[0.04em] text-ink">{work.title}</h3>
        {work.withClaudeCode && (
          <p className="mt-2 inline-flex self-start rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-serif text-xs font-medium tracking-[0.06em] text-gold">
            Claude Codeで制作
          </p>
        )}
        <p className="mt-2 flex-1 font-serif text-sm leading-relaxed text-ink-soft">
          {work.description}
        </p>

        {work.tech.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="使用技術">
            {work.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-primary-soft px-2.5 py-1 text-xs font-semibold text-primary"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        {work.role && (
          <p className="mt-3 text-xs text-ink-soft">
            <span className="font-bold text-ink">担当範囲：</span>
            {work.role}
          </p>
        )}

        {(work.detailUrl || work.githubUrl || work.siteUrl) && (
          <div className="mt-5 flex flex-wrap gap-2">
            {work.detailUrl && (
              <a
                href={work.detailUrl}
                className="btn-shine inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-bold text-base transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                詳細を見る
              </a>
            )}
            {work.githubUrl && (
              <a
                href={work.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${work.title}のGitHubを見る`}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-xs font-bold text-ink transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Github className="h-3.5 w-3.5" aria-hidden="true" />
                GitHub
              </a>
            )}
            {work.siteUrl && (
              <a
                href={work.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${work.title}の公開サイトを見る`}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-xs font-bold text-ink transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                Site
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
