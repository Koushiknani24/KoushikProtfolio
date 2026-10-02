"use client";

import { useRef, useEffect, useState } from "react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "GITAM Deemed to be University",
    location: "Visakhapatnam",
    period: "2023 – 2027",
    detail: "CGPA: 8.61",
    current: true,
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College",
    location: "Visakhapatnam",
    period: "2021 – 2023",
    detail: null,
    current: false,
  },
  {
    degree: "Class X",
    institution: "Bhashyam High School",
    location: "Visakhapatnam",
    period: "2020 – 2021",
    detail: null,
    current: false,
  },
];

export function EducationSection() {
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

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative w-full bg-[#080808] py-28 md:py-36 overflow-hidden"
      style={{ borderTop: "1px solid rgba(240, 235, 224, 0.05)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="section-label">Education</div>
          <h2
            className="text-heading"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              color: "#f0ebe0",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            The{" "}
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontStyle: "italic",
                color: "#c5562a",
              }}
            >
              Foundation
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Timeline */}
          <div className="flex-1 relative pl-8">
            <div className="timeline-line" />

            {education.map((edu, i) => (
              <div
                key={edu.institution}
                className="relative pb-12 last:pb-0"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.7s ease ${i * 0.15 + 0.1}s, transform 0.7s ease ${i * 0.15 + 0.1}s`,
                }}
              >
                {/* Dot */}
                <div
                  className="timeline-dot"
                  style={{
                    top: "0.375rem",
                    background: edu.current ? "#c5562a" : "rgba(240,235,224,0.15)",
                    boxShadow: edu.current ? "0 0 12px rgba(197,86,42,0.5)" : "none",
                    transform: `scale(${edu.current ? 1.1 : 0.8})`,
                  }}
                />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                      fontWeight: 700,
                      color: edu.current ? "#f0ebe0" : "rgba(240,235,224,0.55)",
                      letterSpacing: "-0.015em",
                      lineHeight: 1.2,
                    }}
                  >
                    {edu.degree}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      color: edu.current ? "#c5562a" : "rgba(240,235,224,0.2)",
                      letterSpacing: "0.1em",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {edu.period}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.9375rem",
                    color: "rgba(240,235,224,0.45)",
                    marginBottom: edu.detail ? "0.5rem" : 0,
                  }}
                >
                  {edu.institution} · {edu.location}
                </p>

                {edu.detail && (
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full mt-2"
                    style={{
                      background: "rgba(197,86,42,0.08)",
                      border: "1px solid rgba(197,86,42,0.15)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.65rem",
                        color: "#c5562a",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {edu.detail}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Ambient large text */}
          <div
            className="hidden lg:flex items-center justify-center flex-1"
            aria-hidden="true"
            style={{
              opacity: isVisible ? 0.04 : 0,
              transition: "opacity 1s ease 0.5s",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "clamp(6rem, 12vw, 10rem)",
                fontWeight: 900,
                color: "#f0ebe0",
                letterSpacing: "-0.05em",
                lineHeight: 0.85,
                textAlign: "right",
                userSelect: "none",
                WebkitTextStroke: "1px rgba(240,235,224,0.3)",
                color: "transparent" as React.CSSProperties["color"],
              }}
            >
              FOUND<br />ATION
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
