"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Download } from "lucide-react"
import Link from "next/link"
import { personalInfo } from "@/data/personal-info"
import { trackResumeDownload } from "@/lib/analytics"

/**
 * Hero section component - clean and modern first impression
 * Uses data from personal-info.ts
 */
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-teal-50 to-cyan-50 opacity-70" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000" />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Name and Title */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Ahmed <span className="text-blue-600">Zaki</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">{personalInfo.title}</p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">{personalInfo.summary}</p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Get In Touch</Link>
          </Button>
          {/* Resume Download Button */}
          <Button asChild variant="outline" size="lg">
            <a
              href={personalInfo.resumePath}
              download="Ahmed_Zaki_Al-Gabaly_CV.pdf"
              onClick={trackResumeDownload}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Social Media Links (Clean Minimal Icons) */}
        <div className="flex justify-center space-x-6">
          <Link
            href={personalInfo.linkedin}
            className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-white/50"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link
            href={personalInfo.github}
            className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-white/50"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <Github className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  )
}
