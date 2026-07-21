"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE = "/images/stay-hungry-stay-foolish.png";

/**
 * ファーストビュー。
 * 添付画像をフルスクリーン背景にし、シンプルなタグライン・CTAを重ねます。
 * 画像内に焼き込まれた英語・日本語のコピーは sr-only で補完します。
 * 背景の写真は、スクロールに応じてゆっくり視差移動（パララックス）します。
 */
export default function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const fadeIn = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-label="Stay Hungry, Stay Foolish"
      className="relative flex h-[100svh] min-h-[640px] flex-col overflow-hidden bg-ink"
    >
      {/* 画像エリア（スクロール連動パララックス + 初回表示のKen Burns） */}
      <div className="relative flex-1 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={reduceMotion ? undefined : { y: imageY }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduceMotion ? false : { scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={HERO_IMAGE}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>

        {/* 画像下端を暗色に溶け込ませるグラデーション */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-ink"
        />
      </div>

      {/* 画像内テキストの代替（SEO・アクセシビリティ） */}
      <div className="sr-only">
        <h1>Stay Hungry, Stay Foolish.</h1>
        <p>ハングリーであれ。愚かであれ。</p>
      </div>

      {/* コンテンツ（画像の下の暗色帯に配置し、写真と重ならないようにする） */}
      <div className="flex flex-col items-center bg-ink px-4 pb-8 pt-5 sm:pb-12 sm:pt-7">
        {/* 金のヘアライン（画像内の区切り線と呼応させる） */}
        <motion.span
          {...fadeIn(0.7)}
          aria-hidden="true"
          className="mb-5 h-px w-10 bg-gradient-to-r from-transparent via-gold-bright/80 to-transparent sm:mb-6 sm:w-14"
        />

        <motion.p
          {...fadeIn(0.9)}
          className="max-w-2xl text-center font-serif text-base font-medium leading-relaxed tracking-[0.14em] text-white sm:text-lg"
        >
          技術だけではなく、
          <span className="text-gold-bright">人とのつながり</span>
          を大切に。
        </motion.p>

        <motion.div {...fadeIn(1.1)} className="mt-6 sm:mt-8">
          <a
            href="#contact"
            className="btn-shine group inline-flex items-center gap-3 rounded-full border border-gold/50 bg-transparent px-9 py-3.5 font-serif text-sm font-medium tracking-[0.14em] text-gold-bright transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-bright hover:bg-gold/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
          >
            まずは気軽にお話ししましょう
            <ArrowDown
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
            />
          </a>
        </motion.div>

        <motion.a
          {...fadeIn(1.3)}
          href="#message"
          aria-label="次のセクションへスクロール"
          className="mt-6 flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-gold-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-8"
        >
          <span className="font-serif-en text-xs font-semibold uppercase tracking-[0.4em]">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={1.25} aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  );
}
