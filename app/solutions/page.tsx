import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Factory,
  Wheat,
  Building2,
  Banknote,
  Heart,
  Monitor,
  Settings,
  Target,
  Rocket,
  Sparkles,
  Users,
  Globe,
  Award,
  Star,
  Bot,
  Cloud,
  Shield,
  BarChart3,
  TrendingUp,
  Zap,
  Search,
  Palette,
  Phone,
  Mail,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Industry Solutions - Tailored Digital Transformation for Every Sector | Hinfinity Solutions",
  description:
    "Industry-specific technology solutions for manufacturing, agriculture, real estate, fintech, healthcare, and IT sectors. Tailored digital transformation with deep industry expertise, regulatory compliance, and measurable ROI across all verticals.",
  keywords: [
    "industry-specific technology solutions",
    "manufacturing automation solutions",
    "agriculture technology AgriTech",
    "real estate PropTech solutions",
    "fintech financial technology",
    "healthcare technology solutions",
    "IT services digital transformation",
    "sector-specific software development",
    "industry digital transformation",
    "vertical market solutions",
    "regulatory compliance technology",
    "business process automation",
    "industry 4.0 solutions",
    "smart manufacturing systems",
    "precision agriculture technology",
  ],
  openGraph: {
    title: "Industry Solutions - Tailored Digital Transformation for Every Sector",
    description:
      "Specialized technology solutions for manufacturing, agriculture, fintech, healthcare, and more. 150+ industry-specific solutions delivered with measurable ROI.",
    url: "https://hinfinitys.com/solutions",
  },
  alternates: {
    canonical: "https://www.hinfinitys.com/solutions",
  },
}

export default function SolutionsPage() {
  const heroStats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "6",
      label: "Industries Served",
      color: "text-blue-600",
      description: "Deep expertise across manufacturing, agriculture, fintech, healthcare, real estate, and IT",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      value: "150+",
      label: "Solutions Delivered",
      color: "text-green-600",
      description: "Industry-specific solutions deployed across global markets",
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "95%",
      label: "Success Rate",
      color: "text-purple-600",
      description: "Consistently exceeding client expectations with measurable outcomes",
    },
    {
      icon: <Star className="h-6 w-6" />,
      value: "24/7",
      label: "Support Available",
      color: "text-orange-600",
      description: "Round-the-clock support for mission-critical industry applications",
    },
  ]

  const industrySolutions = [
    {
      icon: <Factory className="h-6 w-6 text-white" />,
      title: "Manufacturing & Industrial",
      subtitle: "Smart Factory & Industry 4.0 Solutions",
      description:
        "Transform manufacturing operations with IoT sensor integration, predictive maintenance systems, quality control automation, and smart factory solutions that optimize production efficiency and reduce operational costs.",
      features: [
        "IoT Sensor Integration & Monitoring",
        "Predictive Maintenance Systems",
        "Quality Control Automation",
        "Production Analytics & Optimization",
        "Supply Chain Management",
        "Equipment Performance Monitoring",
      ],
      gradient: "from-blue-500 to-purple-600",
      technologies: [
        "IoT Platforms",
        "Machine Learning",
        "SCADA Systems",
        "ERP Integration",
        "Edge Computing",
        "Digital Twins",
      ],
      caseStudy: "40% reduction in equipment downtime for automotive manufacturer",
      roi: "35% operational efficiency improvement",
      compliance: "ISO 9001, ISO 14001, OSHA compliance",
    },
    {
      icon: <Wheat className="h-6 w-6 text-white" />,
      title: "Agriculture & AgriTech",
      subtitle: "Precision Farming & Smart Agriculture",
      description:
        "Advanced agricultural technology solutions including precision farming, crop monitoring, weather analytics, and supply chain optimization that increase yield and reduce resource consumption.",
      features: [
        "Precision Farming & GPS Guidance",
        "Crop Health Monitoring Systems",
        "Weather Analytics & Forecasting",
        "Irrigation Management Automation",
        "Supply Chain Optimization",
        "Livestock Management Systems",
      ],
      gradient: "from-green-500 to-teal-600",
      technologies: [
        "Satellite Imagery",
        "Drone Technology",
        "Weather APIs",
        "Blockchain",
        "IoT Sensors",
        "AI Analytics",
      ],
      caseStudy: "30% increase in crop yield for large-scale farming operations",
      roi: "25% reduction in resource consumption",
      compliance: "USDA, EPA, organic certification standards",
    },
    {
      icon: <Building2 className="h-6 w-6 text-white" />,
      title: "Real Estate & PropTech",
      subtitle: "Property Management & Investment Platforms",
      description:
        "Comprehensive PropTech solutions including property management systems, virtual tour platforms, investment analytics, tenant portals, and smart building automation systems.",
      features: [
        "Property Management Platforms",
        "Virtual Tour & 3D Visualization",
        "Investment Analytics & ROI Tracking",
        "Tenant Portal & Communication",
        "Smart Building Automation",
        "Maintenance Management Systems",
      ],
      gradient: "from-purple-500 to-pink-600",
      technologies: [
        "VR/AR Technology",
        "Blockchain",
        "AI Analytics",
        "Mobile Apps",
        "IoT Integration",
        "Cloud Platforms",
      ],
      caseStudy: "50% faster property sales cycles with virtual tour integration",
      roi: "45% improvement in property management efficiency",
      compliance: "Fair Housing Act, ADA compliance, local regulations",
    },
    {
      icon: <Banknote className="h-6 w-6 text-white" />,
      title: "FinTech & Financial Services",
      subtitle: "Secure Financial Platforms & Trading Systems",
      description:
        "Robust financial technology solutions including payment gateways, trading platforms, risk management systems, and regulatory compliance tools with enterprise-grade security.",
      features: [
        "Payment Gateway Integration",
        "High-Frequency Trading Platforms",
        "Risk Management & Analytics",
        "Regulatory Compliance Systems",
        "Digital Banking Solutions",
        "Cryptocurrency & Blockchain Integration",
      ],
      gradient: "from-orange-500 to-red-600",
      technologies: [
        "Blockchain",
        "AI/ML",
        "Advanced Encryption",
        "API Security",
        "Real-time Processing",
        "Cloud Infrastructure",
      ],
      caseStudy: "99.9% uptime achieved for high-frequency trading platform",
      roi: "60% reduction in transaction processing costs",
      compliance: "PCI DSS, SOX, GDPR, PSD2, regulatory frameworks",
    },
  ]

  const additionalIndustries = [
    {
      icon: <Heart className="h-6 w-6 text-red-600" />,
      title: "Healthcare & Life Sciences",
      description:
        "HIPAA-compliant healthcare systems, telemedicine platforms, medical device integration, and clinical analytics solutions.",
      solutions: [
        "Electronic Health Records (EHR)",
        "Telemedicine & Remote Care Platforms",
        "Medical Device Integration & IoT",
        "Clinical Analytics & Research Tools",
        "Patient Management Systems",
        "Healthcare Compliance & Security",
      ],
      projects: "25+ Healthcare Projects",
      roi: "60% improvement in patient care efficiency",
      compliance: "HIPAA, FDA, HL7 FHIR standards",
    },
    {
      icon: <Monitor className="h-6 w-6 text-indigo-600" />,
      title: "IT Services & Digital Agencies",
      description:
        "Digital transformation services, SaaS platform development, and technology consulting for IT companies and digital agencies.",
      solutions: [
        "SaaS Platform Development",
        "Digital Transformation Consulting",
        "Technology Infrastructure Modernization",
        "Cloud Migration & DevOps Services",
        "Custom Software Development",
        "API Integration & Management",
      ],
      projects: "75+ IT Service Projects",
      roi: "3x faster time-to-market for digital products",
      compliance: "ISO 27001, SOC2, GDPR compliance",
    },
  ]

  const solutionTypes = [
    {
      icon: <Bot className="h-6 w-6 text-blue-600" />,
      title: "AI & Machine Learning Solutions",
      description:
        "Intelligent automation, predictive analytics, computer vision, and AI-powered decision-making systems tailored for industry needs.",
      applications: ["Predictive Maintenance", "Quality Control", "Demand Forecasting", "Process Optimization"],
      roi: "50% improvement in operational efficiency",
    },
    {
      icon: <Cloud className="h-6 w-6 text-green-600" />,
      title: "Cloud & Infrastructure Solutions",
      description:
        "Cloud migration, infrastructure automation, scalable architectures, and continuous deployment solutions for enterprise operations.",
      applications: ["Cloud Migration", "Infrastructure Automation", "Scalable Architecture", "DevOps Implementation"],
      roi: "40% reduction in infrastructure costs",
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      title: "Security & Compliance Solutions",
      description:
        "Cybersecurity frameworks, compliance management, data protection, and regulatory adherence solutions for regulated industries.",
      applications: ["Security Frameworks", "Compliance Management", "Data Protection", "Risk Assessment"],
      roi: "80% reduction in security incidents",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-orange-600" />,
      title: "Analytics & Business Intelligence",
      description:
        "Business intelligence dashboards, data visualization, advanced analytics, and real-time reporting solutions for data-driven decisions.",
      applications: ["Executive Dashboards", "Predictive Analytics", "Real-time Reporting", "Data Visualization"],
      roi: "45% faster decision-making processes",
    },
  ]

  const implementationProcess = [
    {
      step: "01",
      title: "Industry Analysis & Assessment",
      description:
        "Deep dive into industry-specific challenges, regulatory requirements, market dynamics, and competitive landscape to understand unique business needs.",
      icon: <Search className="h-6 w-6 text-blue-600" />,
      deliverables: [
        "Industry Analysis Report",
        "Regulatory Compliance Assessment",
        "Technology Gap Analysis",
        "ROI Projections",
      ],
      timeline: "2-3 weeks",
    },
    {
      step: "02",
      title: "Solution Architecture & Design",
      description:
        "Custom solution architecture tailored to industry standards, compliance requirements, scalability needs, and integration with existing systems.",
      icon: <Palette className="h-6 w-6 text-green-600" />,
      deliverables: ["Solution Architecture", "Technical Specifications", "Integration Plan", "Security Framework"],
      timeline: "2-4 weeks",
    },
    {
      step: "03",
      title: "Development & Integration",
      description:
        "Agile development with industry-specific integrations, compliance implementation, rigorous testing, and quality assurance protocols.",
      icon: <Factory className="h-6 w-6 text-purple-600" />,
      deliverables: ["Working Solution", "Integration Testing", "Compliance Validation", "Performance Optimization"],
      timeline: "8-20 weeks",
    },
    {
      step: "04",
      title: "Deployment & Optimization",
      description:
        "Seamless deployment with comprehensive training, change management, ongoing support, and continuous optimization for maximum ROI.",
      icon: <Rocket className="h-6 w-6 text-orange-600" />,
      deliverables: ["Production Deployment", "User Training", "Support Documentation", "Optimization Plan"],
      timeline: "Ongoing",
    },
  ]

  const successMetrics = [
    {
      metric: "40%",
      description: "Average operational efficiency improvement across all industries",
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      industries: "Manufacturing, Healthcare, FinTech",
    },
    {
      metric: "60%",
      description: "Reduction in operational costs through automation and optimization",
      icon: <Target className="h-6 w-6 text-green-600" />,
      industries: "Agriculture, Real Estate, IT Services",
    },
    {
      metric: "99.9%",
      description: "System uptime guarantee with enterprise-grade reliability",
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      industries: "FinTech, Healthcare, Manufacturing",
    },
    {
      metric: "3x",
      description: "Faster time-to-market for new products and services",
      icon: <Zap className="h-6 w-6 text-orange-600" />,
      industries: "IT Services, PropTech, AgriTech",
    },
  ]

  const industryTestimonials = [
    {
      name: "Robert Johnson",
      role: "Chief Operations Officer",
      company: "Advanced Manufacturing Corp",
      industry: "Manufacturing",
      content:
        "Hinfinity's IoT and predictive maintenance solution reduced our equipment downtime by 40% and saved us $2M annually. Their deep understanding of manufacturing processes was evident throughout the project.",
      rating: 5,
      project: "Smart Factory Implementation",
      result: "40% reduction in downtime, $2M annual savings",
      image: "/placeholder.svg?height=60&width=60&text=RJ",
    },
    {
      name: "Maria Gonzalez",
      role: "Head of Digital Innovation",
      company: "AgriTech Solutions",
      industry: "Agriculture",
      content:
        "The precision farming platform delivered by Hinfinity increased our crop yield by 30% while reducing water consumption by 25%. Their AgriTech expertise transformed our farming operations.",
      rating: 5,
      project: "Precision Farming Platform",
      result: "30% yield increase, 25% resource savings",
      image: "/placeholder.svg?height=60&width=60&text=MG",
    },
    {
      name: "James Wilson",
      role: "Chief Technology Officer",
      company: "PropTech Innovations",
      industry: "Real Estate",
      content:
        "Virtual tour integration and property management platform reduced our sales cycle by 50% and improved customer satisfaction by 85%. Exceptional PropTech solution delivery.",
      rating: 5,
      project: "PropTech Platform Development",
      result: "50% faster sales, 85% customer satisfaction",
      image: "/placeholder.svg?height=60&width=60&text=JW",
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
                <Factory className="mr-2 h-4 w-4" />
                Industry-Specific Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tailored{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Industry Solutions
                </span>{" "}
                for Every Sector
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Industry-specific digital transformation solutions for <strong>manufacturing</strong>,
                <strong> agriculture</strong>, <strong>real estate</strong>, <strong>fintech</strong>,
                <strong> healthcare</strong>, and <strong>IT sectors</strong>. Deep industry expertise, regulatory
                compliance, and measurable ROI across all verticals with 150+ successful implementations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover-lift"
                  asChild
                >
                  <Link href="/contact#contact-form">
                    Explore Industry Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
  size="lg"
  variant="outline"
  className="text-white border-white/30 hover:bg-white/10 bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:text-white"
  asChild
>
  <Link href="#industries">View All Industries</Link>
</Button>

              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>150+ Industry Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>95% Success Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Regulatory Compliant</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Image
                  src="/tailored-industry-solutions-for-every-sector-hinfinity.png"
                  alt="Industry-Specific Digital Transformation Solutions"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />

                {/* Industry Highlights Overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">6</div>
                    <div className="text-xs text-gray-600">Industries</div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Stats */}
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

      {/* Industry Solutions Section */}
      <section id="industries" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2">
              <Sparkles className="mr-2 h-4 w-4" />
              Core Industry Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Industry Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our deep industry knowledge enables us to deliver solutions that address specific sector challenges,
              regulatory requirements, and business objectives with precision, compliance, and measurable ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industrySolutions.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${industry.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    {industry.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                    <p className="text-blue-600 font-medium text-sm">{industry.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {industry.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-500 mb-2">Core Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-medium text-green-800 mb-1">Success Story:</p>
                  <p className="text-sm text-green-700">{industry.caseStudy}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <p className="text-blue-800 text-xs font-medium">ROI Impact:</p>
                    <p className="text-blue-600 text-sm font-bold">{industry.roi}</p>
                  </div>
                  <div className="bg-purple-100 rounded-lg p-3">
                    <p className="text-purple-800 text-xs font-medium">Compliance:</p>
                    <p className="text-purple-600 text-xs">{industry.compliance}</p>
                  </div>
                </div>

                <Button
                  className={`bg-gradient-to-r ${industry.gradient} text-white hover:shadow-lg transition-all duration-300 hover-lift w-full`}
                  asChild
                >
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-600 to-teal-600 text-white border-0 px-4 py-2">
              <Target className="mr-2 h-4 w-4" />
              Additional Industries
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Expanding{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Industry Coverage
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Beyond our core industries, we serve healthcare, IT agencies, and other sectors with specialized
              technology solutions that drive digital transformation and sustainable business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalIndustries.map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    {industry.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.title}</h3>
                    <p className="text-gray-600 text-sm">{industry.description}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{solution}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="text-sm">
                      {industry.projects}
                    </Badge>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-600">{industry.roi}</div>
                      <div className="text-xs text-gray-500">Average ROI</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-xs font-medium text-gray-500 mb-1">Compliance Standards:</p>
                    <p className="text-xs text-gray-700">{industry.compliance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Types */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-2">
              <Settings className="mr-2 h-4 w-4" />
              Technology Solution Types
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Technology Stack
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our solutions leverage cutting-edge technologies across AI, cloud, security, and analytics to deliver
              comprehensive digital transformation for every industry vertical with measurable business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutionTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center mb-4">
                  {type.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{type.description}</p>

                <div className="space-y-2 mb-4">
                  {type.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{app}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-green-100 rounded-lg p-3">
                  <p className="text-green-800 text-xs font-medium text-center">{type.roi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 px-4 py-2">
              <Rocket className="mr-2 h-4 w-4" />
              Implementation Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Implementation Methodology
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our structured approach ensures successful solution delivery with industry-specific considerations,
              compliance requirements, seamless integration, and measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationProcess.map((step, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
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

                <div className="bg-orange-100 rounded-lg p-2">
                  <p className="text-orange-800 text-xs font-medium text-center">Timeline: {step.timeline}</p>
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
                Ready to Transform Your Industry?
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
                  <Link href="/contact#content-form">
                    Discuss Your Industry Needs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
  size="lg"
  variant="outline"
  className="text-white border-white/30 hover:bg-white/10 bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:text-white"
  asChild
>
  <Link href="https://calendly.com/contact-hinfinitys/30min" target="_blank" rel="noopener noreferrer">
    Schedule Industry Consultation <ArrowRight className="ml-2 h-4 w-4" />
  </Link>
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
