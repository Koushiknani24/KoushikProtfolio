"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface WorkCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  items: string[];
  imagePath: string;
  featured?: boolean;
}

const workCategories: WorkCategory[] = [
  {
    id: "full-stack",
    number: "01",
    title: "Full-Stack Development",
    description: "Building complete web applications from frontend to backend.",
    items: ["React / Next.js", "JavaScript / TypeScript", "Python", "APIs", "Databases", "Authentication", "Deployment"],
    imagePath: "/images/about/DailyRotine2.jpeg", // Coding/laptop photo
    featured: true,
  },
  {
    id: "web-design",
    number: "02",
    title: "Web & UI Design",
    description: "Designing modern, responsive interfaces that are both functional and visually engaging.",
    items: ["Website design", "UI/UX", "Responsive design", "Prototyping", "User-focused interfaces"],
    imagePath: "/images/projects/chams-construction/home.png", // Best website design
  },
  {
    id: "ai-automation",
    number: "03",
    title: "AI & Automation",
    description: "Exploring AI to make software and everyday workflows smarter and more automated.",
    items: ["AI-powered applications", "Automation workflows", "AI integrations", "Intelligent tools", "Experimenting with emerging AI technologies"],
    imagePath: "/images/projects/ai-news-hub/home.png", // AI/Automation visual (AI News Hub)
  },
  {
    id: "business-websites",
    number: "04",
    title: "Business Websites",
    description: "Helping local businesses, startups and organizations turn their requirements into useful digital products.",
    items: ["Business websites", "Landing pages", "Web applications", "Maintenance", "Feature improvements", "Digital solutions"],
    imagePath: "/images/projects/chams-offshore/home.png", // CHAMS Offshore screenshot
  },
  {
    id: "product-building",
    number: "05",
    title: "Product Building",
    description: "From an idea to a working product — understanding the problem, designing the experience, building the software and improving it.",
    items: [],
    imagePath: "/images/experience/Internship.jpeg", // Collaboration/product visual
  },
  {
    id: "research",
    number: "06",
    title: "Research & Real-World Experience",
    description: "Applying software and problem-solving skills to real-world projects and research.",
    items: ["GARRF internship — 2025–2026", "Research Paper — NIT Warangal, December 2026"],
    imagePath: "/images/leadership/GarrfImage.jpeg", // Research/academic visual (GARRF)
  }
];

function WorkCard({ category }: { category: WorkCategory }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (-5 to 5 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div 
      className={cn(
        "relative w-full mb-32 perspective-1000",
        category.featured ? "mb-40" : ""
      )}
      style={{ perspective: "1000px" }}
    >
      <div 
        ref={cardRef}
        className="relative w-full transform-style-3d transition-transform duration-200 ease-out flex flex-col lg:flex-row gap-12"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d"
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Visual Side */}
        <div 
          className={cn(
            "relative w-full rounded-xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl transition-all duration-500",
            category.featured ? "lg:w-2/3 aspect-[16/9]" : "lg:w-1/2 aspect-[4/3]",
            isHovered ? "shadow-burnt-sienna/20 border-white/20" : ""
          )}
          style={{
            transform: isHovered ? "translateZ(30px)" : "translateZ(0px)",
          }}
        >
          {/* Browser Top Bar Mockup */}
          <div className="absolute top-0 left-0 w-full h-8 bg-zinc-950 flex items-center px-4 gap-2 z-20 border-b border-white/10">
             <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
             <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          
          <img 
            src={category.imagePath} 
            alt={category.title} 
            className="absolute inset-0 w-full h-full object-cover pt-8 opacity-80 group-hover:opacity-100 transition-opacity"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://placehold.co/1200x800/1a1a1a/4a4a4a?text=${encodeURIComponent(category.title)}`;
            }}
          />
        </div>

        {/* Content Side */}
        <div 
          className={cn(
            "flex flex-col justify-center transition-all duration-500",
            category.featured ? "lg:w-1/3" : "lg:w-1/2"
          )}
          style={{
            transform: isHovered ? "translateZ(50px)" : "translateZ(0px)",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-burnt-sienna font-mono text-sm">{category.number}</span>
            <span className="text-bone-white/60 text-sm tracking-wider uppercase">Capabilities</span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold text-bone-white mb-6 flex items-center gap-4">
            {category.title}
          </h3>
          
          <p className="text-bone-white/70 text-lg mb-8 leading-relaxed">
            {category.description}
          </p>
          
          {category.items.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {category.items.map(item => (
                <span key={item} className="px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-bone-white/80 bg-white/5">
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="work" className="relative w-full min-h-screen bg-premium-black py-24 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-sm font-bold tracking-widest text-burnt-sienna uppercase mb-4 text-center">
          Work
        </h2>
        <h3 className="text-5xl md:text-6xl font-bold text-bone-white mb-24 tracking-tighter text-center">
          Projects & Independent Work
        </h3>
        
        <div className="flex flex-col mt-20">
          {workCategories.map((category) => (
            <WorkCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
