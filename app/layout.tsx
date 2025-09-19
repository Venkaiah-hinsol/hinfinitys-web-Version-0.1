import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { CookieConsent } from "@/components/cookie-consent"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://hinfinitys.com"),
  title: {
    default: "Hinfinity Solutions - Leading AI-Powered Digital Transformation & Enterprise Technology Services",
    template: "%s | Hinfinity Solutions",
  },
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
  ],
  authors: [{ name: "Hinfinity Solutions" }],
  creator: "Hinfinity Solutions Private Limited",
  publisher: "SLATE Platform by Hinfinity Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hinfinitys.com",
    siteName: "Hinfinity Solutions",
    title: "Hinfinity Solutions - Leading AI-Powered Digital Transformation & Enterprise Technology Services",
    description:
      "Transform your business with cutting-edge SLATE Platform, AI/ML implementations, DevOps consulting, and enterprise software development. 150+ successful projects, 99% client satisfaction.",
    images: [
      {
        url: "/hy-png",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/hy.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="page-transition">{children}</main>
          <Footer />
          <ScrollToTop />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
