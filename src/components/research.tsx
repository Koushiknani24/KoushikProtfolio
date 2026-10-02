"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ResearchSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const researchNodes = [
    { label: "Multi-Source", sub: "News Aggregation", color: "#c5562a" },
    { label: "Clustering", sub: "Topic Grouping", color: "#800020" },
    { label: "Summarization", sub: "AI-Powered", color: "#c5562a" },
    { label: "Credibility", sub: "Fact Analysis", color: "#4a0010" },
    { label: "Real-Time", sub: "Live Pipeline", color: "#800020" },
  ];

  return (
    <section
      id="research"
      ref={sectionRef}
      className="relative w-full bg-[#080808] py-28 md:py-36 overflow-hidden"
      style={{ borderTop: "1px solid rgba(240, 235, 224, 0.05)" }}
    >
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(197,86,42,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Label */}
        <div className="section-label">Research</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Research card */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
              style={{
                background: "rgba(197,86,42,0.08)",
                border: "1px solid rgba(197,86,42,0.2)",
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full bg-burnt-sienna"
                style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#c5562a",
                  fontWeight: 500,
                }}
              >
                Research Paper · Accepted
              </span>
            </div>

            {/* Paper title */}
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                color: "#f0ebe0",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              AI News Hub:{" "}
              <span
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontStyle: "italic",
                  color: "#c5562a",
                  fontWeight: 700,
                }}
              >
                A Modular Real-Time System
              </span>{" "}
              for Multi-Source News Aggregation, Clustering, Summarization, and Credibility Analysis
            </h2>

            {/* Meta */}
            <div
              className="flex flex-col gap-3 mb-8 p-5 rounded-xl"
              style={{
                background: "rgba(240,235,224,0.02)",
                border: "1px solid rgba(240,235,224,0.06)",
              }}
            >
              {[
                {
                  label: "Conference",
                  value: "14th International Conference on Intelligent Systems and Embedded Design (ISED2026)",
                },
                { label: "Venue", value: "NIT Warangal" },
                { label: "Submission ID", value: "2102" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col md:flex-row gap-1 md:gap-4">
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      color: "rgba(240,235,224,0.3)",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      minWidth: "7rem",
                      flexShrink: 0,
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.875rem",
                      color: "rgba(240,235,224,0.7)",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Read more CTA */}
            <a
              href="https://github.com/Koushiknani24"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#c5562a",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              View on GitHub
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right: Research visual */}
          <div
            className="flex items-center justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
            }}
          >
            {/* Node diagram */}
            <div className="relative w-full max-w-xs aspect-square">

              {/* Center node */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "radial-gradient(circle, rgba(197,86,42,0.15) 0%, rgba(197,86,42,0.05) 100%)",
                    border: "1px solid rgba(197,86,42,0.3)",
                    boxShadow: "0 0 40px rgba(197,86,42,0.15)",
                    animation: "pulse-glow 3s ease-in-out infinite",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.6rem",
                      fontWeight: 800,
                      color: "#c5562a",
                      letterSpacing: "0.05em",
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}
                  >
                    AI<br />NEWS<br />HUB
                  </span>
                </div>
              </div>

              {/* Orbital rings */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "1px solid rgba(240,235,224,0.04)",
                  animation: "spin-slow 30s linear infinite",
                }}
              />
              <div
                className="absolute inset-8 rounded-full"
                style={{
                  border: "1px solid rgba(197,86,42,0.08)",
                  animation: "spin-reverse 20s linear infinite",
                }}
              />

              {/* Surrounding nodes */}
              {researchNodes.map((node, i) => {
                const angle = (i / researchNodes.length) * Math.PI * 2 - Math.PI / 2;
                const radius = 44; // % from center
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                return (
                  <div
                    key={node.label}
                    className="absolute flex flex-col items-center gap-1"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                      animation: `float ${5 + i * 0.7}s ease-in-out infinite`,
                      animationDelay: `${i * 0.4}s`,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        background: `${node.color}15`,
                        border: `1px solid ${node.color}30`,
                        boxShadow: `0 0 10px ${node.color}20`,
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: node.color, opacity: 0.8 }}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.5rem",
                        color: "rgba(240,235,224,0.4)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                        textAlign: "center",
                      }}
                    >
                      {node.label}
                    </span>
                  </div>
                );
              })}

              {/* Connection lines (SVG) */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ opacity: 0.15 }}
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                {researchNodes.map((_, i) => {
                  const angle = (i / researchNodes.length) * Math.PI * 2 - Math.PI / 2;
                  const r = 44;
                  const x = 50 + r * Math.cos(angle);
                  const y = 50 + r * Math.sin(angle);
                  return (
                    <line
                      key={i}
                      x1="50" y1="50"
                      x2={x} y2={y}
                      stroke="#c5562a"
                      strokeWidth="0.3"
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
