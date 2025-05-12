import DepartmentHero from "@/components/departments/department-hero"
import DepartmentContent from "@/components/departments/department-content"

export const metadata = {
  title: "Pediatrics Department | MediCare Hospital",
  description: "Learn about our Pediatrics Department and the services we offer",
}

export default function PediatricsPage() {
  const departmentData = {
    name: "Pediatrics",
    description: "Comprehensive healthcare services for infants, children, and adolescents",
    image: "/placeholder.svg?height=600&width=1200",
    overview:
      "Our Pediatrics Department provides comprehensive healthcare services for children from birth through adolescence. Our team of pediatricians, pediatric specialists, and child-friendly healthcare professionals is dedicated to providing compassionate, age-appropriate care in a welcoming environment designed specifically for young patients. We focus not only on treating childhood illnesses but also on preventive care, growth monitoring, and supporting healthy development.",
    services: [
      {
        name: "Well-Child Care",
        description:
          "Regular check-ups, immunizations, growth and development monitoring, and preventive health guidance for children of all ages.",
      },
      {
        name: "Pediatric Emergency Care",
        description:
          "Specialized emergency services for children with acute illnesses and injuries, available 24/7 with pediatric-trained emergency physicians.",
      },
      {
        name: "Neonatal Care",
        description:
          "Specialized care for newborns, including premature infants and those with medical conditions requiring close monitoring and intervention.",
      },
      {
        name: "Pediatric Subspecialty Services",
        description:
          "Access to pediatric specialists in cardiology, neurology, gastroenterology, endocrinology, pulmonology, and other subspecialties.",
      },
      {
        name: "Childhood Illness Management",
        description:
          "Diagnosis and treatment of common and complex childhood illnesses, infections, and chronic conditions.",
      },
      {
        name: "Behavioral and Developmental Services",
        description:
          "Evaluation and support for developmental delays, behavioral concerns, ADHD, autism spectrum disorders, and learning difficulties.",
      },
    ],
    team: [
      {
        name: "Dr. Emily Rodriguez",
        position: "Head of Pediatrics",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "General Pediatrics",
      },
      {
        name: "Dr. David Miller",
        position: "Senior Pediatrician",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "Pediatric Cardiology",
      },
      {
        name: "Dr. Lisa Wong",
        position: "Pediatrician",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "Neonatology",
      },
      {
        name: "Dr. John Kim",
        position: "Pediatrician",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "Pediatric Neurology",
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <DepartmentHero name={departmentData.name} description={departmentData.description} />
      <DepartmentContent department={departmentData} />
    </main>
  )
}
