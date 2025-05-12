import FacilityHero from "@/components/facilities/facility-hero"
import FacilityContent from "@/components/facilities/facility-content"

export const metadata = {
  title: "Pharmacy | MediCare Hospital",
  description: "Learn about our comprehensive pharmacy services",
}

export default function PharmacyPage() {
  const facilityData = {
    title: "Pharmacy",
    description: "Our comprehensive pharmacy services providing medications and expert pharmaceutical care.",
    image: "/placeholder.svg?height=600&width=1200",
    content: [
      {
        title: "24/7 Pharmacy Services",
        description:
          "Our hospital pharmacy operates round-the-clock to ensure that patients have access to essential medications at any time of day or night, supporting both inpatient and emergency care needs.",
      },
      {
        title: "Expert Pharmacist Consultation",
        description:
          "Our team of licensed pharmacists provides expert consultation on medications, including proper usage, potential side effects, drug interactions, and personalized medication management plans for patients with complex needs.",
      },
      {
        title: "Comprehensive Medication Inventory",
        description:
          "We maintain a comprehensive inventory of prescription medications, over-the-counter products, and specialized pharmaceuticals to meet diverse patient needs, ensuring timely access to critical treatments.",
      },
      {
        title: "Medication Safety Programs",
        description:
          "Our pharmacy implements robust medication safety protocols, including electronic prescription systems, barcode medication administration, and regular medication reviews to prevent errors and ensure patient safety.",
      },
    ],
    features: [
      "24/7 availability for inpatients and outpatients",
      "Electronic prescription processing system",
      "Medication therapy management services",
      "Specialized compounding services",
      "Patient education and counseling",
      "Home delivery options for discharged patients",
    ],
  }

  return (
    <main className="min-h-screen">
      <FacilityHero title={facilityData.title} description={facilityData.description} />
      <FacilityContent facility={facilityData} />
    </main>
  )
}
