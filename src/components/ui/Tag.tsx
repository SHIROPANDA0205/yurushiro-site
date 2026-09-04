import type { ReactNode } from "react";

/**
 * 技術名・カテゴリなどの小さなラベル。
 */
export default function Tag({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "accent";
}) {
  const toneClass =
    tone === "accent"
      ? "border-brand-blue/40 bg-brand-blue/10 text-brand-blue"
      : "border-line bg-fg/[0.03] text-fg-muted";

  return (
    <span
      className={`inline-flex max-w-full items-center whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[11px] leading-none tracking-wide ${toneClass}`}
    >
      {children}
    </span>
  );
}
