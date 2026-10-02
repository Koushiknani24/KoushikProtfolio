/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const Service3DScene = dynamic(() => import("./service-3d-scene").then(mod => mod.Service3DScene), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-transparent z-0" />
});

const services = [
  { 
    id: "01", 
    title: "Websites", 
    description: "Modern websites built for businesses, startups, brands, and individuals.",
    items: ["Business websites", "Corporate websites", "Portfolio websites", "Landing pages", "Responsive websites", "SEO-friendly websites", "Website deployment", "Domain & DNS setup"]
  },
  { 
    id: "02", 
    title: "Web Applications", 
    description: "Custom web applications built around specific business or software requirements.",
    items: ["Business dashboards", "Management systems", "Customer-facing applications", "Internal tools", "Data-driven applications", "API-integrated applications", "Custom software solutions"]
  },
  { 
    id: "03", 
    title: "Apps & Digital Products", 
    description: "Turning ideas into practical digital products and application experiences.",
    items: ["Application development", "Product prototypes", "Application interfaces", "User flows", "Feature development", "Digital product development"]
  },
  { 
    id: "04", 
    title: "UI/UX Design", 
    description: "Clean, intuitive interfaces designed around users and real product requirements.",
    items: ["UI design", "UX design", "Website interfaces", "App interfaces", "Dashboard design", "User flows", "Responsive design", "Design systems"]
  },
  { 
    id: "05", 
    title: "Web & Visual Design", 
    description: "Creating digital experiences that look as good as they work.",
    items: ["Web design", "Visual design", "Layout design", "Responsive design", "Interactive experiences", "Modern landing pages", "Brand-focused digital experiences"]
  },
  { 
    id: "06", 
    title: "AI Solutions", 
    description: "Adding AI capabilities to software and digital products.",
    items: ["AI-powered features", "AI API integration", "NLP solutions", "Intelligent applications", "AI-assisted workflows", "Data processing", "AI experimentation and integration"]
  },
  { 
    id: "07", 
    title: "Automation", 
    description: "Automating repetitive processes and improving the way businesses work.",
    items: ["Workflow automation", "AI automation", "Process automation", "API integrations", "Data automation", "Repetitive-task automation", "Business workflow improvements"]
  },
  { 
    id: "08", 
    title: "Software Development", 
    description: "Building custom software around a specific requirement or problem.",
    items: ["Custom software", "Full-stack development", "Frontend development", "Backend/API development", "Database integration", "Feature development", "Third-party integrations"]
  },
  { 
    id: "09", 
    title: "Website & Software Maintenance", 
    description: "Keeping existing digital products reliable, updated, and improving over time.",
    items: ["Website updates", "Bug fixes", "Feature additions", "Content updates", "Performance improvements", "Technical support", "Ongoing development", "Maintenance"]
  },
  { 
    id: "10", 
    title: "Business Technology Assistance", 
    description: "Technology support for businesses that need a developer they can work with directly.",
    items: ["New website requirements", "Existing website improvements", "Software requirements", "Digital product ideas", "Business tools", "Automation opportunities", "AI integration", "Technical guidance", "Ongoing software assistance"]
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="relative w-full min-h-[90vh] bg-premium-black py-24 flex flex-col justify-center border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-12">
        
        {/* Services List Left Side */}
        <div className="flex-1 lg:max-w-xl">
          <h2 className="text-5xl md:text-6xl font-bold text-bone-white mb-12 tracking-tighter">
            What I Build
          </h2>
          
          <div className="flex flex-col gap-2">
            {services.map((service, index) => (
              <div 
                key={service.id}
                onClick={() => setActiveService(index)}
                className={cn(
                  "group flex flex-col py-4 border-b transition-all duration-500 cursor-pointer",
                  activeService === index 
                    ? "border-burnt-sienna/50 pl-4 md:pl-8 bg-white/5 rounded-lg" 
                    : "border-white/10 hover:border-white/30 hover:pl-2"
                )}
              >
                <div className="flex items-baseline gap-6 w-full cursor-none">
                  <span className={cn(
                    "text-sm font-mono transition-colors duration-300",
                    activeService === index ? "text-burnt-sienna" : "text-bone-white/40 group-hover:text-bone-white/60"
                  )}>
                    {service.id}
                  </span>
                  <h3 className={cn(
                    "text-2xl md:text-3xl font-semibold transition-all duration-300",
                    activeService === index ? "text-bone-white" : "text-bone-white/40 group-hover:text-bone-white/80"
                  )}>
                    {service.title}
                  </h3>
                </div>
                
                {/* Accordion Content */}
                <div className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out cursor-none",
                  activeService === index ? "max-h-[800px] opacity-100 mt-6" : "max-h-0 opacity-0"
                )}>
                  <p className="text-bone-white/80 text-lg mb-6 leading-relaxed pr-6">
                    {service.description}
                  </p>
                  
                  {service.id === "10" && (
                    <div className="mb-6 pr-6">
                      <p className="text-bone-white/60 text-sm mb-2">I can help with:</p>
                    </div>
                  )}

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 pr-6">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-bone-white/70 text-sm">
                        <span className="text-burnt-sienna mt-1 text-xs">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {service.id === "10" && (
                    <div className="mt-8 pr-6 pt-6 border-t border-white/10">
                      <h4 className="text-burnt-sienna font-semibold mb-2">Have a project, idea, or software requirement?</h4>
                      <p className="text-bone-white/70 text-sm leading-relaxed mb-4">
                        Whether you're a business, startup, company, or individual, I'm open to discussing websites, applications, UI/UX, AI solutions, automation, custom software, or improving an existing product.
                      </p>
                      <p className="text-bone-white text-sm font-semibold mb-6">
                        Tell me what you're trying to build. Let's turn the idea into something useful.
                      </p>
                      <a href="mailto:vullikoushik24@gmail.com" className="inline-block bg-bone-white text-premium-black font-bold px-6 py-3 rounded-full hover:bg-burnt-sienna hover:text-bone-white transition-colors cursor-none">
                        vullikoushik24@gmail.com
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Visual Representation Right Side */}
        <div className="flex-1 w-full h-[50vh] lg:h-auto min-h-[400px] relative mt-12 lg:mt-0 pointer-events-none sticky top-24">
          <div className="absolute inset-0">
             <Service3DScene activeIndex={activeService} />
          </div>
        </div>

      </div>
    </section>
  );
}
