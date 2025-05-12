import DoctorsList from "@/components/doctors/doctors-list"
import DoctorsHero from "@/components/doctors/doctors-hero"

export const metadata = {
  title: "Our Doctors | MediCare Hospital",
  description: "Meet our team of experienced and qualified doctors",
}

export default function DoctorsPage() {
  return (
    <main className="min-h-screen">
      <DoctorsHero />
      <DoctorsList />
    </main>
  )
}
