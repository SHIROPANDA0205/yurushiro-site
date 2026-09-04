import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/sections/ContactForm";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "AI LINK CRAFT へのお問い合わせ。Webサイト制作、業務効率化ツール開発、AI活用のご相談を承っています。まだ形になっていない段階のご相談でも構いません。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const email = business.items.find((item) => item.email)?.email;

  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="お問い合わせ"
        lead="ご相談・お見積り・アイデアの壁打ち、どれでも歓迎します。最初のヒアリングは無料です。通常2〜3日以内にご返信します。"
        crumbs={[{ label: "CONTACT" }]}
      />

      <ContactForm />

      {email && (
        <section className="border-t border-line bg-bg-surface/40 py-12">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <p className="font-mono text-[11px] tracking-[0.2em] text-fg-dim">
              またはメールで
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-3 inline-block font-mono text-sm text-brand-blue underline decoration-brand-blue/40 underline-offset-4 transition-colors hover:text-brand-cyan"
            >
              {email}
            </a>
          </div>
        </section>
      )}
    </>
  );
}
