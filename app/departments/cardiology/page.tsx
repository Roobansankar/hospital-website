import DepartmentHero from "@/components/departments/department-hero";
import DepartmentContent from "@/components/departments/department-content";

export const metadata = {
  title: "Cardiology Department | MediCare Hospital",
  description:
    "Learn about our Cardiology Department and the services we offer",
};

export default function CardiologyPage() {
  const departmentData = {
    name: "Cardiology",
    description:
      "Comprehensive cardiac care for diagnosis, treatment, and management of heart conditions",
    image: "https://islandhospital.com/wp-content/uploads/2023/01/2-1.jpg",
    overview:
      "Our Cardiology Department is equipped with state-of-the-art technology and staffed by experienced cardiologists, providing comprehensive care for all types of heart conditions. From preventive cardiology to advanced interventional procedures, we offer a full spectrum of cardiac services to ensure the best possible outcomes for our patients.",
    services: [
      {
        name: "Diagnostic Services",
        description:
          "Comprehensive cardiac evaluation including ECG, Echocardiography, Stress Testing, Holter Monitoring, and Cardiac CT/MRI.",
      },
      {
        name: "Interventional Cardiology",
        description:
          "Minimally invasive procedures including angioplasty, stent placement, and valve repairs to treat heart conditions without open surgery.",
      },
      {
        name: "Electrophysiology",
        description:
          "Diagnosis and treatment of heart rhythm disorders, including pacemaker and defibrillator implantation.",
      },
      {
        name: "Heart Failure Management",
        description:
          "Specialized care for patients with heart failure, including medication management, lifestyle modifications, and advanced therapies.",
      },
      {
        name: "Cardiac Rehabilitation",
        description:
          "Supervised exercise programs and education to help patients recover from heart attacks, surgery, or manage chronic heart conditions.",
      },
      {
        name: "Preventive Cardiology",
        description:
          "Risk assessment, lifestyle counseling, and preventive strategies to reduce the risk of heart disease.",
      },
    ],
    team: [
      {
        name: "Dr. Sarah Johnson",
        position: "Head of Cardiology",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "Interventional Cardiology",
      },
      {
        name: "Dr. Michael Chen",
        position: "Senior Cardiologist",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "Electrophysiology",
      },
      {
        name: "Dr. Robert Thompson",
        position: "Cardiologist",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "Heart Failure Management",
      },
      {
        name: "Dr. Emily Rodriguez",
        position: "Cardiologist",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "Preventive Cardiology",
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
