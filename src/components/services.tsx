/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { id: "01", title: "Websites", short: "Business · Portfolio · Landing", description: "Modern websites built for businesses, startups, brands, and individuals. SEO-optimized, responsive, and designed to convert." },
  { id: "02", title: "Web Applications", short: "Dashboards · Tools · Systems", description: "Custom web applications built around specific business or software requirements — from management systems to customer-facing apps." },
  { id: "03", title: "Apps & Digital Products", short: "Prototypes · MVPs · Features", description: "Turning ideas into practical digital products. Application interfaces, user flows, and feature development." },
  { id: "04", title: "UI/UX Design", short: "Interfaces · Flows · Systems", description: "Clean, intuitive interfaces designed around users and real product requirements. From wireframes to polished design systems." },
  { id: "05", title: "AI Solutions", short: "NLP · Integration · Automation", description: "Adding AI capabilities to software and digital products. NLP solutions, intelligent applications, and AI-assisted workflows." },
  { id: "06", title: "Automation", short: "Workflows · APIs · Processes", description: "Automating repetitive processes and improving the way businesses work. Workflow automation, API integrations, and data automation." },
  { id: "07", title: "Software Development", short: "Full-Stack · APIs · Integration", description: "Building custom software around a specific requirement or problem. Frontend, backend, and third-party integrations." },
  { id: "08", title: "Maintenance & Support", short: "Updates · Fixes · Improvements", description: "Keeping existing digital products reliable, updated, and improving over time. Bug fixes, feature additions, and ongoing development." },
  { id: "09", title: "Business Technology", short: "Consulting · Strategy · Growth", description: "Technology support for businesses that need a developer to work with directly. From requirements to digital transformation." },
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
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
      id="services"
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
            "radial-gradient(ellipse 50% 60% at 20% 50%, rgba(74,0,16,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="section-label">Services</div>
          <h2
            className="text-heading"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              color: "#f0ebe0",
              maxWidth: "700px",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            What I{" "}
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontStyle: "italic",
                color: "#c5562a",
              }}
            >
              Build
            </span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left: Service list */}
          <div
            className="flex-1 lg:max-w-lg"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            {services.map((service, i) => (
              <div
                key={service.id}
                onClick={() => setActiveIndex(i)}
                className="group"
                style={{
                  borderBottom: "1px solid rgba(240, 235, 224, 0.06)",
                  cursor: "none",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  className="flex items-center justify-between py-4 px-3 rounded-lg transition-all duration-300"
                  style={{
                    background: activeIndex === i ? "rgba(197, 86, 42, 0.05)" : "transparent",
                    paddingLeft: activeIndex === i ? "1.25rem" : "0.75rem",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                        fontSize: "0.6rem",
                        color: activeIndex === i ? "#c5562a" : "rgba(240,235,224,0.2)",
                        letterSpacing: "0.1em",
                        transition: "color 0.3s",
                        minWidth: "1.5rem",
                      }}
                    >
                      {service.id}
                    </span>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
                          fontWeight: 600,
                          color: activeIndex === i ? "#f0ebe0" : "rgba(240,235,224,0.45)",
                          letterSpacing: "-0.01em",
                          transition: "color 0.3s",
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                          fontSize: "0.6rem",
                          color: "rgba(240,235,224,0.25)",
                          letterSpacing: "0.1em",
                          marginTop: "0.125rem",
                        }}
                      >
                        {service.short}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 flex-shrink-0"
                    style={{
                      color: activeIndex === i ? "#c5562a" : "rgba(240,235,224,0.1)",
                      transform: activeIndex === i ? "rotate(0deg)" : "rotate(45deg)",
                      transition: "color 0.3s, transform 0.3s",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right: Detail panel */}
          <div
            className="flex-1 lg:sticky lg:top-32 lg:self-start"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
            }}
          >
            <div
              className="premium-card p-8 md:p-10 min-h-[280px]"
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Accent top line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "2px",
                  width: "60px",
                  background: "#c5562a",
                  borderRadius: "0 0 2px 0",
                  transition: "width 0.4s ease",
                }}
              />

              {/* Content */}
              <div key={activeIndex}>
                <div
                  className="flex items-center gap-3 mb-6"
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                      fontSize: "0.65rem",
                      color: "#c5562a",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {services[activeIndex].id}
                  </span>
                  <div
                    style={{
                      height: "1px",
                      width: "2rem",
                      background: "rgba(197,86,42,0.3)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.2em",
                      color: "rgba(240,235,224,0.25)",
                      textTransform: "uppercase",
                    }}
                  >
                    Capability
                  </span>
                </div>

                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    fontWeight: 800,
                    color: "#f0ebe0",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.1,
                  }}
                >
                  {services[activeIndex].title}
                </h3>

                <p
                  className="mb-8"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    color: "rgba(240,235,224,0.6)",
                  }}
                >
                  {services[activeIndex].description}
                </p>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#c5562a",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    transition: "gap 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.gap = "0.5rem";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.gap = "0.375rem";
                  }}
                >
                  Let's discuss this
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Background number */}
              <div
                className="absolute bottom-4 right-6 pointer-events-none select-none"
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "7rem",
                  fontWeight: 900,
                  color: "rgba(240,235,224,0.02)",
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                }}
              >
                {services[activeIndex].id}
              </div>
            </div>

            {/* CTA card */}
            <div
              className="mt-6 p-6 rounded-xl flex items-center justify-between gap-4"
              style={{
                background: "rgba(197, 86, 42, 0.06)",
                border: "1px solid rgba(197, 86, 42, 0.12)",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#f0ebe0",
                    marginBottom: "0.25rem",
                  }}
                >
                  Have a project in mind?
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(240,235,224,0.45)",
                  }}
                >
                  Let's turn your idea into reality.
                </p>
              </div>
              <a
                href="mailto:vullikoushik24@gmail.com"
                className="btn-primary flex-shrink-0"
                style={{ fontSize: "0.7rem", padding: "0.625rem 1.25rem" }}
              >
                Talk →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
