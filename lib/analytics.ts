/**
 * Analytics utilities for tracking user interactions
 * You can integrate with Google Analytics, Vercel Analytics, etc.
 */

// Google Analytics tracking function
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", eventName, parameters)
  }
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    })
  }
}

// Track project views
export const trackProjectView = (projectId: string, projectTitle: string) => {
  trackEvent("project_view", {
    project_id: projectId,
    project_title: projectTitle,
  })
}

// Track contact form submissions
export const trackContactSubmission = () => {
  trackEvent("contact_form_submit")
}

// Track resume downloads
export const trackResumeDownload = () => {
  trackEvent("resume_download")
}
