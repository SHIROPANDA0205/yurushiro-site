import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import {
  githubAccount,
  repositories,
  repositoriesByStack,
  type Repository,
} from "@/data/lab";

/**
 * 公開しているリポジトリの一覧。
 *
 * 1枚の大きなグリッドに全部並べると、件数が増えたときに
 * 何の作品かが先に見えなくなります。学習記録と同じく、
 * 上に系統ごとの件数、下に系統ごとのカード、という形にしています。
 *
 * カード自体は大きく見せず、広い画面でも3列までにしています。
 * 4列だとサムネが小さくなり、系統見出しの意味が薄れるためです。
 *
 * 見出しと説明は行数で切っています。文章の長さでカードの高さが
 * ばらつくと、増えたときにグリッドが崩れて見えるためです。
 * 説明が2行に収まらない場合は、データ側の文章を短くしてください。
 *
 * 画像は必須にしていません。用意できないリポジトリはグラデーションの
 * プレースホルダで揃うので、画像がある項目と混ざっても破綻しません。
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

              <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

function stackAnchor(stack: string) {
  return stack.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function RepoCard({ repo }: { repo: Repository }) {
  return (
    <a
      href={repo.url ?? `${githubAccount}/${repo.name}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-bg transition-colors duration-300 hover:border-line-strong"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-bg-raised">
        {repo.thumbnail ? (
          <Image
            src={repo.thumbnail}
            alt={repo.thumbnailAlt ?? `${repo.title}の画面`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
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

      <div className="flex flex-1 flex-col p-4">
        <h4 className="flex items-start gap-1.5 font-display text-[15px] font-bold leading-snug text-fg">
          <span className="line-clamp-2">{repo.title}</span>
          <ArrowUpRight
            aria-hidden="true"
            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-fg-dim transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </h4>

        <p className="mt-1.5 truncate font-mono text-[10px] text-fg-dim">
          {repo.name}
        </p>

        <p className="mt-2.5 line-clamp-2 text-[13px] leading-relaxed text-fg-muted">
          {repo.description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {repo.tech.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
