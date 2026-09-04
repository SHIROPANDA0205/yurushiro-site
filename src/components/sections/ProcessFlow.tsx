"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { processSteps } from "@/data/process";
import { viewportOnce } from "@/lib/motion";

/**
 * トップページの「進め方」。
 *
 * 4つの工程を横一本の線でつなぎ、流れが一目で分かる形にしています。
 * 線はブランドのグラデーションで、スクロールで画面に入ると左から引かれます。
 *
 * 詳しい説明は /services 側の Process（縦のタイムライン）が担うため、
 * ここでは各工程 2 行程度の summary だけを見せます。
 */

/** 各工程の節点の色。グラデーションの線に合わせて左から右へ変化させる */
const NODE_COLORS = ["#3B6FE0", "#6B5FE0", "#8B4FE0", "#0EA5C4"];

export default function ProcessFlow() {
  const reduceMotion = useReducedMotion();

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

        <div className="relative">
          {/*
           * 工程をつなぐ線。1つ目と4つ目の節点の中心を結ぶ。
           * - 横位置：カラム幅の半分だけ左右を空ける。4カラム・gap-x-4（1rem×3）
           *   なので、1カラム＝(100% - 3rem)/4、その半分が (100% - 3rem)/8
           * - 縦位置：節点（28px）の中心を通るよう top-[13px]（線の太さ2px込み）
           * 4カラムに並ぶ md 以上でのみ表示する。
           */}
          <div className="pointer-events-none absolute left-[calc((100%-3rem)/8)] right-[calc((100%-3rem)/8)] top-[13px] hidden h-0.5 md:block">
            <div className="h-full w-full rounded-full bg-line" />
            <motion.div
              aria-hidden="true"
              className="grad-surface absolute inset-0 origin-left rounded-full"
              initial={reduceMotion ? undefined : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <ol className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-4">
            {processSteps.map((step, index) => (
              <li key={step.number} className="text-center">
                <Reveal delay={index * 0.12}>
                  {/* 節点。線の上に重なるよう、線と同じ高さに置く */}
                  <span
                    aria-hidden="true"
                    className="mx-auto mb-6 flex h-7 w-7 items-center justify-center rounded-full border-2 bg-bg"
                    style={{ borderColor: NODE_COLORS[index] }}
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: NODE_COLORS[index] }}
                    />
                  </span>

                  <p className="font-mono text-[11px] tracking-[0.2em] text-brand-blue">
                    {step.number}
                  </p>

                  <h3 className="mt-2.5 font-display text-base font-bold text-fg">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {step.summary}
                  </p>

                  {step.duration && (
                    <span className="mt-4 inline-block rounded-full border border-line px-2.5 py-1 font-mono text-[11px] leading-none text-fg-dim">
                      {step.duration}
                    </span>
                  )}
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
