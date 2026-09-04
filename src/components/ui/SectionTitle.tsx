"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import ReadableText from "@/components/ui/ReadableText";
import { viewportOnce } from "@/lib/motion";

type SectionTitleProps = {
  /** 英字の小見出し（例: "WORKS"） */
  eyebrow: string;
  /** 日本語の見出し */
  title: string;
  /** 見出しの下に添える一文（任意） */
  lead?: string;
  align?: "left" | "center";
};

/**
 * 各セクション共通の見出し。
 * グラデーションの点 + 等幅の英字ラベル + 和文見出しで構成します。
 */
export default function SectionTitle({
  eyebrow,
  title,
  lead,
  align = "left",
}: SectionTitleProps) {
  const reduceMotion = useReducedMotion();
  const isCenter = align === "center";

  return (
    <Reveal
      className={`mb-10 sm:mb-14 ${isCenter ? "text-center" : "text-left"}`}
    >
      <div
        className={`flex items-center gap-2.5 ${isCenter ? "justify-center" : ""}`}
      >
        <span
          aria-hidden="true"
          className="grad-surface h-1.5 w-1.5 rounded-full"
        />
        <p className="font-mono text-xs tracking-[0.22em] text-fg-dim">
          {eyebrow}
        </p>
      </div>

      <h2 className="mt-4 max-w-4xl font-display text-[26px] font-bold leading-tight tracking-tight text-fg sm:text-4xl">
        <ReadableText text={title} mode="phrases" />
      </h2>

      <motion.span
        aria-hidden="true"
        className={`grad-surface mt-5 block h-px w-14 origin-left ${
          isCenter ? "mx-auto origin-center" : ""
        }`}
        initial={reduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />

      {lead && (
        <p
          className={`mt-5 max-w-4xl text-sm leading-relaxed text-fg-muted sm:text-base sm:leading-loose ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          <ReadableText text={lead} maxChars={26} />
        </p>
      )}
    </Reveal>
  );
}
