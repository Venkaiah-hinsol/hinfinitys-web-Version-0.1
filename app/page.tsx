import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Globe,
  Bot,
  Code2,
  Shield,
  Headphones,
  Star,
  Sparkles,
  Target,
  Rocket,
  Building2,
  Factory,
  Heart,
  Wheat,
  Monitor,
  Brain,
  Cloud,
  Settings,
  BarChart3,
  Layers3,
  TrendingUp,
  Lightbulb,
  Cpu,
  Phone,
  Mail,
  CreditCard,
  Quote,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Hinfinity Solutions - Leading AI-Powered Digital Transformation & Enterprise Technology Services",
  description:
    "Transform your business with Hinfinity Solutions' cutting-edge SLATE Platform, AI/ML implementations, DevOps consulting, cloud solutions, and enterprise software development. Serving 150+ clients across 5 countries with 99% satisfaction rate.",
  keywords: [
    "AI-powered digital transformation",
    "SLATE Platform no-code development",
    "enterprise software development",
    "DevOps consulting services",
    "cloud migration solutions",
    "artificial intelligence implementation",
    "machine learning development",
    "custom software development",
    "business automation solutions",
    "technology consulting firm",
    "SaaS application development",
    "enterprise technology solutions",
    "digital transformation services",
    "IT consulting company",
    "software development agency",
  ],
  authors: [{ name: "Hinfinity Solutions" }],
  creator: "Hinfinity Solutions Private Limited",
  publisher: "SLATE Platform by Hinfinity Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.hinfinitys.com",
    title: "Hinfinity Solutions - Leading AI-Powered Digital Transformation & Enterprise Technology Services",
    description:
      "Transform your business with cutting-edge SLATE Platform, AI/ML implementations, DevOps consulting, and enterprise software development. 150+ successful projects, 99% client satisfaction.",
    siteName: "Hinfinity Solutions",
    images: [
      {
        url: "/transform-your-business-with-ai-powered-solutions-hinfinity.png",
        width: 1200,
        height: 630,
        alt: "Hinfinity Solutions - Enterprise Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hinfinity Solutions - AI-Powered Digital Transformation",
    description:
      "Leading provider of SLATE Platform, AI/ML solutions, DevOps consulting, and enterprise software development.",
    creator: "@hinfinitysol",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.hinfinitys.com",
  },
}

export default function HomePage() {
  const heroStats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "50+",
      label: "Expert Developers & Consultants",
      color: "text-blue-600",
      description: "Certified professionals in AI/ML, DevOps, and enterprise development",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      value: "20",
      label: "Global Markets Served",
      color: "text-green-600",
      description: "Active presence in India, UK, US, Middle East, and Southeast Asia",
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "200+",
      label: "Successful Project Deliveries",
      color: "text-purple-600",
      description: "Enterprise solutions across manufacturing, healthcare, agriculture, and more",
    },
    {
      icon: <Star className="h-6 w-6" />,
      value: "99%",
      label: "Client Satisfaction Rate",
      color: "text-orange-600",
      description: "Consistently exceeding client expectations with quality deliverables",
    },
  ]

  const fourPillars = [
    {
      icon: <Bot className="h-6 w-6 text-white" />,
      title: "SLATE Platform",
      subtitle: "SaaS Linked Add-On & Tooling Environment",
      description:
        "Revolutionary AI-powered no-code platform enabling rapid micro-SaaS application development with intelligent automation, visual development canvas, and enterprise-grade security.",
      features: [
        "AI-Powered Code Generation",
        "Visual Drag-Drop Interface",
        "Micro-SaaS Application Builder",
        "Enterprise Security & Compliance",
        "Real-time Collaboration Tools",
        "Automated Testing & Deployment",
      ],
      gradient: "from-blue-500 to-purple-600",
      href: "/products",
      benefits: "Reduce development time by 80% while maintaining enterprise-grade quality and security standards.",
    },
    {
      icon: <Factory className="h-6 w-6 text-white" />,
      title: "Industry Solutions",
      subtitle: "Sector-Specific Digital Transformation",
      description:
        "Tailored technology solutions for manufacturing, agriculture, real estate, healthcare, and IT sectors with deep industry expertise and compliance knowledge.",
      features: [
        "Manufacturing IoT & Automation",
        "AgriTech & Precision Farming",
        "PropTech & Real Estate Platforms",
        "Payment Gateway Integrations",
        "Healthcare & Telemedicine",
        "IT Services & Digital Agencies",
      ],
      gradient: "from-green-500 to-teal-600",
      href: "/solutions",
      benefits: "Industry-specific solutions that address unique challenges and regulatory requirements.",
    },
    {
      icon: <Settings className="h-6 w-6 text-white" />,
      title: "Technology Services",
      subtitle: "Expert Development & Consulting",
      description:
        "Comprehensive technology services including custom software development, AI/ML implementation, cloud migration, mobile app development, and cybersecurity solutions.",
      features: [
        "Custom Software Development",
        "AI/ML Implementation & Training",
        "Cloud Migration & DevOps",
        "Mobile App Development",
        "Data Analytics & Business Intelligence",
        "Cybersecurity & Compliance",
      ],
      gradient: "from-purple-500 to-pink-600",
      href: "/services",
      benefits: "End-to-end technology services from strategy to deployment and ongoing support.",
    },
    {
      icon: <Headphones className="h-6 w-6 text-white" />,
      title: "Career & Support",
      subtitle: "Join Our Team & Get Expert Support",
      description:
        "Explore exciting career opportunities in cutting-edge technology while receiving 24/7 technical support, comprehensive maintenance, and continuous system optimization.",
      features: [
        "Technology Career Opportunities",
        "24/7 Technical Support",
        "System Maintenance & Updates",
        "Performance Optimization",
        "Training & Knowledge Transfer",
        "Dedicated Account Management",
      ],
      gradient: "from-orange-500 to-red-600",
      href: "/careers",
      benefits: "Build meaningful careers while ensuring your technology investments deliver continuous value.",
    },
  ]

  const slateFeatures = [
    {
      icon: <Brain className="h-6 w-6 text-blue-600" />,
      title: "AI-Powered Development Engine",
      description:
        "Advanced machine learning models for intelligent code generation, automated testing, and smart error detection.",
      benefits: "Accelerate development by 10x with AI assistance",
    },
    {
      icon: <Code2 className="h-6 w-6 text-purple-600" />,
      title: "Visual Development Canvas",
      description:
        "Intuitive drag-and-drop interface for building complex applications without traditional coding requirements.",
      benefits: "Enable non-technical users to build enterprise applications",
    },
    {
      icon: <Layers3 className="h-6 w-6 text-green-600" />,
      title: "Micro-SaaS Application Builder",
      description:
        "Rapidly create and deploy specialized SaaS applications with built-in monetization and user management.",
      benefits: "Launch SaaS products 5x faster than traditional development",
    },
    {
      icon: <Shield className="h-6 w-6 text-red-600" />,
      title: "Enterprise Security Framework",
      description: "Built-in security features with GDPR compliance, multi-factor authentication, and data encryption.",
      benefits: "Meet enterprise security requirements out-of-the-box",
    },
  ]

  const devopsServices = [
    {
      icon: <Cpu className="h-6 w-6 text-blue-600" />,
      title: "CI/CD Pipeline Automation",
      description: "Automated build, test, and deployment pipelines using Jenkins, GitLab CI, and GitHub Actions.",
      metrics: "Reduce deployment time by 90%",
    },
    {
      icon: <Cloud className="h-6 w-6 text-green-600" />,
      title: "Infrastructure as Code (IaC)",
      description:
        "Automated infrastructure provisioning using Terraform, CloudFormation, and Ansible for scalable deployments.",
      metrics: "Achieve 99.9% infrastructure uptime",
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      title: "DevSecOps Integration",
      description:
        "Security-first approach with automated vulnerability scanning, compliance monitoring, and threat detection.",
      metrics: "Identify security issues 80% faster",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-orange-600" />,
      title: "Monitoring & Observability",
      description:
        "Comprehensive monitoring with Prometheus, Grafana, and ELK stack for real-time insights and alerting.",
      metrics: "Reduce MTTR by 70%",
    },
  ]

  const industries = [
    {
      icon: <Factory className="h-6 w-6 text-blue-600" />,
      name: "Manufacturing & Industrial",
      description: "Smart factory automation, IoT sensor integration, predictive maintenance solutions",
      
      roi: "35% efficiency improvement",
    },
    {
      icon: <Wheat className="h-6 w-6 text-green-600" />,
      name: "Agriculture & AgriTech",
      description: "Precision farming, crop monitoring, weather analytics, supply chain optimization",
      
      roi: "30% yield increase",
    },
    {
      icon: <Building2 className="h-6 w-6 text-purple-600" />,
      name: "Real Estate & PropTech",
      description: "Property management systems, virtual tours, investment analytics, tenant portals",
      
      roi: "50% faster sales cycles",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-orange-600" />,
      name: "Payment Gateway Integration",
      description: "Secure payment processing, transaction management, multi-currency support",
      
      roi: "99.9% uptime achieved",
    },
    {
      icon: <Heart className="h-6 w-6 text-red-600" />,
      name: "Healthcare & Life Sciences",
      description: "HIPAA-compliant systems, telemedicine platforms, medical device integration",
      
      roi: "60% operational efficiency",
    },
    {
      icon: <Monitor className="h-6 w-6 text-indigo-600" />,
      name: "IT Services & Digital Agencies",
      description: "SaaS platform development, digital transformation, technology consulting",
      
      roi: "3x faster time-to-market",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry-Leading Expertise",
      description:
        "Certified professionals with deep expertise in AI/ML, cloud technologies, DevOps, and enterprise architecture.",
      gradient: "from-blue-500 to-purple-600",
      certifications: "AWS, Azure, Google Cloud, Kubernetes certified team",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation-First Approach",
      description:
        "Revolutionary SLATE Platform and cutting-edge AI implementations that transform business operations and drive growth.",
      gradient: "from-green-500 to-teal-600",
      certifications: "Patent-pending AI technologies and proprietary frameworks",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Reach & Local Expertise",
      description:
        "Serving clients across India, UK, US, Middle East, and Southeast Asia with 24/7 support and local market knowledge.",
      gradient: "from-purple-500 to-pink-600",
      certifications: "GDPR compliant operations with global support",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "End-to-End Solution Delivery",
      description:
        "Complete lifecycle support from strategy and architecture to development, deployment, and ongoing maintenance.",
      gradient: "from-orange-500 to-red-600",
      certifications: "CMMI Level 3, Agile & DevOps certified processes",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp International",
      content:
        "Hinfinity Solutions transformed our entire development workflow with their SLATE Platform. We reduced our time-to-market by 60% and improved code quality significantly. Their team's expertise in AI/ML is unmatched.",
      rating: 5,
      company: "TechCorp International",
      image: "/placeholder.svg?height=80&width=80&text=SJ",
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      content:
        "The DevOps transformation they delivered helped us achieve 99.9% uptime and reduced our deployment time from hours to minutes. Their team's dedication and technical skills are exceptional.",
      rating: 5,
      company: "InnovateLab",
      image: "/placeholder.svg?height=80&width=80&text=MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, StartupXYZ",
      content:
        "The AI/ML solutions they implemented exceeded our expectations. Our customer engagement increased by 40% and we gained valuable insights into user behavior patterns.",
      rating: 5,
      company: "StartupXYZ",
      image: "/hy.png?height=80&width=80&text=ER",
    },
  ]

  const trustedPartners = [
    {
      name: "Google",
      logo: "/google-cloud.png?height=60&width=120&text=Google",
      category: "Cloud Partner",
    },
    {
      name: "Microsoft",
      logo: "/microsoft-azure.png?height=60&width=120&text=Microsoft",
      category: "Technology Partner",
    },
    {
      name: "AWS",
      logo: "/aws.png?height=60&width=120&text=AWS",
      category: "Cloud Partner",
    },
    {
      name: "Slack",
      logo: "/slack.png?height=60&width=120&text=Slack",
      category: "Integration Partner",
    },
    {
      name: "Git",
      logo: "/git.png?height=60&width=120&text=Git",
      category: "Development Partner",
    },
    {
      name: "Stripe",
      logo: "/stripe.png?height=60&width=120&text=Stripe",
      category: "Payment Partner",
    },
    {
      name: "DPIIT Startup India",
      logo: "/dpiit.png?height=60&width=120&text=DPIIT",
      category: "Government Recognition",
    },
    {
      name: "Powered by SLATE",
      logo: "/hy.png?height=60&width=120&text=SLATE",
      category: "Our Platform",
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
                <Sparkles className="mr-2 h-4 w-4" />
                Leading AI-Powered Digital Transformation
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business with{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI-Powered Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Hinfinity Solutions delivers cutting-edge <strong>SLATE Platform</strong>,{" "}
                <strong>AI/ML implementations</strong>,<strong> DevOps consulting</strong>, and{" "}
                <strong>enterprise software development</strong> to transform businesses across manufacturing,
                healthcare, agriculture, and technology sectors. Join 200+ successful clients achieving digital
                transformation excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
  size="lg"
  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover-lift"
  asChild
>
  <a
    href="https://www.hyslate.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    Explore SLATE Platform <ArrowRight className="ml-2 h-4 w-4" />
  </a>
</Button>

                <Button
  size="lg"
  variant="outline"
  className="text-white border-white/30 hover:bg-white/10 bg-transparent backdrop-blur-sm hover:scale-105 hover:text-white transition-all duration-300"
  asChild
>
  <a
    href="https://calendly.com/contact-hinfinitys/30min"
    target="_blank"
    rel="noopener noreferrer"
  >
    Get Free Consultation
  </a>
</Button>


              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Global Presence</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Powered by SLATE</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>GDPR Compliant</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Image
                  src="/transform-your-business-with-ai-powered-solutions-hinfinity.png"
                  alt="Hinfinity Solutions AI-Powered Digital Transformation Platform"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-4 group-hover:shadow-lg transition-all duration-300 ${stat.color}`}
                >
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-900 font-medium mb-2">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Industry Partners */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2">
              <Award className="mr-2 h-4 w-4" />
              Trusted by Industry Partners
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Partnering with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading technology partners to deliver exceptional solutions and maintain the highest
              standards of innovation and reliability for our clients worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {trustedPartners.map((partner, index) => (
              <div key={index} className="group text-center">
                <Image
                  src={partner.logo || "/devops-transformation-for-enterprise-hinfinity.png"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="mx-auto group-hover:scale-110 transition-transform duration-300 mb-4"
                />
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{partner.name}</h3>
                <p className="text-xs text-gray-600">{partner.category}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                
                
              </div>
              <div className="text-center">
                
              </div>
              <div className="text-center">
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2">
              <Target className="mr-2 h-4 w-4" />
              Our Core Service Pillars
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Technology Solutions for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our four core service pillars represent our commitment to delivering outstanding technology solutions,
              career opportunities, and comprehensive support that drives business transformation and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {fourPillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${pillar.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    {pillar.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
                    <p className="text-blue-600 font-medium text-sm">{pillar.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{pillar.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {pillar.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6">
                  <p className="text-sm font-medium text-blue-800 mb-1">Key Benefit:</p>
                  <p className="text-sm text-blue-700">{pillar.benefits}</p>
                </div>

                <Button
                  className={`bg-gradient-to-r ${pillar.gradient} text-white hover:shadow-lg transition-all duration-300 hover-lift w-full`}
                  asChild
                >
                  <Link href={pillar.href}>
                    Explore {pillar.title} Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLATE Platform Highlight */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2">
                <Bot className="mr-2 h-4 w-4" />
                Revolutionary SLATE Platform
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SLATE Platform
                </span>{" "}
                - The Future of Application Development
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                <strong>SaaS Linked Add-On & Tooling Environment (SLATE)</strong> is our revolutionary AI-powered
                no-code platform that enables businesses to build enterprise-grade micro-SaaS applications 10x faster
                than traditional development methods, with built-in security, scalability, and compliance features.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {slateFeatures.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{feature.description}</p>
                    <div className="bg-green-100 rounded-lg p-2">
                      <p className="text-green-800 text-xs font-medium">{feature.benefits}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
  size="lg"
  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover-lift"
  asChild
>
  <a
    href="https://www.hyslate.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    Explore SLATE Platform <ArrowRight className="ml-2 h-4 w-4" />
  </a>
</Button>
                <Button
  size="lg"
  variant="outline"
  className="hover:bg-blue-50 transition-all duration-300 bg-transparent"
  asChild
>
  <a
    href="https://calendly.com/contact-hinfinitys/30min"
    target="_blank"
    rel="noopener noreferrer"
  >
    Request Demo
  </a>
</Button>

              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
                  <Image
                    src="/slate-platform-future-application-development-hinfinity.png"
                    alt="SLATE Platform AI-Powered No-Code Development Interface"
                    width={500}
                    height={400}
                    className="rounded-xl"
                  />

                  {/* Platform Stats Overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">10x</div>
                      <div className="text-xs text-gray-600">Faster Development</div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">80%</div>
                      <div className="text-xs text-gray-600">Cost Reduction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Services Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
                  <Image
                    src="/devops-transformation-for-enterprise-hinfinity.png"
                    alt="DevOps Consulting Services - CI/CD Pipeline Automation"
                    width={500}
                    height={400}
                    className="rounded-xl"
                  />

                  {/* DevOps Metrics Overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">99.9%</div>
                      <div className="text-xs text-gray-600">Uptime SLA</div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">90%</div>
                      <div className="text-xs text-gray-600">Faster Deployments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <Badge className="mb-6 bg-gradient-to-r from-green-600 to-teal-600 text-white border-0 px-4 py-2">
                <Settings className="mr-2 h-4 w-4" />
                Expert DevOps Consulting
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  DevOps Transformation
                </span>{" "}
                for Enterprise Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Accelerate your software delivery lifecycle with our comprehensive DevOps consulting services. We
                implement industry-leading CI/CD pipelines, infrastructure automation, security integration, and
                monitoring solutions that reduce deployment time by 90% while achieving 99.9% uptime reliability.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {devopsServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.description}</p>
                    <div className="bg-green-100 rounded-lg p-2">
                      <p className="text-green-800 text-xs font-medium">{service.metrics}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white shadow-lg hover-lift"
                  asChild
                >
                  <Link href="/devops">
                    Explore DevOps Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:bg-green-50 transition-all duration-300 bg-transparent"
                  asChild
                >
                  <Link href="/contact#contact-form">Get DevOps Assessment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-2">
              <Factory className="mr-2 h-4 w-4" />
              Industry Expertise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Diverse Industries with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Specialized Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our deep industry expertise enables us to deliver tailored technology solutions that address specific
              sector challenges, regulatory requirements, and business objectives across multiple verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{industry.description}</p>

                <div className="flex justify-between items-center mb-4">
                  <Badge variant="secondary" className="text-xs">
                   
                  </Badge>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">{industry.roi}</div>
                    <div className="text-xs text-gray-500">Average ROI</div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full hover:bg-purple-50 transition-all duration-300 bg-transparent"
                  asChild
                >
                  <Link href="/solutions">
                    View Solutions <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover-lift"
              asChild
            >
              <Link href="/solutions">
                Explore All Industry Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/*
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 px-4 py-2">
              <Quote className="mr-2 h-4 w-4" />
              Client Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Hear from industry leaders who have transformed their businesses with our innovative technology solutions
              and expert consulting services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-orange-600 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-orange-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
      

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border-white/20 border-0 px-4 py-2">
              <Award className="mr-2 h-4 w-4" />
              Why Choose Hinfinity Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Leading Enterprises Choose{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Hinfinity Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We combine deep technical expertise with business acumen to deliver solutions that drive real value,
              measurable ROI, and sustainable competitive advantage for our clients worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${reason.gradient} rounded-lg flex items-center justify-center mb-6`}
                >
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{reason.description}</p>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-blue-200 text-sm font-medium">{reason.certifications}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="absolute inset-0">
              <div className="absolute top-10 left-1/4 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse"></div>
              <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10">
              <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border-white/20 border-0 px-4 py-2">
                <Rocket className="mr-2 h-4 w-4" />
                Ready to Transform Your Business?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Start Your Digital Transformation Journey Today
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Join 150+ successful clients who have transformed their businesses with our AI-powered SLATE Platform,
                expert DevOps consulting, and comprehensive technology solutions. Get started with a free consultation
                and discover how we can accelerate your digital transformation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
  size="lg"
  className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover-lift"
  asChild
>
  <a
    href="https://calendly.com/contact-hinfinitys/30min"
    target="_blank"
    rel="noopener noreferrer"
  >
    Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
  </a>
</Button>

                <Button
  size="lg"
  variant="outline"
  className="text-white border-white/30 hover:bg-white/10 bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:text-white"
  asChild
>
  <a
    href="https://www.hyslate.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    Explore SLATE Platform <ArrowRight className="ml-2 h-4 w-4" />
  </a>
</Button>

              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-center space-x-3 text-white">
                  
                  <div>
                    
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3 text-white">
                  
                  <div>
                    
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3 text-white">
                  
                  <div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
