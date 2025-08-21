/**
 * Projects data structure
 * To add a new project, simply add a new object to this array
 * All fields are required for consistent display
 */

export interface Project {
  id: string // Unique identifier for the project
  title: string // Project name
  description: string // Brief description (2-3 sentences)
  image: string // Image URL or placeholder
  technologies: string[] // Array of technologies used
  features: string[] // Key features/achievements (3-5 items)
  year: string // Year completed
  type: string // Project type (Mobile App, Web App, etc.)
  category: string // Category for filtering
  githubUrl?: string // Optional GitHub repository URL
  liveUrl?: string // Optional live demo URL
  isUniversity?: boolean // Whether it's a university project
}

export const projects: Project[] = [
  
  // {
  //   id: "fullstack-web",
  //   title: "Full-Stack Web Application",
  //   description:
  //     "A complete web application with modern frontend, robust backend API, and secure database integration. Features role-based access control and comprehensive admin dashboard.",
  //   image: "/placeholder.svg?height=300&width=500",
  //   technologies: ["Next.js", "Express.js", "MongoDB", "RESTful API", "JWT", "Tailwind CSS"],
  //   features: [
  //     "Responsive React-based frontend with modern UI",
  //     "RESTful API with Express.js and middleware",
  //     "MongoDB database with optimized queries",
  //     "JWT-based authentication and authorization",
  //     "Admin dashboard with analytics and user management",
  //   ],
  //   year: "2024",
  //   type: "Web Application",
  //   category: "Full-Stack",
  //   isUniversity: true,
  // },
  // {
  //   id: "dynamic-website",
  //   title: "Dynamic Website",
  //   description:
  //     "A responsive dynamic website with server-side functionality, form handling, and optimized performance across all devices. Built with vanilla technologies for maximum compatibility.",
  //   image: "/placeholder.svg?height=300&width=500",
  //   technologies: ["JavaScript", "PHP", "HTML5", "CSS3", "MySQL", "AJAX"],
  //   features: [
  //     "Server-side PHP functionality with session management",
  //     "Responsive design implementation with CSS Grid",
  //     "Form validation and secure data processing",
  //     "Cross-browser compatibility testing",
  //     "SEO optimization and performance tuning",
  //   ],
  //   year: "2024",
  //   type: "Website",
  //   category: "Frontend",
  //   isUniversity: true,
  // },
  // Add more projects here easily by copying the structure above
  // Example of a hobby project:
  /*
  {
    id: "personal-blog",
    title: "Personal Tech Blog",
    description: "A personal blog built with Next.js and MDX for writing about technology and programming experiences.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    features: [
      "Static site generation for optimal performance",
      "MDX support for rich content creation",
      "SEO optimized with meta tags",
      "Dark mode support"
    ],
    year: "2024",
    type: "Website",
    category: "Personal",
    isUniversity: false
  }
  */

  {
    id: "Betalink",
    title: "Academic Resource Sharing System",
    description: "Web app for academic material sharing with UTM API integration",
    image: "/Betalink.jpg?height=300&width=500",
    technologies: ["Vue.js", "Express.js", "Node.js", "Tailwind CSS", "MySQL"],
    features: [
      "Authentication & Authorization",
      "CRUD Operations",
      "API Integration",
      "Database Integration",
      "Full-Stack Development",
    ],
    year: "2024",
    type: "Website",
    category: "Web",
    githubUrl: "https://github.com/AhmedWritesCode/Betalink",
    isUniversity: true
  },
  
 
  {
    id: "timetable",
    title: "Faculty of Computing Timetable Website",
    description: "A timetable viewing platform built for UTM's Faculty of Computing with API Integeration.",
    image: "/fsksm.png?height=300&width=500",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Authentication & Authorization",
      "API Integration",
      "Problem Solving with Core Technologies",
    ],
    year: "2025",
    type: "Website",
    category: "Web",
    githubUrl: "https://github.com/AhmedWritesCode/FSKSM",
    isUniversity: false
  },

  {
    id: "tvpss",
    title: "TVPSS Management Information System",
    description: "Real World Project, Backend-focused prototype system for youth development organization.",
    image: "/TVPSSJOHOR.png",
    technologies: ["Jakarta Enterprise Edition (Java EE)", "Spring Framework", "JSP", "MySQL"],
    features: [
      "Authentication & Authorization",
      "Database Integeration (Hibernate ORM)",
      "CRUD Operations",
      "Enterprise Application Development",
    ],
    year: "2025",
    type: "Website",
    category: "Web",
    githubUrl: "https://github.com/AhmedWritesCode/TVPSS-MIS", 
    isUniversity: true
  },

  {
    id: "game",
    title: "Simple OOP-based Game",
    description: "C++ game exploring object-oriented design with legacy graphics.",
    image: "/game.jpg?height=300&width=500", 
    technologies: ["C++"],
    features: [
      "C++ OOP concepts: inheritance, aggregation, composition, association",
      "Legacy graphics using C++ libraries",
      "Game mechanics with classes and objects",
      "Basic game loop and event handling",
    ],
    year: "2023",
    type: "Game",
    category: "Game Development",
    githubUrl: "https://github.com/AhmedWritesCode/SpeedRush", 
    isUniversity: false
  },
  {
    id: "bitewise",
    title: "BiteWise - Mobile App",
    description:
      "A mobile application designed to help users monitor daily caloric intake, understand nutritional habits, and achieve personal health goals.",
    image: "/bitewise.jpg?height=200&width=300",
    technologies: ["Flutter", "Firebase", "Dart", "AI", "LLM (Gemini)"],
    features: [
      "AI Food Scanning with Gemini LLM",
      "Health metrics tracking and analytics",
      "Authentication",
      "CRUD Operations",
      "Firebase integration",
      "User-friendly interface with Flutter",
      "Group Project",
    ],
    year: "2025",
    type: "Mobile Application",
    category: "Mobile App",
    githubUrl: "https://github.com/SECJ3623-MAP-24252/map-group-project-descent",
    isUniversity: true,
  },

  {
    id: "deepseek",
    title: "DeepseekR1 Chatbot Webapp",
    description:
      "A Simple Chatbot that utilizes DeepseekR1 and Qwen VL LLMs.",
    image: "/deepseek.jpg?height=300&width=500",
    technologies: ["Deepseek R1", "Qwen VL", "JavaScript", "HTML", "CSS"],
    features: [
      "Deepseek R1 and Qwen VL integration for natural language processing",
      "User-friendly chat interface",
      "Real-time responses",
      "Memory and Image Handling",
    ],
    year: "2025",
    type: "Website",
    category: "AI",
    githubUrl: "https://github.com/AhmedWritesCode/DeepSeekR1Chatbot",
    liveUrl: "https://ahmedwritescode.github.io/DeepSeekR1Chatbot/", 
    isUniversity: false,
  },
  {
    id: "recipe",
    title: "Recipe Management System",
    description:
      "Simple CRUD web app for managing recipes.",
    image: "/recipe.jpg?height=200&width=300",
    technologies: ["JavaScript", "PHP", "MySQL", "HTML", "CSS"],
    features: [
      "User-friendly interface for recipe management",
      "CRUD operations for recipes",
      "Search and filter functionality",
      "Authentication and Authorization",
      "Database Integeration",
    ],
    year: "2025",
    type: "Web Application",
    category: "Web",
    githubUrl: "https://github.com/AhmedWritesCode/Recipe-MIS",
    isUniversity: false
  },

  {
    id: "finpy",
    title: "Simple Finance Manager",
    description:
      "Personal finance tracker built in Python..",
    image: "/python.png",
    technologies: ["Python", "Pandas"],
    features: [
      "Track income and expenses",
      "Generate financial reports",
      "Data visualization with Pandas",
      "Simple command-line interface",
    ],
    year: "2025",
    type: "Web Application",
    category: "System",
    githubUrl: "https://github.com/AhmedWritesCode/SimpleFinanceManager",
    isUniversity: false
  },

]

/**
 * Helper function to get projects by category
 * Useful for filtering functionality
 */
export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter((project) => project.category.toLowerCase() === category.toLowerCase())
}

/**
 * Helper function to get university vs personal projects
 */
export const getProjectsByType = (isUniversity: boolean): Project[] => {
  return projects.filter((project) => project.isUniversity === isUniversity)
}

/**
 * Get all unique categories for filtering
 */
export const getProjectCategories = (): string[] => {
  return [...new Set(projects.map((project) => project.category))]
}
