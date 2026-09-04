import Link from "next/link";
import { ChevronRight } from "lucide-react";
import GridBackground from "@/components/ui/GridBackground";
import Reveal from "@/components/ui/Reveal";
import ReadableText from "@/components/ui/ReadableText";
import { plainText } from "@/lib/readableText";

type Crumb = { label: string; href?: string };

/**
 * 下層ページ共通の見出し帯。
 * ヘッダーが固定されているぶん、上に余白を確保しています。
 */
export default function PageHeader({
  eyebrow,
  title,
  lead,
  crumbs = [],
}: {
  /** 英字のラベル（例: "WORKS"） */
  eyebrow: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <GridBackground />

      <div className="relative mx-auto max-w-content px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-36">
        <nav aria-label="パンくずリスト">
          <ol className="flex flex-wrap items-center gap-1 font-mono text-[11px] tracking-wide text-fg-dim">
            <li>
              <Link href="/" className="transition-colors hover:text-fg-muted">
                HOME
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-1">
                <ChevronRight aria-hidden="true" className="h-3 w-3" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-fg-muted"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-fg-muted">{plainText(crumb.label)}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <Reveal className="mt-6">
          <p className="font-mono text-xs tracking-[0.24em] text-brand-blue">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-3xl font-bold leading-tight tracking-tight text-fg sm:text-5xl">
            <ReadableText text={title} mode="phrases" />
          </h1>
          {lead && (
            <p className="mt-6 max-w-4xl text-sm leading-relaxed text-fg-muted sm:text-base sm:leading-loose">
              <ReadableText text={lead} maxChars={26} />
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
