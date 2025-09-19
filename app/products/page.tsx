import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Bot,
  Brain,
  Layers3,
  Shield,
  Zap,
  Target,
  Rocket,
  Sparkles,
  Monitor,
  Database,
  Cloud,
  Settings,
  BarChart3,
  Users,
  Globe,
  Star,
  Palette,
  Lock,
  Play,
  Award,
  Phone,
  Mail,
} from "lucide-react"

export const metadata: Metadata = {
  title: "SLATE Platform - Revolutionary AI-Powered No-Code Development Platform | Hinfinity Solutions",
  description:
    "Discover SLATE Platform (SaaS Linked Add-On & Tooling Environment) - the revolutionary AI-powered no-code platform for building enterprise micro-SaaS applications 10x faster. Features intelligent code generation, visual development canvas, enterprise security, and automated deployment.",
  keywords: [
    "SLATE Platform",
    "AI-powered no-code platform",
    "micro-SaaS development",
    "visual development canvas",
    "enterprise application builder",
    "intelligent code generation",
    "automated software development",
    "no-code enterprise solutions",
    "SaaS application builder",
    "AI development platform",
    "visual programming platform",
    "enterprise no-code tools",
    "rapid application development",
    "business process automation",
    "custom software development",
  ],
  openGraph: {
    title: "SLATE Platform - Revolutionary AI-Powered No-Code Development Platform",
    description:
      "Build enterprise micro-SaaS applications 10x faster with SLATE Platform's AI-powered no-code development environment. Features intelligent automation, visual canvas, and enterprise security.",
    url: "https://hinfinitys.com/products",
    images: [
      {
        url: "/slate-platform-og.jpg",
        width: 1200,
        height: 630,
        alt: "SLATE Platform - AI-Powered No-Code Development",
      },
    ],
  },
  alternates: {
    canonical: "https://www.hinfinitys.com/products",
  },
}

export default function ProductsPage() {
  const heroStats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "500+",
      label: "Applications Built",
      color: "text-blue-600",
      description: "Enterprise applications deployed across industries",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      value: "10x",
      label: "Faster Development",
      color: "text-green-600",
      description: "Compared to traditional coding methods",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      value: "99.9%",
      label: "Security Uptime",
      color: "text-purple-600",
      description: "Enterprise-grade security and reliability",
    },
    {
      icon: <Star className="h-6 w-6" />,
      value: "4.9/5",
      label: "User Satisfaction",
      color: "text-orange-600",
      description: "Based on 500+ user reviews and feedback",
    },
  ]

  const coreFeatures = [
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      title: "AI-Powered Development Engine",
      subtitle: "Intelligent Code Generation & Automation",
      description:
        "Advanced machine learning models provide intelligent code generation, automated testing, smart error detection, and natural language processing for rapid application development.",
      features: [
        "Natural Language to Code Conversion",
        "Intelligent Code Auto-completion",
        "Automated Unit Test Generation",
        "Smart Error Detection & Fixing",
        "AI-Powered Code Optimization",
        "Predictive Performance Analysis",
      ],
      gradient: "from-blue-500 to-purple-600",
      benefits: "Reduce development time by 80% with AI assistance and automated workflows",
      roi: "80% faster development cycles",
    },
    {
      icon: <Palette className="h-6 w-6 text-white" />,
      title: "Visual Development Canvas",
      subtitle: "Drag-and-Drop Application Builder",
      description:
        "Intuitive visual interface enabling non-technical users to build complex enterprise applications through drag-and-drop components, visual workflows, and real-time preview capabilities.",
      features: [
        "Drag-and-Drop Component Library",
        "Visual Workflow Designer",
        "Real-time Application Preview",
        "Responsive Design Templates",
        "Custom Component Creation",
        "Multi-device Layout Optimization",
      ],
      gradient: "from-green-500 to-teal-600",
      benefits: "Enable business users to create applications without coding knowledge",
      roi: "70% reduction in development costs",
    },
    {
      icon: <Layers3 className="h-6 w-6 text-white" />,
      title: "Micro-SaaS Application Builder",
      subtitle: "Specialized SaaS Solution Creator",
      description:
        "Rapidly create and deploy specialized SaaS applications for specific business needs with built-in monetization, user management, analytics, and subscription billing capabilities.",
      features: [
        "Pre-built SaaS Templates",
        "Integrated Payment Processing",
        "User Management & Authentication",
        "Subscription Billing System",
        "Analytics & Reporting Dashboard",
        "Multi-tenant Architecture Support",
      ],
      gradient: "from-purple-500 to-pink-600",
      benefits: "Launch SaaS products 5x faster with built-in monetization features",
      roi: "5x faster time-to-market",
    },
    {
      icon: <Lock className="h-6 w-6 text-white" />,
      title: "Enterprise Security Framework",
      subtitle: "Built-in Compliance & Protection",
      description:
        "Comprehensive security features including GDPR compliance, multi-factor authentication, data encryption, and enterprise-grade access controls.",
      features: [
        "GDPR Compliance",
        "Multi-Factor Authentication",
        "End-to-End Data Encryption",
        "Role-Based Access Control",
        "Automated Security Monitoring",
        "Audit Trail Management",
      ],
      gradient: "from-orange-500 to-red-600",
      benefits: "Meet enterprise security requirements without additional development",
      roi: "90% reduction in compliance setup time",
    },
  ]

  const technicalSpecs = [
    {
      icon: <Database className="h-6 w-6 text-blue-600" />,
      title: "Database Integration & Management",
      description:
        "Native support for PostgreSQL, MySQL, MongoDB, Redis, and cloud databases with automatic schema generation, migration tools, and performance optimization.",
      capabilities: ["Multi-database support", "Auto-scaling", "Backup & recovery", "Performance monitoring"],
    },
    {
      icon: <Cloud className="h-6 w-6 text-green-600" />,
      title: "Cloud Deployment & Scaling",
      description:
        "One-click deployment to AWS, Azure, Google Cloud, and Vercel with automatic scaling, load balancing, and global CDN distribution for optimal performance.",
      capabilities: ["Multi-cloud deployment", "Auto-scaling", "Load balancing", "Global CDN"],
    },
    {
      icon: <Settings className="h-6 w-6 text-purple-600" />,
      title: "API Management & Integration",
      description:
        "Built-in API gateway with rate limiting, authentication, comprehensive documentation, and seamless integration with third-party services and legacy systems.",
      capabilities: ["RESTful APIs", "GraphQL support", "Rate limiting", "API documentation"],
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-orange-600" />,
      title: "Analytics & Business Intelligence",
      description:
        "Real-time performance monitoring, user analytics, business intelligence dashboards, and predictive analytics for data-driven decision making.",
      capabilities: ["Real-time analytics", "Custom dashboards", "Predictive insights", "Performance monitoring"],
    },
  ]

  const useCases = [
    {
      icon: <Monitor className="h-6 w-6 text-blue-600" />,
      title: "Business Process Automation",
      description: "Automate complex workflows, document processing, and business operations",
      examples: ["CRM & Sales Automation", "HR Management Systems", "Inventory & Supply Chain", "Document Workflow"],
      industry: "Enterprise Operations",
      roi: "40% operational efficiency gain",
    },
    {
      icon: <Globe className="h-6 w-6 text-green-600" />,
      title: "Customer-Facing Applications",
      description: "Build engaging customer portals, dashboards, and self-service applications",
      examples: [
        "Customer Support Portals",
        "E-commerce Platforms",
        "Booking & Reservation Systems",
        "Client Dashboards",
      ],
      industry: "Customer Experience",
      roi: "60% improvement in customer satisfaction",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-purple-600" />,
      title: "Data Analytics & Reporting",
      description: "Create powerful data visualization and business intelligence solutions",
      examples: ["Executive Dashboards", "Financial Reporting", "Performance Analytics", "Predictive Modeling"],
      industry: "Business Intelligence",
      roi: "50% faster decision-making",
    },
    {
      icon: <Users className="h-6 w-6 text-orange-600" />,
      title: "Internal Productivity Tools",
      description: "Develop internal applications for team collaboration and productivity",
      examples: ["Project Management", "Team Collaboration", "Resource Planning", "Knowledge Management"],
      industry: "Internal Operations",
      roi: "35% productivity improvement",
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
                <Bot className="mr-2 h-4 w-4" />
                Revolutionary SLATE Platform
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Build Enterprise Apps{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  10x Faster
                </span>{" "}
                with AI
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                <strong>SLATE Platform (SaaS Linked Add-On & Tooling Environment)</strong> is the world's most advanced
                AI-powered no-code platform. Build enterprise-grade micro-SaaS applications with intelligent automation,
                visual development canvas, and built-in security compliance - all without traditional coding.
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
    Get Started <ArrowRight className="ml-2 h-4 w-4" />
  </a>
</Button>

                <Button
  size="lg"
  variant="outline"
  className="text-white border-white/30 hover:bg-white/10 bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:text-white"
  asChild
>
  <a
    href="https://calendly.com/contact-hinfinitys/30min"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Play className="mr-2 h-4 w-4" />
    Request Demo
  </a>
</Button>

              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>14-Day Free Trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Enterprise Security</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Image
                  src="/build-enterprise-apps-faster-with-ai-hinfinity.png"
                  alt="SLATE Platform AI-Powered No-Code Development Interface"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />

                {/* Feature Highlights Overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">AI</div>
                    <div className="text-xs text-gray-600">Powered</div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">No</div>
                    <div className="text-xs text-gray-600">Code</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Stats */}
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
              Powering Innovation with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Leading Partners
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join 1000+ applications built on SLATE Platform, trusted by leading technology partners and recognized by
              government initiatives for innovation excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {trustedPartners.map((partner, index) => (
              <div key={index} className="group text-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
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

      {/* Core Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2">
              <Sparkles className="mr-2 h-4 w-4" />
              Revolutionary Platform Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful AI-Driven Features for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Modern Development
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              SLATE Platform combines cutting-edge artificial intelligence with intuitive design to deliver the most
              comprehensive no-code development experience that scales with your business needs and grows with your
              ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-blue-600 font-medium text-sm">{feature.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {feature.features.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-medium text-blue-800 mb-1">Key Benefit:</p>
                  <p className="text-sm text-blue-700">{feature.benefits}</p>
                </div>

                <div className="bg-green-100 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-800">ROI Impact:</span>
                    <span className="text-sm font-bold text-green-600">{feature.roi}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-600 to-teal-600 text-white border-0 px-4 py-2">
              <Settings className="mr-2 h-4 w-4" />
              Enterprise-Grade Technical Specifications
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Enterprise Scale & Performance
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              SLATE Platform is engineered with enterprise-grade architecture, ensuring scalability, security, and
              performance for mission-critical applications that serve millions of users worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  {spec.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{spec.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{spec.description}</p>

                <div className="space-y-2">
                  {spec.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-2">
              <Target className="mr-2 h-4 w-4" />
              Real-World Applications & Use Cases
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Endless{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Business Possibilities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From simple automation tools to complex enterprise applications, SLATE Platform adapts to your unique
              business requirements and scales with your growth across every industry and use case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{useCase.description}</p>

                <div className="space-y-2 mb-4">
                  {useCase.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{example}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-500">Industry:</span>
                    <span className="text-xs font-medium text-purple-600">{useCase.industry}</span>
                  </div>
                  <div className="bg-green-100 rounded-lg p-2">
                    <p className="text-green-800 text-xs font-medium text-center">{useCase.roi}</p>
                  </div>
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
                Ready to Transform Your Development?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Start Building with SLATE Platform Today
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Join thousands of developers and businesses who are already building the future with SLATE Platform.
                Experience the power of AI-driven no-code development and transform your ideas into reality 10x faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
  size="lg"
  className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover-lift"
  asChild
>
  <a
    href="https://www.hyslate.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    Start Free 14-Day Trial <ArrowRight className="ml-2 h-4 w-4" />
  </a>
</Button>

                <Button
  size="lg"
  variant="outline"
  className="text-white border-white/30 hover:bg-white/10 bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:text-white"
  asChild
>
  <a
    href="https://calendly.com/contact-hinfinitys/30min"
    target="_blank"
    rel="noopener noreferrer"
  >
    Schedule Live Demo <Play className="ml-2 h-4 w-4" />
  </a>
</Button>


              </div>

              {/* Contact Information */}
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
