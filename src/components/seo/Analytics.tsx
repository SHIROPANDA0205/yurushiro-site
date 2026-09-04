import Script from "next/script";

/**
 * Google Analytics 4。
 *
 * 環境変数 NEXT_PUBLIC_GA_ID（例: G-XXXXXXXXXX）が設定されているときだけ
 * 読み込まれます。未設定の開発環境では何も出力しません。
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
