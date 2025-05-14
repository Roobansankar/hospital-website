// "use client";

// import type React from "react";

// import { useEffect } from "react";

// interface AOSProviderProps {
//   children: React.ReactNode;
// }

// // Simple AOS alternative implementation
// const AOSProvider = ({ children }: AOSProviderProps) => {
//   useEffect(() => {
//     // Simple intersection observer to handle animations
//     const animateOnScroll = () => {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             // Add animation classes when element is in view
//             if (entry.isIntersecting) {
//               const target = entry.target as HTMLElement;
//               const animation = target.dataset.animation || "fade-up";
//               const delay = target.dataset.delay || "0";

//               // Add animation classes
//               target.style.opacity = "0";
//               target.style.transition = `opacity 0.6s ease-out, transform 0.6s ease-out`;
//               target.style.transitionDelay = `${Number.parseInt(delay)}ms`;

//               setTimeout(() => {
//                 target.style.opacity = "1";

//                 // Apply different animations based on the data-animation attribute
//                 if (animation === "fade-up") {
//                   target.style.transform = "translateY(0)";
//                 } else if (animation === "fade-right") {
//                   target.style.transform = "translateX(0)";
//                 } else if (animation === "fade-left") {
//                   target.style.transform = "translateX(0)";
//                 }
//               }, 100);

//               // Unobserve after animation is applied
//               observer.unobserve(target);
//             }
//           });
//         },
//         { threshold: 0.1 }
//       );

//       // Find all elements with data-animation attribute
//       document.querySelectorAll("[data-animation]").forEach((element) => {
//         const animation = element.getAttribute("data-animation") || "fade-up";

//         // Set initial state
//         if (animation === "fade-up") {
//           (element as HTMLElement).style.transform = "translateY(20px)";
//         } else if (animation === "fade-right") {
//           (element as HTMLElement).style.transform = "translateX(-20px)";
//         } else if (animation === "fade-left") {
//           (element as HTMLElement).style.transform = "translateX(20px)";
//         }
//         (element as HTMLElement).style.opacity = "0";
//         observer.observe(element);
//       });
//     };

//     // Run after a short delay to ensure DOM is ready
//     setTimeout(animateOnScroll, 100);

//     // Clean up
//     return () => {
//       // Clean up if needed
//     };
//   }, []);

//   return <>{children}</>;
// };

// export default AOSProvider;

"use client";

import type React from "react";
import { useEffect } from "react";

interface AOSProviderProps {
  children: React.ReactNode;
}

const AOSProvider = ({ children }: AOSProviderProps) => {
  useEffect(() => {
    const animateOnScroll = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              const animation = target.dataset.animation || "fade-up";
              const delay = target.dataset.delay || "0";

              // Set transition styles
              target.style.opacity = "0";
              target.style.transition = `opacity 0.6s ease-out, transform 0.6s ease-out`;
              target.style.transitionDelay = `${parseInt(delay)}ms`;

              setTimeout(() => {
                target.style.opacity = "1";

                // Reset transform based on animation
                switch (animation) {
                  case "fade-up":
                  case "fade-down":
                    target.style.transform = "translateY(0)";
                    break;
                  case "fade-left":
                  case "fade-right":
                    target.style.transform = "translateX(0)";
                    break;
                  case "zoom-in":
                  case "zoom-out":
                    target.style.transform = "scale(1)";
                    break;
                  default:
                    break;
                }

                observer.unobserve(target);
              }, 100);
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll("[data-animation]").forEach((element) => {
        const el = element as HTMLElement;
        const animation = el.dataset.animation || "fade-up";

        // Set initial transform based on animation
        switch (animation) {
          case "fade-up":
            el.style.transform = "translateY(20px)";
            break;
          case "fade-down":
            el.style.transform = "translateY(-20px)";
            break;
          case "fade-left":
            el.style.transform = "translateX(20px)";
            break;
          case "fade-right":
            el.style.transform = "translateX(-20px)";
            break;
          case "zoom-in":
            el.style.transform = "scale(0.8)";
            break;
          case "zoom-out":
            el.style.transform = "scale(1.2)";
            break;
          default:
            el.style.transform = "translateY(20px)";
            break;
        }

        el.style.opacity = "0";
        observer.observe(el);
      });
    };

    setTimeout(animateOnScroll, 100);

    return () => {};
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
