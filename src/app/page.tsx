import { PortfolioHero } from "@/components/portfolio-hero";
import { AboutSection } from "@/components/about";
import { WhatIBuildSection } from "@/components/what-i-build";
import { ResumeCard } from "@/components/resume-card";
import { ServicesSection } from "@/components/services";
import { ProjectsSection } from "@/components/projects";
import { ExperienceSection } from "@/components/experience";
import { ResearchSection } from "@/components/research";
import { SkillsSection } from "@/components/skills";
import { EducationSection } from "@/components/education";
import { LeadershipSection } from "@/components/leadership";
import { AchievementsSection } from "@/components/achievements";
import { DesignCapabilitiesSection } from "@/components/design-capabilities";
import { ContactSection } from "@/components/contact";
import { MarqueeBanner } from "@/components/marquee-banner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#080808]">
      <PortfolioHero />
      <MarqueeBanner />
      <AboutSection />
      <WhatIBuildSection />
      <ResumeCard />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <ResearchSection />
      <SkillsSection />
      <DesignCapabilitiesSection />
      <EducationSection />
      <LeadershipSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
