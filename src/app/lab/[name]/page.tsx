import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import CTA from "@/components/sections/CTA";
import ReadableText from "@/components/ui/ReadableText";
import {
  repositories,
  repoGithubUrl,
  repoPath,
  stackAnchor,
  type Repository,
} from "@/data/lab";
import { plainText } from "@/lib/readableText";

type Params = { params: { name: string } };

export function generateStaticParams() {
  return repositories.map((repo) => ({ name: repo.name }));
}

export function generateMetadata({ params }: Params): Metadata {
  const repo = repositories.find((item) => item.name === params.name);
  if (!repo) return {};

  return {
    title: plainText(repo.title),
    description: plainText(repo.description),
    alternates: { canonical: repoPath(repo.name) },
    openGraph: {
      title: plainText(repo.title),
      description: plainText(repo.description),
      type: "article",
      images: repo.thumbnail ? [{ url: repo.thumbnail }] : undefined,
    },
  };
}

function BackToLab({ repo }: { repo: Repository }) {
  return (
    <Link
      href={`/lab#github-${stackAnchor(repo.stack)}`}
      className="group inline-flex items-center gap-1.5 text-sm font-bold text-fg-muted transition-colors hover:text-fg"
    >
      <ArrowLeft
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
      />
      ポートフォリオに戻る
    </Link>
  );
}

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

export default function LabRepoPage({ params }: Params) {
  const repo = repositories.find((item) => item.name === params.name);
  if (!repo) notFound();

  const others = repositories.filter((item) => item.name !== repo.name).slice(0, 2);

  return (
    <>
      <PageHeader
        eyebrow={repo.stack}
        title={repo.title}
        lead={repo.description}
        crumbs={[
          { label: "LAB", href: "/lab" },
          { label: repo.title },
        ]}
      />

      <article className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <BackToLab repo={repo} />
        </Reveal>

        {repo.thumbnail && (
          <Reveal className="mt-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-card border border-line bg-bg-surface">
              <Image
                src={repo.thumbnail}
                alt={repo.thumbnailAlt ?? `${repo.title}の画面`}
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        )}

        <Reveal delay={0.06}>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-fg/[0.06] sm:grid-cols-2">
            <div className="min-w-0 bg-bg p-5">
              <dt className="font-mono text-[11px] tracking-wide text-fg-dim">
                系統
              </dt>
              <dd className="mt-2 text-sm text-fg">{repo.stack}</dd>
            </div>
            <div className="min-w-0 bg-bg p-5">
              <dt className="font-mono text-[11px] tracking-wide text-fg-dim">
                リポジトリ
              </dt>
              <dd className="mt-2 truncate font-mono text-sm text-fg">
                {repo.name}
              </dd>
            </div>
            {repo.tech.length > 0 && (
              <div className="min-w-0 bg-bg p-5 sm:col-span-2">
                <dt className="font-mono text-[11px] tracking-wide text-fg-dim">
                  構成技術
                </dt>
                <dd className="mt-2">
                  <ul className="flex flex-wrap gap-1.5">
                    {repo.tech.map((tech) => (
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

        <Reveal delay={0.08} className="mt-6">
          <a
            href={repoGithubUrl(repo)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-fg/[0.02] px-5 py-2.5 text-sm font-bold text-fg transition-all duration-300 hover:-translate-y-0.5 hover:bg-fg/[0.06]"
          >
            GitHubで見る
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>

        <div className="mt-12">
          {repo.approach && repo.approach.length > 0 && (
            <Block label="APPROACH" title="やったこと">
              <List items={repo.approach} />
            </Block>
          )}

          {repo.highlight && repo.highlight.length > 0 && (
            <Block label="HIGHLIGHT" title="工夫した点">
              <ul className="space-y-4">
                {repo.highlight.map((item) => (
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
        </div>

        <Reveal className="mt-10">
          <BackToLab repo={repo} />
        </Reveal>

        {others.length > 0 && (
          <Reveal className="border-t border-line pt-12">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-lg font-bold text-fg">
                他のポートフォリオ
              </h2>
              <Link
                href="/lab#github"
                className="font-mono text-xs tracking-wide text-fg-dim transition-colors hover:text-fg-muted"
              >
                すべて見る
              </Link>
            </div>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {others.map((item) => (
                <li key={item.name}>
                  <Link
                    href={repoPath(item.name)}
                    className="group flex items-start gap-3.5 rounded-card border border-line bg-bg p-3.5 transition-colors hover:border-line-strong"
                  >
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-line bg-bg-raised">
                      {item.thumbnail ? (
                        <Image
                          src={item.thumbnail}
                          alt=""
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      ) : (
                        <div aria-hidden="true" className="absolute inset-0 bg-bg-raised" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] text-fg-dim">
                        {item.stack}
                      </p>
                      <p className="mt-1 font-display text-sm font-bold text-fg">
                        {item.title}
                      </p>
                    </div>
                  </Link>
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
