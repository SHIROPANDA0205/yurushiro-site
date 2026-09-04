import Link from "next/link";
import Logo from "@/components/brand/Logo";
import { contactNav, navigation } from "@/data/navigation";
import { services } from "@/data/services";
import { activeSocialLinks } from "@/data/socialLinks";
import { business } from "@/data/business";
import { site } from "@/data/site";

/** X（旧Twitter）用のアイコン */
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

/** GitHub用のアイコン */
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14 0 1.55-.02 2.8-.02 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

const socialIcons = {
  x: XIcon,
  github: GitHubIcon,
  instagram: XIcon,
} as const;

/**
 * フッター。サイトマップ型。
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-surface">
      <div className="mx-auto max-w-content px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          {/* ブランド */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">
              {site.tagline}
              <br />
              <span className="font-mono text-xs tracking-wide text-fg-dim">
                {site.taglineEn}
              </span>
            </p>

            {activeSocialLinks.length > 0 && (
              <ul className="mt-6 flex items-center gap-2">
                {activeSocialLinks.map((link) => {
                  const Icon = socialIcons[link.id];
                  return (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* サービス */}
          <nav aria-label="サービス">
            <p className="font-mono text-[11px] tracking-[0.22em] text-fg-dim">
              SERVICES
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* サイトマップ */}
          <nav aria-label="フッターナビゲーション">
            <p className="font-mono text-[11px] tracking-[0.22em] text-fg-dim">
              SITEMAP
            </p>
            <ul className="mt-4 space-y-2.5">
              {[...navigation, contactNav].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] leading-relaxed tracking-wide text-fg-dim">
            {business.tradeName}（代表：{site.owner}）
          </p>
          <p className="font-mono text-[11px] tracking-wide text-fg-dim">
            &copy; {year} {business.tradeName}
          </p>
        </div>
      </div>
    </footer>
  );
}
