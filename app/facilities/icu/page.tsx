import FacilityHero from "@/components/facilities/facility-hero"
import FacilityContent from "@/components/facilities/facility-content"

export const metadata = {
  title: "ICU | MediCare Hospital",
  description: "Learn about our state-of-the-art Intensive Care Unit",
}

export default function ICUPage() {
  const facilityData = {
    title: "Intensive Care Unit",
    description: "Our state-of-the-art Intensive Care Unit provides specialized care for critically ill patients.",
    image: "/placeholder.svg?height=600&width=1200",
    content: [
      {
        title: "Advanced Monitoring Systems",
        description:
          "Our ICU is equipped with the latest monitoring systems that continuously track vital signs, allowing our medical team to respond immediately to any changes in a patient's condition.",
      },
      {
        title: "Specialized Medical Team",
        description:
          "Our ICU is staffed 24/7 by a team of specialized doctors, nurses, and respiratory therapists trained in critical care medicine.",
      },
      {
        title: "Comprehensive Life Support",
        description:
          "We provide comprehensive life support services, including mechanical ventilation, continuous renal replacement therapy, and advanced cardiac support.",
      },
      {
        title: "Infection Control",
        description:
          "Our ICU follows strict infection control protocols to ensure the safety of our critically ill patients with compromised immune systems.",
      },
    ],
    features: [
      "24/7 monitoring by specialized staff",
      "Advanced life support equipment",
      "Isolation rooms for infection control",
      "Family support services",
      "Telemedicine capabilities for specialist consultations",
      "Dedicated pharmacy services",
    ],
  }

  return (
    <main className="min-h-screen">
      <FacilityHero title={facilityData.title} description={facilityData.description} />
      <FacilityContent facility={facilityData} />
    </main>
  )
}
