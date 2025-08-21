/**
 * SEO utilities and metadata generation
 * Helps improve search engine optimization
 */

import { personalInfo } from "@/data/personal-info"

export const generateMetadata = (title?: string, description?: string, image?: string) => {
  const defaultTitle = `${personalInfo.name} - ${personalInfo.title}`
  const defaultDescription = `Portfolio of ${personalInfo.name}, a Software Engineering student at UTM with expertise in software development, artifical intelligence, and machine learning.`

  return {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: [
      "software engineering",
      "web development",
      "mobile development",
      "Next.js",
      "Flutter",
      "Vue.js",
      "portfolio",
      "internship",
      personalInfo.name.toLowerCase().replace(" ", "-"),
    ].join(", "),
    authors: [{ name: personalInfo.name }],
    openGraph: {
      title: title || defaultTitle,
      description: description || defaultDescription,
      type: "website",
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: title || defaultTitle,
      description: description || defaultDescription,
      images: image ? [image] : [],
    },
  }
}

// JSON-LD structured data for better SEO
export const generatePersonSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.fullName,
    jobTitle: personalInfo.title,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: personalInfo.location,
    },
    sameAs: [personalInfo.linkedin, personalInfo.github],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: personalInfo.university,
    },
  }
}
