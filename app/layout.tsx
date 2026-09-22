import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import emailjs from '@emailjs/browser'

// Initialize EmailJS with public key
if (typeof window !== 'undefined') {
  emailjs.init("bwy1mj-s0DNItrXYp")
}

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ahmed Zaki - Software Engineer | Full-Stack Developer",
  description:
    "Portfolio of Ahmed Zaki, Software Engineer based in the United Arab Emirates. Experienced in Full-Stack Development (Spring Boot, Angular, Django), PostgreSQL Data Pipelines, and AI Integration.",
  keywords:
    "software engineer, full-stack developer, spring boot, angular, django, python, java, postgresql, pentaho, uae, united arab emirates, next.js, gemini ai, developer portfolio",
  authors: [{ name: "Ahmed Zaki" }],
  openGraph: {
    title: "Ahmed Zaki - Software Engineer Portfolio",
    description: "Full-Stack Enterprise Development, Data Pipelines, and Intelligent Applications.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  )
}
