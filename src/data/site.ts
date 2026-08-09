/**
 * サイト全体の基本情報・SEO用メタデータ。
 */
export const site = {
  name: "ゆるしろ",
  tagline: "Stay Hungry, Stay Foolish.",
  fullName: "ゆるしろ",
  /** 検索されやすい別名（ドメイン名・呼び方） */
  aliases: ["ゆるしろAI", "yurushiroai", "yurushiro"] as const,
  /** 現在の公開URL（sitemap / OGP / 構造化データに使用） */
  url: "https://www.yurushiroai.com",
  title: "ゆるしろAI｜AI開発・Web制作・IT副業｜早稲田院卒エンジニア",
  description:
    "ゆるしろAI（ゆるしろ）は、Claude Codeを活用したAI開発・Web制作、IT副業のご相談を受付中。早稲田院卒のITエンジニアが、技術だけでなく対話を大切に一緒につくります。",
  footerMessage: "Stay Hungry, Stay Foolish.",
  /** 検索エンジン向けキーワード（補足。本文・タイトルが本命） */
  keywords: [
    "ゆるしろAI",
    "ゆるしろ",
    "yurushiroai",
    "yurushiro",
    "早稲田",
    "早稲田大学",
    "早稲田院卒",
    "ITエンジニア",
    "IT副業",
    "副業",
    "AI活用",
    "Claude Code",
    "Web制作",
    "Web開発",
    "ローコード",
    "ポートフォリオ",
  ],
  twitterHandle: "@aniprolife",
} as const;
