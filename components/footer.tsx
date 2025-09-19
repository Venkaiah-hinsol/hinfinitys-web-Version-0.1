"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Globe, Linkedin, Twitter, Github, Youtube, ArrowRight, ExternalLink,Instagram,Facebook } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleSupportClick = () => {
    window.open("https://www.hinfinitysolutions.com", "_blank", "noopener,noreferrer")
  }

  const handleLinkClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter subscription logic would go here
    console.log("Newsletter subscription submitted")
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-6" onClick={handleLinkClick}>
                <div className="w-10 h-10 logo-gradient rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xl font-bold text-white">Hinfinity</span>
                  <span className="text-sm text-blue-300">SOLUTIONS</span>
                </div>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading AI-powered digital transformation company delivering cutting-edge SLATE Platform, DevOps
                consulting, and enterprise technology solutions across global markets.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://linkedin.com/company/hinfinity-solutions"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
    href="https://www.instagram.com/hinfinitysolutions/"
    className="text-gray-400 hover:text-pink-500 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Instagram className="h-5 w-5" />
  </Link>
                <Link
                  href="https://www.threads.com/@hinfinitysolutions"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
    href="https://www.facebook.com/hinfinitys"
    className="text-gray-400 hover:text-blue-600 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Facebook className="h-5 w-5" />
  </Link>
                
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/products"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={handleLinkClick}
                  >
                    SLATE Platform
                  </Link>
                </li>
                <li>
                  <Link
                    href="/devops"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={handleLinkClick}
                  >
                    DevOps Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Technology Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Industry Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={handleLinkClick}
                  >
                    About Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services#software-development"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Custom Software Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#ai-ml"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={handleLinkClick}
                  >
                    AI/ML Implementation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/devops"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Cloud Migration & DevOps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#mobile-development"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#data-analytics"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Data Analytics & BI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#cybersecurity"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Cybersecurity Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Stay Connected</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
  <Mail className="h-4 w-4 text-blue-400" />
  <a
    href="mailto:connect@hinfinitys.com"
    className="text-gray-300 text-sm hover:underline"
  >
    connect@hinfinitys.com
  </a>
</div>

                <div className="flex items-center space-x-3">
  <Phone className="h-4 w-4 text-blue-400" />
  <a
    href="tel:+919888933317"
    className="text-gray-300 text-sm hover:underline"
  >
    +91-9888 9333 17
  </a>
</div>

                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300 text-sm">Global Support 24/7</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div>
                <p className="text-gray-300 text-sm mb-3">Subscribe to our newsletter for updates</p>
                <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                    required
                  />
                  <Button type="submit" size="sm" className="cta-primary">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-300 text-sm">
                © {currentYear} Hinfinity Solutions Private Limited. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs">
                <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-600/30">
                  DPIIT Startup India
                </Badge>
                <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-600/30">
                  Powered by SLATE
                </Badge>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-4 text-sm">
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={handleLinkClick}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={handleLinkClick}
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookie-policy"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={handleLinkClick}
                >
                  Cookie Policy
                </Link>
              </div>
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover-lift"
                onClick={handleSupportClick}
              >
                <ExternalLink className="h-3 w-3 mr-2" />
                Get Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
