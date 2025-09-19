import type { Metadata } from "next"
import { ContactPageClient } from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Hinfinity Solutions - Get Expert Technology Consulting & Support | SLATE Platform Demo",
  description:
    "Contact Hinfinity Solutions for expert technology consulting, SLATE Platform demo, AI/ML implementation, DevOps services, and digital transformation solutions. Global support across India, UK, US, Middle East & Asia. 24/7 technical assistance available.",
  keywords: [
    "Contact Hinfinity Solutions",
    "Technology consulting contact",
    "SLATE Platform demo request",
    "AI ML consulting contact",
    "DevOps consulting inquiry",
    "Digital transformation consultation",
    "Enterprise software development contact",
    "Global technology support",
    "24/7 technical assistance",
    "Business transformation consultation",
    "Custom software development inquiry",
    "Technology solutions contact",
    "Expert consulting services",
    "Project consultation request",
  ],
  openGraph: {
    title: "Contact Hinfinity Solutions - Expert Technology Consulting & Support",
    description:
      "Get in touch for technology consulting, SLATE Platform demo, and digital transformation solutions. Global support with 24/7 assistance.",
    url: "https://hinfinitys.com/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
