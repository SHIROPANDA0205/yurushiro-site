import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import WorkCard from "@/components/ui/WorkCard";
import CTA from "@/components/sections/CTA";
import ReadableText from "@/components/ui/ReadableText";
import { workCategoryLabels, works, type Work } from "@/data/works";
import { dayJobWorks } from "@/data/dayjob";
import { plainText } from "@/lib/readableText";

/**
 * 受託案件（works.ts）と本業の実績（dayjob.ts）は、機密の扱いが違うので
 * ファイルを分けています。詳細ページの作りは共通なので、ここで1つにまとめます。
 */
const allWorks = [...works, ...dayJobWorks];

type Params = { params: { slug: string } };

/** 実績データからURLを生成する（データを足すだけでページが増える） */
export function generateStaticParams() {
  return allWorks.map((work) => ({ slug: work.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const work = allWorks.find((item) => item.slug === params.slug);
  if (!work) return {};

  return {
    title: plainText(work.title),
    description: plainText(work.summary),
    alternates: { canonical: `/works/${work.slug}` },
    openGraph: {
      title: plainText(work.title),
      description: plainText(work.summary),
      type: "article",
      images: work.thumbnail ? [{ url: work.thumbnail }] : undefined,
    },
  };
}

/** 詳細から一覧の該当セクションへ戻す */
function worksBack(work: Work) {
  if (work.category === "mainjob") {
    return { href: "/works#main-job", label: "本業での実績に戻る" };
  }
  if (work.category === "client") {
    return { href: "/works#client", label: "AI LINK CRAFT での実績に戻る" };
  }
  return { href: "/works", label: "実績一覧に戻る" };
}

function BackToWorks({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-bold text-fg-muted transition-colors hover:text-fg"
    >
      <ArrowLeft
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
      />
      {label}
    </Link>
  );
}

/** 本文中の見出し付きブロック */
function Block({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="border-t border-line py-10 sm:py-12">
      <p className="font-mono text-[11px] tracking-[0.22em] text-brand-blue">
        {label}
      </p>
      <h2 className="mt-3 font-display text-xl font-bold text-fg sm:text-2xl">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </Reveal>
  );
}

/** 箇条書き */
function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-relaxed text-fg-muted sm:text-base sm:leading-loose"
        >
          <span
            aria-hidden="true"
            className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue"
          />
          <ReadableText text={item} maxChars={24} />
        </li>
      ))}
    </ul>
  );
}

export default function WorkDetailPage({ params }: Params) {
  const work = allWorks.find((item) => item.slug === params.slug);
  if (!work) notFound();

  const others = allWorks.filter((item) => item.slug !== work.slug).slice(0, 3);
  const back = worksBack(work);

  return (
    <>
      <PageHeader
        eyebrow={workCategoryLabels[work.category]}
        title={work.title}
        lead={work.summary}
        crumbs={[{ label: "WORKS", href: "/works" }, { label: work.title }]}
      />

      <article className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <BackToWorks href={back.href} label={back.label} />
        </Reveal>

        {/* メイン画像 */}
        {work.thumbnail && (
          <Reveal className="mt-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-card border border-line bg-bg-surface">
              <Image
                src={work.thumbnail}
                alt={work.thumbnailAlt ?? `${work.title}の画面`}
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        )}

        {/* 案件の基本情報 */}
        <Reveal delay={0.06}>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-fg/[0.06] sm:grid-cols-2">
            {work.period && (
              <div className="min-w-0 bg-bg p-5">
                <dt className="font-mono text-[11px] tracking-wide text-fg-dim">
                  期間
                </dt>
                <dd className="mt-2 text-sm text-fg">{work.period}</dd>
              </div>
            )}
            {work.client && (
              <div className="min-w-0 bg-bg p-5">
                <dt className="font-mono text-[11px] tracking-wide text-fg-dim">
                  クライアント
                </dt>
                <dd className="mt-2 text-sm text-fg">{work.client}</dd>
              </div>
            )}
            {work.scale && (
              <div className="min-w-0 bg-bg p-5">
                <dt className="font-mono text-[11px] tracking-wide text-fg-dim">
                  規模
                </dt>
                <dd className="mt-2 text-sm text-fg">{work.scale}</dd>
              </div>
            )}
            {work.role.length > 0 && (
              <div className="min-w-0 bg-bg p-5">
                <dt className="font-mono text-[11px] tracking-wide text-fg-dim">
                  担当範囲
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-fg">{work.role.join(" / ")}</dd>
              </div>
            )}
            {work.tech.length > 0 && (
              <div className="min-w-0 bg-bg p-5">
                <dt className="font-mono text-[11px] tracking-wide text-fg-dim">
                  構成技術
                </dt>
                <dd className="mt-2">
                  <ul className="flex flex-wrap gap-1.5">
                    {work.tech.map((tech) => (
                      <li key={tech} className="max-w-full">
                        <Tag>{tech}</Tag>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            )}
          </dl>
        </Reveal>

        {/* 外部リンク */}
        {work.links && work.links.length > 0 && (
          <Reveal delay={0.08} className="mt-6 flex flex-wrap gap-3">
            {work.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-fg/[0.02] px-5 py-2.5 text-sm font-bold text-fg transition-all duration-300 hover:-translate-y-0.5 hover:bg-fg/[0.06]"
              >
                {link.label}
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </Reveal>
        )}

        {/* ケーススタディ本文。書いた項目だけが表示される */}
        <div className="mt-12">
          {work.background && (
            <Block label="BACKGROUND" title="背景">
              <p className="text-sm leading-relaxed text-fg-muted sm:text-base sm:leading-loose">
                <ReadableText text={work.background} maxChars={24} />
              </p>
            </Block>
          )}

          {work.challenge && work.challenge.length > 0 && (
            <Block label="CHALLENGE" title="課題">
              <List items={work.challenge} />
            </Block>
          )}

          {work.approach && work.approach.length > 0 && (
            <Block label="APPROACH" title="やったこと">
              <List items={work.approach} />
            </Block>
          )}

          {work.highlight && work.highlight.length > 0 && (
            <Block label="HIGHLIGHT" title="工夫した点">
              <ul className="space-y-4">
                {work.highlight.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-card border border-line bg-bg-surface p-5 sm:p-6"
                  >
                    <h3 className="font-display text-base font-bold text-fg">
                      <ReadableText text={item.title} mode="phrases" />
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                      <ReadableText text={item.body} maxChars={24} />
                    </p>
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {work.images && work.images.length > 0 && (
            <Block label="SCREENS" title="画面">
              <ul className="grid gap-4 sm:grid-cols-2">
                {work.images.map((image) => (
                  <li key={image.src}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-card border border-line bg-bg-surface">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {work.result && work.result.length > 0 && (
            <Block label="RESULT" title="結果">
              <List items={work.result} />
            </Block>
          )}

          {work.learning && (
            <Block label="LEARNING" title="学び">
              <p className="text-sm leading-relaxed text-fg-muted sm:text-base sm:leading-loose">
                <ReadableText text={work.learning} maxChars={24} />
              </p>
            </Block>
          )}
        </div>

        <Reveal className="mt-10">
          <BackToWorks href={back.href} label={back.label} />
        </Reveal>

        {/* 他の実績 */}
        {others.length > 0 && (
          <Reveal className="border-t border-line pt-12">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-lg font-bold text-fg">
                他の実績
              </h2>
              <Link
                href="/works"
                className="font-mono text-xs tracking-wide text-fg-dim transition-colors hover:text-fg-muted"
              >
                すべて見る
              </Link>
            </div>

            <ul className="mt-6 grid gap-5 sm:grid-cols-2">
              {others.slice(0, 2).map((item) => (
                <li key={item.slug}>
                  <WorkCard work={item} />
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </article>

      <CTA />
    </>
  );
}
