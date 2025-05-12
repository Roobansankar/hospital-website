import DepartmentHero from "@/components/departments/department-hero"
import DepartmentContent from "@/components/departments/department-content"

export const metadata = {
  title: "General Surgery Department | MediCare Hospital",
  description: "Learn about our General Surgery Department and the services we offer",
}

export default function GeneralSurgeryPage() {
  const departmentData = {
    name: "General Surgery",
    description: "Comprehensive surgical care for a wide range of conditions",
    image: "/placeholder.svg?height=600&width=1200",
    overview:
      "Our General Surgery Department provides comprehensive surgical care for a wide range of conditions affecting the abdomen, digestive tract, endocrine system, and other organs. Our team of experienced surgeons utilizes advanced surgical techniques, including minimally invasive and robotic-assisted approaches, to deliver optimal outcomes with faster recovery times. We are committed to providing personalized surgical care with a focus on patient safety, comfort, and satisfaction.",
    services: [
      {
        name: "Minimally Invasive Surgery",
        description:
          "Laparoscopic and robotic-assisted surgical procedures that result in smaller incisions, less pain, and faster recovery compared to traditional open surgery.",
      },
      {
        name: "Gastrointestinal Surgery",
        description:
          "Surgical treatment for conditions affecting the esophagus, stomach, intestines, colon, and rectum, including cancer, inflammatory bowel disease, and diverticulitis.",
      },
      {
        name: "Hepatobiliary Surgery",
        description:
          "Specialized procedures for the liver, gallbladder, and pancreas, including treatment for gallstones, liver tumors, and pancreatic conditions.",
      },
      {
        name: "Hernia Repair",
        description:
          "Advanced techniques for repairing various types of hernias, including inguinal, umbilical, incisional, and hiatal hernias.",
      },
      {
        name: "Endocrine Surgery",
        description:
          "Surgical management of thyroid, parathyroid, and adrenal gland disorders, including both benign and malignant conditions.",
      },
      {
        name: "Breast Surgery",
        description:
          "Comprehensive surgical care for breast conditions, including biopsies, lumpectomies, mastectomies, and breast reconstruction procedures.",
      },
    ],
    team: [
      {
        name: "Dr. Robert Thompson",
        position: "Head of General Surgery",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "Minimally Invasive Surgery",
      },
      {
        name: "Dr. Sarah Johnson",
        position: "Senior Surgeon",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "Breast and Endocrine Surgery",
      },
      {
        name: "Dr. Michael Chen",
        position: "Surgeon",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "Hepatobiliary Surgery",
      },
      {
        name: "Dr. Priya Patel",
        position: "Surgeon",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "Gastrointestinal Surgery",
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
