"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 60);
      // Hide nav when scrolling down quickly, show when scrolling up
      if (currentScrollY > lastScrollY + 8 && currentScrollY > 200) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY - 8) {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          isScrolled
            ? "py-3 bg-[#080808]/90 backdrop-blur-xl border-b border-white/[0.04]"
            : "py-5 bg-transparent",
          isHidden && !isMobileMenuOpen ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">

          {/* Left: K Monogram */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="group flex items-center justify-center"
            aria-label="Back to top"
            style={{ textDecoration: "none" }}
          >
            <div
              className="relative flex items-center justify-center"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                border: "1px solid rgba(197,86,42,0.25)",
                background: "rgba(197,86,42,0.06)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(197,86,42,0.6)";
                (e.currentTarget as HTMLElement).style.background = "rgba(197,86,42,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(197,86,42,0.25)";
                (e.currentTarget as HTMLElement).style.background = "rgba(197,86,42,0.06)";
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 800,
                  color: "#c5562a",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                K
              </span>
            </div>
          </a>

          {/* Center: Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="relative text-[0.7rem] font-medium text-bone-white/50 hover:text-bone-white/90 tracking-[0.12em] uppercase transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-burnt-sienna group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right: CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-burnt-sienna/60 text-burnt-sienna text-[0.7rem] font-semibold tracking-[0.1em] uppercase hover:bg-burnt-sienna hover:text-bone-white transition-all duration-300"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-3 h-3" />
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-bone-white transition-all duration-300 hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-2xl md:hidden flex flex-col transition-all duration-500",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-4xl font-bold text-bone-white/30 hover:text-bone-white transition-all duration-300"
              style={{
                transitionDelay: isMobileMenuOpen ? `${i * 60}ms` : "0ms",
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isMobileMenuOpen ? 1 : 0,
                fontFamily: "var(--font-inter), sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="mt-4 btn-primary"
            style={{ transitionDelay: isMobileMenuOpen ? `${navLinks.length * 60}ms` : "0ms" }}
          >
            Let&apos;s Talk →
          </a>
        </div>
      </div>
    </>
  );
}
