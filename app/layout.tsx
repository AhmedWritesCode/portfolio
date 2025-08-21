import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import emailjs from '@emailjs/browser'

// Initialize EmailJS with your public key
if (typeof window !== 'undefined') {
  emailjs.init("49m0KayoEPyBegiCn")
}

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ahmed Zaki Al-Gabaly - Portfolio",
  description:
    "Portfolio of Ahmed Zaki Al-Gabaly, a Software Engineering Student at UTM with expertise in full-stack development, Artificial Intelligence, Machine Learning, Mobile applications, and Modern web technologies.",
  keywords: "software engineering, web development, python, java, JavaScript, HTML, CSS, C++, PHP, PHP Slim, mobile development, Next.js, Flutter, FastAPI, portfolio, internship, Vue.js, AI, Machine Learning, TensorFlow",
  authors: [{ name: "Ahmed Zaki Al-Gabaly" }],
  openGraph: {
    title: "Ahmed Zaki Al-Gabaly - Portfolio",
    description: "Get to know more about my experience and skills",
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
