import type { Config } from "tailwindcss";

/**
 * AI LINK CRAFT のデザイントークン。
 * ライトテーマ固定のため、ダークモード用の色は定義していません。
 *
 * 色の名前（bg / fg / line）はテーマが変わっても意味が変わらないよう
 * 抽象的にしてあります。ダークに戻す場合はこのファイルの値を
 * 差し替えるだけで、コンポーネント側の変更は不要です。
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /** 面。bg = ページ地、surface = カード、raised = カードの上に重ねる面 */
        bg: {
          DEFAULT: "#FFFFFF",
          surface: "#F7F8FB",
          raised: "#EEF0F6",
        },
        /** 文字。fg = 本文、muted = 補足、dim = ラベル・注記 */
        fg: {
          DEFAULT: "#0F1222",
          muted: "#5A6178",
          dim: "#8A90A6",
        },
        /** ブランドのアクセント3色。グラデーションはこの順で使う */
        brand: {
          blue: "#3B6FE0",
          purple: "#8B4FE0",
          cyan: "#0EA5C4",
        },
      },
      borderColor: {
        DEFAULT: "rgba(15,18,34,0.08)",
        line: "rgba(15,18,34,0.08)",
        "line-strong": "rgba(15,18,34,0.16)",
      },
      fontFamily: {
        /**
         * 英字の見出し・ラベル。
         * 英字フォントは和文グリフを持たないため、2番目に body（Noto Sans JP）を
         * 置いて、日本語が OS 標準フォントに流れないようにしている。
         * これを外すと Mac と Windows で和文の見え方が変わる。
         */
        display: [
          "var(--font-display)",
          "var(--font-body)",
          "system-ui",
          "sans-serif",
        ],
        /** 和文の本文 */
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        /** 数値・タグ・コード的な表現 */
        mono: [
          "var(--font-mono)",
          "var(--font-body)",
          "ui-monospace",
          "monospace",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,18,34,0.06)",
        "card-hover": "0 24px 60px -20px rgba(59,111,224,0.35)",
        glow: "0 0 0 1px rgba(15,18,34,0.04), 0 20px 60px -24px rgba(139,79,224,0.35)",
      },
      borderRadius: {
        card: "1rem",
      },
      maxWidth: {
        content: "90rem",
      },
      keyframes: {
        /** Hero の背景グリッドをゆっくり流す */
        "grid-drift": {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(0,-44px,0)" },
        },
        /** アクセントの光がゆっくり呼吸する */
        breathe: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
        },
        /** 技術スタックの横スクロール */
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "grid-drift": "grid-drift 8s linear infinite",
        breathe: "breathe 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
