/**
 * ヘッダー / フッターのナビゲーション。
 * マルチページ構成のため、値はページのパスです。
 */
export type NavItem = {
  href: string;
  /** 日本語のラベル（モバイルメニュー・フッターで使用） */
  label: string;
  /** 英字のラベル（PCヘッダーで使用） */
  en: string;
};

export const navigation: NavItem[] = [
  { href: "/", label: "ホーム", en: "HOME" },
  { href: "/services", label: "サービス", en: "SERVICES" },
  { href: "/works", label: "制作実績", en: "WORKS" },
  { href: "/lab", label: "ラボ", en: "LAB" },
  { href: "/company", label: "事業者情報", en: "COMPANY" },
];

/** ヘッダー右端のCTA。ナビ一覧とは別扱いにする */
export const contactNav: NavItem = {
  href: "/contact",
  label: "お問い合わせ",
  en: "CONTACT",
};
