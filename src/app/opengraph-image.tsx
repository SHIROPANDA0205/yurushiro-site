import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * SNSでシェアされた際に表示されるOGP画像を動的に生成します。
 * next/og（Satori）はCJKフォントを標準搭載していないため、
 * 英字のブランドワードマークのみで構成し、確実にレンダリングされるようにしています。
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
          backgroundColor: "#FAF7F0",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: "1px solid rgba(171,138,86,0.35)",
          }}
        />
        <div
          style={{
            width: 72,
            height: 1,
            background:
              "linear-gradient(90deg, rgba(171,138,86,0), #AB8A56, rgba(171,138,86,0))",
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 92,
            fontWeight: 700,
            letterSpacing: 6,
            color: "#1E1B16",
          }}
        >
          YURUSHIRO
        </div>
        <div
          style={{
            marginTop: 26,
            fontSize: 32,
            fontStyle: "italic",
            color: "#AB8A56",
            letterSpacing: 1,
          }}
        >
          Stay Hungry, Stay Foolish.
        </div>
        <div
          style={{
            width: 72,
            height: 1,
            background:
              "linear-gradient(90deg, rgba(171,138,86,0), #AB8A56, rgba(171,138,86,0))",
            marginTop: 32,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
