import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, MapPin, Sparkles } from "lucide-react"
import { personalInfo, achievements } from "@/data/personal-info"

/**
 * About section component displaying education, achievements, and core competencies
 */
export default function About() {
  const relevantFields = [
    "Full-Stack Web Development",
    "Enterprise Architecture (Spring Boot & Angular)",
    "Data Migration & ETL (Pentaho, PostgreSQL)",
    "Database Engineering & SQL",
    "System Design & SDLC",
    "Artificial Intelligence & LLMs",
    "Object-Oriented Programming (Java, C++)",
    "Python Automation & Computer Vision",
    "RESTful API & Microservices",
    "Software Quality Assurance",
    "Agile Sprint Workflows (Git, Jira)",
    "Docker & Containerization",
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Software Engineering graduate with hands-on enterprise development and data migration experience, solid
            foundations in modern web frameworks, and consistent academic excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Education & Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education &amp; Honors</h3>
            <div className="space-y-6">
              {/* Education Card */}
              <Card className="border-l-4 border-l-blue-500 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <GraduationCap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{personalInfo.degree}</h4>
                      <p className="text-gray-600 font-medium">{personalInfo.university}</p>
                      <div className="mt-2.5">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                          <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                          CGPA: 3.76 (Dean's Award • First Class Honours)
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-l-4 border-l-teal-500 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Award className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{achievement.description}</p>
                        {achievement.score && (
                          <p className="text-sm font-medium text-teal-700 mt-1">Score: {achievement.score}</p>
                        )}
                        {achievement.year && <p className="text-xs text-gray-400 mt-1">{achievement.year}</p>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Location Card */}
              <Card className="border-l-4 border-l-cyan-500 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-cyan-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <p className="text-gray-700 font-medium">{personalInfo.location}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Available for Software Engineer &amp; Junior Developer roles in the UAE
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Core Technical Competencies & Languages */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Core Competencies</h3>
            <div className="grid grid-cols-2 gap-3">
              {relevantFields.map((field, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <p className="text-xs font-semibold text-gray-800">{field}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Languages</h4>
              <div className="grid grid-cols-2 gap-3">
                {personalInfo.languages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-white p-3.5 rounded-lg shadow-sm border border-slate-200"
                  >
                    <span className="font-semibold text-sm text-gray-800">{lang.language}</span>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
