import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import WorkCard from "@/components/ui/WorkCard";
import { works } from "@/data/works";

/**
 * WORKS セクション。実績は src/data/works.ts の配列に追加するだけで増やせます。
 */
export default function Works() {
  return (
    <section id="works" aria-label="制作実績" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionTitle
          eyebrow="WORKS"
          title="Works"
          lead="これまでの制作実績です。実績はこれから少しずつ増やしていきます。"
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => (
            <li key={work.id}>
              <Reveal delay={index * 0.07} className="h-full">
                <WorkCard work={work} index={index} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
