"use client";

export function DesignCapabilitiesSection() {
  return (
    <section className="relative w-full py-32 bg-premium-black border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Copy Left Side */}
        <div className="flex-1 max-w-xl z-10">
          <h2 className="text-sm font-bold tracking-widest text-burnt-sienna uppercase mb-4">
            Design Capabilities
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-bone-white mb-8 leading-tight tracking-tighter">
            Design Meets Engineering
          </h3>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {[
              "Web Design",
              "UI Design",
              "App Design",
              "Responsive Design",
              "Product Interface Design",
              "User Experience Thinking"
            ].map((capability, idx) => (
              <li key={idx} className="flex items-center gap-3 text-bone-white/80 text-lg group cursor-default">
                <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-burnt-sienna transition-colors" />
                <span className="group-hover:text-bone-white transition-colors">{capability}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3D Composition Right Side (CSS 3D) */}
        <div className="flex-1 w-full h-[50vh] min-h-[400px] relative perspective-1000 mt-10 lg:mt-0 flex items-center justify-center">
          <div className="relative w-full h-full transform-style-3d group">
            
            {/* Background interface layers */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-[4/3] bg-zinc-900 border border-white/10 rounded-xl shadow-2xl transition-transform duration-700 ease-out group-hover:rotate-x-12 group-hover:-rotate-y-12" style={{ transform: "rotateX(20deg) rotateY(-15deg) translateZ(-100px)" }}>
              <div className="w-full h-8 border-b border-white/5 bg-zinc-950 flex items-center px-4 rounded-t-xl" />
            </div>
            
            {/* Mid browser layer */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 aspect-video bg-zinc-800 border border-white/20 rounded-lg shadow-2xl transition-transform duration-700 ease-out group-hover:rotate-x-6 group-hover:-rotate-y-6" style={{ transform: "rotateX(10deg) rotateY(-5deg) translateZ(0px)" }}>
              <div className="w-full h-6 border-b border-white/10 flex items-center px-3 gap-1 rounded-t-lg">
                 <div className="w-2 h-2 rounded-full bg-red-500/50" />
                 <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                 <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
            </div>
            
            {/* Foreground mobile layer */}
            <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-[160px] h-[320px] bg-zinc-950 border-[6px] border-zinc-700 rounded-3xl shadow-2xl transition-transform duration-700 ease-out group-hover:-rotate-x-6 group-hover:rotate-y-12" style={{ transform: "rotateX(-5deg) rotateY(15deg) translateZ(100px)" }}>
              <div className="w-full h-full rounded-2xl border border-white/5 overflow-hidden flex flex-col gap-2 p-2 pt-6">
                <div className="w-full h-1/3 bg-zinc-800 rounded-lg" />
                <div className="w-3/4 h-4 bg-burnt-sienna/50 rounded" />
                <div className="w-1/2 h-4 bg-zinc-800 rounded" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
