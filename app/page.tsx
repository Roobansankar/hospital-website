import { Suspense } from "react"
import HeroSection from "@/components/home/hero-section"
import WelcomeSection from "@/components/home/welcome-section"
import HighlightsSection from "@/components/home/highlights-section"
import ImageSlider from "@/components/home/image-slider"
import LoadingSpinner from "@/components/ui/loading-spinner"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WelcomeSection />
      <HighlightsSection />
      <Suspense fallback={<LoadingSpinner />}>
        <ImageSlider />
      </Suspense>
    </main>
  )
}
