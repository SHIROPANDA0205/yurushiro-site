import { xLink } from "@/data/socialLinks";

/** X（旧Twitter）用のアイコン */
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

/**
 * 画面右下に固定表示する X へのショートカット。
 * 丸い X アイコンの横に「Follow me!」を外出しで添える。
 */
export default function XFloatingButton() {
  if (!xLink) return null;

  return (
    <a
      href={xLink.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow me on X"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 sm:bottom-7 sm:right-7 sm:gap-3.5"
    >
      <span className="font-serif-en text-sm font-semibold italic tracking-[0.06em] text-ink transition-colors duration-300 group-hover:text-gold sm:text-base">
        Follow me!
      </span>
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white shadow-[0_8px_24px_rgba(30,27,22,0.28)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-gold group-hover:text-ink sm:h-14 sm:w-14">
        <XIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      </span>
    </a>
  );
}
