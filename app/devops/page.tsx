import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  Server,
  Shield,
  GitBranch,
  Monitor,
  Database,
  Settings,
  Target,
  Rocket,
  Sparkles,
  Users,
  Globe,
  Award,
  Clock,
  TrendingUp,
  Code2,
  Phone,
  Mail,
} from "lucide-react"

export const metadata: Metadata = {
  title: "DevOps Consulting Services - Cloud Infrastructure & CI/CD Pipeline Experts | Hinfinity Solutions",
  description:
    "Expert DevOps consulting services including cloud migration, CI/CD pipeline implementation, infrastructure automation, container orchestration, and monitoring solutions. Reduce deployment time by 80% with our proven methodologies.",
  keywords: [
    "DevOps consulting services",
    "cloud migration consulting",
    "CI/CD pipeline implementation",
    "infrastructure automation",
    "container orchestration",
    "Kubernetes consulting",
    "AWS DevOps services",
    "Azure DevOps consulting",
    "Google Cloud DevOps",
    "infrastructure as code",
    "monitoring and observability",
    "DevOps transformation",
    "continuous integration",
    "continuous deployment",
    "cloud infrastructure management",
  ],
  openGraph: {
    title: "DevOps Consulting Services - Cloud Infrastructure & CI/CD Pipeline Experts",
    description:
      "Transform your development workflow with expert DevOps consulting. Reduce deployment time by 80% and improve system reliability to 99.9% uptime.",
    url: "https://hinfinitys.com/devops",
  },
  alternates: {
    canonical: "https://hinfinitys.com/devops",
  },
}

export default function DevOpsPage() {
  const heroStats = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: "80%",
      label: "Faster Deployment Time",
      color: "text-blue-600",
      description: "Average reduction in deployment cycles with our CI/CD implementations",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      value: "99.9%",
      label: "System Uptime Achieved",
      color: "text-green-600",
      description: "Reliability improvements through infrastructure automation",
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "100+",
      label: "DevOps Transformations",
      color: "text-purple-600",
      description: "Successful DevOps implementations across various industries",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      value: "24/7",
      label: "Infrastructure Monitoring",
      color: "text-orange-600",
      description: "Continuous monitoring and alerting for optimal performance",
    },
  ]

  const coreServices = [
    {
      icon: <Cloud className="h-8 w-8 text-white" />,
      title: "Cloud Migration & Architecture",
      description:
        "Comprehensive cloud migration strategies and architecture design for AWS, Azure, and Google Cloud platforms with cost optimization and security best practices.",
      features: [
        "Cloud Strategy & Assessment",
        "Multi-Cloud Architecture Design",
        "Migration Planning & Execution",
        "Cost Optimization Analysis",
        "Security & Compliance Implementation",
        "Performance Monitoring Setup",
      ],
      gradient: "from-blue-500 to-cyan-600",
      benefits: "Reduce infrastructure costs by 40% while improving scalability",
      timeline: "6-12 weeks",
    },
    {
      icon: <GitBranch className="h-8 w-8 text-white" />,
      title: "CI/CD Pipeline Implementation",
      description:
        "Automated continuous integration and deployment pipelines using industry-leading tools to accelerate development cycles and improve code quality.",
      features: [
        "Pipeline Design & Implementation",
        "Automated Testing Integration",
        "Code Quality Gates",
        "Deployment Automation",
        "Rollback Strategies",
        "Multi-Environment Management",
      ],
      gradient: "from-green-500 to-emerald-600",
      benefits: "Achieve 80% faster deployment cycles with zero-downtime releases",
      timeline: "4-8 weeks",
    },
    {
      icon: <Server className="h-8 w-8 text-white" />,
      title: "Infrastructure as Code (IaC)",
      description:
        "Automated infrastructure provisioning and management using Terraform, CloudFormation, and other IaC tools for consistent and scalable environments.",
      features: [
        "Infrastructure Automation",
        "Environment Standardization",
        "Version Control Integration",
        "Disaster Recovery Planning",
        "Resource Optimization",
        "Compliance Automation",
      ],
      gradient: "from-purple-500 to-violet-600",
      benefits: "Eliminate manual configuration errors and reduce provisioning time by 90%",
      timeline: "3-6 weeks",
    },
    {
      icon: <Monitor className="h-8 w-8 text-white" />,
      title: "Monitoring & Observability",
      description:
        "Comprehensive monitoring, logging, and alerting solutions to ensure optimal performance, quick issue resolution, and proactive system maintenance.",
      features: [
        "Application Performance Monitoring",
        "Infrastructure Monitoring",
        "Log Aggregation & Analysis",
        "Custom Alerting Rules",
        "Dashboard Creation",
        "Incident Response Automation",
      ],
      gradient: "from-orange-500 to-red-600",
      benefits: "Reduce mean time to resolution (MTTR) by 70% with proactive monitoring",
      timeline: "2-4 weeks",
    },
  ]

  const technologyStack = [
    {
      category: "Cloud Platforms",
      tools: [
        { name: "AWS", logo: "/aws.png?height=80&width=80&text=AWS", description: "Amazon Web Services" },
        { name: "Azure", logo: "/microsoft-azure.png?height=80&width=80&text=Azure", description: "Microsoft Azure" },
        {
          name: "Google Cloud",
          logo: "/google-cloud.png?height=80&width=80&text=GCP",
          description: "Google Cloud Platform",
        },
        {
          name: "DigitalOcean",
          logo: "/digitalocean.png?height=80&width=80&text=DO",
          description: "DigitalOcean Cloud",
        },
      ],
    },
    {
      category: "Container & Orchestration",
      tools: [
        { name: "Docker", logo: "/docker.png?height=80&width=80&text=Docker", description: "Containerization" },
        {
          name: "Kubernetes",
          logo: "/kubernetes.png?height=80&width=80&text=K8s",
          description: "Container Orchestration",
        },
        { name: "Helm", logo: "/helm.png?height=80&width=80&text=Helm", description: "Package Manager" },
        { name: "Istio", logo: "/istio.png?height=80&width=80&text=Istio", description: "Service Mesh" },
      ],
    },
    {
      category: "CI/CD & Automation",
      tools: [
        { name: "Jenkins", logo: "/jenkins.png?height=80&width=80&text=Jenkins", description: "CI/CD Server" },
        {
          name: "GitHub Actions",
          logo: "/github-actions.png?height=80&width=80&text=GHA",
          description: "GitHub CI/CD",
        },
        { name: "GitLab CI", logo: "/gitlab-ci.png?height=80&width=80&text=GitLab", description: "GitLab CI/CD" },
        { name: "ArgoCD", logo: "/argocd.png?height=80&width=80&text=Argo", description: "GitOps Tool" },
      ],
    },
    {
      category: "Infrastructure as Code",
      tools: [
        {
          name: "Terraform",
          logo: "/terraform.png?height=80&width=80&text=TF",
          description: "Infrastructure Automation",
        },
        { name: "Ansible", logo: "/ansible.png?height=80&width=80&text=Ansible", description: "Configuration" },
        { name: "Pulumi", logo: "/pulumi.png?height=80&width=80&text=Pulumi", description: "Modern IaC" },
        {
          name: "CloudFormation",
          logo: "/cloud-formation.png?height=80&width=80&text=CF",
          description: "AWS Templates",
        },
      ],
    },
    {
      category: "Monitoring & Observability",
      tools: [
        {
          name: "Prometheus",
          logo: "/prometheus.png?height=80&width=80&text=Prom",
          description: "Metrics Collection",
        },
        { name: "Grafana", logo: "/grafana.png?height=80&width=80&text=Grafana", description: "Visualization" },
        { name: "ELK Stack", logo: "/elk-stack.png?height=80&width=80&text=ELK", description: "Log Analysis" },
        { name: "Datadog", logo: "/datadog.png?height=80&width=80&text=DD", description: "APM Platform" },
      ],
    },
    {
      category: "Security & Compliance",
      tools: [
        { name: "Vault", logo: "/vault.png?height=80&width=80&text=Vault", description: "Secret Management" },
        { name: "Falco", logo: "/falco.png?height=80&width=80&text=Falco", description: "Runtime Security" },
        { name: "Trivy", logo: "/trivy.png?height=80&width=80&text=Trivy", description: "Vulnerability Scanner" },
        { name: "OPA", logo: "/opa.png?height=80&width=80&text=OPA", description: "Policy Engine" },
      ],
    },
  ]

  const devopsProcess = [
    {
      step: "01",
      title: "Assessment & Strategy",
      description:
        "Comprehensive evaluation of current infrastructure, development processes, and organizational readiness for DevOps transformation.",
      icon: <Target className="h-6 w-6 text-blue-600" />,
      deliverables: [
        "Current State Analysis",
        "DevOps Readiness Assessment",
        "Transformation Roadmap",
        "ROI Projections",
      ],
      timeline: "1-2 weeks",
    },
    {
      step: "02",
      title: "Architecture & Planning",
      description:
        "Design of target architecture, tool selection, migration planning, and detailed implementation strategy with risk mitigation.",
      icon: <Settings className="h-6 w-6 text-green-600" />,
      deliverables: ["Target Architecture", "Tool Selection Matrix", "Migration Plan", "Security Framework"],
      timeline: "2-3 weeks",
    },
    {
      step: "03",
      title: "Implementation & Automation",
      description:
        "Hands-on implementation of DevOps practices, automation setup, CI/CD pipeline creation, and infrastructure provisioning.",
      icon: <Code2 className="h-6 w-6 text-purple-600" />,
      deliverables: ["CI/CD Pipelines", "Infrastructure Automation", "Monitoring Setup", "Documentation"],
      timeline: "4-12 weeks",
    },
    {
      step: "04",
      title: "Optimization & Support",
      description:
        "Performance optimization, team training, knowledge transfer, and ongoing support to ensure sustainable DevOps practices.",
      icon: <Rocket className="h-6 w-6 text-orange-600" />,
      deliverables: ["Performance Reports", "Team Training", "Best Practices Guide", "Support Plan"],
      timeline: "Ongoing",
    },
  ]

  const successStories = [
    {
      company: "TechFlow Solutions",
      industry: "SaaS Platform",
      challenge: "Manual deployments taking 4+ hours with frequent rollbacks",
      solution: "Implemented automated CI/CD pipelines with comprehensive testing and monitoring",
      results: [
        "Reduced deployment time from 4 hours to 15 minutes",
        "Achieved 99.9% uptime with zero-downtime deployments",
        "Decreased rollback incidents by 85%",
        "Improved developer productivity by 60%",
      ],
      metrics: {
        deploymentTime: "96% faster",
        uptime: "99.9%",
        productivity: "+60%",
      },
      testimonial:
        "Hinfinity's DevOps transformation completely revolutionized our deployment process. We went from dreading releases to deploying multiple times per day with confidence.",
      author: "David Chen, CTO",
      logo: "/placeholder.svg?height=60&width=120&text=TechFlow",
    },
    {
      company: "FinanceCore",
      industry: "Financial Services",
      challenge: "Compliance requirements and security concerns slowing development",
      solution: "Implemented secure DevOps practices with automated compliance checks and security scanning",
      results: [
        "Maintained 100% compliance while accelerating releases",
        "Reduced security vulnerabilities by 90%",
        "Automated compliance reporting and auditing",
        "Improved time-to-market by 70%",
      ],
      metrics: {
        compliance: "100%",
        vulnerabilities: "-90%",
        timeToMarket: "+70%",
      },
      testimonial:
        "The secure DevOps implementation allowed us to maintain strict compliance while dramatically improving our development velocity.",
      author: "Sarah Martinez, VP Engineering",
      logo: "/placeholder.svg?height=60&width=120&text=FinanceCore",
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
                <Cloud className="mr-2 h-4 w-4" />
                Expert DevOps Consulting
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Accelerate Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  DevOps Transformation
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Expert DevOps consulting services including <strong>cloud migration</strong>,{" "}
                <strong>CI/CD pipeline implementation</strong>, <strong>infrastructure automation</strong>,{" "}
                <strong>container orchestration</strong>, and <strong>monitoring solutions</strong>. Reduce deployment
                time by 80% and achieve 99.9% uptime with our proven methodologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover-lift"
                  asChild
                >
                  <Link href="/contact#contact-form">
                    Start DevOps Transformation <ArrowRight className="ml-2 h-4 w-4" />
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
                  <span>100+ DevOps Transformations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>80% Faster Deployments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>99.9% Uptime Achieved</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Image
                  src="/accelerate-your-devops-transformation-hinfinity.png"
                  alt="DevOps Infrastructure and Monitoring Dashboard"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />

                {/* DevOps Metrics Overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">99.9%</div>
                    <div className="text-xs text-gray-600">Uptime</div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">80%</div>
                    <div className="text-xs text-gray-600">Faster Deploys</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Stats */}
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

      {/* Core Services */}
      <section id="services" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2">
              <Sparkles className="mr-2 h-4 w-4" />
              Core DevOps Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DevOps Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Transform your development and operations with our expert DevOps consulting services. We implement proven
              methodologies and cutting-edge tools to accelerate your delivery pipeline and improve system reliability.
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

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-medium text-blue-800 mb-1">Key Benefit:</p>
                  <p className="text-sm text-blue-700">{service.benefits}</p>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <Clock className="h-4 w-4 inline mr-1" />
                    {service.timeline}
                  </div>
                  <Button
                    className={`bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg transition-all duration-300 hover-lift`}
                    asChild
                  >
                    <Link href="/contact#contact-form">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-600 to-teal-600 text-white border-0 px-4 py-2">
              <Database className="mr-2 h-4 w-4" />
              Technology Stack
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                DevOps Tools
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We leverage the most advanced and reliable DevOps tools and platforms to ensure your infrastructure is
              scalable, secure, and optimized for performance.
            </p>
          </div>

          <div className="space-y-12">
            {technologyStack.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">{category.category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
                        <Image
                          src={tool.logo || "/placeholder.svg"}
                          alt={`${tool.name} logo`}
                          width={80}
                          height={80}
                          className="rounded-lg hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{tool.name}</h4>
                      <p className="text-gray-600 text-sm">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Process */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-2">
              <Settings className="mr-2 h-4 w-4" />
              Our DevOps Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Transformation Methodology
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our structured approach ensures successful DevOps transformation with clear milestones, measurable
              outcomes, and sustainable practices that drive long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {devopsProcess.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center mb-4">
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

      {/* Success Stories */}
      {/*
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 px-4 py-2">
              <Award className="mr-2 h-4 w-4" />
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                DevOps Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Real transformations, measurable results. See how our DevOps expertise has helped organizations achieve
              their goals and exceed their expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{story.company}</h3>
                    <p className="text-orange-600 font-medium">{story.industry}</p>
                  </div>
                  <Image
                    src={story.logo || "/placeholder.svg"}
                    alt={`${story.company} logo`}
                    width={120}
                    height={60}
                    className="opacity-70"
                  />
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm mb-4">{story.challenge}</p>

                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm mb-4">{story.solution}</p>

                  <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                    {story.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(story.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center bg-white rounded-lg p-3">
                      <div className="text-lg font-bold text-orange-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1")}</div>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700 mb-4">
                  {story.testimonial}
                </blockquote>

                <div className="text-right">
                  <p className="font-medium text-gray-900">{story.author}</p>
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
                Ready to Transform Your DevOps?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Accelerate Your Development Pipeline Today
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
                {
                  "Let's discuss your DevOps transformation goals and create a custom strategy that reduces deployment time by 80% while achieving 99.9% uptime. Our expert team is ready to accelerate your development pipeline."
                }
              </p>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover-lift" asChild>
                  <Link href="/contact#contact-form">
                    Start DevOps Transformation <ArrowRight className="ml-2 h-4 w-4" />
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
    Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
  </a>
</Button>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
