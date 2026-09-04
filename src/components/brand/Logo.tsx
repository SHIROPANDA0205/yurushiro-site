import { site } from "@/data/site";

/**
 * AI LINK CRAFT のロゴ。
 *
 * 「A」の三角形（AI LINK CRAFT の頭文字）を、それを抱えるような
 * 弧（CRAFT の C）が囲む、単線のモノグラムです。
 *
 * mark = マークのみ（ファビコン・SNSアイコンと同じ形）
 * full = マーク＋ワードマーク
 *
 * グラデーションの id はページ内で重複するが、同じ定義なので表示に影響はない。
 * （SVG は同名 id のうち最初の定義を参照するため）
 */
type LogoProps = {
  variant?: "full" | "mark";
  /** マークの一辺（px） */
  size?: number;
  className?: string;
};

export default function Logo({
  variant = "full",
  size = 42,
  className = "",
}: LogoProps) {
  const mark = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="alc-logo-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#3B6FE0" />
          <stop offset="100%" stopColor="#0EA5C4" />
        </linearGradient>
      </defs>
      {/* A：AI LINK CRAFT の頭文字 */}
      <path
        d="M14 58 L36 12 L58 58"
        fill="none"
        stroke="url(#alc-logo-grad)"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* C：CRAFT の頭文字。Aを抱えるように弧を描く */}
      <path
        d="M50 22 A22 22 0 1 0 50 50"
        fill="none"
        stroke="#0F1222"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === "mark") {
    return <span className={className}>{mark}</span>;
  }

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {mark}
      <span className="font-display text-[22px] font-bold tracking-[0.04em] text-fg whitespace-nowrap sm:text-3xl">
        AI LINK <span className="font-medium text-fg-muted">CRAFT</span>
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  );
}
