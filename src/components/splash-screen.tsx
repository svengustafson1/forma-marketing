"use client";

import { useEffect, useState } from "react";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 800);
    const t2 = setTimeout(() => setPhase("out"), 2000);
    const t3 = setTimeout(() => onComplete(), 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
      style={{
        opacity: phase === "out" ? 0 : 1,
        transition: phase === "out" ? "opacity 0.6s ease-in-out" : "none",
        pointerEvents: phase === "out" ? "none" : "all",
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute rounded-full blur-[160px]"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
          opacity: phase === "in" ? 0 : 1,
          transform: phase === "in" ? "scale(0.6)" : "scale(1)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      />

      {/* Logo mark */}
      <div className="relative flex flex-col items-center gap-4">
        {/* Animated hex/diamond shape */}
        <div
          style={{
            opacity: phase === "in" ? 0 : 1,
            transform: phase === "in" ? "scale(0.5) rotate(-10deg)" : "scale(1) rotate(0deg)",
            transition: "opacity 0.5s ease-out, transform 0.6s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect
              x="8"
              y="8"
              width="40"
              height="40"
              rx="10"
              fill="rgba(99,102,241,0.15)"
              stroke="rgba(99,102,241,0.6)"
              strokeWidth="1.5"
            />
            <path
              d="M20 28 L28 20 L36 28 L28 36 Z"
              fill="rgba(99,102,241,0.8)"
              stroke="rgba(165,180,252,0.9)"
              strokeWidth="1"
            />
            <path
              d="M24 28 L28 24 L32 28 L28 32 Z"
              fill="rgba(165,180,252,1)"
            />
          </svg>
        </div>

        {/* Wordmark */}
        <div
          style={{
            opacity: phase === "in" ? 0 : 1,
            transform: phase === "in" ? "translateY(12px)" : "translateY(0)",
            transition: "opacity 0.5s ease-out 0.15s, transform 0.5s ease-out 0.15s",
          }}
        >
          <span
            className="text-3xl font-bold tracking-tight text-white"
            style={{ letterSpacing: "-0.03em" }}
          >
            forma
            <span style={{ color: "rgb(99,102,241)" }}>.</span>
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            opacity: phase === "hold" ? 1 : 0,
            transition: "opacity 0.5s ease-out 0.2s",
          }}
        >
          <p className="text-sm text-slate-400 tracking-widest uppercase">
            The CRM That Builds Itself
          </p>
        </div>

        {/* Loading bar */}
        <div
          className="mt-4 h-px bg-slate-800 overflow-hidden"
          style={{ width: 160 }}
        >
          <div
            className="h-full bg-indigo-500"
            style={{
              width: phase === "in" ? "0%" : phase === "hold" ? "70%" : "100%",
              transition:
                phase === "in"
                  ? "none"
                  : phase === "hold"
                  ? "width 1.0s ease-out"
                  : "width 0.4s ease-out",
            }}
          />
        </div>
      </div>
    </div>
  );
}
