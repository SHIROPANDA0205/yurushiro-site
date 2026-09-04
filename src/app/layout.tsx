import type { Metadata } from "next";
import { IBM_Plex_Mono, Noto_Sans_JP, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorFollower from "@/components/ui/CursorFollower";
import XFloatingButton from "@/components/ui/XFloatingButton";
import Analytics from "@/components/seo/Analytics";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import "./globals.css";

/**
 * 英字の見出し・ワードマーク。
 * 和文グリフを持たないため、日本語は自動的に body（Noto Sans JP）へ
 * フォールバックします（フォールバック順は tailwind.config.ts で定義）。
 */
const display = Plus_Jakarta_Sans({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

/** 和文の本文。英字フォントが持たない日本語の受け皿も兼ねる */
const body = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

/** 数値・タグなど、機械的な質感を出したい箇所 */
const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s｜${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
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
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="bg-bg font-body text-fg antialiased">
        <JsonLd />
        <Analytics />
        <ScrollProgress />
        <CursorFollower />
        <XFloatingButton />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
