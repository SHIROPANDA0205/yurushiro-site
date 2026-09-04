/**
 * サイト全体の基本情報・SEO用メタデータ。
 *
 * url を変えるだけでドメイン移行できるよう、URL はこの1か所だけで定義しています
 * （metadataBase / sitemap / OGP / 構造化データがすべてここを参照します）。
 */
export const site = {
  /** 屋号。サイト上の主体はすべてこの名前 */
  name: "AI LINK CRAFT",
  /** 代表の活動名 */
  owner: "ゆるしろ",
  tagline: "つなぐを、つくる。",
  taglineEn: "Linking AI to your work.",
  /** 現在の公開URL */
  url: "https://www.yurushiroai.com",
  title: "AI LINK CRAFT｜AI活用・Web制作・業務効率化ツール開発",
  description:
    "AI LINK CRAFT（アイリンククラフト）は、Webサイト制作、業務効率化ツールの受託開発、AIを活用した業務自動化の支援を行う開発ユニットです。企画から実装・運用まで一貫して対応します。",
  /** 検索されやすい別名。旧サイト（ゆるしろAI）からの流入も拾い続ける */
  aliases: [
    "AI LINK CRAFT",
    "エーアイリンククラフト",
    "ゆるしろ",
    "ゆるしろAI",
    "yurushiroai",
  ] as const,
  keywords: [
    "AI LINK CRAFT",
    "エーアイリンククラフト",
    "ゆるしろ",
    "ゆるしろAI",
    "AI活用",
    "AI 業務自動化",
    "業務効率化 ツール開発",
    "Web制作",
    "ホームページ制作",
    "LP制作",
    "受託開発",
    "Next.js 制作",
    "Claude Code",
    "ローコード開発",
    "早稲田",
    "ITエンジニア",
  ],
  twitterHandle: "@aniprolife",
} as const;
