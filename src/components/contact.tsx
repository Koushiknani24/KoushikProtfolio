"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function ContactSection() {
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

  const socialLinks = [
    {
      label: "LinkedIn",
      icon: <FaLinkedin className="w-4 h-4" />,
      href: "https://www.linkedin.com/in/koushik-vulli-45bba3355/",
    },
    {
      label: "GitHub",
      icon: <FaGithub className="w-4 h-4" />,
      href: "https://github.com/Koushiknani24",
    },
    {
      label: "Email",
      icon: <Mail className="w-4 h-4" />,
      href: "mailto:vullikoushik24@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-[#080808] py-28 md:py-40 overflow-hidden"
      style={{ borderTop: "1px solid rgba(240, 235, 224, 0.05)" }}
    >
      {/* Background atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(197,86,42,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Orbital decoration */}
      <div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none"
        aria-hidden="true"
        style={{
          opacity: isVisible ? 0.4 : 0,
          transition: "opacity 1s ease 0.5s",
        }}
      >
        {[280, 180, 100].map((size, i) => (
          <div
            key={size}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              border: "1px solid rgba(197,86,42,0.12)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation: i % 2 === 0 ? "spin-slow 30s linear infinite" : "spin-reverse 20s linear infinite",
            }}
          />
        ))}
        <div
          className="absolute rounded-full"
          style={{
            width: "6px",
            height: "6px",
            background: "#c5562a",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) translateY(-140px)",
            boxShadow: "0 0 12px rgba(197,86,42,0.6)",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Main CTA */}
        <div
          className="max-w-3xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <div className="section-label">Contact</div>

          {/* Large headline */}
          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              fontWeight: 900,
              color: "#f0ebe0",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
            }}
          >
            Let&apos;s Build
            <br />
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontStyle: "italic",
                color: "#c5562a",
                fontWeight: 700,
              }}
            >
              Something Useful.
            </span>
          </h2>

          <p
            className="mb-10"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(1rem, 1.75vw, 1.25rem)",
              lineHeight: 1.65,
              color: "rgba(240,235,224,0.5)",
              maxWidth: "520px",
            }}
          >
            Have an idea, project, business requirement, or digital product in mind?
            <br />Let&apos;s talk.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="mailto:vullikoushik24@gmail.com"
              className="btn-primary text-sm"
              style={{ fontSize: "0.875rem", padding: "1rem 2.25rem" }}
            >
              vullikoushik24@gmail.com
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background: "rgba(240,235,224,0.06)",
              marginBottom: "2rem",
            }}
          />

          {/* Footer row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

            {/* Social links */}
            <div className="flex items-center gap-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={link.label}
                  className="flex items-center gap-2"
                  style={{
                    color: "rgba(240,235,224,0.3)",
                    textDecoration: "none",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-inter), sans-serif",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#f0ebe0";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,235,224,0.3)";
                  }}
                >
                  {link.icon}
                  <span className="hidden sm:block">{link.label}</span>
                </a>
              ))}

              <div style={{ width: "1px", height: "16px", background: "rgba(240,235,224,0.1)" }} />

              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem",
                  color: "rgba(240,235,224,0.2)",
                  letterSpacing: "0.12em",
                }}
              >
                Visakhapatnam, India
              </span>
            </div>

            {/* Copyright */}
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.75rem",
                color: "rgba(240,235,224,0.15)",
              }}
            >
              © {new Date().getFullYear()} Vulli Koushik
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
