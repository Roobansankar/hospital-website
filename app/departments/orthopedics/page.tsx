import DepartmentHero from "@/components/departments/department-hero";
import DepartmentContent from "@/components/departments/department-content";

export const metadata = {
  title: "Orthopedics Department | MediCare Hospital",
  description:
    "Learn about our Orthopedics Department and the services we offer",
};

export default function OrthopedicsPage() {
  const departmentData = {
    name: "Orthopedics",
    description: "Specialized care for musculoskeletal conditions and injuries",
    image:
      "https://www.rumcsi.org/wp-content/uploads/2020/09/rumc-orthopedic-surgery-banner.jpg",
    overview:
      "Our Orthopedics Department provides comprehensive care for conditions affecting the musculoskeletal system, including bones, joints, ligaments, tendons, muscles, and nerves. Our team of orthopedic surgeons, sports medicine specialists, and rehabilitation experts utilizes advanced techniques and technologies to diagnose and treat a wide range of orthopedic conditions, from common injuries to complex reconstructive procedures.",
    services: [
      {
        name: "Joint Replacement",
        description:
          "Advanced total and partial joint replacement procedures for hips, knees, shoulders, and other joints, using minimally invasive techniques and computer-assisted navigation.",
      },
      {
        name: "Sports Medicine",
        description:
          "Specialized care for athletes and active individuals, including treatment of sports injuries, arthroscopic procedures, and performance optimization programs.",
      },
      {
        name: "Spine Surgery",
        description:
          "Comprehensive spine care, including minimally invasive spine surgery, disc replacement, spinal fusion, and treatment for spinal deformities and degenerative conditions.",
      },
      {
        name: "Trauma Care",
        description:
          "Emergency and definitive treatment for fractures, dislocations, and other traumatic injuries to the musculoskeletal system.",
      },
      {
        name: "Pediatric Orthopedics",
        description:
          "Specialized care for children with congenital and acquired orthopedic conditions, including scoliosis, club foot, and developmental dysplasia of the hip.",
      },
      {
        name: "Orthopedic Rehabilitation",
        description:
          "Comprehensive rehabilitation programs designed to restore function, reduce pain, and improve quality of life following orthopedic injuries or surgeries.",
      },
    ],
    team: [
      {
        name: "Dr. James Wilson",
        position: "Head of Orthopedics",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "Joint Replacement",
      },
      {
        name: "Dr. Sarah Johnson",
        position: "Senior Orthopedic Surgeon",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "Sports Medicine",
      },
      {
        name: "Dr. Robert Thompson",
        position: "Orthopedic Surgeon",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "Spine Surgery",
      },
      {
        name: "Dr. Emily Rodriguez",
        position: "Orthopedic Surgeon",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "Pediatric Orthopedics",
      },
    ],
  };

  return (
    <main className="min-h-screen">
      <DepartmentHero
        name={departmentData.name}
        description={departmentData.description}
      />
      <DepartmentContent department={departmentData} />
    </main>
  );
}
