"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function LeadershipSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotation({ 
      x: ((y - centerY) / centerY) * -10,
      y: ((x - centerX) / centerX) * 10
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section className="relative w-full py-24 bg-premium-black border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-sm font-bold tracking-widest text-burnt-sienna uppercase mb-4 text-center">
          Leadership & Community
        </h2>
        
        <div 
          ref={containerRef}
          className="w-full max-w-5xl mt-12 perspective-1000 min-h-[60vh] flex items-center justify-center relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Layered 3D Collage Experience */}
          <div 
            className="w-full h-full transform-style-3d transition-transform duration-300 ease-out flex flex-col md:flex-row items-center justify-center gap-12"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
            }}
          >
            {/* GARRF Node */}
            <div 
              className="relative w-full md:w-1/2 p-8 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl transition-all duration-300 hover:border-burnt-sienna/50"
              style={{ transform: "translateZ(40px)" }}
            >
              <div className="absolute -inset-4 bg-burnt-sienna/10 blur-2xl -z-10 rounded-full" />
              <h3 className="text-2xl font-bold text-bone-white mb-2">Student Chapter Head</h3>
              <h4 className="text-burnt-sienna mb-6">Andhra Pradesh</h4>
              
              <img 
                src="/images/leadership/GarrfImage.jpeg" 
                alt="GARRF Event" 
                className="w-full h-48 object-cover rounded-xl mb-6 opacity-80 group-hover:opacity-100"
                onError={(e) => (e.target as HTMLElement).style.display = 'none'}
              />

              <div className="flex justify-between items-end">
                <span className="text-bone-white/60 font-mono">Organization: GARRF</span>
                <a href="https://garrf.in/" target="_blank" rel="noopener noreferrer" className="text-sm text-bone-white hover:text-burnt-sienna transition-colors border-b border-bone-white/30 hover:border-burnt-sienna pb-1">
                  Official Website
                </a>
              </div>
            </div>

            {/* GITAM Node */}
            <div 
              className="relative w-full md:w-1/2 p-8 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl transition-all duration-300 hover:border-bone-white/50"
              style={{ transform: "translateZ(80px)" }} // Deeper in 3D space
            >
              <div className="absolute -inset-4 bg-bone-white/5 blur-2xl -z-10 rounded-full" />
              <h3 className="text-2xl font-bold text-bone-white mb-6">Student Campus Ambassador</h3>
              
              <img 
                src="/images/leadership/gitam-ambassador.jpg" 
                alt="GITAM Ambassador" 
                className="w-full h-48 object-cover rounded-xl mb-6 opacity-80 group-hover:opacity-100 hidden" // hidden initially since we don't have this image yet
              />

              <div className="flex justify-between items-end">
                <span className="text-bone-white/60 font-mono">GITAM</span>
                <a href="https://www.gitam.edu/chat-with-a-student-ambassador" target="_blank" rel="noopener noreferrer" className="text-sm text-bone-white hover:text-burnt-sienna transition-colors border-b border-bone-white/30 hover:border-burnt-sienna pb-1">
                  Official Profile
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
