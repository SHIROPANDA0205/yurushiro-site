import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Noto_Sans_JP,
  Shippori_Mincho,
  Zen_Kaku_Gothic_New,
} from "next/font/google";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorFollower from "@/components/ui/CursorFollower";
import XFloatingButton from "@/components/ui/XFloatingButton";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import "./globals.css";

const display = Zen_Kaku_Gothic_New({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const body = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const en = Inter({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-en",
});

/** 見出しの一部に添える、上品なアクセント用の明朝体 */
const serif = Shippori_Mincho({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

/** 座右の銘など、英字の引用をエディトリアルに見せるセリフ体 */
const serifEn = Cormorant_Garamond({
  weight: ["500", "600", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif-en",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s｜${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  publisher: site.fullName,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.fullName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    creator: site.twitterHandle,
    site: site.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // favicon: src/app/icon.svg が自動的に使用されます。
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${display.variable} ${body.variable} ${en.variable} ${serif.variable} ${serifEn.variable}`}
    >
      <head>
        {/*
          リロード時、URLに残った #contact などのハッシュにブラウザが
          自動でジャンプしてしまうのを防ぎ、常にページ先頭から表示させる。
          body の描画・スクロール処理より前に走らせる必要があるため、
          ここ（head内の同期スクリプト）に置いている。
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(window.location.hash){history.replaceState(null,'',window.location.pathname+window.location.search);}",
          }}
        />
      </head>
      <body className="bg-base font-body text-ink antialiased">
        <JsonLd />
        <ScrollProgress />
        <CursorFollower />
        <XFloatingButton />
        {children}
      </body>
    </html>
  );
}
