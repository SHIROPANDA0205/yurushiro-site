"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { mascot } from "@/data/mascot";

type PandaMascotProps = {
  className?: string;
  /** 画像・SVGの表示サイズ（px） */
  size?: number;
  /** 上下にゆっくり揺れるアニメーションを有効にするか */
  floating?: boolean;
};

/**
 * パンダのマスコット。
 * src/data/mascot.ts の imageSrc に画像パスを設定すると、
 * SVGプレースホルダーの代わりにその画像が表示されます。
 */
export default function PandaMascot({
  className,
  size = 260,
  floating = true,
}: PandaMascotProps) {
  const reduceMotion = useReducedMotion();
  const shouldFloat = floating && !reduceMotion;

  const content = mascot.imageSrc ? (
    <Image
      src={mascot.imageSrc}
      alt={mascot.alt}
      width={size}
      height={size}
      priority
      className="h-auto w-full"
    />
  ) : (
    <PandaSvg />
  );

  return (
    <motion.div
      className={className}
      style={{ width: size, maxWidth: "100%" }}
      animate={shouldFloat ? { y: [0, -10, 0] } : undefined}
      transition={
        shouldFloat
          ? { duration: 4, repeat: Infinity, ease: "easeInOut" }
          : undefined
      }
    >
      {content}
    </motion.div>
  );
}

/** 組み込みのSVGパンダ（プレースホルダー） */
function PandaSvg() {
  return (
    <svg
      viewBox="0 0 240 220"
      role="img"
      aria-label="パソコンを操作するパンダのマスコット「ゆるしろ」"
      className="h-auto w-full drop-shadow-[0_16px_24px_rgba(76,111,255,0.18)]"
    >
      <defs>
        <linearGradient id="panda-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4C6FFF" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>

      {/* 体 */}
      <ellipse cx="120" cy="156" rx="60" ry="48" fill="#FFFFFF" stroke="#2E3244" strokeWidth="4" />
      {/* 耳 */}
      <circle cx="76" cy="42" r="17" fill="#2E3244" />
      <circle cx="164" cy="42" r="17" fill="#2E3244" />
      {/* ヘッドホン（紫のアクセント） */}
      <path
        d="M72 52 Q120 6 168 52"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <rect x="60" y="48" width="14" height="22" rx="7" fill="#8B5CF6" />
      <rect x="166" y="48" width="14" height="22" rx="7" fill="#8B5CF6" />
      {/* 顔 */}
      <circle cx="120" cy="88" r="54" fill="#FFFFFF" stroke="#2E3244" strokeWidth="4" />
      {/* 目のまわり */}
      <ellipse cx="98" cy="86" rx="15" ry="18" fill="#2E3244" transform="rotate(-12 98 86)" />
      <ellipse cx="142" cy="86" rx="15" ry="18" fill="#2E3244" transform="rotate(12 142 86)" />
      {/* 目 */}
      <circle cx="100" cy="86" r="6" fill="#FFFFFF" />
      <circle cx="140" cy="86" r="6" fill="#FFFFFF" />
      <circle cx="101.5" cy="84.5" r="2.4" fill="#2E3244" />
      <circle cx="141.5" cy="84.5" r="2.4" fill="#2E3244" />
      {/* 鼻・口 */}
      <ellipse cx="120" cy="104" rx="6" ry="4.5" fill="#2E3244" />
      <path
        d="M112 114 Q120 120 128 114"
        fill="none"
        stroke="#2E3244"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* ほっぺ（青のアクセント） */}
      <ellipse cx="82" cy="106" rx="8" ry="5" fill="#BFD0FF" opacity="0.9" />
      <ellipse cx="158" cy="106" rx="8" ry="5" fill="#BFD0FF" opacity="0.9" />
      {/* 腕 */}
      <ellipse cx="80" cy="164" rx="16" ry="24" fill="#2E3244" transform="rotate(24 80 164)" />
      <ellipse cx="160" cy="164" rx="16" ry="24" fill="#2E3244" transform="rotate(-24 160 164)" />
      {/* ノートPC */}
      <rect x="82" y="146" width="76" height="46" rx="6" fill="url(#panda-screen)" stroke="#2E3244" strokeWidth="4" />
      <path d="M106 162 L98 169 L106 176" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M134 162 L142 169 L134 176" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="122" y1="160" x2="118" y2="178" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
      <rect x="70" y="190" width="100" height="12" rx="6" fill="#E5E8F5" stroke="#2E3244" strokeWidth="4" />
    </svg>
  );
}
