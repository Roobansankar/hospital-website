"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Clock, UserCheck, Video, Shield } from "lucide-react";

const HighlightsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const highlights = [
    {
      icon: <Clock className="h-12 w-12 text-blue-600" />,
      title: "24/7 Emergency",
      description:
        "Round-the-clock emergency services with rapid response teams ready to provide immediate care.",
      delay: "0",
    },
    {
      icon: <UserCheck className="h-12 w-12 text-blue-600" />,
      title: "Experienced Doctors",
      description:
        "Team of highly qualified and experienced medical professionals across various specializations.",
      delay: "100",
    },
    {
      icon: <Video className="h-12 w-12 text-blue-600" />,
      title: "Online Consultation",
      description:
        "Virtual consultations with our specialists from the comfort of your home.",
      delay: "200",
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Advanced Technology",
      description:
        "State-of-the-art medical equipment and technology for accurate diagnosis and effective treatment.",
      delay: "300",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2
          className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl"
          data-aos="fade-up"
        >
          Why Choose MediCare
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 dark:bg-gray-800"
              // data-animation="fade-up"
              // data-delay={highlight.delay}
              data-aos="fade-up"
              data-aos-delay={highlight.delay || 0}
            >
              <div className="mb-4">{highlight.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
