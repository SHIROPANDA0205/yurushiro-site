"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import GridBackground from "@/components/ui/GridBackground";
import SplitText from "@/components/ui/SplitText";
import HeroPillars from "@/components/ui/HeroPillars";
import HeroMark from "@/components/ui/HeroMark";
import { site } from "@/data/site";

/**
 * ファーストビュー。
 *
 * 左にタグラインと導線、右にロゴマークを大きく置く2カラム構成です。
 * ロゴは画面が狭いと縦の場所を取りすぎるため、lg 未満では表示しません。
 */
export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeIn = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section
      aria-label="AI LINK CRAFT"
      className="relative flex min-h-[92svh] items-center overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36"
    >
      <GridBackground />

      <div className="relative mx-auto w-full max-w-content px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* 左：コピーと導線 */}
          <div>
            {/* 屋号ラベル */}
            <motion.div
              {...fadeIn(0.05)}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-fg/[0.03] px-3.5 py-1.5"
            >
              <span
                aria-hidden="true"
                className="grad-surface h-1.5 w-1.5 rounded-full animate-breathe"
              />
              <span className="font-mono text-[11px] tracking-[0.2em] text-fg-muted">
                {site.name}
              </span>
            </motion.div>

            {/* タグライン */}
            {/*
             * font-bold（700）で止めているのは、この見出しが和文で、
             * 実際に描画されるのが Noto Sans JP だから。800 を指定すると
             * 読み込んでいない太さをブラウザが合成し、字がにじむ。
             */}
            <h1 className="mt-7 font-display text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[1.05] tracking-tight text-fg">
              <SplitText text="つなぐを、" delay={0.2} />
              <br />
              {/*
               * 2行目はグラデーション文字（.grad-text）にするため、1文字ずつ
               * motion.span に分割しない。文字を分割すると、各文字が個別の
               * 描画レイヤーになり、Safari 系ブラウザでは親のグラデーションが
               * 正しく塗られず文字が透明（＝見えない）になることがあるため。
               */}
              <motion.span
                className="grad-text inline-block"
                initial={reduceMotion ? undefined : { opacity: 0, y: "0.4em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                つくる。
              </motion.span>
            </h1>

            <motion.p
              {...fadeIn(0.9)}
              className="mt-6 font-mono text-xs tracking-[0.24em] text-fg-dim sm:text-sm"
            >
              {site.taglineEn}
            </motion.p>

            {/* 導線 */}
            <motion.div
              {...fadeIn(1.0)}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="/contact"
                className="btn-shine group grad-surface inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-8 py-4 text-sm font-bold text-bg shadow-[0_14px_40px_-14px_rgba(91,140,255,0.9)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                相談してみる
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/works"
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-line-strong bg-fg/[0.02] px-8 py-4 text-sm font-bold text-fg transition-all duration-300 hover:-translate-y-0.5 hover:bg-fg/[0.06]"
              >
                制作実績を見る
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>

            {/* 事業の3本柱。詳細は下のセクションが担うため、ここでは名前だけ */}
            <HeroPillars delay={1.2} />
          </div>

          {/* 右：ロゴマーク。狭い画面では出さない */}
          <motion.div
            aria-hidden="true"
            className="hidden justify-center lg:flex"
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="relative"
              animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* マークの背後に敷く、ゆっくり明滅するグロー */}
              <motion.span
                className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(91,140,255,0.22), rgba(166,108,255,0.12) 45%, transparent 70%)",
                }}
                animate={
                  reduceMotion ? undefined : { opacity: [0.65, 1, 0.65] }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <HeroMark size={300} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
