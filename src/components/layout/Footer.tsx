import { navigation } from "@/data/navigation";
import { site } from "@/data/site";

/**
 * フッター。
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/15 bg-base-soft">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <p className="font-serif text-lg font-bold tracking-[0.28em] text-ink">
              {site.fullName}
            </p>
            <p className="mt-2 font-serif-en text-sm italic tracking-[0.12em] text-ink-soft">
              {site.footerMessage}
            </p>
          </div>

          <nav aria-label="フッターナビゲーション">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group relative inline-block rounded-md font-serif-en text-sm font-semibold tracking-[0.2em] text-ink-soft transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gold transition-all duration-300 group-hover:w-full"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-xs text-ink-soft">
            &copy; {year} {site.name} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
