import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Cloud,
  Smartphone,
  BarChart3,
  Bot,
  Settings,
  Target,
  Rocket,
  Sparkles,
  Users,
  Globe,
  Award,
  Database,
  Monitor,
  Lock,
  Clock,
  Search,
  Palette,
  Phone,
  Mail,
  Star,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Technology Services - Custom Software Development & AI Consulting | Hinfinity Solutions",
  description:
    "Expert technology services including custom software development, AI/ML implementation, DevOps consulting, cloud migration, mobile app development, cybersecurity, and data analytics. Serving 150+ clients with 98% satisfaction rate.",
  keywords: [
    "custom software development",
    "AI ML implementation services",
    "DevOps consulting",
    "cloud migration services",
    "mobile app development",
    "cybersecurity services",
    "data analytics consulting",
    "enterprise software development",
    "technology consulting firm",
    "digital transformation services",
    "software development company",
    "IT consulting services",
    "application development",
    "system integration services",
    "technology solutions provider",
  ],
  openGraph: {
    title: "Technology Services - Custom Software Development & AI Consulting",
    description:
      "Expert technology services including custom development, AI/ML implementation, DevOps consulting, and cloud solutions. 200+ successful projects delivered.",
    url: "https://hinfinitys.com/services",
  },
  alternates: {
    canonical: "https://www.hinfinity.com/services",
  },
}

export default function ServicesPage() {
  const heroStats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "200+",
      label: "Projects Successfully Delivered",
      color: "text-blue-600",
      description: "Enterprise solutions across multiple industries and technologies",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      value: "15+",
      label: "Technology Stacks Mastered",
      color: "text-green-600",
      description: "From legacy systems to cutting-edge AI/ML frameworks",
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "98%",
      label: "Client Satisfaction Rate",
      color: "text-purple-600",
      description: "Consistently exceeding expectations with quality deliverables",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      value: "24/7",
      label: "Global Support Coverage",
      color: "text-orange-600",
      description: "Round-the-clock support across all time zones",
    },
  ]

  const coreServices = [
    {
      icon: <Code2 className="h-6 w-6 text-white" />,
      title: "Custom Software Development",
      subtitle: "Tailored Enterprise Solutions",
      description:
        "End-to-end custom software development using modern technologies and best practices. We build scalable, maintainable applications that grow with your business and deliver measurable ROI.",
      features: [
        "Full-Stack Web Application Development",
        "RESTful & GraphQL API Development",
        "Database Design & Optimization",
        "Performance Tuning & Scalability",
        "Legacy System Modernization",
        "Third-party System Integration",
      ],
      gradient: "from-blue-500 to-purple-600",
      technologies: ["React", "Node.js", "Python", "Java", "PostgreSQL", "MongoDB"],
      benefits: "Reduce development costs by 40% while ensuring enterprise-grade quality",
      deliveryTime: "4-12 weeks typical delivery",
    },
    {
      icon: <Bot className="h-6 w-6 text-white" />,
      title: "AI/ML Implementation",
      subtitle: "Intelligent Automation Solutions",
      description:
        "Advanced artificial intelligence and machine learning implementations to automate processes, enhance decision-making, and drive business intelligence with measurable outcomes.",
      features: [
        "Machine Learning Model Development",
        "Natural Language Processing (NLP)",
        "Computer Vision & Image Recognition",
        "Predictive Analytics & Forecasting",
        "Chatbot & Virtual Assistant Development",
        "AI-Powered Business Process Automation",
      ],
      gradient: "from-green-500 to-teal-600",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "Scikit-learn", "AWS SageMaker"],
      benefits: "Achieve 60% operational efficiency improvement through intelligent automation",
      deliveryTime: "6-16 weeks typical delivery",
    },
    {
      icon: <Cloud className="h-6 w-6 text-white" />,
      title: "Cloud Solutions & DevOps",
      subtitle: "Scalable Infrastructure Services",
      description:
        "Comprehensive cloud services including migration, architecture design, DevOps implementation, and ongoing management across AWS, Azure, and Google Cloud platforms.",
      features: [
        "Cloud Migration & Architecture Design",
        "CI/CD Pipeline Implementation",
        "Infrastructure as Code (IaC)",
        "Container Orchestration (Kubernetes)",
        "Monitoring & Observability Setup",
        "Cost Optimization & Performance Tuning",
      ],
      gradient: "from-purple-500 to-pink-600",
      technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
      benefits: "Reduce infrastructure costs by 50% while improving reliability to 99.9%",
      deliveryTime: "8-20 weeks typical delivery",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-white" />,
      title: "Mobile App Development",
      subtitle: "Cross-Platform Mobile Solutions",
      description:
        "Native and cross-platform mobile application development for iOS and Android with modern frameworks, optimal user experience, and seamless backend integration.",
      features: [
        "Native iOS & Android Development",
        "Cross-Platform React Native & Flutter",
        "Progressive Web Apps (PWA)",
        "Mobile UI/UX Design & Optimization",
        "App Store Deployment & Management",
        "Mobile Backend & API Integration",
      ],
      gradient: "from-orange-500 to-red-600",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"],
      benefits: "Launch mobile apps 3x faster with cross-platform development approach",
      deliveryTime: "6-14 weeks typical delivery",
    },
  ]

  const additionalServices = [
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
      title: "Data Analytics & Business Intelligence",
      description:
        "Transform raw data into actionable insights with advanced analytics, reporting, and business intelligence solutions.",
      capabilities: ["Data Warehouse Design", "ETL Pipeline Development", "Real-time Analytics", "Custom Dashboards"],
      roi: "45% improvement in decision-making speed",
    },
    {
      icon: <Lock className="h-6 w-6 text-green-600" />,
      title: "Cybersecurity & Compliance",
      description:
        "Comprehensive security assessments, implementation of security frameworks, and ongoing monitoring to protect digital assets.",
      capabilities: ["Security Audits", "Penetration Testing", "Compliance Implementation", "Security Monitoring"],
      roi: "80% reduction in security incidents",
    },
    {
      icon: <Database className="h-6 w-6 text-purple-600" />,
      title: "Database Management & Optimization",
      description:
        "Database design, optimization, migration, and management services for improved performance and reliability.",
      capabilities: ["Database Design", "Performance Optimization", "Migration Services", "Backup & Recovery"],
      roi: "60% improvement in query performance",
    },
    {
      icon: <Monitor className="h-6 w-6 text-orange-600" />,
      title: "System Integration & API Development",
      description:
        "Seamless integration of disparate systems, APIs, and third-party services to create unified business workflows.",
      capabilities: ["API Development", "System Integration", "Middleware Solutions", "Legacy Modernization"],
      roi: "50% reduction in manual processes",
    },
  ]

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Requirements Analysis",
      description:
        "Comprehensive analysis of business requirements, stakeholder interviews, technical assessment, and strategic planning to define project scope and objectives.",
      icon: <Search className="h-6 w-6 text-blue-600" />,
      deliverables: ["Requirements Document", "Technical Specification", "Project Roadmap", "Risk Assessment"],
      timeline: "1-2 weeks",
    },
    {
      step: "02",
      title: "Architecture Design & Planning",
      description:
        "System architecture design, UI/UX mockups, database schema planning, technology stack selection, and detailed project planning.",
      icon: <Palette className="h-6 w-6 text-green-600" />,
      deliverables: ["System Architecture", "UI/UX Designs", "Database Schema", "Development Plan"],
      timeline: "1-3 weeks",
    },
    {
      step: "03",
      title: "Agile Development & Testing",
      description:
        "Iterative development using Agile methodology with continuous integration, automated testing, regular client feedback, and quality assurance.",
      icon: <Code2 className="h-6 w-6 text-purple-600" />,
      deliverables: ["Working Software", "Test Reports", "Code Documentation", "Progress Updates"],
      timeline: "4-16 weeks",
    },
    {
      step: "04",
      title: "Deployment & Ongoing Support",
      description:
        "Production deployment, performance monitoring, user training, ongoing maintenance, and 24/7 technical support services.",
      icon: <Rocket className="h-6 w-6 text-orange-600" />,
      deliverables: ["Production Deployment", "User Training", "Support Documentation", "Maintenance Plan"],
      timeline: "Ongoing",
    },
  ]

  const industryTestimonials = [
    {
      name: "David Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      industry: "Technology",
      content:
        "Hinfinity's custom development team delivered our SaaS platform 40% faster than expected. Their AI integration capabilities transformed our business processes and improved efficiency by 60%.",
      rating: 5,
      project: "SaaS Platform Development",
      result: "60% efficiency improvement",
      image: "/placeholder.svg?height=60&width=60&text=DC",
    },
    {
      name: "Sarah Martinez",
      role: "VP of Engineering",
      company: "FinanceCore",
      industry: "FinTech",
      content:
        "The DevOps transformation and cloud migration delivered by Hinfinity achieved 99.9% uptime for our trading platform. Their security-first approach gave us complete confidence in regulatory compliance.",
      rating: 5,
      project: "Cloud Migration & DevOps",
      result: "99.9% uptime achieved",
      image: "/placeholder.svg?height=60&width=60&text=SM",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Chief Technology Officer",
      company: "HealthTech Innovations",
      industry: "Healthcare",
      content:
        "HIPAA-compliant telemedicine platform delivered on time and under budget. The AI-powered diagnostic tools have improved patient outcomes by 45% and reduced consultation time significantly.",
      rating: 5,
      project: "Telemedicine Platform",
      result: "45% better patient outcomes",
      image: "/placeholder.svg?height=60&width=60&text=MR",
    },
  ]

  const successMetrics = [
    {
      icon: <Users className="h-6 w-6" />,
      metric: "200+",
      description: "Projects Successfully Delivered",
      industries: "Across Multiple Industries",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      metric: "15+",
      description: "Technology Stacks Mastered",
      industries: "From Legacy Systems to Cutting-Edge AI/ML Frameworks",
    },
    {
      icon: <Award className="h-6 w-6" />,
      metric: "98%",
      description: "Client Satisfaction Rate",
      industries: "Consistently Exceeding Expectations",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      metric: "24/7",
      description: "Global Support Coverage",
      industries: "Round-the-Clock Support Across All Time Zones",
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
                <Settings className="mr-2 h-4 w-4" />
                Expert Technology Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business with{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Expert Technology Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive technology services including <strong>custom software development</strong>,
                <strong> AI/ML implementation</strong>, <strong>DevOps consulting</strong>,{" "}
                <strong>cloud migration</strong>,<strong> mobile app development</strong>, and{" "}
                <strong>cybersecurity solutions</strong> - delivered by certified experts with proven methodologies and
                measurable results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover-lift"
                  asChild
                >
                  <Link href="/contact#contact-form">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
  size="lg"
  variant="outline"
  className="text-white border-white/30 hover:bg-white/10 bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:text-white"
  asChild
>
  <Link href="#services">Explore Services</Link>
</Button>

              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>200+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>98% Client Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>24/7 Global Support</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Image
                  src="/transform-your-business-with-expert-technology-services-hinfinity.png"
                  alt="Expert Technology Services Development Team"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />

                {/* Service Highlights Overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">15+</div>
                    <div className="text-xs text-gray-600">Tech Stacks</div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Stats */}
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

      {/* Core Services Section */}
      <section id="services" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2">
              <Sparkles className="mr-2 h-4 w-4" />
              Core Technology Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our expert teams deliver end-to-end technology services using cutting-edge tools, proven methodologies,
              and industry best practices to transform your business operations and drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-blue-600 font-medium text-sm">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-500 mb-2">Core Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-medium text-blue-800 mb-1">Key Benefit:</p>
                  <p className="text-sm text-blue-700">{service.benefits}</p>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <Clock className="h-4 w-4 inline mr-1" />
                    {service.deliveryTime}
                  </div>
                  <Button
                    className={`bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg transition-all duration-300 hover-lift`}
                    asChild
                  >
                    <Link href="/contact#contact-form">
                      Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-600 to-teal-600 text-white border-0 px-4 py-2">
              <Target className="mr-2 h-4 w-4" />
              Specialized Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Technology Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our expert teams deliver specialized knowledge across multiple industries, ensuring solutions that meet
              specific regulatory requirements, compliance standards, and unique business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>

                <div className="space-y-2 mb-4">
                  {service.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{capability}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-green-100 rounded-lg p-3">
                  <p className="text-green-800 text-xs font-medium text-center">{service.roi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-2">
              <Settings className="mr-2 h-4 w-4" />
              Our Development Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Development Methodology
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our structured approach ensures successful project delivery with clear milestones, regular communication,
              quality assurance at every step, and measurable outcomes that drive business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  {step.icon}
                </div>
                <div className="text-3xl font-bold text-gray-300 mb-2">{step.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.description}</p>

                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-500 mb-2">Key Deliverables:</p>
                  <div className="space-y-1">
                    {step.deliverables.map((deliverable, delIndex) => (
                      <div key={delIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-xs">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-purple-100 rounded-lg p-2">
                  <p className="text-purple-800 text-xs font-medium text-center">Timeline: {step.timeline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      {/*
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2">
              <Star className="mr-2 h-4 w-4" />
              Industry Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Industry Leaders Say About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve digital transformation success with
              measurable results and exceptional ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industryTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-blue-600">
                      {testimonial.company} • {testimonial.industry}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-500">Project:</span>
                    <span className="text-xs font-medium text-purple-600">{testimonial.project}</span>
                  </div>
                  <div className="bg-green-100 rounded-lg p-2">
                    <p className="text-green-800 text-xs font-medium text-center">{testimonial.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Success Metrics */}
      {/*
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border-white/20 border-0 px-4 py-2">
              <Award className="mr-2 h-4 w-4" />
              Proven Success Metrics
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Business Results
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our industry solutions deliver measurable results that drive business growth, operational efficiency, and
              competitive advantage across all sectors we serve with consistent ROI delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  {metric.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">{metric.metric}</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{metric.description}</p>
                <div className="bg-white/10 rounded-lg p-2">
                  <p className="text-blue-200 text-xs font-medium">{metric.industries}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

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
                Transform Your Industry with Tailored Solutions
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Let's discuss how our industry-specific solutions can address your unique challenges and drive your
                business forward with cutting-edge technology, regulatory compliance, and proven methodologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover-lift" asChild>
                  <Link href="/contact#contact-form">
                    Discuss Your Industry Needs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
    Schedule Industry Consultation <ArrowRight className="ml-2 h-4 w-4" />
  </a>
</Button>

              </div>

              {/* Contact Information */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
                <div className="flex items-center gap-2">
                 
                </div>
                <div className="flex items-center gap-2">
                  
                </div>
                <div className="flex items-center gap-2">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
