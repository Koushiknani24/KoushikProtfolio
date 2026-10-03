"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent } from "react";

const reveal = { hidden: { opacity: 0, x: -28 }, visible: { opacity: 1, x: 0 } };

export function AboutSection() {
  const photoX = useSpring(useMotionValue(0), { stiffness: 70, damping: 22, mass: 0.7 });
  const photoY = useSpring(useMotionValue(0), { stiffness: 70, damping: 22, mass: 0.7 });
  const linesX = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });
  const linesY = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });
  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    photoX.set(x * 5); photoY.set(y * 5); linesX.set(x * -3); linesY.set(y * -3);
  };
  const resetParallax = () => { photoX.set(0); photoY.set(0); linesX.set(0); linesY.set(0); };

  return (
    <section id="about" onMouseMove={handlePointerMove} onMouseLeave={resetParallax} className="relative isolate min-h-[90svh] overflow-hidden border-y border-[#f0ebe0]/5 bg-[#080808] py-20 md:flex md:min-h-[100svh] md:items-center md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_58%_at_82%_48%,rgba(197,86,42,.13),transparent_68%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(240,235,224,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(240,235,224,.018)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="relative mx-auto grid w-full max-w-[1480px] items-center gap-14 px-6 md:px-10 lg:grid-cols-[minmax(0,.94fr)_minmax(70px,.18fr)_minmax(360px,.94fr)] lg:gap-0 lg:px-16">
        <motion.div className="max-w-[650px]" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} transition={{ staggerChildren: 0.1, delayChildren: 0.08 }}>
          <motion.div variants={reveal} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="section-label">01 / About</motion.div>
          <motion.h2 variants={reveal} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="max-w-[610px] text-[clamp(2.85rem,5.3vw,5.85rem)] font-extrabold leading-[.91] tracking-[-.065em] text-[#f0ebe0]">CURIOUS BY NATURE.<br />DRIVEN TO <span className="text-[#c5562a]">BUILD</span><br />WHAT MATTERS.</motion.h2>
          <motion.div variants={reveal} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="mt-9 max-w-[545px] space-y-4 text-[0.98rem] leading-7 text-[#f0ebe0]/62 md:text-[1.05rem] md:leading-8"><p>I&apos;m a Computer Science student and product builder focused on creating websites, applications, AI-powered solutions, and digital experiences that solve real-world problems.</p><p>I enjoy understanding how people and businesses work, finding where technology can make things easier, and turning those ideas into practical software.</p></motion.div>
          <motion.p variants={reveal} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="mt-8 max-w-[580px] font-mono text-[9px] font-medium leading-5 tracking-[.14em] text-[#f0ebe0]/48 sm:text-[10px] sm:tracking-[.18em]">AI · SOFTWARE · FULL-STACK · UI/UX · AUTOMATION · PRODUCT DEVELOPMENT</motion.p>
          <motion.a variants={reveal} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} href="#contact" className="group mt-9 inline-flex items-center gap-3 border-b border-[#c5562a]/60 pb-2 font-mono text-[11px] uppercase tracking-[.18em] text-[#f0ebe0] transition-colors hover:border-[#f0ebe0] hover:text-[#c5562a]">Let&apos;s work together <span aria-hidden="true" className="text-[#c5562a] transition-transform duration-300 group-hover:translate-x-1">→</span></motion.a>
        </motion.div>
        <div className="hidden lg:block" aria-hidden="true" />
        <motion.div initial={{ opacity: 0, x: 34, scale: 0.965 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-[510px] lg:justify-self-end">
          <motion.div style={{ x: linesX, y: linesY }} className="pointer-events-none absolute -inset-7 hidden lg:block" aria-hidden="true"><span className="absolute left-0 top-[16%] h-px w-[24%] bg-[#c5562a]/50" /><span className="absolute left-[20%] top-[16%] h-1.5 w-1.5 -translate-y-[3px] rounded-full bg-[#c5562a]/80" /><span className="absolute right-[2%] top-[8%] h-[20%] w-px bg-[#f0ebe0]/18" /><span className="absolute right-[2%] top-[28%] h-1.5 w-1.5 -translate-x-[3px] rounded-full bg-[#c5562a]/80" /><span className="absolute bottom-[14%] right-[7%] h-px w-[30%] bg-[#f0ebe0]/18" /></motion.div>
          <div className="absolute inset-x-[4%] bottom-[3%] top-[12%] -z-10 rounded-[45%] bg-[#c5562a]/25 blur-[70px]" aria-hidden="true" />
          <motion.figure style={{ x: photoX, y: photoY }} className="relative aspect-[.735] overflow-hidden border border-[#f0ebe0]/20 bg-[#e7e2dc] shadow-[20px_28px_65px_rgba(0,0,0,.48),-10px_0_35px_rgba(197,86,42,.12)] [border-radius:42%_42%_7%_7%_/_12%_12%_7%_7%]"><Image src="/images/about/Koushik.jpeg" alt="Koushik Vulli" fill sizes="(max-width: 1024px) 86vw, 510px" className="object-cover object-center" /><div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.13),transparent_32%,transparent_72%,rgba(0,0,0,.18))]" /></motion.figure>
          <div className="absolute -bottom-4 -left-3 font-mono text-[9px] uppercase tracking-[.2em] text-[#f0ebe0]/40 sm:-left-8" aria-hidden="true">Koushik Vulli · 2026</div>
        </motion.div>
      </div>
    </section>
  );
}
