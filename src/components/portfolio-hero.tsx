/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { MoveRight, Mail } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export function PortfolioHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      setHasInteracted(prev => prev ? true : true);
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      
      // Update custom cursor if it exists
      const cursor = document.querySelector(".custom-cursor") as HTMLElement;
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        if (isHovering) {
          cursor.classList.add("hovering");
        } else {
          cursor.classList.remove("hovering");
        }
      }

      // Update CSS variables for subtle parallax effect (values from -1 to 1)
      requestAnimationFrame(() => {
        if (containerRef.current) {
          const moveX = ((e.clientX / window.innerWidth) - 0.5) * 2; // -1 to 1
          const moveY = ((e.clientY / window.innerHeight) - 0.5) * 2; // -1 to 1
          containerRef.current.style.setProperty("--parallax-x", `${moveX}`);
          containerRef.current.style.setProperty("--parallax-y", `${moveY}`);
          containerRef.current.style.setProperty("--mouse-x", `${x}%`);
          containerRef.current.style.setProperty("--mouse-y", `${y}%`);
        }
      });
    };

    window.addEventListener("pointermove", handlePointerMove);
    
    // Create cursor element if it doesn't exist
    if (!document.querySelector(".custom-cursor")) {
      const cursor = document.createElement("div");
      cursor.className = "custom-cursor hidden md:block";
      document.body.appendChild(cursor);
    }
    
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      const cursor = document.querySelector(".custom-cursor");
      if (cursor) {
        cursor.remove();
      }
    };
  }, [isHovering]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden bg-premium-black flex items-center"
      style={{
        '--parallax-x': '0',
        '--parallax-y': '0',
        '--mouse-x': '50%',
        '--mouse-y': '50%',
        '--mask-size': '250px'
      } as React.CSSProperties}
    >
      {/* Full Screen Cinematic Image with Subtle Parallax */}
      <div 
        className="absolute inset-[-2%] w-[104%] h-[104%] z-0 pointer-events-none transition-transform duration-700 ease-out image-reveal-container"
        style={{
          transform: 'translate(calc(var(--parallax-x) * -10px), calc(var(--parallax-y) * -10px)) scale(1.02)'
        }}
      >
        <img 
          src="/images/hero/Base_image.jpeg" 
          alt="Professional Portrait" 
          className="image-base absolute inset-0 w-full h-full object-cover object-center opacity-90"
          onError={(e) => (e.target as HTMLElement).style.display = 'none'}
        />
        
        {/* Subtle dark/black cinematic gradient over the LEFT 50–60% for Base Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-premium-black/90 via-premium-black/50 to-transparent w-[60%]" />
        {/* Softer bottom gradient for the navigation/scroll area */}
        <div className="absolute inset-0 bg-gradient-to-t from-premium-black/70 via-transparent to-transparent h-1/3 mt-auto" />

        <img 
          src="/images/hero/Reveal_image.jpeg" 
          alt="Motorcycle Rider Identity" 
          className="image-reveal absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 opacity-100"
          onError={(e) => (e.target as HTMLElement).style.display = 'none'}
        />
      </div>

      {/* Subtle Hint */}
      <div 
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-1000 z-20 ${hasInteracted ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="flex flex-col items-center gap-2 text-bone-white/60">
          <div className="w-12 h-12 rounded-full border border-bone-white/30 flex items-center justify-center animate-pulse">
            <div className="w-1.5 h-1.5 bg-bone-white rounded-full" />
          </div>
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">Move to Reveal</span>
        </div>
      </div>

      {/* Content Layer with Subtle Opposite Parallax */}
      <div 
        className="container mx-auto px-6 md:px-[6vw] relative z-10 flex flex-col justify-center h-full pt-20 transition-transform duration-700 ease-out pointer-events-none"
        style={{
          transform: 'translate(calc(var(--parallax-x) * 5px), calc(var(--parallax-y) * 5px))'
        }}
      >
        
        {/* Typography Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center mt-auto md:mt-0 pointer-events-auto">
          
          <p className="text-bone-white/50 text-[10px] md:text-xs tracking-[0.3em] font-semibold uppercase mb-8">
            IDEAS → CODE → DESIGN → IMPACT
          </p>
          
          <h2 className="text-bone-white text-3xl md:text-4xl font-bold mb-2 tracking-tight">
            I'm
          </h2>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-none mb-4 tracking-tighter" style={{ textShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
            <span className="text-bone-white">KOU</span><span className="text-burnt-sienna">SHIK</span>
          </h1>
          
          <h3 className="text-2xl md:text-4xl font-bold text-bone-white mb-6">
            AI + Software Developer
          </h3>
          
          <p className="text-bone-white/60 font-semibold mb-8 text-[11px] md:text-sm tracking-[0.15em] uppercase">
            FULL-STACK DEVELOPER • PRODUCT BUILDER • DESIGNER
          </p>
          
          <div className="flex gap-4 mb-10 pl-2 border-l-2 border-burnt-sienna/80 max-w-md">
            <p className="text-bone-white/80 text-sm md:text-base leading-relaxed pl-2">
              Building useful software, digital experiences, and AI-powered solutions — from ideas and interfaces to working products.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#contact"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-burnt-sienna to-orange-500 text-bone-white px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(233,116,81,0.3)] cursor-none"
            >
              Let's Talk
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#work"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-bone-white border border-bone-white/30 hover:border-bone-white hover:bg-bone-white/5 transition-all duration-300 cursor-none"
            >
              View My Work
            </a>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-6 mb-auto md:mb-0 pb-8">
            <a href="#" className="text-bone-white/60 hover:text-bone-white transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-bone-white/60 hover:text-bone-white transition-colors">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="#" className="text-bone-white/60 hover:text-bone-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="text-bone-white/60 hover:text-bone-white transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="hidden lg:flex flex-col items-center absolute bottom-10 left-12 opacity-60">
            <div className="w-[1px] h-8 bg-bone-white/40 mb-2" />
            <span className="text-[9px] tracking-[0.2em] text-bone-white uppercase">SCROLL</span>
            <div className="w-3 h-3 border-b border-r border-bone-white/60 rotate-45 mt-2" />
          </div>
        </div>

        {/* Right Side Elements */}
        <div className="hidden lg:flex flex-col justify-between absolute right-12 top-0 h-full py-32 pointer-events-none">
          
          {/* Top Right Words */}
          <div className="flex flex-col gap-6 text-bone-white/50 tracking-[0.3em] text-[10px] font-bold uppercase items-end">
            <span>BUILD</span>
            <span>LEARN</span>
            <span>RESEARCH</span>
            <span>GROW</span>
            <div className="w-8 h-[1px] bg-bone-white/30 mt-2" />
          </div>

          {/* Bottom Right Graphic & Text */}
          <div className="flex items-center gap-6 relative">
            {/* Decorative orbit element */}
            <div className="absolute right-32 top-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full flex items-center justify-start">
              <div className="w-2 h-2 bg-burnt-sienna rounded-full shadow-[0_0_10px_#e97451] ml-[-4px]" />
            </div>
            
            <div className="text-right z-10">
              <p className="text-bone-white text-5xl mb-2 opacity-95 tracking-wide" style={{ fontFamily: "'Cedarville Cursive', 'Dancing Script', 'Brush Script MT', cursive" }}>On to<br/><span className="text-6xl">Bigger Things</span></p>
              <div className="w-12 h-[1px] bg-burnt-sienna/60 ml-auto mb-3" />
              <p className="text-bone-white/60 text-[9px] tracking-[0.25em] font-semibold leading-relaxed uppercase">
                WHERE IDEAS<br/>MEET IMPACT
              </p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-premium-black to-transparent pointer-events-none z-20" />
    </section>
  );
}
