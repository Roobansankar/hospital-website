import AboutHero from "@/components/about/about-hero"
import VisionMissionContent from "@/components/about/vision-mission-content"

export const metadata = {
  title: "Vision & Mission | MediCare Hospital",
  description: "Our vision and mission statements that guide our healthcare services",
}

export default function VisionMissionPage() {
  return (
    <main className="min-h-screen">
      <AboutHero
        title="Vision & Mission"
        subtitle="The guiding principles that drive our commitment to healthcare excellence"
      />
      <VisionMissionContent />
    </main>
  )
}
