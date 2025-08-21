import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skillCategories, areasOfInterest, getColorClasses } from "@/data/skills"

/**
 * Skills component displaying technical skills and areas of interest
 * All data is loaded from data/skills.ts for easy expansion
 */
export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and programming languages acquired through academic
            coursework, hands-on project development, and Extracurricular Activities.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.id}
                className={`border-l-4 ${getColorClasses(category.color)} hover:shadow-lg transition-shadow duration-300`}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <IconComponent className={`w-6 h-6 ${getColorClasses(category.color)}`} />
                    <span className="text-lg text-gray-900">{category.title}</span>
                  </CardTitle>
                  {/* Optional description */}
                  {category.description && <p className="text-sm text-gray-500 mt-1">{category.description}</p>}
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Areas of Interest Section */}
        <div className="mt-16">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-gray-900">Courses</CardTitle>
              <p className="text-center text-gray-600 text-sm">Key Courses from my Univeristy Degree</p>
            </CardHeader>
            <CardContent>
              {/* Responsive grid that adapts to content */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                {areasOfInterest.map((interest, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg hover:shadow-md transition-shadow duration-200"
                  >
                    <p className="font-medium text-gray-800 text-sm">{interest}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Summary Statistics */}
        {/* <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                {skillCategories.reduce((total, category) => total + category.skills.length, 0)}
              </div>
              <p className="text-gray-600">Technical Skills</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-teal-600 mb-2">{skillCategories.length}</div>
              <p className="text-gray-600">Skill Categories</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-cyan-600 mb-2">{areasOfInterest.length}</div>
              <p className="text-gray-600">Areas of Interest</p>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  )
}
