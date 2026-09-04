import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  /** primary = グラデーションの塗り、ghost = 枠線のみ */
  variant?: "primary" | "ghost";
  /** 末尾に矢印を出すか */
  withArrow?: boolean;
  className?: string;
};

/**
 * サイト共通のリンクボタン。
 * 外部URL（http から始まるもの）は自動的に別タブで開きます。
 */
export default function ButtonLink({
  href,
  children,
  variant = "primary",
  withArrow = true,
  className = "",
}: ButtonLinkProps) {
  const base =
    "btn-shine group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5";

  const variantClass =
    variant === "primary"
      ? "grad-surface text-bg shadow-[0_10px_30px_-12px_rgba(91,140,255,0.8)]"
      : "border border-line-strong bg-fg/[0.02] text-fg hover:bg-fg/[0.06]";

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variantClass} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variantClass} ${className}`}>
      {content}
    </Link>
  );
}
