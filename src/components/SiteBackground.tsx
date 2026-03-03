"use client";

export default function SiteBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* 1. Koyu taban */}
      <div className="absolute inset-0 bg-zinc-950" />

      {/* 2. Radial spotlight — merkezde hafif aydınlık */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(
            ellipse 80% 60% at 50% 0%,
            rgba(39, 39, 42, 0.6) 0%,
            rgba(24, 24, 27, 0.4) 40%,
            transparent 70%
          )`,
        }}
      />

      {/* 3. Hareketli blur orblar */}
      <div className="absolute inset-0">
        <div
          className="orb-float-1 absolute w-[min(80vw,500px)] h-[min(80vw,500px)] rounded-full opacity-20"
          style={{
            left: "10%",
            top: "20%",
            background: "radial-gradient(circle, rgba(52, 211, 153, 0.5) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="orb-float-2 absolute w-[min(70vw,420px)] h-[min(70vw,420px)] rounded-full opacity-[0.18]"
          style={{
            right: "5%",
            top: "40%",
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.5) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="orb-float-3 absolute w-[min(60vw,380px)] h-[min(60vw,380px)] rounded-full opacity-15"
          style={{
            left: "40%",
            bottom: "10%",
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.45) 0%, transparent 70%)",
            filter: "blur(85px)",
          }}
        />
      </div>

      {/* 4. İnce nokta grid (dot grid) */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* 5. Noise texture — SVG filter ile hafif grain */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
