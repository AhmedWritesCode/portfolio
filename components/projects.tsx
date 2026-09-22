"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter, Code2 } from "lucide-react"
import Image from "next/image"
import { projects, mainCategories, popularTechFilters, type Project } from "@/data/projects"
import { trackProjectView } from "@/lib/analytics"

/**
 * Projects component with Category and Technology filtering functionality
 */
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  // Filter projects based on active category and active tech filter
  const filteredProjects = projects.filter((project) => {
    // Category match
    const matchesCategory =
      selectedCategory === "All" || project.category.toLowerCase() === selectedCategory.toLowerCase()

    // Tech match
    const matchesTech =
      !selectedTech ||
      project.technologies.some((t) => t.toLowerCase().includes(selectedTech.toLowerCase()))

    return matchesCategory && matchesTech
  })

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
  }

  const handleTechToggle = (tech: string) => {
    setSelectedTech((prev) => (prev === tech ? null : tech))
  }

  const handleResetFilters = () => {
    setSelectedCategory("All")
    setSelectedTech(null)
  }

  /**
   * Render individual project card
   */
  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between border-slate-200">
      <div>
        {/* Project Image */}
        <div className="relative h-52 w-full overflow-hidden bg-slate-900">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-slate-900/85 text-white backdrop-blur-sm border-0 shadow-sm text-xs">
              {project.category}
            </Badge>
          </div>
          {/* Year Badge */}
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className="bg-white/90 text-gray-800 backdrop-blur-sm text-xs font-semibold">
              {project.year}
            </Badge>
          </div>
          {/* University Project Indicator */}
          {project.isUniversity && (
            <div className="absolute bottom-3 left-3">
              <Badge className="bg-blue-600 text-white text-[11px]">University Project</Badge>
            </div>
          )}
        </div>

        {/* Project Content */}
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold text-gray-900">{project.title}</CardTitle>
          <p className="text-sm text-gray-600 leading-relaxed mt-1">{project.description}</p>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Key Highlights:</h4>
            <ul className="text-xs text-gray-600 space-y-1.5">
              {project.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="outline"
                  className={`text-[11px] px-2 py-0.5 ${
                    selectedTech && tech.toLowerCase().includes(selectedTech.toLowerCase())
                      ? "bg-blue-50 border-blue-400 text-blue-700 font-semibold"
                      : "bg-slate-50 text-gray-700"
                  }`}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-6 pt-2 flex flex-wrap gap-2 border-t border-slate-100 mt-2">
        {project.liveUrl && (
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-xs shadow-sm"
            asChild
            onClick={() => trackProjectView(project.id, project.title)}
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
              Live Demo
            </a>
          </Button>
        )}
        {project.githubUrl && (
          <Button size="sm" variant="outline" asChild className="text-xs border-slate-300">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-3.5 h-3.5 mr-1.5" />
              Source Code
            </a>
          </Button>
        )}
      </div>
    </Card>
  )

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical skills in full-stack web applications, AI systems, and engineering projects. Feel
            free to explore my{" "}
            <a
              href="https://github.com/AhmedWritesCode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
            >
              GitHub
            </a>{" "}
            for more repositories and source code.
          </p>
        </div>

        {/* Filter Controls Section */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-12 space-y-4 shadow-sm">
          {/* Main Category Filter */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-gray-700">Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {mainCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategorySelect(category)}
                  className={`text-xs h-8 ${
                    selectedCategory === category
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white text-gray-700 border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Technology Filter Chips */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200/80">
            <div className="flex items-center space-x-2">
              <Code2 className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-gray-700">Filter by Tech:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {popularTechFilters.map((tech) => {
                const isActive = selectedTech === tech
                return (
                  <button
                    key={tech}
                    onClick={() => handleTechToggle(tech)}
                    className={`text-xs px-3 py-1 rounded-full border transition-all ${
                      isActive
                        ? "bg-teal-600 border-teal-600 text-white font-semibold shadow-sm"
                        : "bg-white border-slate-300 text-gray-600 hover:border-teal-400 hover:text-teal-700"
                    }`}
                  >
                    {tech}
                  </button>
                )
              })}
              {(selectedCategory !== "All" || selectedTech) && (
                <button
                  onClick={handleResetFilters}
                  className="text-xs text-red-600 hover:text-red-700 font-semibold px-2 py-1 underline ml-2"
                >
                  Reset All
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Projects Match Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-gray-600 font-medium mb-2">No projects match the selected filters.</p>
            <Button variant="outline" size="sm" onClick={handleResetFilters}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Projects Statistics */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="text-center border-slate-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-1">{projects.length}</div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Total Projects</p>
            </CardContent>
          </Card>
          <Card className="text-center border-slate-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-teal-600 mb-1">
                {projects.filter((p) => p.category === "Web").length}
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Web &amp; Full-Stack</p>
            </CardContent>
          </Card>
          <Card className="text-center border-slate-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-cyan-600 mb-1">
                {[...new Set(projects.flatMap((p) => p.technologies))].length}
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Technologies Used</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
