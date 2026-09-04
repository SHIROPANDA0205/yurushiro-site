import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import type { Work } from "@/data/works";

/**
 * 本業の実績を時系列で並べるタイムライン。
 *
 * カードを格子に並べると、期間・規模・立場がすべてカードの裏に隠れ、
 * 4件が同じ見た目になってしまう。本業の実績で見せたいのは
 * 「役割が上がっていったこと」と「前の案件の知見が次で効いたこと」なので、
 * 時間軸に沿って縦に並べ、立場と規模を表に出している。
 *
 * 並び順は古い順。役割の変化を下から上に読ませるためではなく、
 * 上から順に読んで「積み上がっていく」と分かるようにするため。
 */

/** "2023.08 – 2024.04" を、軸に出す年と期間に分ける */
function splitPeriod(period?: string) {
  if (!period) return { year: "", range: "" };
  const [start, end] = period.split(/\s*[–-]\s*/);
  const [year, month] = start.split(".");
  return {
    year: year ?? "",
    range: end ? `${month} – ${end.replace(/^\d{4}\./, "")}` : (month ?? ""),
  };
}

export default function DayJobTimeline({ works }: { works: Work[] }) {
  // データは新しい順に持っているので、表示だけ古い順にする
  const ordered = [...works].reverse();

  return (
    <ol className="relative">
      {ordered.map((work, index) => {
        const { year, range } = splitPeriod(work.period);
        const isLast = index === ordered.length - 1;

        return (
          <li key={work.slug}>
            <Reveal delay={index * 0.08}>
              <div className="grid grid-cols-[auto_1fr] gap-x-4 sm:grid-cols-[5rem_1fr] sm:gap-x-6">
                {/* 左：年月の軸 */}
                <div className="pt-0.5 text-right">
                  <p className="font-mono text-sm font-medium leading-none text-fg">
                    {year}
                  </p>
                  <p className="mt-1.5 font-mono text-[11px] leading-none text-fg-dim">
                    {range}
                  </p>
                </div>

                {/* 右：案件。左の縦線が次の案件へつながる */}
                <div
                  className={`relative pb-10 pl-6 sm:pl-8 ${
                    isLast ? "" : "border-l border-line"
                  }`}
                >
                  {/* 節点 */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-[6.5px] top-0.5 h-3 w-3 rounded-full border-2 border-brand-blue bg-bg"
                  />

                  <Link
                    href={`/works/${work.slug}`}
                    className="group block rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
                  >
                    {/* 立場と規模 */}
                    <div className="flex flex-wrap items-center gap-2">
                      {work.position && (
                        <span className="grad-surface rounded-full px-2.5 py-1 text-[11px] font-bold leading-none text-bg">
                          {work.position}
                        </span>
                      )}
                      {work.scale && (
                        <span className="rounded-md bg-fg/[0.05] px-2 py-1 font-mono text-[11px] leading-none text-fg-muted">
                          {work.scale}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 flex items-start gap-2 font-display text-base font-bold leading-snug text-fg sm:text-lg">
                      <span>{work.title}</span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 shrink-0 text-fg-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue"
                      />
                    </h3>

                    <div className="mt-4 grid gap-4 sm:grid-cols-[minmax(0,200px)_1fr] sm:items-start">
                      {/* サムネイル */}
                      {work.thumbnail && (
                        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-bg-surface">
                          <Image
                            src={work.thumbnail}
                            alt={work.thumbnailAlt ?? ""}
                            fill
                            sizes="(min-width: 640px) 200px, 100vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          />
                        </div>
                      )}

                      <div>
                        <p className="text-sm leading-relaxed text-fg-muted">
                          {work.summary}
                        </p>

                        {work.tech.length > 0 && (
                          <ul className="mt-3 flex flex-wrap gap-1.5">
                            {work.tech.map((tech) => (
                              <li key={tech}>
                                <Tag>{tech}</Tag>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </Link>

                  {/* 前の案件から持ち越したもの */}
                  {work.carryOver && (
                    <p className="mt-4 border-l-2 border-brand-blue/50 bg-brand-blue/[0.04] py-2 pl-3 pr-3 text-[13px] leading-relaxed text-fg-muted">
                      {work.carryOver}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
