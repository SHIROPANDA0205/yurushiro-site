import { Handshake, PenLine, Repeat, Rocket, Users } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { values } from "@/data/values";

/** values.ts の icon キーと lucide-react のアイコンの対応 */
const icons = {
  users: Users,
  pen: PenLine,
  rocket: Rocket,
  handshake: Handshake,
  repeat: Repeat,
} as const;

/**
 * 仕事をするうえで大事にしていること。
 */
export default function Values() {
  return (
    <section
      id="values"
      aria-label="大事にしていること"
      className="scroll-mt-24 border-t border-line py-20 sm:py-24"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionTitle
          eyebrow="VALUES"
          title="大事にしていること"
          lead="技術は手段です。何をどう選ぶかの前に、どう向き合うかを決めています。"
        />

        <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-fg/[0.06] sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = icons[value.icon];
            return (
              <li key={value.title} className="bg-bg p-6">
                <Reveal delay={index * 0.05}>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-fg/[0.03] text-brand-blue">
                    <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 text-sm font-bold leading-snug text-fg">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
                    {value.description}
                  </p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
