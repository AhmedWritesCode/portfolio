"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter } from "lucide-react"
import Image from "next/image"
import { projects, getProjectCategories, type Project } from "@/data/projects"
import { trackProjectView } from "@/lib/analytics"

/**
 * Projects component with filtering functionality
 * Projects are loaded from data/projects.ts for easy expansion
 */
export default function Projects() {
  // State for filtering projects
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  // Get all unique categories for filter buttons
  const categories = ["All", ...getProjectCategories()]

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  /**
   * Render individual project card
   */
  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* Category and Year Badges */}
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-gray-700">
            {project.category}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-white/90 text-gray-700">
            {project.year}
          </Badge>
        </div>
        {/* University Project Indicator */}
        {project.isUniversity && (
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-blue-600 text-white">University Project</Badge>
          </div>
        )}
      </div>

      {/* Project Content */}
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
        <p className="text-gray-600">{project.description}</p>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {/* Key Features */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {project.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            {project.liveUrl && (
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
                asChild
                onClick={() => trackProjectView(project.id, project.title)}
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button size="sm" variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical skills through university coursework and personal projects, demonstrating
            proficiency in modern development technologies. Feel free to explore my <a href="https://github.com/AhmedWritesCode" style={{ color: "#008000" }}> GitHub </a> for more projects and contributions.
  
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-500">Filter by category:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}

        {/* Projects Statistics */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">{projects.length}</div>
              <p className="text-gray-600">Total Projects</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-teal-600 mb-2">
                {projects.filter((p) => p.isUniversity).length}
              </div>
              <p className="text-gray-600">University Projects</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-cyan-600 mb-2">
                {[...new Set(projects.flatMap((p) => p.technologies))].length}
              </div>
              <p className="text-gray-600">Technologies Used</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
