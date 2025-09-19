"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, ArrowRight, Server, Code, Shield, Headphones, Users, Building, Mail, Phone, Clock } from "lucide-react"

export default function NotFound() {
  const navigationOptions = [
    {
      icon: <Server className="h-8 w-8 text-slate-600" />,
      title: "SLATE Platform",
      description: "Explore our flagship SaaS Linked Add-On & Tooling Environment with AI implementations",
      href: "/products",
      cardClass: "slate-card",
      textClass: "slate-gradient-text",
      buttonClass: "slate-gradient-bg",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "DevOps Consulting",
      description: "Comprehensive DevOps services with CI/CD pipelines and resource deployments",
      href: "/devops",
      cardClass: "devops-card",
      textClass: "devops-gradient-text",
      buttonClass: "devops-gradient-bg",
    },
    {
      icon: <Code className="h-8 w-8 text-purple-600" />,
      title: "Our Services",
      description: "Complete technology services including AI implementations and automation",
      href: "/services",
      cardClass: "services-card",
      textClass: "services-gradient-text",
      buttonClass: "services-gradient-bg",
    },
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Industry Solutions",
      description: "Tailored solutions for healthcare, finance, manufacturing, and more",
      href: "/solutions",
      cardClass: "solutions-card",
      textClass: "solutions-gradient-text",
      buttonClass: "solutions-gradient-bg",
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "About Company",
      description: "Learn about our mission, values, and expertise in enterprise technology",
      href: "/about",
      cardClass: "slate-card",
      textClass: "slate-gradient-text",
      buttonClass: "slate-gradient-bg",
    },
    {
      icon: <Headphones className="h-8 w-8 text-orange-600" />,
      title: "Careers",
      description: "Join our team working on cutting-edge SLATE Platform and AI solutions",
      href: "/careers",
      cardClass: "support-card",
      textClass: "support-gradient-text",
      buttonClass: "support-gradient-bg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* 404 Hero Section */}
        <div className="mb-16 animate-fade-in-up">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-20 blur-3xl animate-pulse-glow"></div>
            <h1 className="relative text-8xl md:text-9xl font-bold hinfinity-gradient-text animate-float">404</h1>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Oops! Page Not Found</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            The page you're looking for seems to have wandered off into the digital void. But don't worry! Let us help
            you find what you're looking for with our comprehensive technology solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover-lift"
              asChild
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="hover-lift bg-white" asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Support
              </Link>
            </Button>
          </div>
        </div>

        {/* Navigation Options */}
        <div className="mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2">
            Explore Our Solutions
          </Badge>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Where Would You Like to Go?</h3>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive range of SLATE Platform solutions, AI implementations, DevOps consulting, and
            enterprise technology services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {navigationOptions.map((option, index) => (
              <Card
                key={index}
                className={`${option.cardClass} hover-lift-card group shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-slow`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {option.icon}
                  </div>
                  <CardTitle className={`text-xl ${option.textClass}`}>{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">{option.description}</CardDescription>
                  <Button
                    size="sm"
                    className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover-lift w-full`}
                    asChild
                  >
                    <Link href={option.href}>
                      Explore <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Contact Section */}
        <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 logo-gradient rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="ml-3 text-2xl font-bold hinfinity-gradient-text">Need Immediate Help?</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
              <a
                href="mailto:support@hinfinitys.com"
                className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
              >
                support@hinfinitys.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
              <a href="tel:+919888933317" className="text-green-600 hover:text-green-800 transition-colors text-sm">
                +91-9888 9333 17
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
              <p className="text-gray-600 text-sm">Mon-Fri: 8AM-11PM IST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
