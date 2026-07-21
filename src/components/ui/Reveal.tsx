"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** 表示の遅延（秒） */
  delay?: number;
};

/**
 * スクロールで画面内に入ったときに、ふわっとフェードインする共通ラッパー。
 * prefers-reduced-motion が有効な場合はアニメーションしません。
 */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
