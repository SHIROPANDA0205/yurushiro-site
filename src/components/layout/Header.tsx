"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";

/**
 * 固定ヘッダー。
 * ファーストビュー（写真背景のHero）の上では透明＋白文字、
 * スクロールして白い背景のセクションに入ると、白背景＋濃色文字＋金のアクセント線に切り替わります。
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState(navigation[0]?.id ?? "");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // 現在表示中のセクションをハイライトする（スクロールスパイ）
  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible?.target.id) setActiveId(mostVisible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const linkClass = scrolled
    ? "text-ink-soft hover:text-ink"
    : "text-white/70 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold/15 bg-base/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-content items-center justify-between px-4 sm:h-16 sm:px-6">
        <a
          href="#home"
          className={`rounded-md font-serif text-base font-bold tracking-[0.32em] transition-colors duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:text-lg ${
            scrolled ? "text-ink" : "text-white"
          }`}
        >
          {site.name}
        </a>

        <nav aria-label="メインナビゲーション" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`group relative inline-block px-3 py-2 font-serif-en text-sm font-semibold tracking-[0.22em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                      isActive
                        ? scrolled
                          ? "text-ink"
                          : "text-white"
                        : linkClass
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-gold transition-all duration-300 ${
                        isActive
                          ? "w-[calc(100%-1.5rem)]"
                          : "w-0 group-hover:w-[calc(100%-1.5rem)]"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:hidden ${
            scrolled ? "text-ink hover:bg-primary-soft" : "text-white hover:bg-white/10"
          }`}
        >
          {open ? <X aria-hidden="true" strokeWidth={1.5} /> : <Menu aria-hidden="true" strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="メインナビゲーション（モバイル）"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-t border-gold/15 bg-base/95 backdrop-blur-xl md:hidden"
          >
            <ul className="mx-auto max-w-content space-y-0.5 px-4 py-4">
              {navigation.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      className={`flex items-center gap-2 rounded-lg px-4 py-3 font-serif-en text-base font-semibold tracking-[0.22em] transition-colors hover:bg-primary-soft hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                        isActive ? "text-primary" : "text-ink"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-1 w-1 rounded-full bg-gold transition-opacity ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
