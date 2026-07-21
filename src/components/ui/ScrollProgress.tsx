"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/**
 * ページ上部に固定される、金色のスクロール進捗バー。
 * スクロールに応じて伸びていくことで、ページ全体に一貫した「動き」を添えます。
 */
export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2.5px] origin-left bg-gradient-to-r from-gold via-gold-bright to-gold"
    />
  );
}
