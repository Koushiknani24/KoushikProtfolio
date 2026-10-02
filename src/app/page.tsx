import { PortfolioHero } from "@/components/portfolio-hero";
import { AboutSection } from "@/components/about";
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-premium-black">
      <PortfolioHero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <ResearchSection />
      <SkillsSection />
      <EducationSection />
      <LeadershipSection />
      <AchievementsSection />
      <DesignCapabilitiesSection />
      <ContactSection />
    </main>
  );
}
