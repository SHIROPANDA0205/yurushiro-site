import { BookOpen, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { learnings, learningsByCategory } from "@/data/lab";

/**
 * Udemyでの学習記録。
 *
 * 件数が数十件まで増える前提の作りです。
 * 1件ずつ「学んだこと」を展開すると縦に長くなりすぎて誰も読まないため、
 * 上に分野ごとの件数を置いて網羅性を先に見せ、
 * 下は1行1件のコンパクトな一覧にしています。
 *
 * 「学んだこと」を書いた講座には印を付け、その内容は折りたたんで出します。
 * 全件に書く必要をなくすことで、追記が止まらないようにする狙いです。
 */
export default function LearningList() {
  if (learnings.length === 0) {
    return (
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
              分野ごとに整理して、随時こちらに追記していきます。
            </p>
          </div>
        </div>
      </Reveal>
    );
  }

  return (
    <>
      {/*
       * 分野ごとの件数。何を押さえた人かを先に伝える。
       * 分野は数個に絞ってあるので、件数が増えてもここは横に伸びない。
       */}
      <Reveal>
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-fg/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {learningsByCategory.map((group) => (
            <li key={group.category} className="bg-bg px-5 py-5">
              <div className="flex items-baseline gap-2.5">
                <span className="grad-text font-display text-3xl font-extrabold">
                  {group.items.length}
                </span>
                <span className="font-mono text-xs text-fg-dim">件</span>
              </div>
              <p className="mt-2 text-sm font-bold text-fg">{group.category}</p>
              <div
                aria-hidden="true"
                className="mt-3 h-1 overflow-hidden rounded-full bg-fg/[0.07]"
              >
                <div
                  className="grad-surface h-full rounded-full"
                  style={{
                    width: `${Math.round((group.items.length / learnings.length) * 100)}%`,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      {/*
       * 分野ごとの一覧。
       *
       * 講座名はUdemyの正式名称をそのまま出すため、40〜60字と長くなります。
       * 1行に押し込むと折り返しが不揃いになるので、カードにして
       * 縦の余白を与えています。3列に並ぶぶん、件数が増えても縦に伸びにくい。
       */}
      <div className="mt-10 space-y-10">
        {learningsByCategory.map((group, groupIndex) => (
          <Reveal key={group.category} delay={groupIndex * 0.05}>
            <div className="flex items-baseline gap-3 border-b-2 border-line pb-2">
              <h3 className="font-display text-base font-bold text-fg">
                {group.category}
              </h3>
              <span className="font-mono text-xs text-fg-dim">
                {group.items.length}件
              </span>
            </div>

            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((learning) => {
                const hasDetail =
                  (learning.learned?.length ?? 0) > 0 || Boolean(learning.applied);

                return (
                  <li
                    key={learning.title}
                    className="flex h-full flex-col rounded-card border border-line bg-bg p-4 transition-colors duration-300 hover:border-line-strong"
                  >
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-brand-blue/[0.07] px-2 py-1 font-mono text-[10px] uppercase leading-none tracking-[0.1em] text-brand-blue">
                        {learning.provider}
                      </span>
                      {learning.completedAt && (
                        <span className="font-mono text-[11px] tabular-nums leading-none text-fg-dim">
                          {learning.completedAt}
                        </span>
                      )}
                    </div>

                    <p className="mt-3 flex-1 text-[13px] leading-relaxed text-fg">
                      {learning.title}
                    </p>

                    {hasDetail && (
                      <details className="group mt-3 border-t border-line pt-3">
                        <summary className="flex cursor-pointer list-none items-center gap-1 font-mono text-[11px] text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue">
                          学んだこと
                          <span className="inline-block transition-transform group-open:rotate-90">
                            ›
                          </span>
                        </summary>

                        <div className="pt-3">
                          {(learning.learned?.length ?? 0) > 0 && (
                            <ul className="space-y-1.5">
                              {(learning.learned ?? []).map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-[12px] leading-relaxed text-fg-muted"
                                >
                                  <Check
                                    aria-hidden="true"
                                    className="mt-1 h-3 w-3 shrink-0 text-brand-cyan"
                                    strokeWidth={2.4}
                                  />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                          {learning.applied && (
                            <p className="mt-2 font-mono text-[11px] leading-relaxed text-fg-dim">
                              活かした場所：{learning.applied}
                            </p>
                          )}
                        </div>
                      </details>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-[13px] leading-relaxed text-fg-dim">
        受講証明書は、ご要望があれば個別に提示いたします。
      </p>
    </>
  );
}
