/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Experience", href: "#experience" },
    { name: "Research", href: "#research" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "py-4 bg-premium-black/80 backdrop-blur-md border-b border-white/5" : "py-6 bg-transparent"
    )}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-bone-white text-premium-black rounded-lg flex items-center justify-center font-bold text-xl">
            K
          </div>
          <span className="text-bone-white font-bold tracking-wide hidden sm:block">Koushik</span>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-bone-white/70 hover:text-burnt-sienna transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-6 py-2.5 rounded-full bg-burnt-sienna text-bone-white text-sm font-semibold hover:bg-bone-white hover:text-premium-black transition-colors">
            Let's Talk
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 text-bone-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={cn(
        "md:hidden absolute top-full left-0 w-full bg-premium-black/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 overflow-hidden",
        isMobileMenuOpen ? "max-h-[400px] py-4" : "max-h-0 py-0"
      )}>
        <div className="flex flex-col px-6 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-bone-white/80 hover:text-burnt-sienna transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="mt-4 px-6 py-3 rounded-full bg-burnt-sienna text-bone-white font-semibold text-center w-full">
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
}
