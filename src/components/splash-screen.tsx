"use client";

import { useEffect, useRef } from "react";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const splashRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const logo = logoRef.current;
    const splash = splashRef.current;
    if (!canvas || !logo || !splash) return;

    const ctx = canvas.getContext("2d")!;

    const INDIGO = "rgba(99,102,241,";
    const VIOLET = "rgba(139,92,246,";
    const CONNECT_D = 140;
    const N_PTS = 52;

    let W: number, H: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let pts: any[];
    let phase: string;
    let frame: number;
    let raf: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let pulseNode: any = null;

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function randPt() {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: 1.5 + Math.random() * 2,
        a: 0,
        born: frame,
        isPulse: false,
      };
    }

    function init() {
      resize();
      pts = [];
      phase = "spawn";
      frame = 0;
      pulseNode = null;

      for (let i = 0; i < N_PTS; i++) {
        const p = randPt();
        p.born = Math.floor(i * (100 / N_PTS));
        p.a = 0;
        pts.push(p);
      }
    }

    function drawEdges() {
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT_D) {
            const strength =
              (1 - d / CONNECT_D) * Math.min(pts[i].a, pts[j].a);
            ctx.strokeStyle = INDIGO + strength * 0.45 + ")";
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      // Pulse node connections
      if (pulseNode && pulseNode.a > 0) {
        for (let i = 0; i < pts.length; i++) {
          const dx = pts[i].x - pulseNode.x;
          const dy = pts[i].y - pulseNode.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT_D * 1.5) {
            const strength =
              (1 - d / (CONNECT_D * 1.5)) * pulseNode.a * pts[i].a;
            ctx.strokeStyle = VIOLET + strength * 0.7 + ")";
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pulseNode.x, pulseNode.y);
            ctx.stroke();
          }
        }
      }
    }

    function drawDots() {
      for (const p of pts) {
        if (p.a <= 0) continue;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = INDIGO + p.a * 0.85 + ")";
        ctx.fill();
      }

      if (pulseNode && pulseNode.a > 0) {
        // Glow ring
        const glow = ctx.createRadialGradient(
          pulseNode.x, pulseNode.y, 0,
          pulseNode.x, pulseNode.y, 18
        );
        glow.addColorStop(0, VIOLET + pulseNode.a * 0.6 + ")");
        glow.addColorStop(1, "rgba(139,92,246,0)");
        ctx.beginPath();
        ctx.arc(pulseNode.x, pulseNode.y, 18, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(pulseNode.x, pulseNode.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = VIOLET + pulseNode.a + ")";
        ctx.fill();
      }
    }

    function tick() {
      frame++;
      ctx.clearRect(0, 0, W, H);

      // Fade nodes in
      for (const p of pts) {
        const age = frame - p.born;
        if (age > 0) p.a = Math.min(1, p.a + 0.04);

        // Drift
        p.x += p.vx;
        p.y += p.vy;

        // Soft bounce
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }

      if (phase === "spawn" && frame > 120) {
        phase = "connected";
        logo.style.opacity = "1";

        // Introduce a special pulse node after a beat
        setTimeout(() => {
          pulseNode = randPt();
          pulseNode.a = 0;
          pulseNode.isPulse = true;
        }, 400);
      }

      if (pulseNode && pulseNode.a < 1) {
        pulseNode.a = Math.min(1, pulseNode.a + 0.05);
        pulseNode.x += pulseNode.vx;
        pulseNode.y += pulseNode.vy;
        if (pulseNode.x < 0 || pulseNode.x > W) pulseNode.vx *= -1;
        if (pulseNode.y < 0 || pulseNode.y > H) pulseNode.vy *= -1;
      } else if (pulseNode) {
        pulseNode.x += pulseNode.vx;
        pulseNode.y += pulseNode.vy;
        if (pulseNode.x < 0 || pulseNode.x > W) pulseNode.vx *= -1;
        if (pulseNode.y < 0 || pulseNode.y > H) pulseNode.vy *= -1;
      }

      drawEdges();
      drawDots();

      raf = requestAnimationFrame(tick);
    }

    init();
    raf = requestAnimationFrame(tick);

    // Fade out after 2.8s
    const fadeTimer = setTimeout(() => {
      splash.style.transition = "opacity 0.8s ease";
      splash.style.opacity = "0";
      setTimeout(() => onComplete(), 850);
    }, 2800);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fadeTimer);
      resizeObserver.disconnect();
    };
  }, [onComplete]);

  return (
    <div
      ref={splashRef}
      style={{
        position: "fixed",
        inset: 0,
        background: "#06070f",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <div
        ref={logoRef}
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          opacity: 0,
          transition: "opacity 0.7s ease",
        }}
      >
        <div
          style={{
            fontSize: "2.4rem",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#fff",
            fontFamily: "inherit",
          }}
        >
          forma
          <span style={{ color: "#818cf8" }}>.</span>
        </div>
        <div
          style={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginTop: "0.5rem",
            fontFamily: "inherit",
          }}
        >
          assembling your workspace
        </div>
      </div>
    </div>
  );
}
