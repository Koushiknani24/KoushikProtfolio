"use client";

import { useRef, useEffect, useState } from "react";

const capabilities = [
  {
    label: "UI/UX Design",
    description: "Designing interfaces around users and real product requirements.",
    icon: "◐",
  },
  {
    label: "Web Design",
    description: "Visual design systems, layouts, and digital aesthetics.",
    icon: "◈",
  },
  {
    label: "Product Design",
    description: "From idea to interface — thinking in products, not just screens.",
    icon: "◉",
  },
  {
    label: "Interaction Design",
    description: "Micro-interactions, animations, and responsive behaviors.",
    icon: "⬡",
  },
  {
    label: "Responsive Design",
    description: "Consistent premium experience across all devices.",
    icon: "✦",
  },
];

const processSteps = [
  { label: "Idea", icon: "◈", color: "#c5562a" },
  { label: "Wireframe", icon: "⬡", color: "#800020" },
  { label: "Design", icon: "◐", color: "#c5562a" },
  { label: "Product", icon: "◉", color: "#e06b3a" },
];

export function DesignCapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

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

  return (
    <section
      id="design"
      ref={sectionRef}
      className="relative w-full bg-[#080808] py-28 md:py-36 overflow-hidden"
      style={{ borderTop: "1px solid rgba(240, 235, 224, 0.05)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(197,86,42,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: capabilities list */}
          <div>
            <div className="section-label">Design</div>
            <h2
              className="text-heading mb-10"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                color: "#f0ebe0",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              Design{" "}
              <span
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontStyle: "italic",
                  color: "#c5562a",
                }}
              >
                Capabilities
              </span>
            </h2>

            <div className="flex flex-col gap-3">
              {capabilities.map((cap, i) => (
                <div
                  key={cap.label}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{
                    background: hovered === i ? "rgba(197,86,42,0.04)" : "transparent",
                    border: "1px solid",
                    borderColor: hovered === i ? "rgba(197,86,42,0.12)" : "rgba(240,235,224,0.04)",
                    transition: "all 0.3s ease",
                    cursor: "default",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-16px)",
                    transitionDelay: `${i * 0.08 + 0.1}s`,
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: hovered === i ? "rgba(197,86,42,0.1)" : "rgba(240,235,224,0.03)",
                      border: "1px solid",
                      borderColor: hovered === i ? "rgba(197,86,42,0.2)" : "rgba(240,235,224,0.06)",
                      transition: "all 0.3s",
                    }}
                  >
                    <span style={{ color: hovered === i ? "#c5562a" : "rgba(240,235,224,0.3)", fontSize: "0.875rem", transition: "color 0.3s" }}>
                      {cap.icon}
                    </span>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: hovered === i ? "#f0ebe0" : "rgba(240,235,224,0.6)",
                        letterSpacing: "-0.01em",
                        marginBottom: "0.25rem",
                        transition: "color 0.3s",
                      }}
                    >
                      {cap.label}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "0.8125rem",
                        color: "rgba(240,235,224,0.35)",
                        lineHeight: 1.5,
                      }}
                    >
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Process visual */}
          <div
            className="flex flex-col items-center justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
            }}
          >
            {/* Process flow */}
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(240,235,224,0.2)",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              Design Process
            </div>

            <div className="flex flex-col items-center gap-0 w-full max-w-xs">
              {processSteps.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center w-full">
                  <div
                    className="w-full flex items-center gap-4 p-4 rounded-xl"
                    style={{
                      background: `${step.color}08`,
                      border: `1px solid ${step.color}20`,
                      marginBottom: i < processSteps.length - 1 ? "0" : "0",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${step.color}15`,
                        border: `1px solid ${step.color}30`,
                        animation: `float ${5 + i * 0.8}s ease-in-out infinite`,
                        animationDelay: `${i * 0.4}s`,
                      }}
                    >
                      <span style={{ color: step.color, fontSize: "0.875rem" }}>{step.icon}</span>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "rgba(240,235,224,0.7)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {step.label}
                    </span>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div
                      className="flex items-center justify-center h-6"
                      style={{ color: "rgba(197,86,42,0.3)", fontSize: "0.75rem" }}
                    >
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
