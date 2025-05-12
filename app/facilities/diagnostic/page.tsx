import FacilityHero from "@/components/facilities/facility-hero"
import FacilityContent from "@/components/facilities/facility-content"

export const metadata = {
  title: "Diagnostic Services | MediCare Hospital",
  description: "Learn about our comprehensive diagnostic and imaging services",
}

export default function DiagnosticPage() {
  const facilityData = {
    title: "Diagnostic Services",
    description: "Our comprehensive laboratory and imaging services for accurate diagnosis and treatment planning.",
    image: "/placeholder.svg?height=600&width=1200",
    content: [
      {
        title: "Advanced Imaging Technology",
        description:
          "Our diagnostic center features state-of-the-art imaging equipment including MRI, CT scanners, PET-CT, ultrasound, X-ray, and mammography, providing detailed images for precise diagnosis of various conditions.",
      },
      {
        title: "Comprehensive Laboratory Services",
        description:
          "Our clinical laboratory offers a full range of testing services, including hematology, biochemistry, microbiology, immunology, and molecular diagnostics, with rapid turnaround times for critical results.",
      },
      {
        title: "Specialized Diagnostic Procedures",
        description:
          "We provide specialized diagnostic procedures such as endoscopy, colonoscopy, bronchoscopy, and cardiac catheterization, performed by experienced specialists using the latest equipment.",
      },
      {
        title: "Digital Integration and Reporting",
        description:
          "Our diagnostic services utilize advanced digital systems for image storage, analysis, and reporting, allowing for seamless sharing of results with healthcare providers and enhancing collaborative care.",
      },
    ],
    features: [
      "3T MRI for high-resolution imaging",
      "128-slice CT scanner for detailed cross-sectional images",
      "Digital X-ray with reduced radiation exposure",
      "4D ultrasound capabilities",
      "Automated laboratory testing systems",
      "Digital pathology services",
      "Cardiac stress testing facilities",
    ],
  }

  return (
    <main className="min-h-screen">
      <FacilityHero title={facilityData.title} description={facilityData.description} />
      <FacilityContent facility={facilityData} />
    </main>
  )
}
