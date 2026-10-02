"use client";

import { cn } from "@/lib/utils";

export function EducationSection() {
  return (
    <section className="relative w-full py-24 bg-premium-black border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-sm font-bold tracking-widest text-burnt-sienna uppercase mb-12">
          Education
        </h2>
        
        <div className="relative border-l-2 border-white/10 pl-8 md:pl-12 py-4">
          <div className="absolute top-1/2 -translate-y-1/2 -left-[9px] w-4 h-4 rounded-full bg-burnt-sienna border-4 border-premium-black" />
          
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
            <h3 className="text-3xl md:text-4xl font-bold text-bone-white">
              B.Tech in Computer Science and Engineering
            </h3>
            <span className="text-burnt-sienna font-mono whitespace-nowrap">2023–2027</span>
          </div>
          
          <h4 className="text-xl text-bone-white/80 mb-6">
            GITAM Deemed to be University
          </h4>
          
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <span className="text-bone-white/60 uppercase text-sm font-semibold tracking-wider">CGPA:</span>
              <span className="text-2xl font-mono text-bone-white">8.61</span>
            </div>
            
            <div className="w-px h-6 bg-white/10 hidden md:block" />
            
            <span className="text-bone-white/60">
              Visakhapatnam, Andhra Pradesh, India
            </span>
          </div>
        </div>
        
        {/* Minimal Depth Typography Object (CSS 3D) */}
        <div className="mt-20 w-full flex justify-center perspective-1000">
          <h1 
            className="text-7xl md:text-[120px] font-bold text-transparent transform-style-3d rotate-x-12 rotate-y-6 opacity-10 select-none"
            style={{ 
              WebkitTextStroke: "1px rgba(249, 246, 240, 0.5)",
              transform: "rotateX(20deg) rotateY(-10deg) translateZ(-50px)",
            }}
          >
            FOUNDATION
          </h1>
        </div>
      </div>
    </section>
  );
}
