/**
 * 明るい地に敷く方眼＋グロー。Hero や CTA の背景に使います。
 *
 * 方眼は上下に長い要素をゆっくり動かして流れを作り、
 * 端が見切れないよう中央から外へフェードさせています。
 * グローは白地の上でも重くならないよう、彩度は保ちつつ淡めにしています。
 */
export default function GridBackground({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* 流れる方眼 */}
      <div
        className="absolute inset-x-0 -top-[44px] h-[calc(100%+88px)] grid-lines animate-grid-drift"
        style={{
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, #000 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, #000 20%, transparent 75%)",
        }}
      />

      {/* 中央上のグロー */}
      <div
        className="absolute left-1/2 top-[-14%] h-[520px] w-[820px] max-w-[140vw] -translate-x-1/2 rounded-full blur-[120px] animate-breathe"
        style={{
          background:
            "radial-gradient(circle, rgba(91,140,255,0.20), rgba(166,108,255,0.12) 45%, transparent 70%)",
        }}
      />

      {/* 右下のシアン寄りのグロー */}
      <div
        className="absolute bottom-[-20%] right-[-10%] h-[420px] w-[520px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.12), transparent 70%)",
        }}
      />
    </div>
  );
}
