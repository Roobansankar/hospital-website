"use client"

import type React from "react"

import { useEffect } from "react"

interface AOSProviderProps {
  children: React.ReactNode
}

// Simple AOS alternative implementation
const AOSProvider = ({ children }: AOSProviderProps) => {
  useEffect(() => {
    // Simple intersection observer to handle animations
    const animateOnScroll = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Add animation classes when element is in view
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement
              const animation = target.dataset.animation || "fade-up"
              const delay = target.dataset.delay || "0"

              // Add animation classes
              target.style.opacity = "0"
              target.style.transition = `opacity 0.6s ease-out, transform 0.6s ease-out`
              target.style.transitionDelay = `${Number.parseInt(delay)}ms`

              setTimeout(() => {
                target.style.opacity = "1"

                // Apply different animations based on the data-animation attribute
                if (animation === "fade-up") {
                  target.style.transform = "translateY(0)"
                } else if (animation === "fade-right") {
                  target.style.transform = "translateX(0)"
                } else if (animation === "fade-left") {
                  target.style.transform = "translateX(0)"
                }
              }, 100)

              // Unobserve after animation is applied
              observer.unobserve(target)
            }
          })
        },
        { threshold: 0.1 },
      )

      // Find all elements with data-animation attribute
      document.querySelectorAll("[data-animation]").forEach((element) => {
        const animation = element.getAttribute("data-animation") || "fade-up"

        // Set initial state
        if (animation === "fade-up") {
          ;(element as HTMLElement).style.transform = "translateY(20px)"
        } else if (animation === "fade-right") {
          ;(element as HTMLElement).style.transform = "translateX(-20px)"
        } else if (animation === "fade-left") {
          ;(element as HTMLElement).style.transform = "translateX(20px)"
        }
        ;(element as HTMLElement).style.opacity = "0"
        observer.observe(element)
      })
    }

    // Run after a short delay to ensure DOM is ready
    setTimeout(animateOnScroll, 100)

    // Clean up
    return () => {
      // Clean up if needed
    }
  }, [])

  return <>{children}</>
}

export default AOSProvider
