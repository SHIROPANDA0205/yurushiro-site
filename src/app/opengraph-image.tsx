import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "AI LINK CRAFT";

/**
 * SNSでシェアされた際に表示されるOGP画像を動的に生成します。
 *
 * next/og（Satori）はCJKフォントを標準搭載していないため、
 * 文字は英字のみで構成し、確実にレンダリングされるようにしています。
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0B10",
          position: "relative",
        }}
      >
        {/* 上部のグロー */}
        <div
          style={{
            position: "absolute",
            top: -220,
            left: 260,
            width: 680,
            height: 480,
            borderRadius: 340,
            background:
              "radial-gradient(circle, rgba(91,140,255,0.45), rgba(166,108,255,0.18) 50%, rgba(10,11,16,0) 72%)",
          }}
        />

        {/* ロゴのモノグラム（A：頭文字 / C：それを抱える弧） */}
        <svg width="132" height="132" viewBox="0 0 72 72">
          <defs>
            <linearGradient id="og-grad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#5B8CFF" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>
          </defs>
          <path
            d="M14 58 L36 12 L58 58"
            fill="none"
            stroke="url(#og-grad)"
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M50 22 A22 22 0 1 0 50 50"
            fill="none"
            stroke="#F4F6FF"
            strokeWidth="6.5"
            strokeLinecap="round"
          />
        </svg>

        <div
          style={{
            marginTop: 44,
            display: "flex",
            fontSize: 74,
            fontWeight: 700,
            letterSpacing: 8,
            color: "#F4F6FF",
          }}
        >
          AI LINK CRAFT
        </div>

        <div
          style={{
            marginTop: 26,
            fontSize: 28,
            letterSpacing: 3,
            color: "#A8AEC6",
          }}
        >
          Linking AI to your work.
        </div>
      </div>
    ),
    { ...size }
  );
}
