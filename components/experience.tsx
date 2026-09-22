import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Building2, Users, Monitor, Megaphone, Sparkles, Award } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer Intern (Full-Stack)",
    organization: "BigLedger (Wavelet Subsidiary)",
    period: "Sep 2025 - Feb 2026",
    location: "Greater Kuala Lumpur, Malaysia",
    type: "Enterprise & Full-Stack",
    isHighlight: true,
    description:
      "Engineered full-stack features within a live multi-tenant cloud ERP platform and led large-scale data migration workflows directly on production environments.",
    achievements: [
      "Developed full-stack enterprise application modules utilizing Angular for dynamic frontend architecture and Java Spring Boot for scalable backend services.",
      "Built and optimized comprehensive ETL data pipelines using Pentaho Data Integration to migrate 20+ years of legacy enterprise records to a modern PostgreSQL Cloud Data Lake.",
      "Entrusted with direct production access to live codebases, managing database structures and ensuring zero-tolerance precision for financial transactions.",
      "Handled operational technical support, diagnosing critical client production incidents, performing live debugging, and shipping validated bug fixes.",
      "Engineered Python automation scripts for image hashing, content deduplication, and database cleanup.",
      "Collaborated within an agile cross-functional team using Git/GitHub for version control and Jira for sprint tracking.",
    ],
    icon: Building2,
  },
  {
    title: "Speaker Management",
    organization: "TEDxUTM",
    period: "Nov 2024 - May 2025",
    location: "Johor Bahru, Malaysia",
    type: "External Relations & Management",
    isHighlight: false,
    description:
      "Curated event themes, interviewed keynote speakers, tracked speech delivery progress, and ensured all talks adhered to official TED guidelines.",
    achievements: [
      "Curated the overarching event theme and selected prominent speakers whose expertise strictly aligned with event goals.",
      "Conducted speaker interviews, coordinated presentation materials, and maintained quality standards.",
      "Served as primary liaison for the keynote speaker and managed stage coordination.",
    ],
    icon: Users,
  },
  {
    title: "Website & Performance Analyst",
    organization: "AIESEC",
    period: "Jan 2025 - May 2025",
    location: "Johor Bahru, Malaysia",
    type: "Technical & Web Development",
    isHighlight: false,
    description:
      "Developed web properties, enhanced UI/UX workflows, and analyzed user engagement metrics to drive data-driven platform optimizations.",
    achievements: [
      "Designed and developed web solutions ensuring alignment with organizational branding across sub-products.",
      "Devised and implemented UI/UX improvements to optimize user flows and interface accessibility.",
      "Monitored website performance metrics to identify bottlenecks and implement actionable optimizations.",
    ],
    icon: Monitor,
  },
  {
    title: "Marketing and Partnerships",
    organization: "AIESEC",
    period: "Sep 2024 - Jan 2025",
    location: "Johor Bahru, Malaysia",
    type: "External Relations & Strategy",
    isHighlight: false,
    description:
      "Engaged stakeholders, led targeted outreach campaigns, and conducted data analysis on program performance.",
    achievements: [
      "Engaged key external stakeholders and partners through structured communication and relationship-building.",
      "Initiated and executed promotional outreach campaigns across digital channels and on-campus events.",
      "Analyzed engagement metrics to evaluate performance and propose actionable growth strategies.",
    ],
    icon: Megaphone,
  },
]

const certifications = [
  { title: "CS50's Web Programming with Python and JavaScript", issuer: "Harvard University" },
  { title: "Angular Fundamentals", issuer: "Frontend Masters" },
  { title: "Cursor & Claude Code: Professional AI Setup", issuer: "Frontend Masters" },
  { title: "Claude 101", issuer: "Anthropic" },
  { title: "Introduction to Generative AI", issuer: "Google Cloud" },
  { title: "Introduction to Large Language Models", issuer: "Google Cloud" },
  { title: "Introduction to Responsible AI", issuer: "Google Cloud" },
  { title: "1 Million Prompters", issuer: "Dubai Future Foundation & DCAI" },
  { title: "Predictive Project Management Badge", issuer: "PMI" },
  { title: "AI Hackathon FCRI Finalist", issuer: "UTM" },
  { title: "IELTS English Test (Band 7.0 - C1)", issuer: "British Council / IDP" },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Leadership</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practical enterprise software engineering experience, data migration, and leadership roles in organizational
            and community initiatives.
          </p>
        </div>

        {/* Highlighted Flagship Experience (BigLedger) */}
        {experiences.filter((e) => e.isHighlight).map((exp, index) => {
          const IconComponent = exp.icon
          return (
            <div key={index} className="mb-12">
              <Card className="border-2 border-blue-500 shadow-xl overflow-hidden relative">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-2.5 flex items-center justify-between text-white">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                    <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">
                      Featured Enterprise Experience
                    </span>
                  </div>
                  <Badge className="bg-white/20 hover:bg-white/30 text-white border-0 text-xs">
                    {exp.period}
                  </Badge>
                </div>

                <CardHeader className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 rounded-xl">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900">{exp.title}</CardTitle>
                        <p className="text-blue-600 font-semibold text-lg">{exp.organization}</p>
                        <p className="text-xs text-gray-500">{exp.location}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="self-start md:self-auto bg-blue-50 text-blue-700 border-blue-200">
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-700 text-base">{exp.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Technical Contributions:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start text-sm text-gray-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        })}

        {/* Other Organizational & Leadership Roles */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {experiences.filter((e) => !e.isHighlight).map((exp, index) => {
            const IconComponent = exp.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
                <div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        <IconComponent className="w-5 h-5 text-slate-700" />
                      </div>
                      <div>
                        <CardTitle className="text-base font-bold text-gray-900 leading-snug">{exp.title}</CardTitle>
                        <p className="text-sm font-medium text-blue-600">{exp.organization}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-0">
                    <p className="text-xs text-gray-600 leading-relaxed">{exp.description}</p>
                    <ul className="space-y-1.5 pt-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-xs text-gray-500">
                          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Professional Certifications & Training */}
        <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-center space-x-2">
              <Award className="w-6 h-6 text-blue-600" />
              <CardTitle className="text-center text-xl font-bold text-gray-900">
                Certifications &amp; Professional Credentials
              </CardTitle>
            </div>
            <p className="text-center text-xs text-gray-500">
              Verified certifications from leading universities and industry authorities
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-3.5 rounded-lg shadow-sm border border-slate-200 hover:border-blue-300 transition-colors flex flex-col justify-between"
                >
                  <p className="text-xs font-semibold text-gray-800">{cert.title}</p>
                  <p className="text-[11px] text-blue-600 font-medium mt-1">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
