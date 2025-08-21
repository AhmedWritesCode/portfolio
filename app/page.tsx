import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import ChatWidget from "@/components/ChatWidget"

/**
 * Main page component that renders the complete portfolio
 * All sections are modular and can be easily rearranged or removed
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero section with introduction and call-to-action */}
      <Hero />

      {/* About section with education and coursework */}
      <About />

      {/* Projects showcase - easily expandable via data/projects.ts */}
      <Projects />

      {/* Technical skills - easily expandable via data/skills.ts */}
      <Skills />

      {/* Experience and leadership roles */}
      <Experience />

      {/* Contact information and form */}
      <Contact />

      {/* VectorShift Chat Widget */}
      <ChatWidget />
    </main>
  )
}
