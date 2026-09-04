/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    /**
     * 実績のサムネイルにSVGの図を使うため許可しています。
     * SVGはスクリプトを含められるため既定では拒否される設定ですが、
     * ここで扱うのは public/images/ に自分で置いたファイルだけで、
     * 外部から投稿された画像を表示することはありません。
     * 念のため、下の2行で実行と外部読み込みを封じています。
     */
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
