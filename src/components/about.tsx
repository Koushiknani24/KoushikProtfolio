/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useEffect, useState } from "react";

const pillars = [
  { label: "IDEA", icon: "◈" },
  { label: "DESIGN", icon: "◐" },
  { label: "CODE", icon: "⬡" },
  { label: "PRODUCT", icon: "◉" },
  { label: "IMPACT", icon: "✦" },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-[#080808] py-28 md:py-36 overflow-hidden"
      style={{ borderTop: "1px solid rgba(240, 235, 224, 0.05)" }}
    >
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(197,86,42,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section Label */}
        <div
          className="section-label"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          About
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ===== LEFT: COPY ===== */}
          <div>
            {/* Large headline */}
            <h2
              className="mb-8"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                fontWeight: 800,
                color: "#f0ebe0",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
              }}
            >
              Computer Science is{" "}
              <span
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontStyle: "italic",
                  color: "#c5562a",
                }}
              >
                more than a degree
              </span>{" "}
              for Koushik.
            </h2>

            {/* Body copy */}
            <p
              className="mb-8"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                lineHeight: 1.75,
                color: "rgba(240, 235, 224, 0.6)",
                fontWeight: 400,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
              }}
            >
              It is the foundation for how he approaches problems, builds software, and
              explores new ideas. He is interested in turning ideas into useful products,
              experimenting with AI, improving workflows through automation, and designing
              digital experiences that matter.
            </p>

            {/* Pillar flow */}
            <div
              className="flex flex-wrap gap-3 mb-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
              }}
            >
              {pillars.map((p, i) => (
                <div
                  key={p.label}
                  className="flex items-center gap-2"
                >
                  <div
                    style={{
                      padding: "0.375rem 0.875rem",
                      borderRadius: "100px",
                      border: "1px solid rgba(240, 235, 224, 0.08)",
                      background: "rgba(240, 235, 224, 0.03)",
                      fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "rgba(240, 235, 224, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      transition: "border-color 0.3s, color 0.3s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(197, 86, 42, 0.3)";
                      (e.currentTarget as HTMLElement).style.color = "#c5562a";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(240, 235, 224, 0.08)";
                      (e.currentTarget as HTMLElement).style.color = "rgba(240, 235, 224, 0.5)";
                    }}
                  >
                    <span style={{ color: "#c5562a", opacity: 0.7 }}>{p.icon}</span>
                    {p.label}
                  </div>
                  {i < pillars.length - 1 && (
                    <span
                      style={{
                        color: "rgba(240,235,224,0.15)",
                        fontSize: "0.6rem",
                      }}
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div
              className="flex gap-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
              }}
            >
              {[
                { value: "8.61", label: "CGPA" },
                { value: "2026", label: "Research" },
                { value: "3+", label: "Projects" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                      fontWeight: 800,
                      color: "#f0ebe0",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(240,235,224,0.3)",
                      marginTop: "0.25rem",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== RIGHT: IMAGES ===== */}
          <div
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
            }}
          >
            <div className="relative w-full aspect-[4/5] max-w-md ml-auto">

              {/* Main image */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid rgba(240,235,224,0.07)",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
                }}
              >
                <img
                  src="/images/about/DailyRotine2.jpeg"
                  alt="Koushik working"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/600x750/141414/2a2a2a?text=About";
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 60%, rgba(8,8,8,0.5) 100%)",
                  }}
                />
              </div>

              {/* Floating secondary image */}
              <div
                className="absolute -left-8 -bottom-8 w-44 h-44 rounded-xl overflow-hidden"
                style={{
                  border: "3px solid #080808",
                  outline: "1px solid rgba(240,235,224,0.08)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
                  animation: "float 7s ease-in-out infinite",
                }}
              >
                <img
                  src="/images/about/DailyRotine.jpeg"
                  alt="Koushik candid"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/200x200/141414/2a2a2a?text=.";
                  }}
                />
              </div>

              {/* GITAM badge */}
              <div
                className="absolute -right-4 top-8 premium-card px-4 py-3 flex flex-col"
                style={{ maxWidth: "160px" }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.18em",
                    color: "rgba(240,235,224,0.35)",
                    textTransform: "uppercase",
                    marginBottom: "0.25rem",
                  }}
                >
                  Currently at
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#f0ebe0",
                  }}
                >
                  GITAM University
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.65rem",
                    color: "#c5562a",
                    marginTop: "0.125rem",
                  }}
                >
                  B.Tech CSE · 2023–27
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
