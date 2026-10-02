"use client";

import { useRef, useState } from "react";

export function ExperienceSection() {
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
      x: ((y - centerY) / centerY) * -5,
      y: ((x - centerX) / centerX) * 5
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section id="experience" className="relative w-full py-24 bg-premium-black border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-sm font-bold tracking-widest text-burnt-sienna uppercase mb-12">
          Experience
        </h2>
        
        <div 
          ref={containerRef}
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Details */}
          <div className="flex-1 max-w-2xl">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bone-white mb-4">
              AI / Software Intern
            </h3>
            <h4 className="text-2xl text-burnt-sienna mb-8">
              AISIA Labs
            </h4>
            
            <ul className="flex flex-col gap-4 text-bone-white/70 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-burnt-sienna mt-1">▹</span>
                AI application development
              </li>
              <li className="flex items-start gap-3">
                <span className="text-burnt-sienna mt-1">▹</span>
                API integration
              </li>
              <li className="flex items-start gap-3">
                <span className="text-burnt-sienna mt-1">▹</span>
                Data processing
              </li>
              <li className="flex items-start gap-3">
                <span className="text-burnt-sienna mt-1">▹</span>
                Machine Learning
              </li>
              <li className="flex items-start gap-3">
                <span className="text-burnt-sienna mt-1">▹</span>
                Software development workflows
              </li>
              <li className="flex items-start gap-3">
                <span className="text-burnt-sienna mt-1">▹</span>
                AI integration into practical applications
              </li>
            </ul>
          </div>
          
          {/* Image Node with 3D hover */}
          <div 
            className="flex-1 w-full max-w-lg transform-style-3d transition-transform duration-300 ease-out"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
            }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl border border-white/10" style={{ transform: "translateZ(30px)" }}>
              <img 
                src="/images/experience/Internship.jpeg" 
                alt="AISIA Labs Internship"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/1a1a1a/4a4a4a?text=Experience';
                }}
              />
            </div>
            {/* Decorative node connecting to timeline idea */}
            <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-burnt-sienna shadow-[0_0_20px_rgba(233,116,81,0.5)] border-4 border-premium-black" style={{ transform: "translateZ(50px)" }} />
          </div>

        </div>
      </div>
    </section>
  );
}
