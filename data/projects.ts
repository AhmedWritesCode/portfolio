/**
 * Projects data structure
 * All fields are required for consistent display
 */

export interface Project {
  id: string // Unique identifier for the project
  title: string // Project name
  description: string // Brief description
  image: string // Image URL from public/
  technologies: string[] // Array of technologies used
  features: string[] // Key features/achievements
  year: string // Year completed
  type: string // Project type (Web Application, Mobile App, etc.)
  category: "Web" | "AI" | "Game Development" // Main category for clean filtering
  githubUrl?: string // Optional GitHub repository URL
  liveUrl?: string // Optional live demo URL
  isUniversity?: boolean // Whether it's a university project
}

export const projects: Project[] = [
  {
    id: "deltaflow",
    title: "DeltaFlow - AI Financial Management System",
    description:
      "Web-based financial management platform with Spring Boot backend, Angular frontend, and Gemini AI assistance for smart financial insights and receipt transaction extraction.",
    image: "/deltaflow.png",
    technologies: ["Spring Boot", "Angular", "Tailwind CSS", "PostgreSQL", "Supabase", "Gemini AI"],
    features: [
      "AI financial assistance and receipt-based transaction extraction powered by Gemini LLM",
      "Robust REST API architecture built with Java Spring Boot and secure authentication",
      "Dynamic, responsive Single Page Application developed with Angular and Tailwind CSS",
      "Cloud database and storage hosted on Supabase (PostgreSQL) for scalable financial queries",
    ],
    year: "2025",
    type: "Web Application",
    category: "Web",
    liveUrl: "https://deltaflow-ai.vercel.app/",
    isUniversity: false,
  },
  {
    id: "orotick",
    title: "Orotick - Productivity & Focus Platform",
    description:
      "Comprehensive productivity ecosystem built with Django and Vanilla JavaScript for managing tasks, habits, Pomodoro focus sessions, and personal analytics.",
    image: "/orotick.png",
    technologies: ["Django", "Python", "JavaScript", "HTML5", "CSS3", "Chart.js"],
    features: [
      "Task and habit tracking with customizable Kanban workflow boards",
      "Integrated Pomodoro timer for deep focus and session tracking",
      "Personal productivity analytics and visualization dashboards using Chart.js",
      "Secure user authentication and server-rendered architecture with Django",
    ],
    year: "2025",
    type: "Web Application",
    category: "Web",
    liveUrl: "https://www.orotick.tech/",
    isUniversity: false,
  },
  {
    id: "timetable",
    title: "Faculty of Computing Timetable Website",
    description:
      "Official timetable viewing and schedule comparison platform built for UTM's Faculty of Computing with direct API integration.",
    image: "/fsksm.png",
    technologies: ["JavaScript", "HTML5", "CSS3", "UTM API"],
    features: [
      "Real-time course schedule search, student profile parsing, and timetable comparisons",
      "Seamless integration with UTM's institutional API",
      "Lightweight, responsive frontend built with core web technologies",
    ],
    year: "2025",
    type: "Website",
    category: "Web",
    githubUrl: "https://github.com/AhmedWritesCode/FSKSM",
    isUniversity: false,
  },
  {
    id: "betalink",
    title: "Academic Resource Sharing System",
    description:
      "Full-stack web application for sharing academic materials among university students, featuring UTM API authentication.",
    image: "/Betalink.jpg",
    technologies: ["Vue.js", "Express.js", "Node.js", "Tailwind CSS", "MySQL"],
    features: [
      "Authentication & Authorization integrated with UTM official API",
      "Complete CRUD operations for academic materials and course past papers",
      "Full-stack architecture with Express REST API and MySQL relational database",
    ],
    year: "2024",
    type: "Web Application",
    category: "Web",
    githubUrl: "https://github.com/AhmedWritesCode/Betalink",
    isUniversity: true,
  },
  {
    id: "tvpss",
    title: "TVPSS Management Information System",
    description:
      "Enterprise backend prototype for a youth development organization managing school media activities and administrative records.",
    image: "/TVPSSJOHOR.png",
    technologies: ["Spring MVC", "Java EE", "JSP", "Hibernate ORM", "MySQL"],
    features: [
      "Enterprise application development using Spring Framework and Java EE",
      "Database persistence and transaction management with Hibernate ORM",
      "Administrative dashboard with role-based access control and CRUD operations",
    ],
    year: "2025",
    type: "Web Application",
    category: "Web",
    githubUrl: "https://github.com/AhmedWritesCode/TVPSS-MIS",
    isUniversity: true,
  },
  {
    id: "rtse",
    title: "Real Time Vehicle Control (Autonomous Driving)",
    description:
      "Python autonomous driving script utilizing OpenCV computer vision, NumPy, and multithreaded sockets to navigate in-game vehicle challenges automatically.",
    image: "/rtse.png",
    technologies: ["Python", "OpenCV", "NumPy", "Sockets", "Multithreading"],
    features: [
      "Real-time video feed analysis and obstacle detection using OpenCV and NumPy",
      "Autonomous driving decision engine controlling throttle and steering inputs",
      "Low-latency multithreaded socket communication for real-time telemetry",
    ],
    year: "2025",
    type: "System / Automation",
    category: "AI",
    githubUrl: "https://github.com/AhmedWritesCode/RTSE_Phase_1_V1.0",
    isUniversity: false,
  },
  {
    id: "game",
    title: "SpeedRush - OOP-Based Game",
    description:
      "C++ 2D game exploring object-oriented design principles and low-level game mechanics under strict hardware constraints.",
    image: "/game.jpg",
    technologies: ["C++", "OOP", "Graphics Library"],
    features: [
      "Application of C++ OOP concepts: inheritance, composition, and association",
      "Custom 2D game loop, collision physics, and keyboard event handling",
      "Memory-efficient architecture using core C++ under legacy constraints",
    ],
    year: "2023",
    type: "Game",
    category: "Game Development",
    githubUrl: "https://github.com/AhmedWritesCode/SpeedRush",
    isUniversity: false,
  },
  {
    id: "recipe",
    title: "Recipe Management System",
    description:
      "Web application for creating, organizing, and discovering culinary recipes with user accounts and search filtering.",
    image: "/recipe.jpg",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    features: [
      "Full CRUD functionality for recipe authoring, categorization, and editing",
      "Recipe search, tag filtering, and user favorites collection",
      "Secure database transactions and user session management with PHP & MySQL",
    ],
    year: "2025",
    type: "Web Application",
    category: "Web",
    githubUrl: "https://github.com/AhmedWritesCode/Recipe-MIS",
    isUniversity: false,
  },
  {
    id: "portfolio",
    title: "Developer Portfolio & AI Assistant",
    description:
      "Modern developer portfolio featuring dynamic project showcases, enterprise experience highlights, and an integrated VectorShift AI chatbot.",
    image: "/portfolio-preview.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "VectorShift AI"],
    features: [
      "Interactive and fully responsive design built with Next.js and Tailwind CSS",
      "Integrated VectorShift AI assistant providing interactive inquiries on skills and projects",
      "Interactive project filtering and direct message form communication",
    ],
    year: "2025",
    type: "Web Application",
    category: "Web",
    liveUrl: "https://portfolio-roan-nine-90.vercel.app/",
    isUniversity: false,
  },
]

/**
 * Main categories for primary filtering
 */
export const mainCategories = ["All", "Web", "AI", "Game Development"] as const

/**
 * Key technologies for tech-based filtering
 */
export const popularTechFilters = [
  "Spring Boot",
  "Angular",
  "Django",
  "Python",
  "Vue.js",
  "C++",
  "PHP",
  "Next.js",
] as const
