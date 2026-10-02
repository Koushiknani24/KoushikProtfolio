"use client";

import dynamic from "next/dynamic";

const Skills3DScene = dynamic(() => import("./skills-3d-scene").then(mod => mod.Skills3DScene), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-transparent z-0" />
});

export function SkillsSection() {
  return (
    <section className="relative w-full min-h-[90vh] bg-premium-black py-24 flex items-center overflow-hidden border-t border-white/5">
      {/* 3D Background */}
      <Skills3DScene />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-sm font-bold tracking-widest text-burnt-sienna uppercase mb-4 text-center">
          Technical Skills
        </h2>
        <h3 className="text-5xl md:text-6xl font-bold text-bone-white mb-20 tracking-tighter text-center">
          3D Technology Constellation
        </h3>
        
        {/* We rely entirely on the 3D canvas for the skills as requested by PDF, 
            but adding a small screen reader accessible fallback */}
        <div className="sr-only">
          <h4>Programming</h4>
          <p>Python, Java, C</p>
          <h4>Web</h4>
          <p>HTML, CSS, JavaScript, React.js, Tailwind CSS</p>
          <h4>Database</h4>
          <p>SQL, DBMS, SQLite</p>
          <h4>Core</h4>
          <p>Data Structures & Algorithms, OOP</p>
          <h4>AI / ML</h4>
          <p>NumPy, Pandas, OpenCV, NLP, Hugging Face, Machine Learning</p>
          <h4>Tools</h4>
          <p>Git, GitHub, VS Code, Selenium, Jira</p>
        </div>
      </div>
    </section>
  );
}
