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
  Award,
  Target,
  Rocket,
  Heart,
  Shield,
  TrendingUp,
  Clock,
  Star,
  Building,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Hinfinity Solutions - Expert Technology Consulting & Software Development Company",
  description:
    "Learn about Hinfinity Solutions, a leading technology consulting company founded in 2021. We've delivered 200+ successful projects with 98% client satisfaction, specializing in custom software development, AI/ML, DevOps, and cloud solutions.",
  keywords: [
    "about hinfinity solutions",
    "technology consulting company",
    "software development company",
    "AI ML consulting firm",
    "DevOps consulting services",
    "cloud solutions provider",
    "custom software development",
    "technology transformation",
    "enterprise software solutions",
    "digital innovation company",
    "software engineering services",
    "technology consulting experts",
    "business transformation",
    "IT consulting company",
    "software development team",
  ],
  openGraph: {
    title: "About Hinfinity Solutions - Expert Technology Consulting & Software Development",
    description:
      "Founded in 2021, Hinfinity Solutions has delivered 200+ successful technology projects with 98% client satisfaction. Expert team specializing in AI/ML, DevOps, and custom software development.",
    url: "https://hinfinitys.com/about",
  },
  alternates: {
    canonical: "https://www.hinfinitys.com/about",
  },
}

export default function AboutPage() {
  const companyStats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "200+",
      label: "Projects Successfully Delivered",
      color: "text-blue-600",
      description: "Enterprise solutions across multiple industries and technologies",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      value: "150+",
      label: "Satisfied Clients Worldwide",
      color: "text-green-600",
      description: "From startups to Fortune 500 companies across 25+ countries",
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
      value: "5+",
      label: "Years of Excellence",
      color: "text-orange-600",
      description: "Founded in 2021, rapidly growing with proven expertise",
    },
  ]

  const coreValues = [
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Excellence in Delivery",
      description:
        "We are committed to delivering exceptional results that exceed client expectations through meticulous attention to detail, rigorous quality assurance, and continuous improvement.",
      gradient: "from-blue-500 to-cyan-600",
      principles: [
        "Quality-first approach in every project",
        "Rigorous testing and validation processes",
        "Continuous improvement and optimization",
        "Proactive communication and transparency",
      ],
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Innovation & Technology Leadership",
      description:
        "We stay at the forefront of technology trends, continuously learning and adopting cutting-edge tools and methodologies to provide our clients with competitive advantages.",
      gradient: "from-green-500 to-emerald-600",
      principles: [
        "Embracing emerging technologies and trends",
        "Investing in team skill development",
        "Research and development initiatives",
        "Thought leadership in technology space",
      ],
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Client-Centric Partnership",
      description:
        "We build long-term partnerships with our clients, understanding their unique challenges and goals to deliver solutions that drive real business value and sustainable growth.",
      gradient: "from-purple-500 to-violet-600",
      principles: [
        "Deep understanding of client business needs",
        "Collaborative approach to problem-solving",
        "Long-term partnership mindset",
        "Dedicated support and maintenance",
      ],
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Integrity & Trust",
      description:
        "We operate with the highest levels of integrity, maintaining transparency in all our interactions and building trust through consistent delivery and ethical practices.",
      gradient: "from-orange-500 to-red-600",
      principles: [
        "Transparent communication and reporting",
        "Ethical business practices",
        "Data security and privacy protection",
        "Honest and realistic project assessments",
      ],
    },
  ]

  // const teamMembers = [
  //   {
  //     name: "Alex Johnson",
  //     role: "Chief Executive Officer & Founder",
  //     bio: "Visionary leader with 15+ years in technology consulting and enterprise software development. Expert in business strategy, digital transformation, and scaling technology organizations.",
  //     image: "/placeholder.svg?height=300&width=300&text=Alex+Johnson+CEO",
  //     expertise: ["Business Strategy", "Digital Transformation", "Enterprise Architecture", "Team Leadership"],
  //     linkedin: "#",
  //     twitter: "#",
  //     achievements: [
  //       "Led 50+ digital transformation projects",
  //       "Former VP of Engineering at Fortune 500 company",
  //       "Speaker at major technology conferences",
  //       "Published thought leader in tech innovation",
  //     ],
  //   },
  //   {
  //     name: "Sarah Chen",
  //     role: "Chief Technology Officer",
  //     bio: "Technology architect with deep expertise in AI/ML, cloud infrastructure, and modern software development practices. Passionate about building scalable, secure, and innovative solutions.",
  //     image: "/placeholder.svg?height=300&width=300&text=Sarah+Chen+CTO",
  //     expertise: ["AI/ML Architecture", "Cloud Infrastructure", "DevOps", "Software Architecture"],
  //     linkedin: "#",
  //     twitter: "#",
  //     achievements: [
  //       "Architected AI solutions for 100+ clients",
  //       "AWS and Azure certified solutions architect",
  //       "Open source contributor and maintainer",
  //       "PhD in Computer Science from Stanford",
  //     ],
  //   },
  //   {
  //     name: "Michael Rodriguez",
  //     role: "VP of Engineering",
  //     bio: "Full-stack engineering leader with expertise in building high-performance teams and delivering complex software solutions. Specializes in agile methodologies and quality engineering.",
  //     image: "/placeholder.svg?height=300&width=300&text=Michael+Rodriguez+VP",
  //     expertise: ["Full-Stack Development", "Team Leadership", "Agile Methodologies", "Quality Engineering"],
  //     linkedin: "#",
  //     twitter: "#",
  //     achievements: [
  //       "Built and led engineering teams of 50+ developers",
  //       "Delivered 200+ successful software projects",
  //       "Expert in modern development frameworks",
  //       "Certified Scrum Master and Agile Coach",
  //     ],
  //   },
  //   {
  //     name: "Emily Watson",
  //     role: "Head of Client Success",
  //     bio: "Client relationship expert focused on ensuring exceptional client experiences and successful project outcomes. Specializes in stakeholder management and business analysis.",
  //     image: "/placeholder.svg?height=300&width=300&text=Emily+Watson+CS",
  //     expertise: ["Client Relations", "Business Analysis", "Project Management", "Stakeholder Management"],
  //     linkedin: "#",
  //     twitter: "#",
  //     achievements: [
  //       "Maintained 98% client satisfaction rate",
  //       "Managed relationships with 150+ clients",
  //       "PMP certified project management professional",
  //       "Expert in business process optimization",
  //     ],
  //   },
  // ]

  const companyMilestones = [
  {
    year: "2021",
    title: "Company Founded",
    description:
      "Hinfinity Solutions Private Limited established with a vision to transform businesses through innovative technology solutions.",
    icon: <Rocket className="h-6 w-6 text-blue-600" />,
    achievements: [
      "Team Formation",
      "Initial Funding",
      "First Office Setup",
      "Core Technology Stack"
    ],
  },
  {
    year: "2022",
    title: "First Enterprise Clients",
    description:
      "Secured our first enterprise clients and delivered successful digital transformation projects across multiple industries.",
    icon: <TrendingUp className="h-6 w-6 text-green-600" />,
    achievements: [
      "10+ Enterprise Clients",
      "Digital Transformation",
      "Team Expansion",
      "Quality Processes"
    ],
  },
  {
    year: "2023",
    title: "Scale & Innovation",
    description:
      "Scaled operations with advanced AI solutions and expanded our technology capabilities to serve diverse industry needs.",
    icon: <Award className="h-6 w-6 text-purple-600" />,
    achievements: [
      "AI Solutions Launch",
      "Technology Innovation",
      "Process Optimization",
      "Client Growth"
    ],
  },
  {
    year: "2024",
    title: "Global Expansion",
    description:
      "Expanded operations to UK and US markets, establishing international client relationships and remote development teams.",
    icon: <Globe className="h-6 w-6 text-orange-600" />,
    achievements: [
      "UK Office Launch",
      "US Market Entry",
      "Remote Teams",
      "International Clients"
    ],
  },
  {
    year: "2025",
    title: "SLATE Platform Launch",
    description:
      "Launched our revolutionary AI-powered SLATE Platform, transforming how businesses build and deploy applications.",
    icon: <Rocket className="h-6 w-6 text-yellow-500" />,
    achievements: [
      "SLATE Platform",
      "AI Integration",
      "No-Code Solutions",
      "Platform Clients"
    ],
  },
];


  const trustedPartners = [
    { name: "Microsoft", logo: "/microsoft-azure.png?height=60&width=120&text=Microsoft" },
    { name: "AWS", logo: "/aws.png?height=60&width=120&text=AWS" },
    { name: "Google Cloud", logo: "/google-cloud.png?height=60&width=120&text=Google+Cloud" },
    { name: "Slack", logo: "/slack.png?height=60&width=120&text=Salesforce" },
    { name: "git", logo: "/git.png?height=60&width=120&text=Oracle" },
    { name: "DPIIT Startup India", logo: "/dpiit.png?height=60&width=120&text=IBM" },
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
                <Building className="mr-2 h-4 w-4" />
                About Hinfinity Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transforming Businesses Through{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Innovative Technology
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Founded in <strong>2021</strong>, Hinfinity Solutions has rapidly become a trusted partner for
                businesses seeking <strong>digital transformation</strong>. With{" "}
                <strong>200+ successful projects</strong> and <strong>98% client satisfaction</strong>, we specialize in
                custom software development, AI/ML implementation, DevOps consulting, and cloud solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover-lift"
                  asChild
                >
                  <Link href="/contact#contact-form">
                    Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
  size="lg"
  variant="outline"
  className="text-white border-white/30 hover:bg-white/10 bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:text-white"
  asChild
>
  <Link href="#our-journey">Company Milestones</Link>
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
                  <span>150+ Global Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>98% Satisfaction Rate</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Image
                  src="/businesses-through-innovative-technology-hinfinity.png"
                  alt="Hinfinity Solutions Team and Innovation"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />

                {/* Company Highlights Overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">2021</div>
                    <div className="text-xs text-gray-600">Founded</div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">200+</div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
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

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2">
              <Target className="mr-2 h-4 w-4" />
              Our Mission & Vision
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Driving{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and
                competitive advantage. We are committed to delivering exceptional value through cutting-edge software
                development, AI/ML implementation, and strategic technology consulting.
              </p>
              <div className="space-y-3">
                {[
                  "Deliver exceptional technology solutions",
                  "Build long-term client partnerships",
                  "Foster innovation and continuous learning",
                  "Maintain highest quality standards",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To be the global leader in technology consulting and software development, recognized for our
                innovation, expertise, and unwavering commitment to client success. We envision a future where
                technology seamlessly integrates with business strategy to create transformative outcomes.
              </p>
              <div className="space-y-3">
                {[
                  "Lead the industry in technology innovation",
                  "Expand global reach and impact",
                  "Set new standards for client satisfaction",
                  "Drive digital transformation worldwide",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-600 to-teal-600 text-white border-0 px-4 py-2">
              <Heart className="mr-2 h-4 w-4" />
              Our Core Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Values That{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Drive Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our core values guide every decision we make and every solution we deliver, ensuring consistent excellence
              and meaningful partnerships with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{value.description}</p>

                <div className="space-y-3">
                  {value.principles.map((principle, principleIndex) => (
                    <div key={principleIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {/*
      <section id="team" className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-2">
              <Users className="mr-2 h-4 w-4" />
              Leadership Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Expert Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our leadership team brings decades of combined experience in technology, business strategy, and client
              success to drive innovation and deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-6 mb-6">
                  <div className="relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} - ${member.role}`}
                      width={120}
                      height={120}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                    <div className="flex space-x-3">
                      <Link
                        href={member.linkedin}
                        className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link
                        href={member.twitter}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                      >
                        <Twitter className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>

                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-500 mb-3">Core Expertise:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500 mb-3">Key Achievements:</p>
                  <div className="space-y-2">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center space-x-2">
                        <Star className="h-3 w-3 text-yellow-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Company Timeline */}
      <section id="our-journey" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 px-4 py-2">
              <Clock className="mr-2 h-4 w-4" />
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Company{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Milestones
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From our founding in 2021 to becoming a trusted technology partner for 150+ clients worldwide, explore our
              journey of growth, innovation, and success.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-200 to-red-200"></div>
            <div className="space-y-12">
              {companyMilestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        {index % 2 === 0 ? (
                          <>
                            <div>
                              <div className="text-2xl font-bold text-orange-600">{milestone.year}</div>
                              <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                            </div>
                            {milestone.icon}
                          </>
                        ) : (
                          <>
                            {milestone.icon}
                            <div>
                              <div className="text-2xl font-bold text-orange-600">{milestone.year}</div>
                              <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                            </div>
                          </>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4">{milestone.description}</p>
                      <div className="space-y-2">
                        {milestone.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2">
              <Award className="mr-2 h-4 w-4" />
              Trusted by Industry Leaders
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Strategic{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technology Partners
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain strategic partnerships with leading technology providers to deliver cutting-edge solutions and
              ensure our clients have access to the latest innovations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {trustedPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
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
                Ready to Partner With Us?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let&apos;s Build Something Amazing Together
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Join 150+ satisfied clients who have transformed their businesses with our expert technology solutions.
                Let&apos;s discuss how we can help you achieve your digital transformation goals.
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
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
  size="lg"
  variant="outline"
  className="text-white border-white/30 hover:bg-white/10 bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:text-white"
  asChild
>
  <Link href="/services">
    Explore Services <ArrowRight className="ml-2 h-4 w-4" />
  </Link>
</Button>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
