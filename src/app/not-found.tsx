import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/**
 * 404ページ。サイトのトーン（白基調＋ゴールド）に合わせたシンプルな案内画面です。
 */
export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="flex min-h-[70svh] flex-col items-center justify-center px-4 pt-32 pb-24 text-center sm:pt-40">
          <p className="font-serif-en text-lg italic tracking-[0.2em] text-gold">
            404
          </p>
          <h1 className="mt-4 font-display text-2xl font-bold leading-snug text-ink sm:text-3xl md:text-4xl">
            お探しのページが見つかりませんでした。
          </h1>
          <span
            aria-hidden="true"
            className="mx-auto mt-6 block h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent"
          />
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
            URLが変更、または削除された可能性があります。
            <br />
            トップページから、お探しの情報をご確認ください。
          </p>
          <Link
            href="/"
            className="btn-shine group mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-base transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:text-base"
          >
            <ArrowLeft
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
            />
            トップページに戻る
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
