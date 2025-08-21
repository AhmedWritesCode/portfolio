import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, MapPin } from "lucide-react"
import { personalInfo, achievements } from "@/data/personal-info"

/**
 * About section component displaying education and achievements
 * Uses data from personal-info.ts for easy updates
 */
export default function About() {
  // Sample coursework - you can move this to data file too if needed
  const relevantFields = [
    "Software Development",
    "System Architecture",
    "System Design",
    "System Analysis",
    "Software Development Life Cycle (SDLC)",
    "Web Development",
    "Backend and Frontend Development (Fullstack)",
    "Mobile App Development",
    "Prototyping",
    "Data Analysis",
    "Software Quality Assurance",
    "Artificial Intelligence",
    "Machine Learning",
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A dedicated Software Engineering student with a passion for creating innovative solutions and a strong
            academic foundation in computer science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Education & Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education & Achievements</h3>
            <div className="space-y-6">
              {/* Education Card */}
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <GraduationCap className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{personalInfo.degree}</h4>
                      <p className="text-gray-600">{personalInfo.university}</p>
                      <p className="text-sm text-gray-500">2022 - Present | CGPA: {personalInfo.gpa}</p>
                      <p className="text-sm text-gray-500">Currently: {personalInfo.currentYear}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-l-4 border-l-teal-500">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Award className="w-6 h-6 text-teal-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                        <p className="text-gray-600">{achievement.description}</p>
                        {achievement.score && <p className="text-gray-600">Score: {achievement.score}</p>}
                        <p className="text-sm text-gray-500">{achievement.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Location Card */}
              <Card className="border-l-4 border-l-cyan-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-cyan-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <p className="text-gray-600">{personalInfo.location}</p>
                      <p className="text-sm text-gray-500">Open to Relocation all Over Malaysia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Filed of Interest */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Field of Interest</h3>
            <div className="grid grid-cols-2 gap-4">
              {relevantFields.map((course, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <p className="text-sm font-medium text-gray-700">{course}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Languages</h4>
              <div className="space-y-2">
                {personalInfo.languages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border"
                  >
                    <span className="font-medium text-gray-700">{lang.language}</span>
                    <span className="text-sm text-gray-500">{lang.proficiency}</span>
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
