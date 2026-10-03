"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type Service = { number: string; category: string; title: string; description: string; image: string };

export function ServiceItem({ service, reversed }: { service: Service; reversed: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: .18 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const image = <div className="relative overflow-hidden rounded-2xl border border-[#f0ebe0]/10 bg-[#111]" style={{ aspectRatio: "1.18 / 1" }}><Image src={service.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]" style={{ clipPath: visible ? "inset(0 0 0 0)" : "inset(0 100% 0 0)", transform: visible ? "scale(1)" : "scale(.96)", transition: "clip-path .9s cubic-bezier(.22,1,.36,1), transform .9s cubic-bezier(.22,1,.36,1)" }} /><div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(197,86,42,.13),transparent_45%)] mix-blend-screen opacity-0 transition-opacity duration-500 group-hover:opacity-100" /></div>;
  const content = <div className="flex max-w-[450px] flex-col justify-center" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(26px)", transition: "opacity .7s ease .16s, transform .7s cubic-bezier(.22,1,.36,1) .16s" }}><div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.18em] text-[#c5562a]"><span>{service.number}</span><span className="h-px w-9 bg-[#c5562a]/50" /><span>{service.category}</span></div><h3 className="mt-6 text-[clamp(1.7rem,3vw,3rem)] font-bold leading-[1.02] tracking-[-.045em] text-[#f0ebe0]">{service.title}</h3><p className="mt-5 text-[.94rem] leading-7 text-[#f0ebe0]/55">{service.description}</p><a href="#contact" className="mt-7 inline-flex w-fit items-center gap-2 text-[11px] font-semibold uppercase tracking-[.12em] text-[#c5562a] transition-all hover:gap-3">Let’s discuss this <ArrowUpRight size={15} /></a></div>;
  return <article ref={ref} className="group grid items-center gap-9 py-14 md:gap-14 md:py-20 lg:grid-cols-2 lg:gap-24" style={{ perspective: "1200px" }}><div className={reversed ? "lg:order-2" : ""}>{image}</div><div className={reversed ? "lg:order-1 lg:justify-self-end" : ""}>{content}</div></article>;
}
