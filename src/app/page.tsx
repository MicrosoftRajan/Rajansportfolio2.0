import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import ExperienceSection from '@/components/experience-section'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import ProjectsSection from '@/components/projects-section'
import SectionDivider from '@/components/section-divider'

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center">
      <Header />
      <HeroSection />
      <AboutSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
