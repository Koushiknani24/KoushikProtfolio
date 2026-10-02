/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const leadershipRoles = [
  {
    role: "Student Chapter Head",
    sub: "Andhra Pradesh",
    org: "GARRF.in",
    period: "2025 – 2026",
    description:
      "Leading the Andhra Pradesh student chapter of GARRF — organizing events, building community, and coordinating regional activities.",
    image: "/images/leadership/GarrfImage.jpeg",
    link: "https://garrf.in/",
    linkText: "garrf.in",
  },
  {
    role: "Student Campus Ambassador",
    sub: null,
    org: "GITAM University",
    period: "2023 – Present",
    description:
      "Representing GITAM University to prospective students, participating in outreach programs, and engaging with the campus community.",
    image: "/images/leadership/GarrfImage.jpeg",
    link: "https://www.gitam.edu/chat-with-a-student-ambassador",
    linkText: "gitam.edu",
  },
];

export function LeadershipSection() {
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
      id="leadership"
      ref={sectionRef}
      className="relative w-full bg-[#080808] py-28 md:py-36 overflow-hidden"
      style={{ borderTop: "1px solid rgba(240, 235, 224, 0.05)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 60%, rgba(74,0,16,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        <div className="mb-16 md:mb-20">
          <div className="section-label">Leadership</div>
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
            Community &{" "}
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontStyle: "italic",
                color: "#c5562a",
              }}
            >
              Leadership
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipRoles.map((role, i) => (
            <div
              key={role.org}
              className="premium-card overflow-hidden group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.8s ease ${i * 0.15}s, transform 0.8s ease ${i * 0.15}s`,
              }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={role.image}
                  alt={role.org}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "brightness(0.6) saturate(0.7)" }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      `https://placehold.co/800x450/141414/2a2a2a?text=${encodeURIComponent(role.org)}`;
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 30%, rgba(20,20,20,0.9) 100%)",
                  }}
                />

                {/* Org badge */}
                <div
                  className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(197,86,42,0.9)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      color: "#f0ebe0",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {role.org}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "1.125rem",
                        fontWeight: 700,
                        color: "#f0ebe0",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.2,
                        marginBottom: "0.25rem",
                      }}
                    >
                      {role.role}
                    </h3>
                    {role.sub && (
                      <p
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontSize: "0.8rem",
                          color: "#c5562a",
                          fontWeight: 500,
                        }}
                      >
                        {role.sub}
                      </p>
                    )}
                  </div>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      color: "rgba(240,235,224,0.25)",
                      letterSpacing: "0.1em",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {role.period}
                  </span>
                </div>

                <p
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "rgba(240,235,224,0.5)",
                  }}
                >
                  {role.description}
                </p>

                <a
                  href={role.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    color: "rgba(240,235,224,0.3)",
                    textDecoration: "none",
                    letterSpacing: "0.1em",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#c5562a";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,235,224,0.3)";
                  }}
                >
                  {role.linkText}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
