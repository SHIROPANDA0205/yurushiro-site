import type { Variants } from "framer-motion";

/** セクション・要素をふわっと下から表示する共通バリアント */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** 子要素を少しずつ時間差で表示するコンテナ用バリアント */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

/** whileInView 共通設定 */
export const viewportOnce = { once: true, margin: "-80px" } as const;
