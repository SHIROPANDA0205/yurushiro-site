"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Hero の右側に置く、大きなロゴマーク。
 *
 * 線で構成されたモノグラムなので、初回表示では線が描かれていく
 * アニメーション（pathLength を 0 → 1）を見せ、描き終わったあとは
 * 「A の線を光が走る」「C の弧に沿って点が回る」動きを繰り返します。
 *
 * 動きを減らす設定の環境では、最初から描き切った静止状態で表示します。
 */

/** C の弧の中心と半径。パス "M50 22 A22 22 0 1 0 50 50" の幾何から算出 */
const ARC_CENTER = { x: 33, y: 36 };
const ARC_RADIUS = 22;
/**
 * C の開口部の広さ（中心から見た片側の角度）。
 * 弧の端点 (50,22) は中心から見て (+17,-14) の位置にあるため、
 * atan2(14,17) ≒ 39.5°。ここを境に点の表示を切り替える。
 */
const ARC_GAP_HALF = 40;
/** A の線（2辺）のおおよその全長。光を走らせる距離の計算に使う */
const A_PATH_LENGTH = 102;
/** 線を描き終わるまでの時間。継続アニメーションはこの後から始める */
const DRAW_DONE = 2.9;

export default function HeroMark({ size = 300 }: { size?: number }) {
  const reduceMotion = useReducedMotion();

  const draw = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: {
            pathLength: {
              duration: 1.8,
              delay,
              ease: [0.16, 1, 0.3, 1] as const,
            },
            opacity: { duration: 0.2, delay },
          },
        };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      aria-hidden="true"
      className="relative block overflow-visible"
    >
      <defs>
        <linearGradient id="alc-hero-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#3B6FE0" />
          <stop offset="100%" stopColor="#0EA5C4" />
        </linearGradient>
      </defs>

      {/* A：AI LINK CRAFT の頭文字 */}
      <motion.path
        d="M14 58 L36 12 L58 58"
        stroke="url(#alc-hero-grad)"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...draw(0.5)}
      />

      {/* C：CRAFT の頭文字。Aを抱えるように弧を描く */}
      <motion.path
        d="M50 22 A22 22 0 1 0 50 50"
        stroke="#0F1222"
        strokeWidth="5.5"
        strokeLinecap="round"
        {...draw(1.1)}
      />

      {!reduceMotion && (
        <>
          {/*
           * A の線を走る光。短い破線を1つだけ作り、その位置（strokeDashoffset）を
           * ずらし続けることで、線の上を光が流れているように見せている。
           */}
          <motion.path
            d="M14 58 L36 12 L58 58"
            stroke="#22D3EE"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={`7 ${A_PATH_LENGTH - 7}`}
            initial={{ strokeDashoffset: 0, opacity: 0 }}
            animate={{
              strokeDashoffset: [0, -A_PATH_LENGTH],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{
              duration: 2.6,
              delay: DRAW_DONE,
              repeat: Infinity,
              repeatDelay: 2.4,
              ease: "linear",
              opacity: {
                duration: 2.6,
                delay: DRAW_DONE,
                repeat: Infinity,
                repeatDelay: 2.4,
                times: [0, 0.15, 0.85, 1],
              },
            }}
          />

          {/*
           * C の弧に沿って回る点。弧の中心を軸に1周させる。
           *
           * C は右側が開いているため、そのまま回すと開口部では点だけが
           * 宙に浮いて見える。開口部（右まわりで約320°〜40°の区間）に
           * 差しかかったら点を消し、弧に戻ったところで出す。
           */}
          <motion.g
            style={{ transformOrigin: `${ARC_CENTER.x}px ${ARC_CENTER.y}px` }}
            initial={{ rotate: ARC_GAP_HALF, opacity: 0 }}
            animate={{
              rotate: ARC_GAP_HALF + 360,
              opacity: [0, 1, 1, 0, 0],
            }}
            transition={{
              rotate: {
                duration: 16,
                delay: DRAW_DONE,
                repeat: Infinity,
                ease: "linear",
              },
              opacity: {
                duration: 16,
                delay: DRAW_DONE,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.04, 0.74, 0.78, 1],
              },
            }}
          >
            <circle
              cx={ARC_CENTER.x + ARC_RADIUS}
              cy={ARC_CENTER.y}
              r="2.4"
              fill="#0EA5C4"
            />
          </motion.g>
        </>
      )}
    </svg>
  );
}
