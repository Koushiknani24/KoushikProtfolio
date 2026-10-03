"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

type Service = {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
};

// Edit this single list to update the Services menu and its associated details.
const services: Service[] = [
  { number: "01", category: "Web presence", title: "Websites & Landing Pages", description: "High-converting websites and landing pages that make your business feel credible, clear, and easy to choose. Built responsively around your goals, audience, and brand.", tags: ["Next.js", "Responsive design", "Conversion", "CMS"], image: "/images/services/Websites & Landing Pages.png" },
  { number: "02", category: "Digital products", title: "Web Applications", description: "Purpose-built portals, dashboards, and customer-facing applications that turn complex operations into clear, dependable digital experiences.", tags: ["React", "Dashboards", "Authentication", "Databases"], image: "/images/services/Web Applications.png" },
  { number: "03", category: "Built around your business", title: "Custom Software", description: "Tailored software that fits the way your team actually works, replacing workarounds with practical tools that scale with your business.", tags: ["Product strategy", "Full-stack", "Databases", "Scalable systems"], image: "/images/services/Custom Software.png" },
  { number: "04", category: "Intelligent systems", title: "AI Solutions", description: "Useful AI features, assistants, and workflows designed to improve decisions, speed up routine work, and create better customer experiences.", tags: ["LLM apps", "AI assistants", "NLP", "Integrations"], image: "/images/services/AI Solutions.png" },
  { number: "05", category: "Smarter operations", title: "Automation & Workflows", description: "Connected workflows that remove repetitive tasks, reduce manual errors, and give your team more time to focus on high-value work.", tags: ["Process mapping", "No-code", "API workflows", "Notifications"], image: "/images/services/Automation & Workflows.png" },
  { number: "06", category: "Product experience", title: "UI/UX & Product Design", description: "Clear, considered interfaces that help people move through your product with confidence—from early wireframes to polished design systems.", tags: ["UX research", "Wireframes", "Design systems", "Prototyping"], image: "/images/services/UI-UX Product Design.png" },
  { number: "07", category: "Connected systems", title: "API & System Integration", description: "Reliable connections between your software, data, and third-party tools so information moves where it needs to without manual handoffs.", tags: ["REST APIs", "Webhooks", "Databases", "Third-party tools"], image: "/images/services/Futuristic API Integration Network.png" },
  { number: "08", category: "Ongoing support", title: "Maintenance & Improvements", description: "Focused improvements that keep your existing digital products fast, secure, current, and increasingly useful as your needs evolve.", tags: ["Bug fixes", "Performance", "Feature updates", "Monitoring"], image: "/images/services/Maintenance & Improvements.png" },
  { number: "09", category: "Search visibility", title: "SEO & AEO", description: "Technical and content foundations that help customers—and modern AI search experiences—find, understand, and trust your business.", tags: ["Technical SEO", "Content structure", "Schema", "AI search"], image: "/images/services/SEO & AEO.png" },
  { number: "10", category: "Launch with confidence", title: "Deployment & Technical Setup", description: "A dependable launch setup for your website or product, covering hosting, domains, deployment, and the details that keep it running smoothly.", tags: ["Hosting", "Domains & DNS", "CI/CD", "Business email"], image: "/images/services/Deployment & Technical Setup.png" },
  { number: "11", category: "Digital transformation", title: "Business Digitalization", description: "Simple, connected digital systems that turn paper-based or fragmented business processes into efficient, measurable ways of working.", tags: ["Workflow audit", "Digital tools", "Data capture", "Operations"], image: "/images/services/Business Digitalization.png" },
];

const contentTransition = { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const };

function ServiceDetails({ service, imageX, imageY, imageRotateX, imageRotateY }: { service: Service; imageX?: ReturnType<typeof useSpring>; imageY?: ReturnType<typeof useSpring>; imageRotateX?: ReturnType<typeof useSpring>; imageRotateY?: ReturnType<typeof useSpring> }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={service.number} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={contentTransition}>
        <motion.div style={{ x: imageX, y: imageY, rotateX: imageRotateX, rotateY: imageRotateY, transformStyle: "preserve-3d" }} className="relative aspect-[16/9] overflow-hidden rounded-[1.35rem] border border-[#f0ebe0]/14 bg-[#121212] shadow-[0_28px_70px_rgba(0,0,0,.48)] will-change-transform">
          <Image src={service.image} alt={`${service.title} service`} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(197,86,42,.14),transparent_36%,rgba(0,0,0,.2))]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" />
        </motion.div>
        <div className="mt-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.17em] text-[#c5562a]"><span>{service.number}</span><span className="h-px w-8 bg-[#c5562a]/60" /><span>{service.category}</span></div>
        <h3 className="mt-4 text-[clamp(2rem,3.35vw,4rem)] font-extrabold leading-[.95] tracking-[-.052em] text-[#f0ebe0]">{service.title}</h3>
        <p className="mt-4 max-w-[680px] text-[.94rem] leading-7 text-[#f0ebe0]/62 md:text-[1rem] md:leading-8">{service.description}</p>
        <div className="mt-6"><p className="font-mono text-[9px] uppercase tracking-[.18em] text-[#f0ebe0]/40">Tech / capabilities</p><ul className="mt-3 flex flex-wrap gap-2">{service.tags.map((tag) => <li key={tag} className="border border-[#f0ebe0]/13 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[.1em] text-[#f0ebe0]/66">{tag}</li>)}</ul></div>
        <a href="#contact" className="group mt-7 inline-flex items-center gap-2 border-b border-[#c5562a]/60 pb-2 font-mono text-[10px] font-semibold uppercase tracking-[.17em] text-[#f0ebe0] transition-colors hover:border-[#f0ebe0] hover:text-[#c5562a]">Let&apos;s discuss this <ArrowUpRight size={15} className="text-[#c5562a] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
      </motion.div>
    </AnimatePresence>
  );
}

export function ServicesSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuItemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selectedService = services[selectedIndex];
  const imageX = useSpring(useMotionValue(0), { stiffness: 65, damping: 19, mass: 0.7 });
  const imageY = useSpring(useMotionValue(0), { stiffness: 65, damping: 19, mass: 0.7 });
  const imageRotateX = useSpring(useMotionValue(0), { stiffness: 65, damping: 19, mass: 0.7 });
  const imageRotateY = useSpring(useMotionValue(0), { stiffness: 65, damping: 19, mass: 0.7 });
  const selectService = (index: number, shouldFocus = false) => {
    const nextIndex = (index + services.length) % services.length;
    setSelectedIndex(nextIndex);
    if (shouldFocus) menuItemRefs.current[nextIndex]?.focus();
  };
  const handleMenuKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      selectService(index + 1, true);
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      selectService(index - 1, true);
    } else if (event.key === "Home") {
      event.preventDefault();
      selectService(0, true);
    } else if (event.key === "End") {
      event.preventDefault();
      selectService(services.length - 1, true);
    }
  };
  const handleImageMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
    imageX.set(horizontal * 10);
    imageY.set(vertical * 8);
    imageRotateX.set(vertical * -3);
    imageRotateY.set(horizontal * 3);
  };

  return <section id="services" className="relative overflow-hidden border-y border-[#f0ebe0]/5 bg-[#080808] py-20 lg:flex lg:min-h-[100svh] lg:items-center lg:py-14">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_42%_52%_at_86%_28%,rgba(197,86,42,.1),transparent_70%)]" />
    <div className="relative mx-auto w-full max-w-[1480px] px-6 md:px-10 lg:px-16">
      <header className="max-w-[690px]"><div className="section-label">04 / Services</div><h2 className="mt-4 text-[clamp(2.45rem,4.6vw,5rem)] font-extrabold leading-[.94] tracking-[-.055em] text-[#f0ebe0]">What I can <span className="font-serif italic text-[#c5562a]">build</span> for you.</h2><p className="mt-5 max-w-[590px] text-[.96rem] leading-7 text-[#f0ebe0]/58">Select a service to see how I can turn a business need into a practical digital solution.</p></header>

      <div className="mt-10 hidden gap-12 lg:grid lg:grid-cols-[minmax(300px,.62fr)_minmax(0,1fr)] lg:items-start lg:gap-16 xl:gap-24">
        <nav aria-label="Services" className="border-t border-[#f0ebe0]/13">
          {services.map((service, index) => {
            const selected = selectedIndex === index;
            return <button key={service.number} ref={(element) => { menuItemRefs.current[index] = element; }} type="button" onClick={() => selectService(index)} onKeyDown={(event) => handleMenuKeyDown(event, index)} aria-pressed={selected} className={`group relative flex w-full items-center gap-4 border-b border-[#f0ebe0]/10 py-[.72rem] text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#c5562a] focus-visible:ring-inset ${selected ? "text-[#f0ebe0]" : "text-[#f0ebe0]/58 hover:text-[#f0ebe0]"}`}>
              <span className={`w-6 font-mono text-[10px] tracking-[.1em] transition-colors ${selected ? "text-[#c5562a]" : "text-[#f0ebe0]/35 group-hover:text-[#c5562a]"}`}>{service.number}</span>
              <span className={`absolute bottom-0 left-0 h-px bg-[#c5562a] transition-all duration-300 ${selected ? "w-full" : "w-0 group-hover:w-12"}`} />
              <span className={`text-[.94rem] font-medium tracking-[-.01em] transition-transform duration-300 ${selected ? "translate-x-1" : "group-hover:translate-x-1"}`}>{service.title}</span>
              <ArrowUpRight size={14} aria-hidden="true" className={`ml-auto transition-all duration-300 ${selected ? "translate-x-0 opacity-100 text-[#c5562a]" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
            </button>;
          })}
        </nav>
        <div onPointerMove={handleImageMove} onPointerLeave={() => { imageX.set(0); imageY.set(0); imageRotateX.set(0); imageRotateY.set(0); }} style={{ perspective: "1200px" }}><ServiceDetails service={selectedService} imageX={imageX} imageY={imageY} imageRotateX={imageRotateX} imageRotateY={imageRotateY} /></div>
      </div>

      <div className="mt-10 divide-y divide-[#f0ebe0]/10 border-t border-[#f0ebe0]/10 lg:hidden">
        {services.map((service, index) => {
          const selected = selectedIndex === index;
          return <div key={service.number}>
            <button type="button" onClick={() => setSelectedIndex(index)} aria-expanded={selected} aria-controls={`service-panel-${service.number}`} className={`group flex w-full items-center gap-3 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#c5562a] focus-visible:ring-inset ${selected ? "text-[#f0ebe0]" : "text-[#f0ebe0]/62"}`}>
              <span className={`font-mono text-[10px] ${selected ? "text-[#c5562a]" : "text-[#f0ebe0]/38"}`}>{service.number}</span><span className="text-[1rem] font-medium">{service.title}</span><span className={`ml-auto text-lg leading-none transition-transform ${selected ? "rotate-180 text-[#c5562a]" : "text-[#f0ebe0]/45"}`} aria-hidden="true">↓</span>
            </button>
            <AnimatePresence initial={false}>{selected && <motion.div id={`service-panel-${service.number}`} role="region" aria-label={service.title} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={contentTransition} className="overflow-hidden"><div className="pb-8"><ServiceDetails service={service} /></div></motion.div>}</AnimatePresence>
          </div>;
        })}
      </div>
    </div>
  </section>;
}
