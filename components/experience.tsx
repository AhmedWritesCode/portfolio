import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Calendar, Banana, Monitor, Megaphone, Calendar1 } from "lucide-react"

const experiences = [
  {
    title: "Website & Performance Analyst",
    organization: "AIESEC",
    period: "Jan 2025 - May 2025",
    type: "Technical",
    description: "Developed AIESEC in Malaysia’s website with aligned branding, improved UI/UX, and optimized performance.",
    achievements: [
      "Designed and developed the official AIESEC in Malaysia website , ensuring alignment with the organization’s branding across all sub-products. Development",
      "Devised and implemented UI/UX improvement strategies to enhance user experience and interface design.",
      "Analyzed website performance metrics to identify issues and propose data-driven solutions for optimization.",
    ],
    icon: Monitor,
  },
  {
    title: "Marketing and Partnerships",
    organization: "AIESEC",
    period: "Sep 2024 - Jan 2025",
    type: "External Relations",
    description: "Engaged stakeholders, led targeted marketing initiatives, managed promotional campaigns, and analyzed performance data to drive outreach and product growth.",
    achievements: [
      "Identified and engaged with potential stakeholders and sponsors through effective communication and relationship-building strategies.",
      "Promoted AIESEC products and opportunities by developing and implementing targeted marketing strategies.",
      "Initiated and managed marketing projects, including booths, online events, and other promotional activities, to enhance outreach and engagement.",
      "Conducted data analysis on product performance, engagement metrics, and marketing effectiveness to identify gaps, evaluate past performance, and propose actionable solutions for improvement",
    ],
    icon: Megaphone,
  },
    {
    title: "Event Management",
    organization: "AIESEC",
    period: "Sep 2024 - Jan 2025",
    type: "Management",
    description: "Significantly Contributed to Youth Speak Forum Roadshow as an Organizing Committee, handling event coordination, scripting, documentation, technical support, and attendee engagement for NYSF (National Youth Speak Forum) promotions.",
    achievements: [
      "Contributed to the Youth Speak Forum (YSF) Roadshow as part of the Organizing Committee, managing event alignment, scriptwriting, documentation, and technical troubleshooting.",
      "Promoted the National Youth Speak Forum (NYSF) by engaging potential attendees, sending invitations, and addressing inquiries.",
      "Utilized skills in event planning, leadership, and technical support to ensure successful event execution.",
    ],
    icon: Calendar,
  },
      {
    title: "Speaker Management",
    organization: "TEDxUTM",
    period: "Nov 2024 - May 2025",
    type: "External Relations, Management",
    description: "Curated event theme, interviewed and invited relevant speakers, provided materials, tracked progress, and ensured all talks met TED guidelines.",
    achievements: [
      "Curated the event theme and selected speakers whose expertise aligned with it, ensuring coherence and relevance.",
      "Conducted interviews, sent invitations, and provided ongoing support with materials and progress tracking.",
      "Ensured all speeches adhered to TED rules and quality standards, maintaining compliance throughout the process.",
      "Person in Charge of Key Note Speaker, Samson Wang Swee Ann (Hungry Sam), A popular local influencer.",

    ],
    icon: Users,
  },
]

const certifications = [
  "Design Thinking for Entrepreneur",
  "Data Analytics for Organization",
  "Introduction to Generative AI (Google)",
  "Introduction to Large Language Models (Google)",
  "Introduction to Responsible AI (Google)",
  "Predictive Project Management Badge (PMI)",
  "AI Hackathon FCRI 2024 Finalist (UTM)",
  "Microsoft AI Odyssey",
  "IELTS English Test (Band 7.0)",
  "Proffessional Communication Skills (UTM)",
  "Internship Preparatory Course (UTM)",
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Leadership</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Demonstrating leadership skills and community involvement through various organizational roles and
            professional development activities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <IconComponent className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                        <p className="text-emerald-600 font-medium">{exp.organization}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                    <p className="text-gray-600">{exp.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="bg-gradient-to-br from-emerald-50 to-teal-50">
          <CardHeader>
            <CardTitle className="text-center text-gray-900">Professional Certifications & Training</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
                  <p className="text-sm font-medium text-gray-700 text-center">{cert}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
