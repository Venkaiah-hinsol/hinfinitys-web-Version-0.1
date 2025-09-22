import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  Target,
  Rocket,
  Heart,
  TrendingUp,
  Clock,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  GraduationCap,
  Coffee,
  Plane,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Careers at Hinfinity Solutions - Join Our Expert Technology Team",
  description:
    "Join Hinfinity Solutions and build your career with a leading technology consulting company. We offer competitive benefits, remote work flexibility, professional development opportunities, and the chance to work on cutting-edge projects with industry experts.",
  keywords: [
    "careers at hinfinity solutions",
    "technology jobs",
    "software developer jobs",
    "DevOps engineer careers",
    "AI ML engineer positions",
    "remote technology jobs",
    "software engineering careers",
    "technology consulting jobs",
    "full stack developer jobs",
    "cloud engineer positions",
    "data scientist careers",
    "product manager jobs",
    "UX UI designer jobs",
    "cybersecurity jobs",
    "technology startup careers",
  ],
  openGraph: {
    title: "Careers at Hinfinity Solutions - Join Our Expert Technology Team",
    description:
      "Build your career with a leading technology consulting company. Competitive benefits, remote flexibility, and cutting-edge projects await.",
    url: "https://hinfinitys.com/careers",
  },
  alternates: {
    canonical: "https://wwww.hinfinitys.com/careers",
  },
}

export default function CareersPage() {
  const companyBenefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Comprehensive Health Benefits",
      description: "Full medical, dental, and vision coverage for you and your family",
      color: "text-red-600",
      details: ["100% premium coverage", "Low deductible plans", "Mental health support", "Wellness programs"],
    },
    {
      icon: <Plane className="h-6 w-6" />,
      title: "Flexible Time Off",
      description: "Unlimited PTO policy with encouraged time off for work-life balance",
      color: "text-blue-600",
      details: ["Unlimited vacation days", "Paid holidays", "Personal days", "Sabbatical opportunities"],
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Professional Development",
      description: "Continuous learning opportunities and career advancement support",
      color: "text-green-600",
      details: ["Training budget", "Conference attendance", "Certification support", "Mentorship programs"],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and modern collaboration tools",
      color: "text-purple-600",
      details: ["100% remote options", "Flexible schedules", "Home office stipend", "Co-working allowances"],
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Competitive Compensation",
      description: "Market-leading salaries with performance bonuses and equity options",
      color: "text-orange-600",
      details: ["Competitive base salary", "Performance bonuses", "Equity participation", "Annual reviews"],
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Amazing Perks",
      description: "Modern office spaces, team events, and lifestyle benefits",
      color: "text-teal-600",
      details: ["Modern workspaces", "Team building events", "Catered meals", "Wellness stipends"],
    },
  ]

  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / Hyderabad, IN",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Join our engineering team to build scalable web applications using modern technologies. You'll work on challenging projects for Fortune 500 clients and contribute to our open-source initiatives.",
      requirements: [
        "5+ years of full-stack development experience",
        "Proficiency in React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Strong understanding of database design and optimization",
        "Experience with CI/CD pipelines and DevOps practices",
      ],
      responsibilities: [
        "Design and develop scalable web applications",
        "Collaborate with cross-functional teams on client projects",
        "Mentor junior developers and contribute to code reviews",
        "Participate in architecture decisions and technical planning",
        "Contribute to open-source projects and technical blog posts",
      ],
      skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Hyderabad, IN",
      type: "Full-time",
      experience: "2+ years",
      description:
        "Help us build and maintain robust infrastructure for our clients. You'll work with cutting-edge DevOps tools and practices to ensure reliable, scalable, and secure deployments.",
      requirements: [
        "2+ years of DevOps or infrastructure experience",
        "Expertise in containerization (Docker, Kubernetes)",
        "Experience with Infrastructure as Code (Terraform, CloudFormation)",
        "Strong knowledge of CI/CD pipelines and automation",
        "Experience with monitoring and observability tools",
      ],
      responsibilities: [
        "Design and implement CI/CD pipelines for client projects",
        "Manage cloud infrastructure across multiple platforms",
        "Implement monitoring and alerting solutions",
        "Automate deployment and scaling processes",
        "Ensure security best practices and compliance",
      ],
      skills: ["Kubernetes", "Terraform", "Jenkins", "Prometheus", "AWS", "Azure"],
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "AI/ML Engineer",
      department: "Data Science",
      location: "Remote / Hyderabad, IN",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Drive innovation in artificial intelligence and machine learning solutions. You'll work on cutting-edge AI projects, from natural language processing to computer vision applications.",
      requirements: [
        "3+ years of ML engineering experience",
        "Strong background in Python and ML frameworks",
        "Experience with deep learning and neural networks",
        "Knowledge of MLOps practices and model deployment",
        "Experience with cloud ML services (AWS SageMaker, Azure ML)",
      ],
      responsibilities: [
        "Develop and deploy machine learning models",
        "Design AI solutions for client business problems",
        "Implement MLOps pipelines for model lifecycle management",
        "Research and prototype new AI technologies",
        "Collaborate with data scientists and engineers",
      ],
      skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "AWS SageMaker", "Docker"],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / Global",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Lead product strategy and execution for our technology solutions. You'll work closely with clients, engineering teams, and stakeholders to deliver products that solve real business problems.",
      requirements: [
        "4+ years of product management experience",
        "Strong analytical and problem-solving skills",
        "Experience with agile development methodologies",
        "Excellent communication and stakeholder management",
        "Technical background or strong technical aptitude",
      ],
      responsibilities: [
        "Define product strategy and roadmap",
        "Gather and prioritize product requirements",
        "Work with engineering teams on product development",
        "Analyze market trends and competitive landscape",
        "Manage stakeholder relationships and expectations",
      ],
      skills: ["Product Strategy", "Agile", "Analytics", "Stakeholder Management", "Technical Writing", "Roadmapping"],
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / Hyderabad, IN",
      type: "Full-time",
      experience: "2+ years",
      description:
        "Create exceptional user experiences for our client applications. You'll work on diverse projects ranging from enterprise software to consumer applications, always focusing on user-centered design.",
      requirements: [
        "2+ years of UX/UI design experience",
        "Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)",
        "Strong portfolio demonstrating design thinking process",
        "Experience with user research and usability testing",
        "Understanding of front-end development constraints",
      ],
      responsibilities: [
        "Design user interfaces for web and mobile applications",
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and design systems",
        "Collaborate with developers on design implementation",
        "Present design concepts to clients and stakeholders",
      ],
      skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Usability Testing", "Adobe Creative Suite"],
      gradient: "from-teal-500 to-cyan-600",
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Hyderabad, IN",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Protect our clients' digital assets and ensure compliance with security standards. You'll implement security best practices, conduct assessments, and respond to security incidents.",
      requirements: [
        "4+ years of cybersecurity experience",
        "Security certifications (CISSP, CISM, or equivalent)",
        "Experience with security frameworks and compliance",
        "Knowledge of cloud security best practices",
        "Incident response and forensics experience",
      ],
      responsibilities: [
        "Conduct security assessments and penetration testing",
        "Implement security controls and monitoring systems",
        "Develop security policies and procedures",
        "Respond to security incidents and breaches",
        "Ensure compliance with industry regulations",
      ],
      skills: [
        "Security Assessment",
        "Penetration Testing",
        "Compliance",
        "Incident Response",
        "Cloud Security",
        "SIEM",
      ],
      gradient: "from-red-500 to-pink-600",
    },
  ]

  const workCulture = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Collaborative Environment",
      description:
        "Work with talented professionals in a supportive, inclusive environment where every voice is heard and valued.",
      gradient: "from-blue-500 to-purple-600",
      highlights: ["Cross-functional teams", "Open communication", "Inclusive culture", "Knowledge sharing"],
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Innovation Focus",
      description:
        "Stay at the forefront of technology with opportunities to work on cutting-edge projects and explore new technologies.",
      gradient: "from-green-500 to-teal-600",
      highlights: ["Latest technologies", "R&D projects", "Innovation time", "Tech conferences"],
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Growth Opportunities",
      description:
        "Advance your career with clear growth paths, mentorship programs, and opportunities to lead projects and teams.",
      gradient: "from-purple-500 to-pink-600",
      highlights: ["Career advancement", "Leadership opportunities", "Skill development", "Mentorship"],
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: "Global Impact",
      description:
        "Work on projects that make a difference for clients worldwide, from startups to Fortune 500 companies.",
      gradient: "from-orange-500 to-red-600",
      highlights: ["Global clients", "Diverse projects", "Business impact", "Industry recognition"],
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
                <Briefcase className="mr-2 h-4 w-4" />
                Join Our Team
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Build Your Career with{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Technology Leaders
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join Hinfinity Solutions and work with <strong>cutting-edge technologies</strong>,{" "}
                <strong>world-class clients</strong>, and <strong>expert teams</strong>. We offer{" "}
                <strong>competitive benefits</strong>, <strong>remote flexibility</strong>, and{" "}
                <strong>unlimited growth opportunities</strong> in a collaborative, innovation-driven environment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover-lift"
                  asChild
                >
                  <Link href="#positions">
                    View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
  size="lg"
  variant="outline"
  className="text-white border-white/30 hover:bg-white/10 bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:text-white"
  asChild
>
  <Link href="#culture">Learn About Our Culture</Link>
</Button>

              </div>

              {/* Company Highlights */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Remote-First Culture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Unlimited PTO</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Cutting-Edge Projects</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Image
                  src="/build-your-career-with-technology-leaders-hinfinity.png"
                  alt="Hinfinity Solutions Team Collaboration and Innovation"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />

                {/* Team Highlights Overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-xs text-gray-600">Team Members</div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-xs text-gray-600">Remote Options</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2">
              <Heart className="mr-2 h-4 w-4" />
              Employee Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Benefits Package
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We believe in taking care of our team members with competitive benefits, flexible work arrangements, and
              opportunities for professional growth and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 ${benefit.color}`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="space-y-2">
                  {benefit.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Culture */}
      <section id="culture" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-600 to-teal-600 text-white border-0 px-4 py-2">
              <Users className="mr-2 h-4 w-4" />
              Our Culture
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Work With Us
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Experience a work environment that values innovation, collaboration, and personal growth. Join a team that
              is passionate about technology and committed to making a positive impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workCulture.map((culture, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${culture.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    {culture.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{culture.title}</h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{culture.description}</p>

                <div className="space-y-3">
                  {culture.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-2">
              <Briefcase className="mr-2 h-4 w-4" />
              Open Positions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Growing Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Explore exciting career opportunities with competitive compensation, comprehensive benefits, and the
              chance to work on innovative projects with cutting-edge technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {position.department}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {position.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {position.experience}
                      </Badge>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      {position.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{position.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                  <div className="space-y-2">
                    {position.requirements.slice(0, 3).map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Core Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <Clock className="h-4 w-4 inline mr-1" />
                    Full-time position
                  </div>
                  <Button
                    className={`bg-gradient-to-r ${position.gradient} text-white hover:shadow-lg transition-all duration-300 hover-lift`}
                    asChild
                  >
                    <Link href={`mailto:hr@hinfinitys.com?subject=Applying%20for%20'${encodeURIComponent(position.title)}'`}>
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="mt-16 text-center">
  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
    Don’t see a perfect match?
  </h3>
  <p className="text-black-300 mb-6">
    We're always looking for talented individuals to join our team.
  </p>
  <div className="mt-8 mb-16 text-center">
  <Button
    size="lg"
    variant="outline"
    className="text-black border-black/30 bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:text-black hover:bg-[#F3F8FE]"
    asChild
  >
    <Link href="mailto:hr@hinfinitys.com">
      Send Us Your Resume <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  </Button>
</div>

</div>


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
                Ready to Join Our Team?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Start Your Journey with Hinfinity Solutions
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
                {
                  "Take the next step in your career and join a team that values innovation, collaboration, and professional growth. We're excited to hear from you and explore how you can contribute to our mission."
                }
              </p>

              {/* Contact Information */}
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
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
              </div> */}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
  size="lg"
  className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover-lift"
  asChild
>
  <a href="mailto:hr@hinfinitys.com">
    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
  </a>
</Button>

                <Button
  size="lg"
  variant="outline"
  className="text-white border-white/30 hover:bg-white/10 bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:text-white"
  asChild
>
  <a href="mailto:connect@hinfinitys.com">
    Connect With Us <ArrowRight className="ml-2 h-4 w-4" />
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
