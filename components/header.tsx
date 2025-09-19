"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ExternalLink, ChevronDown, Mail } from "lucide-react"
import { AnimatedTagline } from "./animated-tagline"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setIsAboutDropdownOpen(false)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const handleSupportClick = () => {
    window.open("https://www.hinfinitysolutions.com", "_blank", "noopener,noreferrer")
    setIsMenuOpen(false)
  }

  const navigation = [
    { name: "SLATE Platform", href: "/products" },
    { name: "DevOps", href: "/devops" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
  ]

  const isActivePage = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  const isAboutActive = pathname === "/about" || pathname === "/careers"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover-scale" onClick={handleLinkClick}>
            <div className="w-10 h-10 logo-gradient rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold hinfinity-gradient-text">Hinfinity</span>
              <AnimatedTagline />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {/* Navigation Menu Items */}
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 nav-link-hover whitespace-nowrap ${
                    isActivePage(item.href) ? "nav-link-active" : "text-gray-700"
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              ))}

              {/* About Company Dropdown */}
              <div className="relative">
                <button
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 nav-link-hover whitespace-nowrap flex items-center ${
                    isAboutActive ? "nav-link-active" : "text-gray-700"
                  }`}
                  onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                  onMouseEnter={() => setIsAboutDropdownOpen(true)}
                >
                  About Company
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isAboutDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={handleLinkClick}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/careers"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={handleLinkClick}
                    >
                      Careers
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Buttons with spacing */}
            <div className="flex items-center space-x-3 ml-8">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover-lift text-sm px-4 py-2"
                onClick={handleSupportClick}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Get Support
              </Button>
              <Button className="cta-primary text-sm px-4 py-2" asChild>
                <Link href="/contact" onClick={handleLinkClick}>
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover-lift text-xs px-3 py-2"
              onClick={handleSupportClick}
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              Support
            </Button>
            <button className="p-2 rounded-lg cta-primary transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActivePage(item.href) ? "nav-link-active" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/about"
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                  pathname === "/about" ? "nav-link-active" : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={handleLinkClick}
              >
                About Company
              </Link>
              <Link
                href="/careers"
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ml-4 ${
                  pathname === "/careers" ? "nav-link-active" : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={handleLinkClick}
              >
                Careers
              </Link>
              <div className="px-4 pt-2">
                <Button className="w-full cta-primary" asChild>
                  <Link href="/contact" onClick={handleLinkClick}>
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
