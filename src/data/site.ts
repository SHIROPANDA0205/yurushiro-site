/**
 * サイト全体の基本情報・SEO用メタデータ。
 * 独自ドメイン接続後は url を本番ドメインに変更してください。
 */
export const site = {
  name: "ゆるしろ",
  tagline: "Stay Hungry, Stay Foolish.",
  fullName: "ゆるしろ",
  /** 現在の公開URL（sitemap / OGP / 構造化データに使用） */
  url: "https://yurushiro-site.vercel.app",
  title: "ゆるしろ｜早稲田院卒のITエンジニア｜AI活用・Web制作・IT副業",
  description:
    "ゆるしろは早稲田大学大学院修了のITエンジニアです。Claude Codeを活用したAI開発・Web制作など、本業のかたわらIT副業のご相談も受付中。技術だけでなく、対話を大切に一緒につくります。",
  footerMessage: "Stay Hungry, Stay Foolish.",
  /** 検索エンジン向けキーワード（補足。本文・タイトルが本命） */
  keywords: [
    "ゆるしろ",
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
