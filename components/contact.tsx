"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Linkedin, Github, Send, MessageSquare, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { toast } from "sonner"
import { Toaster } from "sonner"
import emailjs from "@emailjs/browser"
import { personalInfo } from "@/data/personal-info"

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    // Initialize EmailJS with public key
    emailjs.init("bwy1mj-s0DNItrXYp")
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await emailjs.send(
        "service_bg8g7zz",
        "template_wpsepui",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "bwy1mj-s0DNItrXYp"
      )

      toast.success("Message sent successfully! I will get back to you soon.")
      setIsSent(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Failed to send email:", error)
      toast.error("Failed to send message. Please try again or connect via LinkedIn.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I am currently open to Software Engineering and Junior Developer opportunities in the UAE. Feel free to send
            me a direct inquiry or connect on LinkedIn and GitHub!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details & Social Links (Privacy-safe) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact &amp; Location</h3>

            <Card className="border-l-4 border-l-blue-500 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-700 font-medium">{personalInfo.location}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Available for Software Engineer and Junior Developer roles
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-teal-500 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MessageSquare className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Direct Inquiries</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Use the message form on this page to send an inquiry directly to my inbox. I typically respond
                      within 24 hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="pt-4">
              <h4 className="font-semibold text-gray-900 mb-4">Professional Profiles</h4>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-5 py-3.5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200 text-gray-800 hover:text-blue-600 font-medium text-sm"
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <span>Connect on LinkedIn</span>
                </Link>

                <Link
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-5 py-3.5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200 text-gray-800 hover:text-blue-600 font-medium text-sm"
                >
                  <Github className="w-5 h-5 text-gray-900" />
                  <span>GitHub Profile</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Send Message Card */}
          <Card className="bg-white shadow-xl border-slate-200 z-10">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-gray-900">Send Me a Message</CardTitle>
              <p className="text-xs text-gray-500">
                Messages submitted here are routed directly to my private email inbox.
              </p>
            </CardHeader>
            <CardContent>
              {isSent ? (
                <div className="text-center py-10 space-y-4">
                  <div className="inline-flex p-3 bg-emerald-100 rounded-full text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Message Received!</h4>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Thank you for reaching out. I have received your message and will get back to you shortly.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsSent(false)}
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-slate-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-slate-50 focus:bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Software Engineering Role / Project Inquiry"
                      required
                      className="bg-slate-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Hi Ahmed, I would like to discuss an opportunity..."
                      required
                      className="bg-slate-50 focus:bg-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-sm font-semibold shadow-md"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Sending message..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <Toaster />
    </section>
  )
}
