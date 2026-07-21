import {
  HeartHandshake,
  PenLine,
  Repeat,
  Rocket,
  Users,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { values, type ValueItem } from "@/data/values";

const icons: Record<ValueItem["icon"], typeof Users> = {
  users: Users,
  pen: PenLine,
  rocket: Rocket,
  handshake: HeartHandshake,
  repeat: Repeat,
};

/**
 * VALUES セクション。
 * Message のクリーム地から一転、暗いキーノート舞台で価値観を派手に見せる。
 */
export default function Values() {
  return (
    <section
      id="values"
      aria-label="大切にしていること"
      className="relative scroll-mt-20 overflow-hidden bg-ink py-20 sm:py-28"
    >
      {/* 星空ヒーローと呼応する、ごく薄い放射グラデーション */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,110,0.14)_0%,_transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-gold/5 blur-3xl"
      />

      {/* Message との章区切り */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-center gap-4 px-6"
      >
        <span className="h-px w-full max-w-[6rem] bg-gradient-to-r from-transparent to-gold/60 sm:max-w-[10rem]" />
        <span className="h-1.5 w-1.5 rotate-45 border border-gold bg-gold/40" />
        <span className="h-px w-full max-w-[6rem] bg-gradient-to-l from-transparent to-gold/60 sm:max-w-[10rem]" />
      </div>

      <div className="relative mx-auto max-w-content px-4 sm:px-6">
        <SectionTitle
          eyebrow="VALUES"
          title="大切にしていること"
          variant="onDark"
        />

        <ol className="mx-auto max-w-3xl">
          {values.map((value, index) => {
            const Icon = icons[value.icon];
            const number = String(index + 1).padStart(2, "0");
            return (
              <li key={value.title}>
                <Reveal delay={index * 0.08}>
                  <article className="group grid grid-cols-[auto_1fr] gap-5 border-t border-white/10 py-8 transition-colors duration-300 hover:border-gold/40 sm:gap-8 sm:py-10">
                    <div className="flex flex-col items-center gap-3 pt-1">
                      <span className="font-serif-en text-3xl font-semibold italic leading-none tracking-wide text-gold sm:text-4xl">
                        {number}
                      </span>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold/15">
                        <Icon className="h-4 w-4" aria-hidden="true" strokeWidth={1.5} />
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold leading-snug tracking-[0.06em] text-white sm:text-xl">
                        {value.title}
                      </h3>
                      <p className="mt-3 font-serif text-sm leading-relaxed tracking-[0.02em] text-white/55 sm:text-base sm:leading-loose">
                        {value.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
          <li aria-hidden="true" className="border-t border-white/10" />
        </ol>
      </div>
    </section>
  );
}
