/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function PortfolioHero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const maskSizeRef = useRef(0);
  const targetMaskRef = useRef(0);
  const mouseXRef = useRef(50);
  const mouseYRef = useRef(50);
  const rafRef = useRef<number>(0);

  // Check mobile on mount
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768 || window.matchMedia("(hover: none)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const getMaskSize = useCallback(() => {
    if (isMobile) return Math.min(window.innerWidth * 0.58, 240);
    return Math.min(window.innerWidth * 0.24, 380);
  }, [isMobile]);

  // Smooth animation loop
  useEffect(() => {
    const animate = () => {
      const container = imageWrapRef.current;
      if (!container) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      // Lerp mask size
      maskSizeRef.current += (targetMaskRef.current - maskSizeRef.current) * 0.1;

      container.style.setProperty("--mask-size", `${maskSizeRef.current}px`);
      container.style.setProperty("--mouse-x", `${mouseXRef.current}%`);
      container.style.setProperty("--mouse-y", `${mouseYRef.current}%`);

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Pointer move handler
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (!hasInteracted) setHasInteracted(true);

      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      mouseXRef.current = x;
      mouseYRef.current = y;
      targetMaskRef.current = getMaskSize();

      // Subtle parallax on content
      const px = (e.clientX / window.innerWidth - 0.5) * 2;
      const py = (e.clientY / window.innerHeight - 0.5) * 2;
      container.style.setProperty("--parallax-x", `${px}`);
      container.style.setProperty("--parallax-y", `${py}`);
    };

    const handlePointerLeave = () => {
      targetMaskRef.current = 0;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    container.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [hasInteracted, getMaskSize]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full overflow-hidden bg-[#080808]"
      style={{
        height: "100dvh",
        minHeight: "600px",
        "--parallax-x": "0",
        "--parallax-y": "0",
      } as React.CSSProperties}
      aria-label="Hero section"
    >
      {/* ===== FULL-SCREEN IMAGE SYSTEM ===== */}
      <div
        ref={imageWrapRef}
        className="absolute inset-[-2%] w-[104%] h-[104%] z-0 image-reveal-container"
        style={{
          transform:
            "translate(calc(var(--parallax-x) * -8px), calc(var(--parallax-y) * -8px)) scale(1.02)",
          transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          "--mouse-x": "50%",
          "--mouse-y": "50%",
          "--mask-size": "0px",
        } as React.CSSProperties}
      >
        {/* Base Image */}
        <img
          src="/images/hero/Base_image.jpeg"
          alt="Vulli Koushik — Professional Portrait"
          className="image-base"
          priority-fetch="high"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://placehold.co/1920x1080/080808/1a1a1a?text=.";
          }}
        />

        {/* Dark cinematic gradient — covers left 55% of image for text readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0) 75%)",
          }}
        />
        {/* Bottom fade for scroll indicator */}
        <div
          className="absolute bottom-0 left-0 w-full h-40 pointer-events-none"
          style={{
            background: "linear-gradient(to top, #080808 0%, transparent 100%)",
          }}
        />
        {/* Top fade */}
        <div
          className="absolute top-0 left-0 w-full h-24 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(8,8,8,0.6) 0%, transparent 100%)",
          }}
        />

        {/* Reveal Image (Futuristic/AI version) */}
        <img
          src="/images/hero/Reveal_image.jpeg"
          alt="Vulli Koushik — AI Transformation"
          className="image-reveal"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />

        {/* Reveal gradient overlay (same pattern, ensures readability) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0) 75%)",
            maskImage: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), transparent 0%, transparent calc(var(--mask-size) - 55px), black var(--mask-size))`,
            WebkitMaskImage: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), transparent 0%, transparent calc(var(--mask-size) - 55px), black var(--mask-size))`,
          }}
        />
      </div>

      {/* ===== REVEAL HINT (before first interaction) ===== */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 transition-all duration-700"
        style={{ opacity: hasInteracted ? 0 : 1 }}
        aria-hidden="true"
      >
        <div
          className="flex flex-col items-center gap-3"
          style={{
            marginLeft: "auto",
            marginRight: "8vw",
            marginBottom: "-15vh",
          }}
        >
          <div
            className="w-12 h-12 rounded-full border border-bone-white/20 flex items-center justify-center"
            style={{ animation: "pulse-glow 2.5s ease-in-out infinite" }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full bg-burnt-sienna"
              style={{ animation: "float 1.8s ease-in-out infinite" }}
            />
          </div>
          <span
            className="text-bone-white/40"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {isMobile ? "Touch to Reveal" : "Move to Reveal"}
          </span>
        </div>
      </div>

      {/* ===== MAIN CONTENT LAYER ===== */}
      <div
        className="absolute inset-0 z-10 flex flex-col h-full px-6 md:px-[5vw] pt-24 pb-12 pointer-events-none"
        style={{
          transform:
            "translate(calc(var(--parallax-x) * 4px), calc(var(--parallax-y) * 4px))",
          transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        {/* ===== HERO COPY (LEFT SIDE) ===== */}
        <div className="flex-1 flex flex-col justify-center w-full md:w-[40vw] max-w-[650px] pointer-events-auto">

          {/* Eyebrow */}
          <div
            className="animate-fadeInUp mb-5"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            <span
              className="text-bone-white/35"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontWeight: 500,
                fontFamily: "'JetBrains Mono', 'Courier New', monospace",
              }}
            >
              IDEAS → CODE → DESIGN → IMPACT
            </span>
          </div>

          {/* I'm text */}
          <div
            className="animate-fadeInUp delay-100 mb-1"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
              fontWeight: 700,
              color: "rgba(240, 235, 224, 0.65)",
              letterSpacing: "-0.01em",
            }}
          >
            I&apos;m
          </div>

          {/* KOUSHIK — Hero Name */}
          <h1
            className="animate-fadeInUp delay-200"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(3.25rem, 8vw, 7.2rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.055em",
              fontWeight: 800,
              color: "#f0ebe0",
              marginBottom: "1rem",
              textShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            KOUSHIK
          </h1>

          {/* Role */}
          <div
            className="animate-fadeInUp delay-300 mb-3"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1rem, 1.5vw, 1.35rem)",
              fontStyle: "italic",
              fontWeight: 700,
              color: "#c5562a",
              letterSpacing: "0.01em",
            }}
          >
            AI + Software Developer
          </div>

          {/* Sub-roles */}
          <div
            className="animate-fadeInUp delay-400 mb-6"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(0.56rem, 0.65vw, 0.65rem)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: "rgba(240, 235, 224, 0.35)",
            }}
          >
            Full-Stack Developer&nbsp; · &nbsp;Product Builder&nbsp; · &nbsp;Designer
          </div>

          {/* Description */}
          <div
            className="animate-fadeInUp delay-500 mb-8 flex gap-4 max-w-[440px]"
          >
            <div className="w-px min-h-full bg-burnt-sienna/50 flex-shrink-0 mt-1" />
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                lineHeight: 1.7,
                color: "rgba(240, 235, 224, 0.65)",
                fontWeight: 400,
              }}
            >
              Building useful software, digital experiences, and AI-powered solutions —
              from ideas and interfaces to working products.
            </p>
          </div>

          {/* CTAs */}
          <div className="animate-fadeInUp delay-600 flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#work"
              className="btn-outline"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
            </a>
          </div>

          {/* Social Links */}
          <div className="animate-fadeInUp delay-700 hidden sm:flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/koushik-vulli-45bba3355/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone-white/30 hover:text-bone-white/80 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Koushiknani24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone-white/30 hover:text-bone-white/80 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="mailto:vullikoushik24@gmail.com"
              className="text-bone-white/30 hover:text-bone-white/80 transition-colors duration-300"
              aria-label="Email"
            >
              <MdEmail className="w-4.5 h-4.5" />
            </a>

            {/* Divider */}
            <div className="w-px h-4 bg-bone-white/10" />

            <span
              style={{
                fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                color: "rgba(240,235,224,0.25)",
                textTransform: "uppercase",
              }}
            >
              Visakhapatnam, India
            </span>
          </div>
        </div>

        {/* ===== BOTTOM ROW ===== */}
        <div className="flex items-end justify-between pointer-events-auto">

          {/* Scroll indicator */}
          <div className="flex flex-col items-start gap-2 pb-1">
            <div
              className="w-px h-12 bg-gradient-to-b from-transparent to-bone-white/30"
              style={{ animation: "float 2s ease-in-out infinite" }}
            />
            <span
              style={{
                fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(240,235,224,0.25)",
                writingMode: "horizontal-tb",
              }}
            >
              Scroll
            </span>
            <ArrowDown className="w-3 h-3 text-bone-white/20" />
          </div>

          {/* Right side — Editorial text */}
          <div
            className="hidden lg:flex flex-col items-end gap-3 text-right"
            style={{
              fontFamily: "'JetBrains Mono', 'Courier New', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(240,235,224,0.2)",
              fontWeight: 500,
            }}
          >
            <span>BUILD</span>
            <span>LEARN</span>
            <span>RESEARCH</span>
            <span>GROW</span>
            <div className="w-8 h-px bg-bone-white/15 mt-1 ml-auto" />
            <span className="text-bone-white/10">ON TO BIGGER THINGS</span>
          </div>
        </div>
      </div>

      {/* ===== RIGHT SIDE — Subtle orbit decoration ===== */}
      <div
        className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none z-5"
        aria-hidden="true"
        style={{
          transform: "translate(calc(var(--parallax-x) * -12px), calc(var(--parallax-y) * -12px)) translateY(-50%)",
          transition: "transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        {/* Thin orbital rings */}
        <div
          className="absolute"
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            border: "1px solid rgba(240,235,224,0.04)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animation: "spin-slow 30s linear infinite",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-4px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#c5562a",
              boxShadow: "0 0 12px rgba(197,86,42,0.5)",
            }}
          />
        </div>
        <div
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            border: "1px solid rgba(240,235,224,0.03)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animation: "spin-reverse 20s linear infinite",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "-3px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "rgba(240,235,224,0.3)",
              boxShadow: "0 0 8px rgba(240,235,224,0.2)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
