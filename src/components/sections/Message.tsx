import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";

/**
 * MESSAGE セクション。
 * 高級テック企業のキーノートのように、余白とタイポグラフィで想いを伝える。
 */
export default function Message() {
  return (
    <section
      id="message"
      aria-label="メッセージ"
      className="relative scroll-mt-20 bg-base-soft py-20 sm:py-28"
    >
      {/* About との章区切り：金のヘアライン＋菱形のオーナメント */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-center gap-4 px-6"
      >
        <span className="h-px w-full max-w-[6rem] bg-gradient-to-r from-transparent to-gold/50 sm:max-w-[10rem]" />
        <span className="mt-0 h-1.5 w-1.5 rotate-45 border border-gold/70 bg-gold/30" />
        <span className="h-px w-full max-w-[6rem] bg-gradient-to-l from-transparent to-gold/50 sm:max-w-[10rem]" />
      </div>

      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionTitle
          eyebrow="MESSAGE"
          title="人との出会いが、新しい価値を生み出す。"
        />

        <div className="mx-auto max-w-2xl text-center">
          {/* キーノートの導入文 */}
          <Reveal>
            <p className="font-serif text-lg font-medium leading-relaxed tracking-[0.06em] text-ink sm:text-xl sm:leading-loose">
              私は、
              <span className="text-gold">人との出会いと挑戦</span>
              を大切にしています。
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-8 font-serif text-[15px] leading-[2.05] tracking-[0.02em] text-ink-soft sm:mt-10 sm:text-base">
              これまでの人生を振り返ると、新しい環境に飛び込んだ時や、
              <br className="hidden sm:block" />
              新しい人と出会った時に、自分自身が大きく成長してきました。
            </p>
          </Reveal>

          {/* 中央のステートメント（キーノートのクライマックス） */}
          <Reveal delay={0.12}>
            <div className="my-12 sm:my-16">
              <span
                aria-hidden="true"
                className="mx-auto mb-8 block h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent sm:mb-10"
              />
              <p className="font-serif text-sm leading-relaxed tracking-[0.04em] text-ink-soft sm:text-[15px]">
                AIが進化し、技術そのものの価値はこれからさらに身近になっていく。
                <br className="hidden sm:block" />
                だからこそ、最後に選ばれる理由は「何ができるか」だけではなく—
              </p>
              <p className="mt-6 font-serif text-xl font-bold leading-snug tracking-[0.08em] text-ink sm:mt-8 sm:text-2xl md:text-3xl">
                「誰と一緒に
                <br className="sm:hidden" />
                仕事をしたいか」
              </p>
              <span
                aria-hidden="true"
                className="mx-auto mt-8 block h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent sm:mt-10"
              />
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="font-serif text-[15px] leading-[2.05] tracking-[0.02em] text-ink-soft sm:text-base">
              一つひとつの出会いを大切にしながら、
              <br className="hidden sm:block" />
              挑戦し続ける人でありたいと思っています。
            </p>
          </Reveal>

          {/* クロージング */}
          <Reveal delay={0.2}>
            <p className="mt-10 font-serif text-[15px] leading-[2.05] tracking-[0.02em] text-ink sm:mt-12 sm:text-base">
              もしこのサイトを見て、
              <br />
              <span className="mt-3 inline-block font-serif-en text-lg italic tracking-[0.04em] text-gold sm:text-xl">
                「一緒に何かやったら面白そうだな」
              </span>
              <br />
              と感じていただけたなら、とても嬉しいです。
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
