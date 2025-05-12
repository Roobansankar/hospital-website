import AboutHero from "@/components/about/about-hero"
import ProfileContent from "@/components/about/profile-content"

export const metadata = {
  title: "Our Profile | MediCare Hospital",
  description: "Learn about MediCare Hospital's history, achievements, and mission",
}

export default function ProfilePage() {
  return (
    <main className="min-h-screen">
      <AboutHero
        title="Our Profile"
        subtitle="Learn about our hospital's journey, achievements, and commitment to healthcare excellence"
      />
      <ProfileContent />
    </main>
  )
}
