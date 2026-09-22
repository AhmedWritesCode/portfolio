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
  title: "Ahmed Zaki | Portfolio",
  description:
    "Portfolio of Ahmed Zaki, Software Engineer based in the United Arab Emirates. Experienced in Full-Stack Development, PostgreSQL Data Pipelines, and AI Integration.",
  keywords:
    "software engineer, full-stack developer, spring boot, angular, django, python, java, postgresql, uae, united arab emirates, portfolio",
  authors: [{ name: "Ahmed Zaki" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Ahmed Zaki | Portfolio",
    description: "Software Engineering, Full-Stack Development & Intelligent Systems",
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
