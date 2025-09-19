"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Briefcase,
  Code2,
  Building,
  Globe,
  Calendar,
  ExternalLink,
} from "lucide-react"

export function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitStatus("success")

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
      })
      setSubmitStatus("idle")
    }, 3000)
  }

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+91-9888 9333 17",
      availability: "Mon-Fri, 11AM-5PM IST",
      action: "Call Now",
      href: "tel:+919888933317",
      gradient: "from-blue-500 to-cyan-600",
      hoverColor: "hover:bg-blue-50 hover:border-blue-200",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Get detailed responses within 24 hours",
      contact: "connect@hinfinitys.com",
      availability: "24/7 Response",
      action: "Send Email",
      href: "mailto:connect@hinfinity.com",
      gradient: "from-green-500 to-emerald-600",
      hoverColor: "hover:bg-green-50 hover:border-green-200",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "AI Chat Support",
      description: "Instant support for quick questions",
      contact: "Available on website",
      availability: "24/7 Availability",
      action: "Start Chat",
      href: "#",
      gradient: "from-purple-500 to-violet-600",
      hoverColor: "hover:bg-purple-50 hover:border-purple-200",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Schedule Meeting",
      description: "Book a consultation with our team",
      contact: "30-minute free consultation",
      availability: "Flexible scheduling",
      action: "Book Meeting",
      href: "https://calendly.com/contact-hinfinitys/30min",
      gradient: "from-orange-500 to-red-600",
      hoverColor: "hover:bg-orange-50 hover:border-orange-200",
      external: true,
    },
  ]

  const officeLocations = [
    {
      city: "Hyderabad",
      address: "4th Floor, Unit No 405-411, Bizness Square, HNO.1-98/3/5/23 to 27, Jubliee Enclave, SY Nos 66&67, Madhapur, Serlingampally Mandal",
      zipCode: "Telangana, IN 500081",
      phone: "+91-9888 9333 17",
      email: "connect@hinfinitys.com",
      timezone: "IST (UTC+5:30)",
      image: "/Hinfinity Office - Co-Working Space Hitech City.png?height=200&width=300&text=San+Francisco+Office",
    },
    // {
    //   city: "New York",
    //   address: "456 Innovation Avenue, Floor 15",
    //   zipCode: "New York, NY 10001",
    //   phone: "+1 (555) 234-5678",
    //   email: "ny@hinfinity.com",
    //   timezone: "EST (UTC-5)",
    //   image: "/placeholder.svg?height=200&width=300&text=New+York+Office",
    // },
    // {
    //   city: "Austin",
    //   address: "789 Tech Boulevard, Building C",
    //   zipCode: "Austin, TX 78701",
    //   phone: "+1 (555) 345-6789",
    //   email: "austin@hinfinity.com",
    //   timezone: "CST (UTC-6)",
    //   image: "/placeholder.svg?height=200&width=300&text=Austin+Office",
    // },
  ]

  const departmentContacts = [
    {
      department: "Sales & Business Development",
      description: "New projects, partnerships, and business inquiries",
      icon: <Briefcase className="h-6 w-6 text-white-600" />,
      gradient: "from-blue-500 to-cyan-600",
      hoverColor: "hover:bg-blue-50 hover:border-blue-200",
      emails: [
        {
          email: "sales@hinfinitys.com",
          className: "text-green-600",
        },
        {
          email: "sales@hinfinitysolutions.com",
          className: "text-red-600",
        },
      ],
    },

    {
      department: "Technical Support",
      description: "Project support, technical questions, and maintenance",
      email: "support@hinfinitys.com",
      email: "support@hinfinitysolutions.com",
      icon: <Code2 className="h-6 w-6 text-white-600" />,
      gradient: "from-green-500 to-emerald-600",
      hoverColor: "hover:bg-green-50 hover:border-green-200",
      emails: [
        {
          email: "support@hinfinitys.com",
          className: "text-green-600",
        },
        {
          email: "support@hinfinitysolutions.com",
          className: "text-red-600",
        },
      ],
    },
    {
      department: "Human Resources",
      description: "Career opportunities, recruitment, and employee relations",
      icon: <Users className="h-6 w-6 text-white-600" />,
      gradient: "from-purple-500 to-violet-600",
      hoverColor: "hover:bg-purple-50 hover:border-purple-200",
      emails: [
        {
          email: "hr@hinfinitys.com",
          className: "text-green-600",
        },
        {
          email: "hr@hinfinity.in",
          className: "text-red-600",
        },
      ],
    },
    {
      department: "Official Channels",
      description: "Press inquiries, media relations, and company information",
      icon: <Globe className="h-6 w-6 text-white-600" />,
      gradient: "from-orange-500 to-red-600",
      hoverColor: "hover:bg-orange-50 hover:border-orange-200",
      emails: [
        {
          email: "info@hinfinitys.com",
          className: "text-green-600",
        },
        {
          email: "info@hinfinitysolutions.com",
          className: "text-red-600",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2">
                <MessageSquare className="mr-2 h-4 w-4" />
                Get In Touch
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {"Let's Build Something"}{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Amazing Together
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ready to transform your business with <strong>cutting-edge technology solutions</strong>? Our expert
                team is here to help you achieve your goals. <strong>Contact us today</strong> for a{" "}
                <strong>free consultation</strong> and discover how we can accelerate your digital transformation
                journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover-lift"
                  asChild
                >
                  <Link href="#contact-form">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10 bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="tel:+919888933317">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Link>
                </Button>
              </div>

              {/* Quick Contact Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>24/7 Support Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Global Presence</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Image
                  src="/build-something-amazing-together-hinfinity.png"
                  alt="Contact Hinfinity Solutions Expert Team"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />

                {/* Contact Highlights Overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">Free</div>
                    <div className="text-xs text-gray-600">Consultation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2">
              <Phone className="mr-2 h-4 w-4" />
              Multiple Ways to Connect
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Preferred Contact Method
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We offer multiple convenient ways to get in touch with our expert team. Choose the method that works best
              for you and get the support you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) =>
              method.external ? (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 ${method.hoverColor}`}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                  <div className="text-sm font-medium text-gray-900 mb-1">{method.contact}</div>
                  <div className="text-xs text-gray-500 mb-4">{method.availability}</div>
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-300">
                    {method.action}
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </a>
              ) : (
                <Link
                  key={index}
                  href={method.href}
                  className={`group bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 ${method.hoverColor}`}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                  <div className="text-sm font-medium text-gray-900 mb-1">{method.contact}</div>
                  <div className="text-xs text-gray-500 mb-4">{method.availability}</div>
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-300">
                    {method.action}
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-6 bg-gradient-to-r from-green-600 to-teal-600 text-white border-0 px-4 py-2">
                <Send className="mr-2 h-4 w-4" />
                Project Inquiry
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tell Us About{" "}
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Your Project
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Share your project details with us and our expert team will get back to you within 24 hours with a
                customized solution and timeline.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Free Consultation</h3>
                    <p className="text-gray-600 text-sm">
                      Get expert advice and project assessment at no cost to help you make informed decisions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">24-Hour Response</h3>
                    <p className="text-gray-600 text-sm">
                      Our team commits to responding to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Custom Solutions</h3>
                    <p className="text-gray-600 text-sm">
                      Every project is unique. We provide tailored solutions that fit your specific requirements and
                      budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2 block">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="service" className="text-sm font-medium text-gray-700 mb-2 block">
                      Service Needed *
                    </Label>
                    <Select onValueChange={(value) => handleSelectChange("service", value)} required>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="custom-development">Custom Software Development</SelectItem>
                        <SelectItem value="ai-ml">AI/ML Implementation</SelectItem>
                        <SelectItem value="devops">DevOps Consulting</SelectItem>
                        <SelectItem value="cloud-migration">Cloud Migration</SelectItem>
                        <SelectItem value="mobile-development">Mobile App Development</SelectItem>
                        <SelectItem value="cybersecurity">Cybersecurity Services</SelectItem>
                        <SelectItem value="data-analytics">Data Analytics</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget" className="text-sm font-medium text-gray-700 mb-2 block">
                      Project Budget
                    </Label>
                    <Select onValueChange={(value) => handleSelectChange("budget", value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-25k">Under $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                        <SelectItem value="over-500k">Over $500,000</SelectItem>
                        <SelectItem value="discuss">Prefer to discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="timeline" className="text-sm font-medium text-gray-700 mb-2 block">
                    Project Timeline
                  </Label>
                  <Select onValueChange={(value) => handleSelectChange("timeline", value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="When do you need this completed?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="2-3-months">2-3 months</SelectItem>
                      <SelectItem value="3-6-months">3-6 months</SelectItem>
                      <SelectItem value="6-12-months">6-12 months</SelectItem>
                      <SelectItem value="flexible">Flexible timeline</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                    Project Details *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full"
                    placeholder="Please describe your project requirements, goals, and any specific technologies or features you need..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white shadow-lg hover-lift"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <p className="text-green-800 font-medium">Message sent successfully!</p>
                    <p className="text-green-600 text-sm">{"We'll get back to you within 24 hours."}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-2">
              <Building className="mr-2 h-4 w-4" />
              Department Contacts
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Connect with the{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Right Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Get in touch with the specific department that can best help you. Each team is equipped with specialized
              knowledge to address your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departmentContacts.map((dept, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 border-gray-100 ${dept.hoverColor}`}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${dept.gradient} rounded-lg flex items-center justify-center text-white`}
                  >
                    {dept.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{dept.department}</h3>
                    <p className="text-gray-600 text-sm">{dept.description}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {dept.emails && dept.emails.length > 0 && (
                    <>
                      {dept.emails.map((mail, mailIdx) => (
                        <Link
                          key={mailIdx}
                          href={`mailto:${mail.email}`}
                          className={`flex items-center space-x-3 p-3 bg-white rounded-lg transition-colors duration-300 group
                  ${mailIdx === 0 ? 'hover:bg-blue-50 hover:text-blue-700' : 'hover:bg-red-50 hover:text-red-700'}`}
                        >
                          <Mail className={`h-5 w-5 text-gray-400 group-hover:${mailIdx === 0 ? 'text-blue-600' : 'text-red-600'} transition-colors duration-300`} />
                          <div>
                            <div className={`font-medium text-gray-900 group-hover:${mailIdx === 0 ? 'text-blue-600' : 'text-red-600'} transition-colors duration-300`}>
                              {mail.email}
                              <span className={`ml-2 px-2 py-0.5 rounded text-xs font-semibold ${mailIdx === 0 ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'}`}>
                                {mailIdx === 0 ? 'Primary' : 'Legacy'}
                              </span>
                            </div>
                            <div className="text-sm text-gray-500">Click to send email</div>
                          </div>
                        </Link>
                      ))}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 px-4 py-2">
              <MapPin className="mr-2 h-4 w-4" />
              Our Locations
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Global{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Office Presence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              With offices across major technology hubs, we provide local expertise with global reach. Visit us or
              connect with our regional teams for personalized service.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-1 gap-8">
                {officeLocations.map((office, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full"
                  >
                    <div className="mb-6">
                      <Image
                        src={office.image || "/placeholder.svg"}
                        alt={`${office.city} office`}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{office.city} Office</h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-gray-900 font-medium">{office.address}</div>
                          <div className="text-gray-600 text-sm">{office.zipCode}</div>
                        </div>
                      </div>

                      <Link
                        href={`tel:${office.phone.replace(/\s/g, "").replace(/[()]/g, "")}`}
                        className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                      >
                        <Phone className="h-5 w-5" />
                        <span>{office.phone}</span>
                      </Link>

                      <Link
                        href={`mailto:${office.email}`}
                        className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                      >
                        <Mail className="h-5 w-5" />
                        <span>{office.email}</span>
                      </Link>

                      <div className="flex items-center space-x-3 text-gray-600">
                        <Clock className="h-5 w-5" />
                        <span>{office.timezone}</span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 bg-transparent"
                      asChild
                    >
                      <Link href={`mailto:${office.email}`}>
                        Contact This Office <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2">
              <MessageSquare className="mr-2 h-4 w-4" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Answers
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services, process, and how we can help your business.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can you start my project?",
                answer:
                  "We can typically begin new projects within 1-2 weeks after the initial consultation and contract signing. For urgent projects, we offer expedited onboarding with dedicated resources.",
              },
              {
                question: "Do you work with startups and small businesses?",
                answer:
                  "We work with businesses of all sizes, from early-stage startups to Fortune 500 companies. We offer flexible engagement models and pricing to accommodate different budgets and requirements.",
              },
              {
                question: "What is your development process?",
                answer:
                  "We follow an agile development methodology with regular client communication, iterative development cycles, and continuous testing. Our process includes discovery, planning, development, testing, deployment, and ongoing support.",
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer:
                  "Yes, we offer comprehensive post-launch support including maintenance, updates, monitoring, and technical support. We provide various support packages to meet different needs and budgets.",
              },
              {
                question: "Can you work with our existing team and systems?",
                answer:
                  "Definitely! We excel at integrating with existing teams and systems. We can work as an extension of your team, provide consulting services, or take full ownership of specific projects while ensuring seamless integration.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">{"Still have questions? We're here to help!"}</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover-lift"
              asChild
            >
              <a href="mailto:connect@hinfinitys.com">
                Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
