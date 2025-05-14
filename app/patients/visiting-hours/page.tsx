// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import PatientHero from "@/components/patients/patient-hero";
import VisitingHoursContent from "@/components/patients/visiting-hours-content";

export const metadata = {
  title: "Visiting Hours | MediCare Hospital",
  description:
    "Information about visiting hours and guidelines for patients at MediCare Hospital",
};

export default function VisitingHoursPage() {
  return (
    <main className="min-h-screen">
      <PatientHero
        title="Visiting Hours"
        subtitle="Information for visitors to ensure a comfortable experience for our patients"
      />
      <VisitingHoursContent />
    </main>
  );
}
