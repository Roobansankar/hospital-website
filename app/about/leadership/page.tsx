import AboutHero from "@/components/about/about-hero"
import LeadershipContent from "@/components/about/leadership-content"

export const metadata = {
  title: "Leadership & Management | MediCare Hospital",
  description: "Meet the leadership team behind MediCare Hospital",
}

export default function LeadershipPage() {
  return (
    <main className="min-h-screen">
      <AboutHero
        title="Leadership & Management"
        subtitle="Meet the dedicated team of professionals leading MediCare Hospital"
      />
      <LeadershipContent />
    </main>
  )
}
