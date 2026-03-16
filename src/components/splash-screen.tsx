"use client";

import { useEffect, useState, useRef } from "react";

// Grid positions that spell/form the diamond shape
const GRID_COLS = 9;
const GRID_ROWS = 7;
const CELL = 28;
const GAP = 5;

// Which cells are "lit" — forms a diamond/cross shape
const LIT: [number, number][] = [
  [4,0],
  [3,1],[4,1],[5,1],
  [2,2],[3,2],[4,2],[5,2],[6,2],
  [1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],
  [2,4],[3,4],[4,4],[5,4],[6,4],
  [3,5],[4,5],[5,5],
  [4,6],
];

function gridX(col: number) { return col * (CELL + GAP); }
function gridY(row: number) { return row * (CELL + GAP); }

const TOTAL_W = GRID_COLS * (CELL + GAP) - GAP;
const TOTAL_H = GRID_ROWS * (CELL + GAP) - GAP;

interface Tile {
  col: number;
  row: number;
  startX: number;
  startY: number;
  delay: number;
}

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"assemble" | "hold" | "out">("assemble");
  const [tiles, setTiles] = useState<Tile[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate tiles with random start positions
    const generated = LIT.map(([col, row], i) => ({
      col,
      row,
      startX: (Math.random() - 0.5) * 320,
      startY: (Math.random() - 0.5) * 320,
      delay: i * 35 + Math.random() * 60,
    }));
    // Shuffle so they don't all assemble in order
    generated.sort(() => Math.random() - 0.5);
    generated.forEach((t, i) => { t.delay = i * 40; });
    setTiles(generated);
  }, []);

  useEffect(() => {
    const lastDelay = LIT.length * 40 + 100;
    const t1 = setTimeout(() => setPhase("hold"), lastDelay + 200);
    const t2 = setTimeout(() => setPhase("out"), lastDelay + 1200);
    const t3 = setTimeout(() => onComplete(), lastDelay + 1900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  const isLit = (col: number, row: number) =>
    LIT.some(([c, r]) => c === col && r === row);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        background: "#ffffff",
        opacity: phase === "out" ? 0 : 1,
        transition: phase === "out" ? "opacity 0.7s ease-in-out" : "none",
        pointerEvents: phase === "out" ? "none" : "all",
      }}
    >
      {/* Self-assembling grid */}
      <div style={{ position: "relative", width: TOTAL_W, height: TOTAL_H }}>
        {/* Background ghost grid */}
        {Array.from({ length: GRID_ROWS }, (_, row) =>
          Array.from({ length: GRID_COLS }, (_, col) => (
            <div
              key={`bg-${col}-${row}`}
              style={{
                position: "absolute",
                left: gridX(col),
                top: gridY(row),
                width: CELL,
                height: CELL,
                borderRadius: 5,
                background: isLit(col, row) ? "transparent" : "rgba(0,0,0,0.035)",
                border: isLit(col, row) ? "none" : "1px solid rgba(0,0,0,0.06)",
              }}
            />
          ))
        )}

        {/* Assembling tiles */}
        {tiles.map((tile, i) => {
          const targetX = gridX(tile.col);
          const targetY = gridY(tile.row);
          return (
            <div
              key={`tile-${i}`}
              style={{
                position: "absolute",
                width: CELL,
                height: CELL,
                borderRadius: 5,
                background:
                  phase === "hold" || phase === "out"
                    ? "rgba(0,0,0,0.88)"
                    : "rgba(0,0,0,0.82)",
                boxShadow:
                  phase === "hold" || phase === "out"
                    ? "0 2px 8px rgba(0,0,0,0.12)"
                    : "none",
                transform:
                  phase === "assemble"
                    ? `translate(${tile.startX + targetX}px, ${tile.startY + targetY}px) scale(0.4) rotate(${(Math.random() - 0.5) * 40}deg)`
                    : `translate(${targetX}px, ${targetY}px) scale(1) rotate(0deg)`,
                opacity: phase === "assemble" ? 0 : 1,
                transition: `transform 0.55s cubic-bezier(0.22,1,0.36,1) ${tile.delay}ms, opacity 0.3s ease-out ${tile.delay}ms, box-shadow 0.4s ease`,
              }}
            />
          );
        })}
      </div>

      {/* Wordmark */}
      <div
        style={{
          marginTop: 28,
          opacity: phase === "hold" || phase === "out" ? 1 : 0,
          transform: phase === "hold" || phase === "out" ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.45s ease-out, transform 0.45s ease-out",
        }}
      >
        <span
          style={{
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#0f0f0f",
            fontFamily: "inherit",
          }}
        >
          forma
          <span style={{ color: "#6366f1" }}>.</span>
        </span>
      </div>

      {/* Subtle tagline */}
      <div
        style={{
          marginTop: 8,
          opacity: phase === "hold" ? 0.5 : 0,
          transition: "opacity 0.4s ease-out 0.2s",
        }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#888",
            fontFamily: "inherit",
          }}
        >
          assembling your workspace
        </p>
      </div>
    </div>
  );
}
