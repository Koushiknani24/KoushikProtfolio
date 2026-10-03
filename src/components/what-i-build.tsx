"use client";

import { Bot, BriefcaseBusiness, Code2, Lightbulb, PenTool, Search, type LucideIcon } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stage = { number: string; title: string; description: string; icon: LucideIcon };

const stages: Stage[] = [
  { number: "01", title: "Business problem", description: "Understand the real challenge, workflow, and business requirement.", icon: BriefcaseBusiness },
  { number: "02", title: "Understand", description: "Identify users, processes, goals, and opportunities.", icon: Search },
  { number: "03", title: "Design", description: "Turn the requirement into a clear digital experience.", icon: PenTool },
  { number: "04", title: "Build", description: "Develop websites, applications, and custom software.", icon: Code2 },
  { number: "05", title: "AI + automation", description: "Add intelligent features, integrations, and automated workflows where useful.", icon: Bot },
  { number: "06", title: "Digital solution", description: "Deliver a practical system that helps the business work better.", icon: Lightbulb },
];

function DataFlow({ activeStage, reducedMotion }: { activeStage: number; reducedMotion: boolean | null }) {
  const completed = activeStage / (stages.length - 1);
  return <>
    <div aria-hidden="true" className="absolute left-[8.33%] right-[8.33%] top-[2.1rem] hidden h-px bg-[#f0ebe0]/12 lg:block">
      <motion.div className="h-px origin-left bg-[#c5562a]" initial={{ scaleX: 0 }} animate={{ scaleX: completed }} transition={{ duration: reducedMotion ? 0 : .55, ease: [0.22, 1, 0.36, 1] }} />
      {!reducedMotion && Array.from({ length: 3 }, (_, index) => <motion.span key={index} className="absolute top-1/2 h-1.5 w-1.5 rounded-full bg-[#f0ebe0] shadow-[0_0_12px_#c5562a]" initial={{ left: "0%", opacity: 0 }} animate={activeStage > 0 ? { left: ["0%", `${Math.min(100, completed * 100)}%`], opacity: [0, 1, 1, 0] } : { opacity: 0 }} transition={{ duration: 2.4, delay: index * .68, repeat: Infinity, ease: "linear" }} />)}
    </div>
    <div aria-hidden="true" className="absolute bottom-[4.25rem] left-1/2 top-[3.2rem] hidden w-px -translate-x-1/2 bg-[#f0ebe0]/12 max-lg:block">
      <motion.div className="h-full w-px origin-top bg-[#c5562a]" initial={{ scaleY: 0 }} animate={{ scaleY: completed }} transition={{ duration: reducedMotion ? 0 : .55, ease: [0.22, 1, 0.36, 1] }} />
    </div>
  </>;
}

export function WhatIBuildSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: .35, once: true });
  const reducedMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    if (!inView || reducedMotion) return;
    let stage = 0;
    const timer = window.setInterval(() => { stage += 1; setActiveStage(stage); if (stage === stages.length - 1) window.clearInterval(timer); }, 540);
    return () => window.clearInterval(timer);
  }, [inView, reducedMotion]);
  const displayedStage = reducedMotion && inView ? stages.length - 1 : activeStage;

  return <section id="what-i-build" ref={sectionRef} className="relative isolate overflow-hidden border-y border-[#f0ebe0]/5 bg-[#080808] py-20 lg:flex lg:min-h-[94svh] lg:items-center lg:py-14">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_48%_52%_at_50%_52%,rgba(197,86,42,.1),transparent_72%)]" />
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(240,235,224,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(240,235,224,.025)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]" />
    <div className="relative mx-auto w-full max-w-[1480px] px-6 md:px-10 lg:px-16">
      <header className="max-w-[760px]"><div className="section-label">02 / What I build</div><h2 className="mt-4 text-[clamp(2.5rem,5vw,5.25rem)] font-extrabold leading-[.91] tracking-[-.06em] text-[#f0ebe0]">I build digital <span className="font-serif italic text-[#c5562a]">solutions.</span></h2><p className="mt-5 max-w-[660px] text-[.95rem] leading-7 text-[#f0ebe0]/60 md:text-[1rem] md:leading-8">I turn business problems, ideas, and software requirements into practical digital solutions that make work easier, faster, and more efficient.</p></header>
      <div className="relative mt-14 lg:mt-[clamp(4rem,9vh,7.5rem)]" style={{ perspective: "1000px" }}>
        <DataFlow activeStage={displayedStage} reducedMotion={reducedMotion} />
        <ol className="relative grid gap-0 lg:grid-cols-6 lg:gap-4">{stages.map((stage, index) => {
          const Icon = stage.icon; const isActive = index === displayedStage; const isRevealed = index <= displayedStage;
          return <motion.li key={stage.number} initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }} animate={inView ? { opacity: isRevealed ? 1 : .32, y: 0 } : {}} transition={{ duration: reducedMotion ? 0 : .45, delay: reducedMotion ? 0 : index * .12, ease: [0.22, 1, 0.36, 1] }} className="relative grid grid-cols-[4.2rem_1fr] gap-x-4 pb-10 last:pb-0 lg:block lg:pb-0">
            <div className={`relative z-10 flex h-[4.2rem] w-[4.2rem] items-center justify-center border transition-all duration-500 lg:mx-auto ${isActive ? "border-[#c5562a] bg-[#c5562a]/12 text-[#c5562a] shadow-[0_0_35px_rgba(197,86,42,.22)]" : "border-[#f0ebe0]/14 bg-[#0b0b0b] text-[#f0ebe0]/48"}`}><Icon size={18} strokeWidth={1.35} aria-hidden="true" /><span className={`absolute -right-1.5 -top-2 font-mono text-[9px] tracking-[.12em] ${isActive ? "text-[#c5562a]" : "text-[#f0ebe0]/30"}`}>{stage.number}</span></div>
            <div className="pt-1 lg:pt-6 lg:text-center"><h3 className={`text-[.84rem] font-semibold uppercase tracking-[.08em] transition-colors duration-500 ${isActive ? "text-[#f0ebe0]" : "text-[#f0ebe0]/65"}`}>{stage.title}</h3><p className="mt-2 max-w-[205px] text-[.77rem] leading-5 text-[#f0ebe0]/42 lg:mx-auto">{stage.description}</p></div>
          </motion.li>;
        })}</ol>
      </div>
      <footer className="mt-14 flex flex-col gap-5 border-t border-[#f0ebe0]/10 pt-6 md:mt-16 md:flex-row md:items-end md:justify-between"><p className="text-[clamp(1.45rem,2.7vw,2.6rem)] font-extrabold leading-[.98] tracking-[-.05em] text-[#f0ebe0]">From business problem <span className="font-serif italic text-[#c5562a]">to digital solution.</span></p><p className="font-mono text-[9px] uppercase tracking-[.16em] text-[#f0ebe0]/42 md:max-w-[320px] md:text-right">Websites · Applications · AI · Automation · Custom software</p></footer>
    </div>
  </section>;
}
