"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * 文字を1文字ずつ時間差で立ち上げる見出し用のアニメーション。
 *
 * 日本語はどこで折り返しても読めるため1文字ずつ分割していますが、
 * 読み上げが1文字ずつにならないよう、全体には aria-label を付けています。
 */
export default function SplitText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  /** 開始の遅延（秒） */
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {Array.from(text).map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          aria-hidden="true"
          className="inline-block"
          initial={{ opacity: 0, y: "0.4em" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: delay + index * 0.045,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}
