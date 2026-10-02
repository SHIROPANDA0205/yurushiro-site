import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import {
  repositories,
  repositoriesByStack,
  repoPath,
  stackAnchor,
  type Repository,
} from "@/data/lab";

/**
 * 公開しているリポジトリの一覧。
 *
 * 系統ごとの件数のあとに、左サムネの短いカードを置きます。
 * 大きな画像は詳細ページへ移し、ここでは「何を作ったか」だけを見せます。
 * カードを押すと /lab/{name} に進みます。
 */
export default function RepositoryList() {
  if (repositories.length === 0) {
    return null;
  }

  return (
    <>
      <Reveal>
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-fg/[0.06] sm:grid-cols-3">
          {repositoriesByStack.map((group) => (
            <li key={group.stack} className="bg-bg px-5 py-5">
              <a
                href={`#github-${stackAnchor(group.stack)}`}
                className="block rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
              >
                <div className="flex items-baseline gap-2.5">
                  <span className="grad-text font-display text-3xl font-extrabold">
                    {group.items.length}
                  </span>
                  <span className="font-mono text-xs text-fg-dim">件</span>
                </div>
                <p className="mt-2 text-sm font-bold text-fg">{group.stack}</p>
                <div
                  aria-hidden="true"
                  className="mt-3 h-1 overflow-hidden rounded-full bg-fg/[0.07]"
                >
                  <div
                    className="grad-surface h-full rounded-full"
                    style={{
                      width: `${Math.round(
                        (group.items.length / repositories.length) * 100,
                      )}%`,
                    }}
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-10 space-y-10">
        {repositoriesByStack.map((group, groupIndex) => (
          <Reveal key={group.stack} delay={groupIndex * 0.05}>
            <section
              id={`github-${stackAnchor(group.stack)}`}
              aria-label={`${group.stack}のポートフォリオ`}
              className="scroll-mt-24"
            >
              <div className="flex items-baseline gap-3 border-b-2 border-line pb-2">
                <h3 className="font-display text-base font-bold text-fg">
                  {group.stack}
                </h3>
                <span className="font-mono text-xs text-fg-dim">
                  {group.items.length}件
                </span>
              </div>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {group.items.map((repo) => (
                  <li key={repo.name}>
                    <RepoCard repo={repo} />
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>
    </>
  );
}

function RepoCard({ repo }: { repo: Repository }) {
  return (
    <Link
      href={repoPath(repo.name)}
      className="group flex h-full items-start gap-3.5 rounded-card border border-line bg-bg p-3 transition-colors duration-300 hover:border-line-strong sm:p-3.5"
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-line bg-bg-raised sm:h-[4.5rem] sm:w-[4.5rem]">
        {repo.thumbnail ? (
          <Image
            src={repo.thumbnail}
            alt=""
            fill
            sizes="72px"
            className="object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="grid-lines absolute inset-0 opacity-60"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,111,224,0.14), rgba(139,79,224,0.08) 50%, rgba(14,165,196,0.10))",
            }}
          />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="flex items-start gap-1.5 font-display text-[15px] font-bold leading-snug text-fg">
          <span className="line-clamp-2">{repo.title}</span>
          <ArrowRight
            aria-hidden="true"
            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-fg-dim transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </h4>

        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-fg-muted">
          {repo.description}
        </p>

        <ul className="mt-2.5 flex flex-wrap gap-1.5">
          {repo.tech.slice(0, 3).map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
