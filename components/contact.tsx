"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { toast } from "sonner"
import { Toaster } from 'sonner'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  useEffect(() => {
    // Initialize EmailJS when component mounts
    emailjs.init("bwy1mj-s0DNItrXYp") // public key
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await emailjs.send(
        'service_bg8g7zz', //service id
        'template_wpsepui', //template id
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString()
        },
        'bwy1mj-s0DNItrXYp'
      )
      
      toast.success("Message sent successfully!")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm actively seeking internship opportunities in software engineering. Let's connect and discuss how I can
            contribute to your team!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <Link
                        href="mailto:zaki.ahmed@graduate.utm.my"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        zaki.ahmed@graduate.utm.my
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-teal-500">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-teal-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <Link href="tel:01112345157" className="text-gray-600 hover:text-teal-600 transition-colors">
                        01112345157
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-cyan-500">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-cyan-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <p className="text-gray-600">Johor Bahru, Malaysia</p>
                      <p className="text-sm text-gray-500">Open to relocation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/in/ahmed-zaki-al-gabaly-14aa19262/"
                  className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border"
                >
                  <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors" />
                </Link>
                <Link href="https://github.com/AhmedWritesCode" className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                  <Github className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          <Card className="bg-white shadow-lg z-10">
            <CardHeader>
              <CardTitle className="text-gray-900">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com" 
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship Opportunity" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about the internship opportunity or project you'd like to discuss..."
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Toaster />
    </section>
  )
}
