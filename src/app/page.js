import { portfolioData } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceEducationSection from "@/components/ExperienceEducationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const { brand, navItems, socialLinks, hero, about, skills, projects, services, experience, testimonials, stats, contact, footer } = portfolioData;

  return (
    <main className="relative overflow-x-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_35%,#ffffff_100%)]">
      <Navbar brand={brand} navItems={navItems} />
      <Hero hero={hero} socialLinks={socialLinks} />
      <About about={about} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ServicesSection services={services} />
      <ExperienceEducationSection experience={experience} />
      <TestimonialsSection testimonials={testimonials} />
      <StatsSection stats={stats} />
      <ContactSection contact={contact} socialLinks={socialLinks} />
      <Footer brand={brand} footer={footer} socialLinks={socialLinks} />
    </main>
  );
}
