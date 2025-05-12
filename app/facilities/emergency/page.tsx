import FacilityHero from "@/components/facilities/facility-hero"
import FacilityContent from "@/components/facilities/facility-content"

export const metadata = {
  title: "Emergency Department | MediCare Hospital",
  description: "Learn about our 24/7 emergency medical services",
}

export default function EmergencyPage() {
  const facilityData = {
    title: "Emergency Department",
    description: "Our 24/7 emergency medical services providing immediate care for critical conditions.",
    image: "/placeholder.svg?height=600&width=1200",
    content: [
      {
        title: "Rapid Response Teams",
        description:
          "Our emergency department features specialized rapid response teams ready to provide immediate care for critical conditions such as stroke, heart attack, trauma, and other life-threatening emergencies.",
      },
      {
        title: "Advanced Triage System",
        description:
          "We employ an efficient triage system that quickly assesses patient conditions to prioritize care based on medical urgency, ensuring that the most critical cases receive immediate attention.",
      },
      {
        title: "State-of-the-Art Resuscitation Rooms",
        description:
          "Our resuscitation areas are equipped with advanced life support equipment and monitoring systems to stabilize critically ill patients and provide immediate life-saving interventions.",
      },
      {
        title: "Integrated Emergency Care",
        description:
          "Our emergency department works seamlessly with other hospital departments, including radiology, laboratory, surgery, and intensive care, to provide comprehensive emergency medical services under one roof.",
      },
    ],
    features: [
      "24/7 emergency physician coverage",
      "Trauma care capabilities",
      "Pediatric emergency services",
      "Cardiac emergency response unit",
      "Stroke response team",
      "Direct access to diagnostic imaging",
      "Dedicated emergency operating rooms",
    ],
  }

  return (
    <main className="min-h-screen">
      <FacilityHero title={facilityData.title} description={facilityData.description} />
      <FacilityContent facility={facilityData} />
    </main>
  )
}
