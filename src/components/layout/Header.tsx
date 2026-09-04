"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Logo from "@/components/brand/Logo";
import { contactNav, navigation } from "@/data/navigation";

/**
 * 固定ヘッダー。
 * ページ最上部では透明、スクロールすると背景をぼかして境界線を出します。
 * 現在地の判定は URL のパスで行います。
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ページを移動したらモバイルメニューを閉じる
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /** トップ以外は前方一致で判定する（/works/xxx でも WORKS を現在地にする） */
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-content items-center justify-between px-4 sm:h-20 sm:px-6">
        <Link
          href="/"
          className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
          aria-label="AI LINK CRAFT ホーム"
        >
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <nav aria-label="メインナビゲーション">
            <ul className="flex items-center">
              {navigation.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`group relative inline-block px-2.5 py-2 font-mono text-xs tracking-[0.18em] transition-colors duration-300 lg:px-3.5 ${
                        active ? "text-fg" : "text-fg-dim hover:text-fg-muted"
                      }`}
                    >
                      {item.en}
                      <span
                        aria-hidden="true"
                        className={`grad-surface absolute bottom-0.5 left-1/2 h-px -translate-x-1/2 transition-all duration-300 ${
                          active
                            ? "w-[calc(100%-1.75rem)]"
                            : "w-0 group-hover:w-[calc(100%-1.75rem)]"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link
            href={contactNav.href}
            className="btn-shine ml-2 inline-flex shrink-0 items-center whitespace-nowrap rounded-full border border-line-strong bg-fg/[0.03] px-4 py-2 text-xs font-bold text-fg transition-all duration-300 hover:-translate-y-0.5 hover:bg-fg/[0.08] lg:ml-3 lg:px-5"
          >
            {contactNav.label}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-fg transition-colors hover:bg-fg/[0.06] md:hidden"
        >
          {open ? (
            <X aria-hidden="true" strokeWidth={1.5} />
          ) : (
            <Menu aria-hidden="true" strokeWidth={1.5} />
          )}
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
            className="border-t border-line bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <ul className="mx-auto max-w-content space-y-1 px-4 py-4">
              {[...navigation, contactNav].map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between rounded-xl border px-4 py-3.5 transition-colors ${
                        active
                          ? "border-line-strong bg-fg/[0.05] text-fg"
                          : "border-transparent text-fg-muted hover:bg-fg/[0.03]"
                      }`}
                    >
                      <span className="text-sm font-bold">{item.label}</span>
                      <span className="font-mono text-[11px] tracking-[0.18em] text-fg-dim">
                        {item.en}
                      </span>
                    </Link>
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
