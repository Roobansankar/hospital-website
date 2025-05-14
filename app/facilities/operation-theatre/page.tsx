import FacilityHero from "@/components/facilities/facility-hero";
import FacilityContent from "@/components/facilities/facility-content";

export const metadata = {
  title: "Operation Theatre | MediCare Hospital",
  description: "Learn about our state-of-the-art Operation Theatres",
};

export default function OperationTheatrePage() {
  const facilityData = {
    title: "Operation Theatre",
    description:
      "Our advanced surgical suites equipped with cutting-edge technology for all types of procedures.",
    image: "https://www.irishospital.co.in/wp-content/uploads/2016/10/119.jpg",
    content: [
      {
        title: "State-of-the-Art Surgical Suites",
        description:
          "Our operation theatres are equipped with the latest surgical technology, including robotic surgical systems, advanced imaging equipment, and integrated operating room systems that enhance surgical precision and efficiency.",
      },
      {
        title: "Specialized Surgical Teams",
        description:
          "Each operation theatre is staffed by a team of highly trained surgeons, anesthesiologists, nurses, and technicians specialized in various surgical disciplines, ensuring the highest level of care during procedures.",
      },
      {
        title: "Minimally Invasive Capabilities",
        description:
          "We offer advanced minimally invasive surgical options, including laparoscopic and robotic-assisted procedures, which result in smaller incisions, reduced pain, faster recovery, and shorter hospital stays for patients.",
      },
      {
        title: "Comprehensive Surgical Services",
        description:
          "Our operation theatres support a wide range of surgical specialties, including general surgery, orthopedics, neurosurgery, cardiac surgery, gynecology, urology, and more, allowing us to address diverse patient needs.",
      },
    ],
    features: [
      "Advanced robotic surgical systems",
      "Real-time imaging and navigation technology",
      "Laminar airflow systems for infection control",
      "Integrated digital operating room systems",
      "Specialized surgical lighting for optimal visibility",
      "Dedicated pre-operative and post-operative care areas",
    ],
  };

  return (
    <main className="min-h-screen">
      <FacilityHero
        title={facilityData.title}
        description={facilityData.description}
      />
      <FacilityContent facility={facilityData} />
    </main>
  );
}
