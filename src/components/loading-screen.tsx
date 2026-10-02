"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Animate progress bar from 0 to 100
    const duration = 1800; // ms
    const interval = 18; // ms between ticks
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Eased progress: fast start, slow finish
      const t = step / steps;
      const eased = t < 0.8 ? t * 1.25 : 0.8 + (t - 0.8) * 1.0;
      setProgress(Math.min(eased * 100, 100));

      if (step >= steps) {
        clearInterval(timer);
        // Fade out after completion
        setTimeout(() => {
          setIsVisible(false);
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="loading-screen"
      style={{
        opacity: progress >= 100 ? 0 : 1,
        transition: "opacity 0.5s ease",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      {/* K Letter Mark */}
      <div
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "clamp(3rem, 8vw, 5rem)",
          fontWeight: 900,
          fontStyle: "italic",
          color: "#c5562a",
          letterSpacing: "-0.02em",
          lineHeight: 1,
          marginBottom: "0.5rem",
          opacity: 0.9,
        }}
      >
        K
      </div>

      {/* Name */}
      <div
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.65rem",
          fontWeight: 500,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(240, 235, 224, 0.4)",
          marginBottom: "2.5rem",
        }}
      >
        VULLI KOUSHIK
      </div>

      {/* Progress Bar */}
      <div
        style={{
          width: "180px",
          height: "1px",
          background: "rgba(240, 235, 224, 0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: `${progress}%`,
            background: "#c5562a",
            transition: "width 0.02s linear",
          }}
        />
      </div>

      {/* Progress number */}
      <div
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.6rem",
          letterSpacing: "0.1em",
          color: "rgba(240, 235, 224, 0.2)",
          marginTop: "1rem",
          fontWeight: 400,
        }}
      >
        {Math.round(progress)}
      </div>
    </div>
  );
}
