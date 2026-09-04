import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GridBackground from "@/components/ui/GridBackground";
import Reveal from "@/components/ui/Reveal";

/**
 * ページ末尾の問い合わせ導線。
 * 各ページの最後に共通で置きます。
 */
export default function CTA() {
  return (
    <section
      aria-label="お問い合わせ"
      className="relative overflow-hidden border-t border-line"
    >
      <GridBackground />

      <div className="relative mx-auto max-w-content px-4 py-24 text-center sm:px-6 sm:py-32">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.24em] text-brand-blue">
            CONTACT
          </p>
          <h2 className="mt-6 font-display text-[clamp(1.75rem,5vw,3rem)] font-bold leading-tight tracking-tight text-fg">
            まだ形になっていない
            <br className="sm:hidden" />
            相談で、大丈夫です。
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-fg-muted sm:text-base sm:leading-loose">
            何から始めればよいか分からない段階からご一緒します。
            最初のヒアリングは無料です。通常2〜3日以内にご返信します。
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="btn-shine group grad-surface inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-sm font-bold text-bg shadow-[0_14px_40px_-14px_rgba(91,140,255,0.9)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              お問い合わせフォームへ
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
