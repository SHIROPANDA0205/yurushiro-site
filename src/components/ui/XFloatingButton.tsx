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
 * 問い合わせのCTAと競合しないよう、アイコンのみの控えめな見た目にしています。
 */
export default function XFloatingButton() {
  if (!xLink) return null;

  return (
    <a
      href={xLink.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Xでフォローする"
      className="group fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg-surface/80 text-fg-muted backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:text-fg sm:bottom-7 sm:right-7 sm:h-12 sm:w-12"
    >
      <XIcon className="h-4 w-4 sm:h-5 sm:w-5" />
    </a>
  );
}
