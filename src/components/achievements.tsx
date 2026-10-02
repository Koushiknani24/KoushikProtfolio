/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useEffect, useState } from "react";

const achievements = [
  {
    category: "Hackathons",
    icon: "⬡",
    items: [
      { title: "Smart India Hackathon", sub: "National Level Participation" },
      { title: "BITS Pilani Hackathon", sub: "Hyderabad" },
    ],
    accent: "#c5562a",
  },
  {
    category: "Kabaddi",
    icon: "◉",
    items: [
      { title: "Lepanga 2.0", sub: "Tournament" },
      { title: "Lepanga 3.0", sub: "Tournament" },
      { title: "Chedugudu", sub: "Tournament" },
    ],
    accent: "#800020",
    image: "/images/achievements/KabbadiMain.jpeg",
  },
  {
    category: "Certifications",
    icon: "✦",
    items: [
      { title: "Network Basics", sub: "Cisco Networking Academy" },
    ],
    accent: "#4a0010",
  },
];

const beyondCode = [
  "Kabaddi",
  "Leadership",
  "Building Products",
  "AI Exploration",
  "Experimentation",
  "Learning",
  "Photography",
  "Fitness",
];

export function AchievementsSection() {
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
      id="achievements"
      ref={sectionRef}
      className="relative w-full bg-[#080808] py-28 md:py-36 overflow-hidden"
      style={{ borderTop: "1px solid rgba(240, 235, 224, 0.05)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="section-label">Achievements</div>
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
            Beyond{" "}
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontStyle: "italic",
                color: "#c5562a",
              }}
            >
              Code
            </span>
          </h2>
        </div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {achievements.map((ach, i) => (
            <div
              key={ach.category}
              className="premium-card overflow-hidden relative"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`,
              }}
            >
              {/* Image (Kabaddi only) */}
              {ach.image && (
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={ach.image}
                    alt={ach.category}
                    className="w-full h-full object-cover"
                    style={{ filter: "brightness(0.5) saturate(0.6)" }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).parentElement!.style.display = "none";
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to bottom, transparent 40%, rgba(18,18,18,0.95) 100%)",
                    }}
                  />
                </div>
              )}

              <div className="p-6">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      background: `${ach.accent}12`,
                      border: `1px solid ${ach.accent}25`,
                    }}
                  >
                    <span style={{ color: ach.accent, fontSize: "0.875rem" }}>{ach.icon}</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#f0ebe0",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {ach.category}
                  </h3>
                </div>

                {/* Items */}
                <div className="flex flex-col gap-2">
                  {ach.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 p-3 rounded-lg"
                      style={{
                        background: "rgba(240,235,224,0.02)",
                        border: "1px solid rgba(240,235,224,0.04)",
                      }}
                    >
                      <span
                        style={{
                          color: ach.accent,
                          fontSize: "0.6rem",
                          marginTop: "0.2rem",
                          flexShrink: 0,
                        }}
                      >
                        ▹
                      </span>
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            color: "rgba(240,235,224,0.8)",
                            lineHeight: 1.3,
                          }}
                        >
                          {item.title}
                        </p>
                        <p
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "0.55rem",
                            color: "rgba(240,235,224,0.25)",
                            letterSpacing: "0.1em",
                            marginTop: "0.125rem",
                          }}
                        >
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Beyond Code — tag cloud */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
          }}
        >
          <div className="mb-6">
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(240,235,224,0.25)",
              }}
            >
              What drives me beyond the screen
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {beyondCode.map((tag, i) => (
              <span
                key={tag}
                style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: "100px",
                  border: "1px solid rgba(240,235,224,0.07)",
                  background: "rgba(240,235,224,0.02)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "rgba(240,235,224,0.45)",
                  cursor: "default",
                  transition: "all 0.3s ease",
                  transitionDelay: `${i * 0.04}s`,
                  animationDelay: `${i * 0.05}s`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(197,86,42,0.3)";
                  el.style.background = "rgba(197,86,42,0.05)";
                  el.style.color = "#c5562a";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(240,235,224,0.07)";
                  el.style.background = "rgba(240,235,224,0.02)";
                  el.style.color = "rgba(240,235,224,0.45)";
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
