import AboutHero from "@/components/about/about-hero";
import AwardsContent from "@/components/about/awards-content";

export const metadata = {
  title: "Hospital Awards | MediCare Hospital",
  description: "Recognitions and achievements of MediCare Hospital",
};

export default function AwardsPage() {
  return (
    <main className="min-h-screen">
      <AboutHero
        title="Hospital Awards"
        subtitle="Recognitions and achievements that reflect our commitment to excellence"
      />
      <AwardsContent />
    </main>
  );
}
