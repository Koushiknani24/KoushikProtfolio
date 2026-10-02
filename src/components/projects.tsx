/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "AI News Hub",
    subtitle: "Research · AI · Full-Stack",
    year: "2025",
    role: "Creator & Researcher",
    description:
      "A modular real-time system for multi-source news aggregation, intelligent clustering, AI-powered summarization, and credibility analysis. Accepted at ISED2026, NIT Warangal.",
    tech: ["Python", "NLP", "Hugging Face", "Machine Learning", "React", "SQLite"],
    image: "/images/about/DailyRotine2.jpeg",
    github: "https://github.com/Koushiknani24",
    accent: "#c5562a",
  },
  {
    id: "02",
    title: "CHAMS Construction",
    subtitle: "Web Design · Corporate Website",
    year: "2024",
    role: "Designer & Developer",
    description:
      "A premium corporate website for a construction company — designed with a strong editorial aesthetic, responsive layout, and focus on professional credibility.",
    tech: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    image: "/images/experience/Internship.jpeg",
    accent: "#800020",
  },
  {
    id: "03",
    title: "Academic SGPA & CGPA Calculator",
    subtitle: "Tool · Utility · Student",
    year: "2024",
    role: "Creator",
    description:
      "A clean, intuitive calculator for students to track their academic performance. Simple UI designed around real student needs.",
    tech: ["JavaScript", "HTML", "CSS", "React"],
    image: "/images/about/DailyRotine.jpeg",
    accent: "#4a0010",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rx = ((e.clientY - cy) / (rect.height / 2)) * -4;
    const ry = ((e.clientX - cx) / (rect.width / 2)) * 4;
    setRotation({ x: rx, y: ry });
  };

  return (
    <div
      ref={cardRef}
      className="w-full"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`,
      }}
    >
      <div
        className="relative w-full"
        style={{ perspective: "1000px" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setRotation({ x: 0, y: 0 }); }}
      >
        <div
          className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 w-full"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: "preserve-3d",
            transition: isHovered
              ? "transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              : "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {/* Image: Browser Mockup */}
          <div
            className="browser-mockup w-full lg:w-[55%] flex-shrink-0"
            style={{
              transform: isHovered ? "translateZ(20px)" : "translateZ(0)",
              transition: "transform 0.4s ease",
            }}
          >
            <div className="browser-bar">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <div
                className="ml-3 flex-1 h-4 rounded-sm flex items-center px-2"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  maxWidth: "200px",
                }}
              >
                <span
                  style={{
                    fontSize: "0.55rem",
                    color: "rgba(255,255,255,0.2)",
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: "0.05em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {project.title.toLowerCase().replace(/\s+/g, "-")}.vercel.app
                </span>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                style={{
                  transform: isHovered ? "scale(1.04)" : "scale(1)",
                  transition: "transform 0.6s ease",
                  filter: isHovered ? "brightness(1.05)" : "brightness(0.8)",
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    `https://placehold.co/1200x675/141414/2a2a2a?text=${encodeURIComponent(project.title)}`;
                }}
              />
              {/* Accent gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${project.accent}20 0%, transparent 60%)`,
                  opacity: isHovered ? 0.6 : 0,
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div
            className="flex-1 flex flex-col justify-center"
            style={{
              transform: isHovered ? "translateZ(30px)" : "translateZ(0)",
              transition: "transform 0.4s ease",
            }}
          >
            {/* Project number */}
            <div className="flex items-center gap-3 mb-4">
              <span
                style={{
                  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                  fontSize: "0.6rem",
                  color: "#c5562a",
                  letterSpacing: "0.15em",
                }}
              >
                {project.id}
              </span>
              <div style={{ height: "1px", width: "2rem", background: "rgba(197,86,42,0.3)" }} />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                  fontSize: "0.55rem",
                  color: "rgba(240,235,224,0.3)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                {project.subtitle}
              </span>
            </div>

            <h3
              className="mb-3"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: 800,
                color: "#f0ebe0",
                letterSpacing: "-0.025em",
                lineHeight: 1.05,
              }}
            >
              {project.title}
            </h3>

            {/* Meta */}
            <div className="flex gap-4 mb-5">
              <span
                style={{
                  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                  fontSize: "0.6rem",
                  color: "rgba(240,235,224,0.3)",
                  letterSpacing: "0.1em",
                }}
              >
                {project.year}
              </span>
              <span style={{ color: "rgba(240,235,224,0.1)", fontSize: "0.6rem" }}>·</span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                  fontSize: "0.6rem",
                  color: "rgba(240,235,224,0.3)",
                  letterSpacing: "0.1em",
                }}
              >
                {project.role}
              </span>
            </div>

            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "rgba(240,235,224,0.55)",
              }}
            >
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "0.25rem 0.75rem",
                    borderRadius: "100px",
                    border: "1px solid rgba(240,235,224,0.08)",
                    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                    fontSize: "0.6rem",
                    color: "rgba(240,235,224,0.45)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#c5562a",
                    textDecoration: "none",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
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

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative w-full bg-[#080808] py-28 md:py-36 overflow-hidden"
      style={{ borderTop: "1px solid rgba(240, 235, 224, 0.05)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="mb-20 md:mb-24">
          <div className="section-label">Work</div>
          <h2
            className="text-heading mb-4"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              color: "#f0ebe0",
            }}
          >
            Selected{" "}
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontStyle: "italic",
                color: "#c5562a",
              }}
            >
              Projects
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "1rem",
              color: "rgba(240,235,224,0.4)",
              maxWidth: "480px",
              lineHeight: 1.6,
            }}
          >
            A selection of work spanning AI systems, web applications, and digital products.
          </p>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
