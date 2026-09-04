import type { ReactNode } from "react";

/**
 * ブランドグラデーションを流し込んだ文字。
 * 見出しの一部だけを強調する用途を想定しています。
 */
export default function GradientText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`grad-text ${className}`}>{children}</span>;
}
