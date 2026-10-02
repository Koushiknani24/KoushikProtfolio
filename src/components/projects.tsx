/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";

// â”€â”€ Project Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const projects = [
  {
    id: "01",
    title: "CHAMS Construction",
    category: "Corporate Website Â· Web Design Â· Development",
    year: "2024",
    role: "Designer & Developer",
    description:
      "A professional corporate website created for CHAMS Construction Pte. Ltd., designed to communicate the company's commercial, industrial, and interior construction services â€” establishing a strong digital presence with a modern, responsive interface.",
    highlights: [
      "Corporate website",
      "Responsive design",
      "Service presentation",
      "SEO Â· AEO",
      "DNS configuration",
      "Google indexing",
      "Business email integration",
    ],
    tech: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "SEO", "AEO"],
    image: "/images/projects/chams-construction.png",
    liveUrl: "https://chams-construction.vercel.app",
    githubUrl: null,
    displayUrl: "chams-construction.vercel.app",
    accent: "#c5562a",
    researchBadge: null,
  },
  {
    id: "02",
    title: "CHAMS Offshore",
    category: "Corporate Website Â· Offshore Engineering Â· Web Development",
    year: "2024",
    role: "Designer & Developer",
    description:
      "A professional digital platform for CHAMS Offshore Engineering â€” Singapore-based offshore and marine engineering. Designed to present structural fabrication, piping, mechanical, electrical, and vessel support services through a clean, high-trust corporate experience.",
    highlights: [
      "Offshore engineering platform",
      "Corporate identity design",
      "Service showcase",
      "ISO badge integration",
      "biZSAFE certified display",
      "Responsive design",
    ],
    tech: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    image: "/images/projects/chams-offshore.png",
    liveUrl: "https://chams-offshore.vercel.app",
    githubUrl: null,
    displayUrl: "chams-offshore.vercel.app",
    accent: "#800020",
    researchBadge: null,
  },
  {
    id: "03",
    title: "AI News Hub",
    category: "AI Â· NLP Â· Machine Learning Â· News Intelligence",
    year: "2025",
    role: "Creator & Researcher",
    description:
      "An AI-powered real-time news intelligence platform that aggregates news from 166+ active sources, applying NLP and machine learning for multi-source clustering, summarization, sentiment analysis, credibility scoring, and trending insights.",
    highlights: [
      "80+ live stories aggregated",
      "166 active news sources",
      "Live updates every 10 min",
      "Charts & analytics dashboard",
      "Sentiment analysis engine",
      "Credibility scoring (0â€“100)",
      "Trending news detection",
    ],
    tech: [
      "Python",
      "Flask",
      "JavaScript",
      "HTML",
      "CSS",
      "SQLite",
      "NLP",
      "Machine Learning",
      "REST APIs",
    ],
    image: "/images/projects/ai-news-hub.png",
    liveUrl: "https://ai-news-hub-project.vercel.app",
    githubUrl: null,
    displayUrl: "ai-news-hub-project.vercel.app",
    accent: "#c5562a",
    researchBadge: "RESEARCH PAPER ACCEPTED Â· ISED2026 Â· NIT WARANGAL",
  },
  {
    id: "04",
    title: "ExpenCheck",
    category: "Expense Management Â· Web Application Â· Personal Finance",
    year: "2025",
    role: "Creator & Developer",
    description:
      "A premium personal finance application for monthly budget planning, expense tracking, and savings allocation â€” built around a clean obsidian dashboard. Plan every money decision with absolute clarity.",
    highlights: [
      "Monthly budget planning",
      "Expense tracking",
      "Savings allocation",
      "Personalized dashboard",
      "Authentication system",
      "Dark UI design",
    ],
    tech: ["JavaScript", "HTML", "CSS", "React", "Node.js"],
    image: "/images/projects/expen-check.png",
    liveUrl: "https://expen-check.vercel.app",
    githubUrl: null,
    displayUrl: "expen-check.vercel.app",
    accent: "#e06b3a",
    researchBadge: null,
  },
  {
    id: "05",
    title: "AISIA Civil AI Lab",
    category: "AI Â· Civil Engineering Â· Structural Health Monitoring",
    year: "2025",
    role: "Creator & Developer",
    description:
      "An AI-powered virtual laboratory for civil engineering and structural intelligence â€” combining PZT electromechanical impedance (EMI) analysis, geotechnical excavation monitoring, RMSD-based damage detection, and an ANN diagnostic engine.",
    highlights: [
      "EMI Sensor Lab (PZT spectroscopy)",
      "Electromechanical admittance curve",
      "RMSD-based damage analysis",
      "Excavation monitor",
      "AI Diagnostic Studio",
      "Sensor Network Map",
      "Structural integrity simulation",
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "AI / ML",
      "Structural Health Monitoring",
      "PZT EMI",
    ],
    image: "/images/projects/aisia-civil-ai-lab.png",
    liveUrl: "https://aisia-civil-ai-lab.vercel.app",
    githubUrl: "https://github.com/Koushiknani24/aisia-civil-ai-lab",
    displayUrl: "aisia-civil-ai-lab.vercel.app",
    accent: "#4a6fa5",
    researchBadge: null,
  },
  {
    id: "06",
    title: "SGPA & CGPA Calculator",
    category: "Web Application Â· Academic Utility",
    year: "2024",
    role: "Creator",
    description:
      "A responsive academic utility designed to simplify SGPA and CGPA calculations for students â€” using weighted grading logic with subject inputs, credit hours, grade mapping, and instant results.",
    highlights: [
      "Subject input system",
      "Credit hour weighting",
      "Grade-to-point mapping",
      "SGPA calculation",
      "CGPA tracking",
      "Student-first UI",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/sgpa-calculator.png",
    liveUrl: "https://sgpa-calculator.vercel.app",
    githubUrl: null,
    displayUrl: "sgpa-calculator.vercel.app",
    accent: "#800020",
    researchBadge: null,
  },
];

// â”€â”€ Browser Mockup â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function BrowserMockup({
  project,
  isHovered,
}: {
  project: (typeof projects)[0];
  isHovered: boolean;
}) {
  return (
    <div
      className="browser-mockup w-full"
      style={{
        transform: isHovered
          ? "translateZ(20px) scale(1.01)"
          : "translateZ(0) scale(1)",
        transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      {/* Browser chrome */}
      <div className="browser-bar">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div
          className="ml-3 flex-1 h-4 rounded-sm flex items-center px-2.5"
          style={{
            background: "rgba(255,255,255,0.04)",
            maxWidth: "280px",
          }}
        >
          <span
            style={{
              fontSize: "0.52rem",
              color: "rgba(255,255,255,0.25)",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.04em",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            ðŸ”’ {project.displayUrl}
          </span>
        </div>
      </div>

      {/* Screenshot viewport */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={project.image}
          alt={`${project.title} â€” Live Preview`}
          className="w-full h-full object-cover object-top"
          style={{
            transform: isHovered ? "scale(1.03)" : "scale(1)",
            transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            filter: isHovered ? "brightness(1.05)" : "brightness(0.88)",
          }}
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/1280x720/141414/2a2a2a?text=${encodeURIComponent(project.title)}`;
          }}
        />
        {/* Accent tint on hover */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${project.accent}18 0%, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
        {/* Live overlay */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-400"
          style={{
            background: "rgba(8,8,8,0.65)",
            opacity: isHovered ? 1 : 0,
            backdropFilter: "blur(2px)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <span
            className="flex items-center gap-2"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              fontWeight: 600,
              color: "#f0ebe0",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            <ExternalLink className="w-4 h-4" />
            Visit Live Site
          </span>
        </a>
      </div>
    </div>
  );
}

// â”€â”€ Case Study Panel â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function CaseStudyPanel({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end md:items-center justify-center"
      style={{ background: "rgba(8,8,8,0.92)", backdropFilter: "blur(16px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl mx-4 rounded-t-2xl md:rounded-2xl overflow-hidden"
        style={{
          background: "#111",
          border: "1px solid rgba(240,235,224,0.08)",
          maxHeight: "85vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky header */}
        <div
          className="sticky top-0 flex items-center justify-between px-8 py-5 z-10"
          style={{
            background: "#111",
            borderBottom: "1px solid rgba(240,235,224,0.06)",
          }}
        >
          <div>
            <div className="section-label" style={{ marginBottom: "0.25rem" }}>Case Study</div>
            <h3
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "#f0ebe0",
                letterSpacing: "-0.01em",
              }}
            >
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(240,235,224,0.06)",
              border: "1px solid rgba(240,235,224,0.08)",
              color: "rgba(240,235,224,0.5)",
            }}
            aria-label="Close case study"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-8 py-8 space-y-8">
          {[
            { label: "01 â€” Overview", content: project.description, type: "text" as const },
            { label: "02 â€” What I Built", content: project.highlights, type: "list" as const },
            { label: "03 â€” Technologies", content: project.tech, type: "chips" as const },
          ].map(({ label, content, type }) => (
            <div key={label}>
              <h4
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#c5562a",
                  marginBottom: "0.75rem",
                }}
              >
                {label}
              </h4>
              {type === "text" && (
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.9375rem", lineHeight: 1.7, color: "rgba(240,235,224,0.65)" }}>
                  {content as string}
                </p>
              )}
              {type === "list" && (
                <div className="flex flex-col gap-2">
                  {(content as string[]).map((h) => (
                    <div key={h} className="flex items-center gap-3">
                      <span style={{ color: "#c5562a", fontSize: "0.5rem" }}>â–¹</span>
                      <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.875rem", color: "rgba(240,235,224,0.6)" }}>{h}</span>
                    </div>
                  ))}
                </div>
              )}
              {type === "chips" && (
                <div className="flex flex-wrap gap-2">
                  {(content as string[]).map((t) => (
                    <span key={t} style={{ padding: "0.3rem 0.875rem", borderRadius: "100px", border: `1px solid ${project.accent}30`, background: `${project.accent}08`, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "rgba(240,235,224,0.6)", letterSpacing: "0.08em" }}>{t}</span>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div>
            <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c5562a", marginBottom: "0.75rem" }}>
              04 â€” Live Project
            </h4>
            <div className="flex gap-3 flex-wrap">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                style={{ padding: "0.75rem 1.75rem", borderRadius: "100px", background: project.accent, color: "#f0ebe0", fontFamily: "var(--font-inter), sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", textDecoration: "none" }}
              >
                Visit Live Site <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                  style={{ padding: "0.75rem 1.75rem", borderRadius: "100px", border: "1px solid rgba(240,235,224,0.12)", color: "rgba(240,235,224,0.5)", fontFamily: "var(--font-inter), sans-serif", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase", textDecoration: "none", background: "transparent" }}
                >
                  GitHub <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// â”€â”€ Individual Project Showcase â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function ProjectShowcase({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setTilt({
      x: ((e.clientY - cy) / (rect.height / 2)) * -2.5,
      y: ((e.clientX - cx) / (rect.width / 2)) * 2.5,
    });
  }, []);

  return (
    <>
      {showCaseStudy && (
        <CaseStudyPanel project={project} onClose={() => setShowCaseStudy(false)} />
      )}

      <div
        ref={ref}
        className="relative w-full"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(48px)",
          transition: `opacity 0.9s ease ${index * 0.06}s, transform 0.9s ease ${index * 0.06}s`,
        }}
      >
        {/* Project number + divider */}
        <div className="flex items-center gap-4 mb-10">
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "#c5562a", letterSpacing: "0.18em", fontWeight: 600 }}>
            {project.id}
          </span>
          <div style={{ height: "1px", flex: 1, background: "linear-gradient(to right, rgba(197,86,42,0.2), transparent)" }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5rem", color: "rgba(240,235,224,0.18)", letterSpacing: "0.15em" }}>
            {project.year}
          </span>
        </div>

        {/* Alternating layout */}
        <div
          className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-14 items-center`}
          style={{ perspective: "1200px" }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => { setIsHovered(false); setTilt({ x: 0, y: 0 }); }}
        >
          {/* Browser mockup â€” 60% */}
          <div
            className="w-full lg:w-[60%] flex-shrink-0"
            style={{
              transform: isHovered
                ? `rotateX(${tilt.x}deg) rotateY(${isEven ? tilt.y : -tilt.y}deg)`
                : "rotateX(0deg) rotateY(0deg)",
              transition: isHovered
                ? "transform 0.15s cubic-bezier(0.25,0.46,0.45,0.94)"
                : "transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)",
              transformStyle: "preserve-3d",
            }}
          >
            <BrowserMockup project={project} isHovered={isHovered} />
          </div>

          {/* Content panel */}
          <div
            className="w-full lg:flex-1 flex flex-col justify-center"
            style={{
              transform: isHovered ? "translateZ(12px)" : "translateZ(0)",
              transition: "transform 0.5s ease",
            }}
          >
            <div
              className="mb-3"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.55rem",
                color: "rgba(240,235,224,0.3)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              {project.category}
            </div>

            <h3
              className="mb-3"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 800,
                color: "#f0ebe0",
                letterSpacing: "-0.025em",
                lineHeight: 1.05,
              }}
            >
              {project.title}
            </h3>

            {/* Research badge */}
            {project.researchBadge && (
              <div
                className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full self-start"
                style={{ background: "rgba(197,86,42,0.08)", border: "1px solid rgba(197,86,42,0.2)" }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#c5562a", animation: "pulse-glow 2s ease-in-out infinite" }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.48rem", color: "#c5562a", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600 }}>
                  {project.researchBadge}
                </span>
              </div>
            )}

            <div className="mb-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", color: "rgba(240,235,224,0.22)", letterSpacing: "0.1em" }}>
              {project.role}
            </div>

            <p
              className="mb-6"
              style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(240,235,224,0.5)" }}
            >
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-7">
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "0.2rem 0.65rem",
                    borderRadius: "100px",
                    border: "1px solid rgba(240,235,224,0.08)",
                    background: "rgba(240,235,224,0.02)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.57rem",
                    color: "rgba(240,235,224,0.38)",
                    letterSpacing: "0.07em",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                style={{
                  padding: "0.7rem 1.4rem",
                  borderRadius: "100px",
                  background: project.accent,
                  color: "#f0ebe0",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 12px 32px ${project.accent}40`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "";
                }}
              >
                Live Project <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                  style={{
                    padding: "0.7rem 1.4rem",
                    borderRadius: "100px",
                    border: "1px solid rgba(240,235,224,0.12)",
                    background: "transparent",
                    color: "rgba(240,235,224,0.5)",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "rgba(240,235,224,0.3)";
                    el.style.color = "#f0ebe0";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "rgba(240,235,224,0.12)";
                    el.style.color = "rgba(240,235,224,0.5)";
                    el.style.transform = "";
                  }}
                >
                  GitHub <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                onClick={() => setShowCaseStudy(true)}
                className="inline-flex items-center gap-2"
                style={{
                  padding: "0.7rem 1.4rem",
                  borderRadius: "100px",
                  border: "1px solid rgba(240,235,224,0.08)",
                  background: "transparent",
                  color: "rgba(240,235,224,0.3)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.borderColor = `${project.accent}30`;
                  el.style.color = project.accent;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.borderColor = "rgba(240,235,224,0.08)";
                  el.style.color = "rgba(240,235,224,0.3)";
                }}
              >
                Case Study â†’
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// â”€â”€ Main Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export function ProjectsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filters = ["ALL", "WEB", "AI / ML", "APPLICATIONS"];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "WEB")
      return (
        p.category.toLowerCase().includes("website") ||
        p.category.toLowerCase().includes("web")
      );
    if (activeFilter === "AI / ML")
      return (
        p.category.toLowerCase().includes("ai") ||
        p.category.toLowerCase().includes("nlp") ||
        p.category.toLowerCase().includes("machine") ||
        p.category.toLowerCase().includes("structural health")
      );
    if (activeFilter === "APPLICATIONS")
      return (
        p.category.toLowerCase().includes("application") ||
        p.category.toLowerCase().includes("utility") ||
        p.category.toLowerCase().includes("finance") ||
        p.category.toLowerCase().includes("expense")
      );
    return true;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      className="relative w-full bg-[#080808] py-28 md:py-36 overflow-hidden"
      style={{ borderTop: "1px solid rgba(240, 235, 224, 0.05)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(197,86,42,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        {/* â”€â”€ Header â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div
          ref={headerRef}
          className="mb-16 md:mb-20"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="section-label">Selected Work</div>
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(1.875rem, 4vw, 3.25rem)",
              fontWeight: 800,
              color: "#f0ebe0",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
            }}
          >
            Projects That Turn{" "}
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontStyle: "italic",
                color: "#c5562a",
              }}
            >
              Ideas Into Products.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "1rem",
              color: "rgba(240,235,224,0.4)",
              maxWidth: "520px",
              lineHeight: 1.65,
            }}
          >
            A selection of websites, AI systems, applications, and digital
            products I&apos;ve designed and developed.
          </p>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mt-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: "0.4rem 1rem",
                  borderRadius: "100px",
                  border: `1px solid ${activeFilter === f ? "rgba(197,86,42,0.4)" : "rgba(240,235,224,0.07)"}`,
                  background:
                    activeFilter === f ? "rgba(197,86,42,0.08)" : "transparent",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.57rem",
                  fontWeight: 500,
                  color:
                    activeFilter === f
                      ? "#c5562a"
                      : "rgba(240,235,224,0.3)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                  cursor: "none",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* â”€â”€ Project Showcases â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className="flex flex-col gap-28 md:gap-36">
          {filteredProjects.map((project, i) => (
            <ProjectShowcase key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
