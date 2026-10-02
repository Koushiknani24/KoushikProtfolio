"use client";

import dynamic from "next/dynamic";
import { MoveRight } from "lucide-react";

const Research3DScene = dynamic(() => import("./research-3d-scene").then(mod => mod.Research3DScene), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-transparent z-0" />
});

export function ResearchSection() {
  return (
    <section id="research" className="relative w-full min-h-screen bg-premium-black py-32 overflow-hidden flex items-center">
      {/* 3D Background */}
      <Research3DScene />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-center h-full">
        <h2 className="text-sm font-bold tracking-widest text-burnt-sienna uppercase mb-4">
          Research
        </h2>
        
        <div className="max-w-4xl bg-zinc-950/50 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-burnt-sienna via-burgundy to-transparent" />
          
          <div className="inline-block px-4 py-1.5 bg-burnt-sienna/20 text-burnt-sienna rounded-full text-sm font-semibold mb-8 border border-burnt-sienna/30">
            Research Paper Accepted
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-bone-white mb-6 leading-snug">
            AI News Hub: A Modular Real-Time System for Multi-Source News Aggregation, Clustering, Summarization, and Credibility Analysis
          </h3>
          
          <div className="flex flex-col gap-4 text-bone-white/70 mb-10">
            <div className="flex flex-col md:flex-row gap-2 md:gap-8">
              <span className="font-semibold text-bone-white/90">Conference:</span>
              <span>14th International Conference on Intelligent Systems and Embedded Design (ISED2026), NIT Warangal</span>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-8">
              <span className="font-semibold text-bone-white/90">Submission ID:</span>
              <span className="font-mono">2102</span>
            </div>
          </div>
          
          <button className="group flex items-center gap-3 text-bone-white hover:text-burnt-sienna transition-colors font-medium">
            Read Abstract
            <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
