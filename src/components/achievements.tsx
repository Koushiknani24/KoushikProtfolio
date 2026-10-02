"use client";

import { Trophy, Medal, Award } from "lucide-react";

export function AchievementsSection() {
  return (
    <section className="relative w-full py-24 bg-premium-black border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-sm font-bold tracking-widest text-burnt-sienna uppercase mb-16 text-center">
          Achievements & Beyond Code
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Hackathons */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-burnt-sienna/20 group-hover:border-burnt-sienna/50 transition-all duration-300 shadow-[0_0_30px_rgba(233,116,81,0)] group-hover:shadow-[0_0_30px_rgba(233,116,81,0.2)]">
              <Trophy className="w-8 h-8 text-bone-white group-hover:text-burnt-sienna transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-bone-white mb-6">Hackathons</h3>
            <ul className="flex flex-col gap-4 text-bone-white/70">
              <li className="bg-white/5 px-6 py-3 rounded-lg border border-white/5">Smart India Hackathon</li>
              <li className="bg-white/5 px-6 py-3 rounded-lg border border-white/5">BITS Pilani Hackathon, Hyderabad</li>
            </ul>
          </div>

          {/* Sports */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-zinc-900 border border-white/10 rounded-full overflow-hidden mb-6 group-hover:border-bone-white/50 transition-all duration-300 shadow-[0_0_30px_rgba(249,246,240,0)] group-hover:shadow-[0_0_30px_rgba(249,246,240,0.1)] relative">
              <img 
                src="/images/achievements/KabbadiMain.jpeg" 
                alt="Kabaddi" 
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => (e.target as HTMLElement).style.display = 'none'}
              />
              <Medal className="w-8 h-8 text-bone-white group-hover:text-bone-white transition-colors relative z-10 drop-shadow-md hidden" />
            </div>
            <h3 className="text-2xl font-bold text-bone-white mb-2">Sports</h3>
            <h4 className="text-burnt-sienna mb-6 font-semibold uppercase tracking-wider text-sm">Kabaddi Champion</h4>
            <ul className="flex flex-col gap-4 text-bone-white/70">
              <li className="bg-white/5 px-6 py-3 rounded-lg border border-white/5">Lepanga 2.0</li>
              <li className="bg-white/5 px-6 py-3 rounded-lg border border-white/5">Lepanga 3.0</li>
              <li className="bg-white/5 px-6 py-3 rounded-lg border border-white/5">Chedugudu</li>
            </ul>
          </div>
          
          {/* Certification */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-burgundy/40 group-hover:border-burgundy/80 transition-all duration-300 shadow-[0_0_30px_rgba(128,0,32,0)] group-hover:shadow-[0_0_30px_rgba(128,0,32,0.3)]">
              <Award className="w-8 h-8 text-bone-white group-hover:text-bone-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-bone-white mb-6">Certification</h3>
            <div className="bg-white/5 px-6 py-4 rounded-lg border border-white/5 w-full">
              <h4 className="font-semibold text-bone-white mb-1">Network Basics</h4>
              <p className="text-bone-white/60 text-sm">Cisco Networking Academy</p>
            </div>
          </div>

        </div>
        
        {/* Beyond Code (Personality) */}
        <div className="mt-32 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-bone-white mb-12 tracking-tighter">
            Beyond Code
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Kabaddi", "Leadership", "Building Products", "Curiosity", "Experimentation", "AI Exploration"].map((tag) => (
              <span key={tag} className="px-6 py-3 rounded-full bg-zinc-900 border border-white/10 text-bone-white/80 hover:bg-burnt-sienna hover:border-burnt-sienna hover:text-white transition-all cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
