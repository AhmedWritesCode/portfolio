/**
 * Skills data structure
 * Centralized and structured according to technical competencies
 */

import { Code, Database, Globe, Cpu, Server, PenToolIcon as Tool } from "lucide-react"

export interface SkillCategory {
  id: string
  title: string
  icon: any // Lucide React icon component
  skills: string[]
  color: "emerald" | "teal" | "cyan" | "purple" | "orange" | "rose"
  description?: string
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    icon: Globe,
    skills: [
      "Spring Boot",
      "Angular",
      "Django",
      "Vue.js",
      "Next.js",
      "Express.js",
      "Node.js",
      "FastAPI",
      "Tailwind CSS",
    ],
    color: "teal",
    description: "Enterprise and modern full-stack web frameworks",
  },
  {
    id: "programming",
    title: "Programming Languages",
    icon: Code,
    skills: ["Java", "Python", "TypeScript", "JavaScript", "C++", "SQL", "PHP", "Dart", "HTML5 / CSS3"],
    color: "emerald",
    description: "Core languages for backend, frontend, and systems",
  },
  {
    id: "databases",
    title: "Data, Databases & ETL",
    icon: Database,
    skills: [
      "PostgreSQL",
      "Supabase",
      "Pentaho Data Integration",
      "MySQL",
      "ETL Pipelines",
      "DBeaver Enterprise",
      "Firebase",
      "Cloud Storage (Buckets)",
    ],
    color: "cyan",
    description: "Relational database design, data lakes, and ETL workflows",
  },
  {
    id: "ai",
    title: "AI & Intelligent Systems",
    icon: Cpu,
    skills: [
      "Gemini AI",
      "Claude / Antigravity",
      "Prompt Engineering",
      "LLM Integration",
      "OpenCV",
      "NumPy",
      "Computer Vision",
    ],
    color: "purple",
    description: "Generative AI, LLM tooling, and computer vision",
  },
  {
    id: "backend",
    title: "Architecture & Backend",
    icon: Server,
    skills: [
      "RESTful API Design",
      "Enterprise Multi-Tenant Architecture",
      "Spring Security / JWT",
      "Micro-frontends (Applets)",
      "Change Data Capture (CDC)",
      "Server-side Development",
    ],
    color: "orange",
    description: "Robust scalable backend services and system architecture",
  },
  {
    id: "tools",
    title: "DevOps, Tools & Workflow",
    icon: Tool,
    skills: [
      "Git / GitHub",
      "Docker Containerization",
      "Jira (Agile / Sprint Tracking)",
      "Postman",
      "Linux / Windows Server",
      "CI/CD Workflows",
      "Vercel",
      "IntelliJ IDEA",
    ],
    color: "rose",
    description: "Version control, sprint management, and deployment",
  },
]

/**
 * Key Academic Coursework
 */
export const areasOfInterest: string[] = [
  "SOFTWARE DESIGN & ARCHITECTURE",
  "ENTERPRISE APPLICATION DEVELOPMENT",
  "SYSTEM ANALYSIS AND DESIGN",
  "DATABASE SYSTEMS & SQL",
  "SOFTWARE ENGINEERING PRINCIPLES",
  "REQUIREMENTS ENGINEERING & MODELING",
  "DATA STRUCTURES & ALGORITHMS",
  "OBJECT-ORIENTED PROGRAMMING",
  "WEB & INTERNET PROGRAMMING",
  "ARTIFICIAL INTELLIGENCE & MACHINE LEARNING",
  "SOFTWARE QUALITY ASSURANCE",
  "OPERATING SYSTEMS & NETWORKING",
]

/**
 * Helper function to get color classes for styling
 */
export const getColorClasses = (color: string) => {
  const colors = {
    emerald: "border-emerald-500 text-emerald-600",
    teal: "border-teal-500 text-teal-600",
    cyan: "border-cyan-500 text-cyan-600",
    purple: "border-purple-500 text-purple-600",
    orange: "border-orange-500 text-orange-600",
    rose: "border-rose-500 text-rose-600",
  }
  return colors[color as keyof typeof colors] || colors.emerald
}

/**
 * Get skills by category ID
 */
export const getSkillsByCategory = (categoryId: string): string[] => {
  const category = skillCategories.find((cat) => cat.id === categoryId)
  return category ? category.skills : []
}
