import Reveal from "@/components/ui/Reveal";

/**
 * FINAL MESSAGE セクション。CONTACT への導入となる最後のひと押し。
 */
export default function FinalMessage() {
  return (
    <section aria-label="最後のメッセージ" className="py-20 sm:py-28">
      <div className="mx-auto max-w-content px-4 text-center sm:px-6">
        <Reveal delay={0.1}>
          <h2 className="font-serif text-2xl font-bold tracking-[0.06em] text-ink sm:text-3xl md:text-4xl">
            一緒に、面白いことを。
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-xl font-serif leading-loose text-ink-soft">
            もしこのサイトを見て、
            <br />
            <strong className="font-bold text-ink">
              「この人と一緒に何かやったら面白そうだな」
            </strong>
            <br />
            と思っていただけたなら、ぜひ気軽にお声がけください。
          </p>
          <p className="mx-auto mt-5 max-w-xl font-serif leading-loose text-ink-soft">
            具体的な依頼が決まっていなくても問題ありません。
            <br />
            まずは雑談やアイデアの相談からでも大歓迎です。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
