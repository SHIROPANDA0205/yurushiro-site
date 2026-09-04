import Link from "next/link";
import { ArrowRight, Layout, Sparkles, Workflow } from "lucide-react";
import ReadableText from "@/components/ui/ReadableText";
import type { Service } from "@/data/services";

/** services.ts の icon キーと lucide-react のアイコンの対応 */
const icons = {
  layout: Layout,
  workflow: Workflow,
  sparkles: Sparkles,
} as const;

/**
 * トップページの「できること」1件分。
 *
 * カードを横に3枚並べるのではなく全幅の行にすることで、
 * 説明文と「実際に頼めること」のキーワードを置く幅を確保しています。
 */
export default function ServiceRow({ service }: { service: Service }) {
  const Icon = icons[service.icon];

  return (
    <Link
      href={`/services#${service.slug}`}
      className="group grid grid-cols-[auto_1fr] items-start gap-4 p-5 transition-colors duration-300 hover:bg-fg/[0.02] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-blue sm:grid-cols-[auto_1fr_auto] sm:gap-6 sm:p-7"
    >
      {/* アイコン */}
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-bg text-brand-blue transition-colors duration-300 group-hover:border-brand-blue/40 group-hover:bg-brand-blue/[0.06] sm:h-12 sm:w-12">
        <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
      </span>

      {/* 本文 */}
      <div className="min-w-0">
        <h3 className="font-display text-base font-bold leading-snug text-fg sm:text-lg">
          {service.title}
        </h3>
        <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-fg-dim">
          {service.titleEn}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-fg-muted">
          <ReadableText text={service.summary} maxChars={24} />
        </p>

        {/* 実際に頼めること */}
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {service.keywords.map((keyword) => (
            <li
              key={keyword}
              className="rounded-full border border-line bg-bg px-2.5 py-1 text-[11px] leading-none text-fg-muted transition-colors duration-300 group-hover:border-line-strong"
            >
              {keyword}
            </li>
          ))}
        </ul>
      </div>

      {/* 矢印。狭い画面では場所を取るので出さない */}
      <span className="hidden self-center text-fg-dim transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand-blue sm:block">
        <ArrowRight aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
      </span>
    </Link>
  );
}
