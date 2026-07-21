# ゆるしろ｜AI活用支援 ポートフォリオサイト

「また一緒に仕事がしたい。そう思っていただける存在へ。」をコンセプトにした、
1ページ完結型の個人ポートフォリオ兼サービス紹介サイトです。

## 使用技術

- Next.js 14（App Router）
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons（lucide-react）

## セットアップ

Node.js 18.17 以上が必要です。

```bash
npm install
```

## 開発サーバーの起動

```bash
npm run dev
```

http://localhost:3000 で表示を確認できます。

## ビルド / Lint

```bash
npm run lint   # コードチェック
npm run build  # 本番ビルド
npm run start  # ビルド結果の確認
```

## ディレクトリ構成

```
src/
├── app/          レイアウト・ページ・globals.css・sitemap・robots・favicon
├── components/
│   ├── layout/   Header / Footer
│   ├── sections/ Hero / Message / Values / About / Services / Works /
│   │             FavoriteQuote / FinalMessage / Contact
│   └── ui/       SectionTitle / ServiceCard / WorkCard / PandaMascot / Reveal
├── data/         ★ 文言・リンクなどの編集はほぼここだけでOK
└── lib/          motion.ts（アニメ設定） / contact.ts（フォーム送信処理）
```

## 内容の編集方法

| 変更したい内容 | 編集するファイル |
| --- | --- |
| サイト名・説明文・URL | `src/data/site.ts` |
| プロフィール・紹介文・趣味 | `src/data/profile.ts` |
| 価値観（VALUES） | `src/data/values.ts` |
| サービス内容 | `src/data/services.ts` |
| 制作実績 | `src/data/works.ts` |
| SNSリンク | `src/data/socialLinks.ts` |
| メニュー項目 | `src/data/navigation.ts` |
| 問い合わせの選択肢 | `src/data/contact.ts` |

### 実績の追加方法

`src/data/works.ts` の `works` 配列にオブジェクトを1つ追加するだけでカードが増えます。

```ts
{
  id: "new-project",
  title: "新しいプロジェクト",
  description: "プロジェクトの概要です。",
  tech: ["Next.js", "TypeScript"],
  role: "設計・実装",
  thumbnailSrc: "/images/works/new-project.png", // 任意
  githubUrl: "https://github.com/...",            // 任意（未設定なら非表示）
  siteUrl: "https://...",                         // 任意（未設定なら非表示）
},
```

### SNSリンクの変更

`src/data/socialLinks.ts` の `url` を実際のURLに書き換えてください。
`enabled: false` にするとアイコンごと非表示になります。

## 画像の差し替え方法

画像は `public/images/` に置いてください。

- **パンダのマスコット**: `src/data/mascot.ts` の `imageSrc` にパスを設定
  （例: `"/images/panda.png"`）。`null` の間は組み込みSVGパンダが表示されます。
- **顔写真**: `src/data/profile.ts` の `photoSrc` にパスを設定
  （例: `"/images/profile.jpg"`）。`null` の間はプレースホルダーが表示されます。
- **実績サムネイル**: `src/data/works.ts` の各実績の `thumbnailSrc` に設定。
- **favicon**: `src/app/icon.svg` を差し替え（`icon.png` でも可）。
- **OGP画像**: `public/ogp.png` を置き、`src/app/layout.tsx` の
  `openGraph.images` のコメントを解除。

## 問い合わせフォームの接続方法

現在は仮実装（送信すると1秒後に成功メッセージを表示）です。
実際に受信できるようにするには `src/lib/contact.ts` の `submitContact` の中身を
書き換えます。ファイル内に **Formspree / Google Apps Script / Resend** の
接続例をコメントで記載しています。

- Formspree: フォームIDを取得して fetch 先を差し替えるだけ
- GAS: WebアプリとしてデプロイしたURLへPOST
- Resend: `src/app/api/contact/route.ts` を作成しサーバー側から送信

Googleフォームを使う場合は、Contact セクションをフォームへのリンクに
置き換える方法が最も簡単です。

## Vercelへのデプロイ手順

1. このプロジェクトを GitHub リポジトリに push する
2. https://vercel.com にログインし「Add New → Project」を選択
3. リポジトリを選択して Import（設定はデフォルトのままでOK）
4. 「Deploy」をクリック → 数分で公開されます
5. 独自ドメイン（yurushiro.dev など）を使う場合は
   Vercel の「Settings → Domains」でドメインを追加し、
   表示されるDNSレコードをドメイン管理サービスに設定
6. ドメイン確定後、`src/data/site.ts` の `url` を本番URLに変更
   （sitemap / OGP に反映されます）

## 将来的な拡張のメモ

- **ブログ / 実績詳細ページ**: App Router なので `src/app/blog/` や
  `src/app/works/[id]/` を追加するだけで拡張できます
- **ダークモード**: Tailwind の `darkMode: "class"` を有効化して対応
- **Google Analytics**: `@next/third-parties` の `GoogleAnalytics` を
  `layout.tsx` に追加
- **CMS連携**: `src/data/` のデータ取得を microCMS などのfetchに置き換え
