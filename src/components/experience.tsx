/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useEffect, useState } from "react";

const experiences = [
  {
    id: "01",
    role: "AI / Software Intern",
    company: "AISIA Labs",
    period: "2025",
    type: "Internship",
    responsibilities: [
      "AI application development and integration",
      "Machine learning model implementation",
      "API integration and data processing",
      "Software development workflows",
      "AI integration into practical applications",
    ],
    image: "/images/experience/Internship.jpeg",
    accent: "#c5562a",
  },
  {
    id: "02",
    role: "Student Chapter Head — Andhra Pradesh",
    company: "GARRF.in",
    period: "2025 – 2026",
    type: "Leadership",
    responsibilities: [
      "Leading the Andhra Pradesh student chapter",
      "Organizing events and workshops",
      "Community building and outreach",
      "Coordinating with national team",
    ],
    image: "/images/leadership/GarrfImage.jpeg",
    accent: "#800020",
  },
  {
    id: "03",
    role: "Student Campus Ambassador",
    company: "GITAM University",
    period: "2023 – Present",
    type: "Ambassador",
    responsibilities: [
      "Representing GITAM to prospective students",
      "Participating in university outreach programs",
      "Campus engagement and community initiatives",
    ],
    image: "/images/leadership/GarrfImage.jpeg",
    accent: "#4a0010",
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeExp, setActiveExp] = useState(0);

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
      id="experience"
      ref={sectionRef}
      className="relative w-full bg-[#080808] py-28 md:py-36 overflow-hidden"
      style={{ borderTop: "1px solid rgba(240, 235, 224, 0.05)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(74,0,16,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="section-label">Experience</div>
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
            Where I&apos;ve{" "}
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontStyle: "italic",
                color: "#c5562a",
              }}
            >
              Worked
            </span>
          </h2>
        </div>

        {/* Timeline layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left: Timeline list */}
          <div
            className="flex-1 lg:max-w-sm relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            {/* Timeline line */}
            <div className="timeline-line" />

            <div className="flex flex-col gap-0 pl-8">
              {experiences.map((exp, i) => (
                <div
                  key={exp.id}
                  onClick={() => setActiveExp(i)}
                  className="relative py-6 cursor-none transition-all duration-300"
                  style={{
                    borderBottom: i < experiences.length - 1 ? "1px solid rgba(240,235,224,0.05)" : "none",
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    className="timeline-dot"
                    style={{
                      top: "1.75rem",
                      background: activeExp === i ? "#c5562a" : "rgba(240,235,224,0.1)",
                      boxShadow: activeExp === i ? "0 0 12px rgba(197,86,42,0.5)" : "none",
                      transform: `translateY(-50%) scale(${activeExp === i ? 1 : 0.7})`,
                      transition: "all 0.3s ease",
                    }}
                  />

                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                      fontSize: "0.55rem",
                      color: activeExp === i ? "#c5562a" : "rgba(240,235,224,0.2)",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "0.25rem",
                      transition: "color 0.3s",
                    }}
                  >
                    {exp.period} · {exp.type}
                  </span>

                  <h3
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                      fontWeight: 700,
                      color: activeExp === i ? "#f0ebe0" : "rgba(240,235,224,0.35)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                      marginBottom: "0.25rem",
                      transition: "color 0.3s",
                    }}
                  >
                    {exp.role}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.8rem",
                      color: activeExp === i ? "#c5562a" : "rgba(240,235,224,0.2)",
                      fontWeight: 500,
                      transition: "color 0.3s",
                    }}
                  >
                    {exp.company}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Detail */}
          <div
            className="flex-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
            }}
          >
            <div key={activeExp}>
              {/* Image */}
              <div
                className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8"
                style={{
                  border: "1px solid rgba(240,235,224,0.07)",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
                }}
              >
                <img
                  src={experiences[activeExp].image}
                  alt={experiences[activeExp].company}
                  className="w-full h-full object-cover"
                  style={{
                    filter: "brightness(0.75) saturate(0.8)",
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      `https://placehold.co/1200x675/141414/2a2a2a?text=${encodeURIComponent(experiences[activeExp].company)}`;
                  }}
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${experiences[activeExp].accent}30 0%, transparent 60%)`,
                  }}
                />

                {/* Role badge */}
                <div
                  className="absolute bottom-4 left-4 premium-card px-4 py-2.5"
                >
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "#f0ebe0",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {experiences[activeExp].role}
                  </p>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.55rem",
                      color: "#c5562a",
                      letterSpacing: "0.12em",
                      marginTop: "0.125rem",
                    }}
                  >
                    {experiences[activeExp].company} · {experiences[activeExp].period}
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <h4
                className="mb-5"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem",
                  color: "rgba(240,235,224,0.3)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Key Activities
              </h4>
              <ul className="flex flex-col gap-3">
                {experiences[activeExp].responsibilities.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <span
                      style={{
                        color: "#c5562a",
                        marginTop: "0.1rem",
                        fontSize: "0.7rem",
                        flexShrink: 0,
                      }}
                    >
                      ▹
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "0.9375rem",
                        color: "rgba(240,235,224,0.65)",
                        lineHeight: 1.55,
                      }}
                    >
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
