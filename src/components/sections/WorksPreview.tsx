import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import WorkCard from "@/components/ui/WorkCard";
import ButtonLink from "@/components/ui/ButtonLink";
import { works } from "@/data/works";

/**
 * トップページの実績抜粋。先頭3件だけを出し、一覧へ送ります。
 */
export default function WorksPreview() {
  const featured = works.slice(0, 3);

  return (
    <section
      id="works"
      aria-label="制作実績"
      className="border-t border-line bg-bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionTitle
          eyebrow="WORKS"
          title="制作実績"
          lead="どういう課題に、どう向き合ったのか。結果だけでなく過程まで書いています。"
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((work, index) => (
            <li key={work.slug}>
              <Reveal delay={index * 0.08} className="h-full">
                <WorkCard work={work} />
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <ButtonLink href="/works" variant="ghost">
            すべての実績を見る
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
