import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GridBackground from "@/components/ui/GridBackground";

/**
 * 404ページ。ヘッダー・フッターは app/layout.tsx が共通で描画します。
 */
export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-32 text-center">
      <GridBackground />

      <div className="relative">
        <p className="font-mono text-xs tracking-[0.3em] text-brand-blue">404</p>
        <h1 className="mt-6 font-display text-2xl font-bold leading-snug text-fg sm:text-4xl">
          お探しのページが
          <br className="sm:hidden" />
          見つかりませんでした
        </h1>
        <span aria-hidden="true" className="hairline mx-auto mt-7 block w-16" />
        <p className="mx-auto mt-7 max-w-md text-sm leading-relaxed text-fg-muted sm:text-base">
          URLが変更、または削除された可能性があります。
          <br />
          トップページからお探しください。
        </p>

        <Link
          href="/"
          className="btn-shine group grad-surface mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-bg transition-transform duration-300 hover:-translate-y-0.5"
        >
          <ArrowLeft
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
          />
          トップページに戻る
        </Link>
      </div>
    </section>
  );
}
