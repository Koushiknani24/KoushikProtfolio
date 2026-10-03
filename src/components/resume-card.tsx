"use client";

import { ArrowUpRight, Download, FileText } from "lucide-react";
import { motion, useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type PointerEvent } from "react";

const resumePath = "/resume.pdf";
const reveal = { duration: .7, ease: [0.22, 1, 0.36, 1] as const };

export function ResumeCard() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: .3, once: true });
  const reducedMotion = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 75, damping: 18, mass: .7 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 75, damping: 18, mass: .7 });
  const moveX = useSpring(useMotionValue(0), { stiffness: 75, damping: 18, mass: .7 });
  const moveY = useSpring(useMotionValue(0), { stiffness: 75, damping: 18, mass: .7 });
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    rotateX.set(y * -3);
    rotateY.set(x * 3);
    moveX.set(x * 5);
    moveY.set(y * 5);
  };
  const resetDocument = () => { rotateX.set(0); rotateY.set(0); moveX.set(0); moveY.set(0); };

  return <section id="resume" ref={sectionRef} className="relative isolate overflow-hidden border-y border-[#f0ebe0]/5 bg-[#080808] py-20 lg:flex lg:min-h-[94svh] lg:items-center lg:py-14">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_58%_at_72%_50%,rgba(197,86,42,.11),transparent_72%)]" />
    <div className="relative mx-auto w-full max-w-[1480px] px-6 md:px-10 lg:px-16">
      <motion.header initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={reveal} className="max-w-[720px]"><div className="section-label">03 / Resume</div><h2 className="mt-4 text-[clamp(2.5rem,5vw,5.25rem)] font-extrabold leading-[.91] tracking-[-.06em] text-[#f0ebe0]">A snapshot of my <span className="font-serif italic text-[#c5562a]">journey.</span></h2><p className="mt-5 max-w-[650px] text-[.95rem] leading-7 text-[#f0ebe0]/60 md:text-[1rem] md:leading-8">Education, experience, projects, research, and technical skills — available in my complete resume.</p></motion.header>

      <div className="mt-14 grid items-center gap-16 lg:mt-[clamp(3.5rem,8vh,7rem)] lg:grid-cols-[minmax(0,.9fr)_minmax(330px,.65fr)] lg:gap-[clamp(4rem,11vw,12rem)]">
        <motion.div initial={{ opacity: 0, x: reducedMotion ? 0 : -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ ...reveal, delay: .1 }}><h3 className="max-w-[520px] text-[clamp(3rem,5.7vw,6rem)] font-extrabold leading-[.86] tracking-[-.075em] text-[#f0ebe0]">My work.<br />My experience.<br /><span className="font-serif italic text-[#c5562a]">My journey.</span></h3><p className="mt-7 max-w-[435px] text-[.95rem] leading-7 text-[#f0ebe0]/56">For the complete professional profile, including the details behind my work and experience, view or download my current resume.</p></motion.div>

        <motion.div initial={{ opacity: 0, y: reducedMotion ? 0 : 26 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ ...reveal, delay: .2 }} className="mx-auto w-full max-w-[380px] lg:mx-0" onPointerMove={handlePointerMove} onPointerLeave={resetDocument} style={{ perspective: "1000px" }}>
          <motion.a href={resumePath} target="_blank" rel="noreferrer" aria-label="View Vulli Koushik resume" style={{ rotateX, rotateY, x: moveX, y: moveY, transformStyle: "preserve-3d" }} className="group relative block aspect-[.79] border border-[#f0ebe0]/17 bg-[#121212] p-7 shadow-[18px_22px_0_rgba(197,86,42,.12),0_32px_70px_rgba(0,0,0,.46)] will-change-transform">
            <div aria-hidden="true" className="absolute inset-3 border border-[#f0ebe0]/7" />
            <div aria-hidden="true" className="absolute right-0 top-0 h-20 w-20 border-b border-l border-[#f0ebe0]/10 bg-[#181818]" />
            <div className="relative flex h-full flex-col justify-between"><div><div className="flex items-center justify-between"><div className="flex h-11 w-11 items-center justify-center border border-[#c5562a]/60 text-[#c5562a]"><FileText size={18} strokeWidth={1.3} /></div><span className="font-mono text-[9px] uppercase tracking-[.16em] text-[#c5562a]">PDF</span></div><div className="mt-10"><p className="font-mono text-[9px] uppercase tracking-[.2em] text-[#f0ebe0]/42">Vulli Koushik</p><p className="mt-3 text-[clamp(1.35rem,2.8vw,1.8rem)] font-bold leading-none tracking-[-.05em] text-[#f0ebe0]">Resume</p></div></div><div><div className="h-px w-12 bg-[#c5562a]" /><p className="mt-4 font-mono text-[9px] uppercase tracking-[.18em] text-[#f0ebe0]/42">Updated resume</p><div className="mt-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.15em] text-[#f0ebe0]/58">Open document <ArrowUpRight size={13} className="text-[#c5562a] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /></div></div></div>
          </motion.a>
          <motion.div initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ ...reveal, delay: .42 }} className="mt-7 flex flex-wrap gap-3"><a href={resumePath} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 border border-[#f0ebe0]/22 px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[.13em] text-[#f0ebe0] transition hover:border-[#c5562a] hover:text-[#c5562a]">View resume <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a><a href={resumePath} download="Vulli_Koushik_Resume.pdf" className="group inline-flex items-center gap-2 border border-[#c5562a] bg-[#c5562a] px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[.13em] text-[#f0ebe0] transition hover:-translate-y-0.5 hover:bg-[#df7042]">Download resume <Download size={14} className="transition-transform group-hover:translate-y-0.5" /></a></motion.div>
        </motion.div>
      </div>
    </div>
  </section>;
}
