import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import { githubAccount, repositories } from "@/data/lab";

/**
 * 公開しているリポジトリの一覧。
 *
 * 件数が増え続ける前提なので、1件を大きく見せずに密に並べます。
 * 広い画面で4列、1件あたりの縦幅は画像込みで400px前後に収まります。
 *
 * 見出しと説明は行数で切っています。文章の長さでカードの高さが
 * ばらつくと、増えたときにグリッドが崩れて見えるためです。
 * 説明が2行に収まらない場合は、データ側の文章を短くしてください。
 *
 * 画像は必須にしていません。用意できないリポジトリはグラデーションの
 * プレースホルダで揃うので、画像がある項目と混ざっても破綻しません。
 * 「画像を作らないと載せられない」状態にすると更新が止まるためです。
 */
export default function RepositoryList() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {repositories.map((repo, index) => (
        <li key={repo.name}>
          <Reveal delay={index * 0.05} className="h-full">
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
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
                <h3 className="flex items-start gap-1.5 font-display text-[15px] font-bold leading-snug text-fg">
                  <span className="line-clamp-2">{repo.title}</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-fg-dim transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </h3>

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
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
