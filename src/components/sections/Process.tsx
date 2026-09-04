import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import ReadableText from "@/components/ui/ReadableText";
import { processSteps } from "@/data/process";

/**
 * 案件の進め方。縦に連なる4ステップ。
 */
export default function Process() {
  return (
    <section
      id="process"
      aria-label="進め方"
      className="border-t border-line py-20 sm:py-28"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionTitle
          eyebrow="PROCESS"
          title="進め方"
          lead="お問い合わせから納品までの流れです。最初のヒアリングは無料で、その場でお見積りをお約束いただく必要はありません。"
        />

        <ol className="relative">
          {/* 各ステップをつなぐ縦線 */}
          <span
            aria-hidden="true"
            className="absolute left-[19px] top-3 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-brand-blue/50 via-brand-purple/30 to-transparent sm:block"
          />

          {processSteps.map((step, index) => (
            <li key={step.number}>
              <Reveal delay={index * 0.06}>
                <div className="flex gap-5 pb-10 last:pb-0 sm:gap-7">
                  <span className="relative z-10 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-bg-surface font-mono text-xs text-brand-blue sm:inline-flex">
                    {step.number}
                  </span>

                  <div className="flex-1 rounded-card border border-line bg-bg-surface p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-mono text-xs text-brand-blue sm:hidden">
                        {step.number}
                      </span>
                      <h3 className="font-display text-base font-bold text-fg sm:text-lg">
                        {step.title}
                      </h3>
                      {step.duration && (
                        <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-fg-dim">
                          {step.duration}
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                      <ReadableText text={step.description} maxChars={26} />
                    </p>

                    {step.deliverable && (
                      <p className="mt-4 font-mono text-[11px] tracking-wide text-fg-dim">
                        お渡しするもの：{step.deliverable}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
