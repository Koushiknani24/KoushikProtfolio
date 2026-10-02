"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

// Lazy load the 3D scene for performance
const About3DScene = dynamic(() => import("./about-3d-scene").then(mod => mod.About3DScene), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-transparent z-0" />
});

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="about"
      ref={containerRef}
      className="relative w-full min-h-[80vh] flex items-center bg-premium-black py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Copy Left Side */}
        <div className="flex-1 max-w-2xl relative z-20">
          <h2 className="text-sm font-bold tracking-widest text-burnt-sienna uppercase mb-4">
            Building ideas into useful products.
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bone-white mb-8 leading-tight">
            Computer Science is more than a degree for Koushik — it is the foundation for how he approaches problems, builds software, and explores new ideas.
          </h3>
          <p className="text-bone-white/70 text-lg leading-relaxed mb-8">
            He enjoys turning ideas into products, experimenting with AI, improving workflows through automation, and designing digital experiences that are useful in the real world.
          </p>

          <div className="flex gap-4 mb-8 md:mb-0">
            <img 
              src="/images/about/DailyRotine.jpeg" 
              alt="Candid Working" 
              className="w-1/2 md:w-48 h-48 object-cover rounded-xl shadow-xl border border-white/10"
              onError={(e) => (e.target as HTMLElement).style.display = 'none'}
            />
            <img 
              src="/images/about/DailyRotine2.jpeg" 
              alt="Desk Setup" 
              className="w-1/2 md:w-48 h-48 object-cover rounded-xl shadow-xl border border-white/10 translate-y-6"
              onError={(e) => (e.target as HTMLElement).style.display = 'none'}
            />
          </div>
        </div>

        {/* 3D Representation Right Side */}
        <div className="flex-1 w-full h-[50vh] md:h-[60vh] min-h-[400px] relative pointer-events-none">
          <div className="absolute inset-0">
             <About3DScene />
          </div>
        </div>

      </div>
    </section>
  );
}
