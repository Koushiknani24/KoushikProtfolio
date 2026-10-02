"use client";

import { useRef, useEffect, useState } from "react";

const skillCategories = [
  {
    name: "Languages",
    items: ["Python", "Java", "C"],
    color: "#c5562a",
  },
  {
    name: "Web",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    color: "#800020",
  },
  {
    name: "Data",
    items: ["SQL", "DBMS", "SQLite"],
    color: "#c5562a",
  },
  {
    name: "AI / ML",
    items: ["Machine Learning", "NLP", "OpenCV", "Hugging Face", "NumPy", "Pandas"],
    color: "#e06b3a",
  },
  {
    name: "Tools",
    items: ["Git", "GitHub", "VS Code", "Selenium", "Jira"],
    color: "#800020",
  },
  {
    name: "Core",
    items: ["Data Structures & Algorithms", "OOP", "System Design"],
    color: "#4a0010",
  },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

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
      id="skills"
      ref={sectionRef}
      className="relative w-full bg-[#080808] py-28 md:py-36 overflow-hidden"
      style={{ borderTop: "1px solid rgba(240, 235, 224, 0.05)" }}
    >
      {/* Background ambience */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(74,0,16,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="section-label">Skills</div>
          <h2
            className="text-heading mb-4"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              color: "#f0ebe0",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            Technical{" "}
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontStyle: "italic",
                color: "#c5562a",
              }}
            >
              Stack
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "1rem",
              color: "rgba(240,235,224,0.4)",
              maxWidth: "460px",
              opacity: isVisible ? 1 : 0,
              transition: "opacity 0.8s ease 0.1s",
            }}
          >
            A constellation of technologies built through real projects and research.
          </p>
        </div>

        {/* Skills grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((cat, i) => (
            <div
              key={cat.name}
              className="premium-card p-6 relative overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.7s ease ${i * 0.08}s, transform 0.7s ease ${i * 0.08}s`,
                cursor: "default",
              }}
              onMouseEnter={() => setHoveredCategory(i)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Top accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "2px",
                  width: hoveredCategory === i ? "100%" : "40px",
                  background: cat.color,
                  transition: "width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              />

              {/* Category name */}
              <div className="flex items-center justify-between mb-4">
                <h3
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: hoveredCategory === i ? "#f0ebe0" : "rgba(240,235,224,0.7)",
                    letterSpacing: "-0.01em",
                    transition: "color 0.3s",
                  }}
                >
                  {cat.name}
                </h3>
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: cat.color,
                    boxShadow: hoveredCategory === i ? `0 0 8px ${cat.color}` : "none",
                    transition: "box-shadow 0.3s",
                  }}
                />
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "0.25rem 0.625rem",
                      borderRadius: "4px",
                      background: hoveredCategory === i ? `${cat.color}12` : "rgba(240,235,224,0.03)",
                      border: `1px solid ${hoveredCategory === i ? cat.color + "25" : "rgba(240,235,224,0.06)"}`,
                      fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                      fontSize: "0.65rem",
                      color: hoveredCategory === i ? "rgba(240,235,224,0.8)" : "rgba(240,235,224,0.4)",
                      letterSpacing: "0.05em",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Background number */}
              <div
                className="absolute bottom-3 right-4 pointer-events-none select-none"
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "5rem",
                  fontWeight: 900,
                  color: "rgba(240,235,224,0.015)",
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* Accessibility fallback */}
        <div className="sr-only">
          {skillCategories.map((cat) => (
            <div key={cat.name}>
              <h4>{cat.name}</h4>
              <p>{cat.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
