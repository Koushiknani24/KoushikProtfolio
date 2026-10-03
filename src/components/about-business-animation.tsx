"use client";

import { useRef, useEffect } from "react";

const stages = [
  {
    id: "00",
    label: "BUSINESS PROBLEM",
    sublabel: "The starting point",
    color: "#6b7280",
    glowColor: "rgba(107,114,128,0.25)",
  },
  {
    id: "01",
    label: "UNDERSTAND",
    sublabel: "Research & define",
    color: "#c5562a",
    glowColor: "rgba(197,86,42,0.3)",
  },
  {
    id: "02",
    label: "DESIGN",
    sublabel: "System & interface",
    color: "#e06b3a",
    glowColor: "rgba(224,107,58,0.3)",
  },
  {
    id: "03",
    label: "BUILD SOFTWARE",
    sublabel: "Web · Apps · APIs",
    color: "#c5562a",
    glowColor: "rgba(197,86,42,0.3)",
  },
  {
    id: "04",
    label: "AI / AUTOMATION",
    sublabel: "Intelligent systems",
    color: "#800020",
    glowColor: "rgba(128,0,32,0.35)",
  },
  {
    id: "05",
    label: "BETTER BUSINESS",
    sublabel: "Smarter · Faster",
    color: "#c5562a",
    glowColor: "rgba(197,86,42,0.45)",
  },
];

interface Particle {
  fromIdx: number;
  toIdx: number;
  t: number;
  speed: number;
  size: number;
  alpha: number;
}

export function BusinessAnimation({ isVisible }: { isVisible: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const activeRef = useRef<number>(0);
  const stageTimerRef = useRef<number>(0);
  const spawnTimerRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    // Node positions — vertical column, left-aligned
    const getPositions = () => {
      const h = canvas.offsetHeight;
      const total = stages.length;
      const topPad = h * 0.08;
      const botPad = h * 0.08;
      const spacing = (h - topPad - botPad) / (total - 1);
      // x is fixed left (so labels have room on the right)
      const x = Math.min(canvas.offsetWidth * 0.22, 110);
      return stages.map((_, i) => ({
        x,
        y: topPad + i * spacing,
      }));
    };

    const spawnParticle = (fromIdx: number) => {
      if (fromIdx >= stages.length - 1) return;
      particlesRef.current.push({
        fromIdx,
        toIdx: fromIdx + 1,
        t: 0,
        speed: 0.005 + Math.random() * 0.004,
        size: Math.random() * 1.4 + 0.5,
        alpha: 0.5 + Math.random() * 0.5,
      });
    };

    const draw = (ts: number) => {
      const dt = ts - timeRef.current;
      timeRef.current = ts;
      const elapsed = ts * 0.001;

      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const positions = getPositions();
      const active = activeRef.current;

      // Advance active stage
      stageTimerRef.current += dt;
      if (stageTimerRef.current > 1600) {
        stageTimerRef.current = 0;
        activeRef.current = (activeRef.current + 1) % stages.length;
      }

      // Spawn particles
      spawnTimerRef.current += dt;
      if (spawnTimerRef.current > 130) {
        spawnTimerRef.current = 0;
        if (active < stages.length - 1 && Math.random() < 0.75) {
          spawnParticle(active);
        }
        // Trickle on already-completed segments
        for (let i = 0; i < active; i++) {
          if (Math.random() < 0.15) spawnParticle(i);
        }
      }

      // ── Draw connecting lines ──────────────────────────────────────────
      for (let i = 0; i < stages.length - 1; i++) {
        const from = positions[i];
        const to = positions[i + 1];
        const activated = i < active;
        const current = i === active - 1;

        // Base line
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = activated
          ? `rgba(197,86,42,${current ? 0.45 : 0.2})`
          : "rgba(240,235,224,0.05)";
        ctx.lineWidth = activated ? 1.2 : 0.6;
        ctx.setLineDash([]);
        ctx.stroke();

        // Animated dashes on activated segments
        if (activated) {
          ctx.save();
          ctx.beginPath();
          ctx.setLineDash([3, 9]);
          ctx.lineDashOffset = -(elapsed * 28) % 12;
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.strokeStyle = "rgba(197,86,42,0.2)";
          ctx.lineWidth = 0.8;
          ctx.stroke();
          ctx.restore();
        }
      }

      // ── Update & draw particles ────────────────────────────────────────
      particlesRef.current = particlesRef.current.filter((p) => {
        p.t += p.speed;
        if (p.t >= 1) return false;

        const from = positions[p.fromIdx];
        const to = positions[p.toIdx];
        if (!from || !to) return false;

        // Ease-in-out
        const e = p.t < 0.5
          ? 2 * p.t * p.t
          : 1 - Math.pow(-2 * p.t + 2, 2) / 2;
        const px = from.x + (to.x - from.x) * e;
        const py = from.y + (to.y - from.y) * e;
        const alpha = Math.sin(p.t * Math.PI) * p.alpha;

        // Core dot
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(197,86,42,${alpha})`;
        ctx.fill();

        // Soft glow
        const grd = ctx.createRadialGradient(px, py, 0, px, py, p.size * 3.5);
        grd.addColorStop(0, `rgba(197,86,42,${alpha * 0.25})`);
        grd.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(px, py, p.size * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        return true;
      });

      // ── Draw nodes ────────────────────────────────────────────────────
      stages.forEach((stage, i) => {
        const pos = positions[i];
        const activated = i <= active;
        const isCurrent = i === active;
        const pulse = isCurrent ? 1 + Math.sin(elapsed * 3.2) * 0.1 : 1;

        // Outer glow
        if (activated) {
          const glowR = (isCurrent ? 20 : 12) * pulse;
          const grd = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, glowR);
          grd.addColorStop(0, stage.glowColor);
          grd.addColorStop(1, "transparent");
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, glowR, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }

        // Node body
        const r = (isCurrent ? 8 : 5.5) * pulse;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
        ctx.fillStyle = activated ? stage.color : "rgba(50,50,50,0.6)";
        ctx.fill();

        // Inner highlight
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r * 0.32, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(240,235,224,0.9)";
        ctx.fill();

        // ── Labels ──────────────────────────────────────────────────────
        const lx = pos.x + r + 14;

        // ID tag
        ctx.font = "400 8px 'JetBrains Mono', monospace";
        ctx.textAlign = "left";
        ctx.fillStyle = activated ? stage.color : "rgba(197,86,42,0.18)";
        ctx.fillText(stage.id, lx, pos.y - 8);

        // Main label
        ctx.font = `${isCurrent ? 600 : 400} ${isCurrent ? 11 : 10}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = activated
          ? isCurrent ? "#f0ebe0" : "rgba(240,235,224,0.5)"
          : "rgba(240,235,224,0.12)";
        ctx.fillText(stage.label, lx, pos.y + 4);

        // Sublabel
        ctx.font = "300 8.5px 'JetBrains Mono', monospace";
        ctx.fillStyle = activated
          ? "rgba(240,235,224,0.22)"
          : "rgba(240,235,224,0.06)";
        ctx.fillText(stage.sublabel, lx, pos.y + 16);
      });

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      particlesRef.current = [];
    };
  }, [isVisible]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}
