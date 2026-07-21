"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { viewportOnce } from "@/lib/motion";

type SectionTitleProps = {
  /** 英字の小見出し（例: "SERVICES"） */
  eyebrow: string;
  /** 日本語の見出し */
  title: string;
  /** 見出しの下に添える一文（任意） */
  lead?: string;
  /** 暗い背景上で使う場合は "onDark" */
  variant?: "default" | "onDark";
};

/**
 * 各セクション共通の見出し。
 * セリフ体の英字ラベル + 明朝の見出し + スクロールで描かれる金の細い罫線で構成。
 */
export default function SectionTitle({
  eyebrow,
  title,
  lead,
  variant = "default",
}: SectionTitleProps) {
  const reduceMotion = useReducedMotion();
  const onDark = variant === "onDark";

  return (
    <Reveal className="mb-10 text-center sm:mb-14">
      <p className="font-serif-en text-base italic tracking-[0.15em] text-gold">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-serif text-2xl font-bold leading-snug tracking-[0.06em] sm:text-3xl md:text-4xl ${
          onDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <motion.span
        aria-hidden="true"
        className="mx-auto mt-5 block h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent"
        initial={reduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
      {lead && (
        <p
          className={`mx-auto mt-5 max-w-2xl font-serif text-sm leading-relaxed tracking-[0.04em] sm:text-base sm:leading-loose ${
            onDark ? "text-white/60" : "text-ink-soft"
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
