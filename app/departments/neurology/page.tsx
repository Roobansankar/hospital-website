import DepartmentHero from "@/components/departments/department-hero";
import DepartmentContent from "@/components/departments/department-content";

export const metadata = {
  title: "Neurology Department | MediCare Hospital",
  description: "Learn about our Neurology Department and the services we offer",
};

export default function NeurologyPage() {
  const departmentData = {
    name: "Neurology",
    description:
      "Specialized care for disorders of the brain, spinal cord, and nervous system",
    image:
      "https://careandcurehospital.co.in/wp-content/uploads/2022/02/neurology-manu-hospital-1024x468.jpg",
    overview:
      "Our Neurology Department provides comprehensive care for patients with neurological disorders affecting the brain, spinal cord, and nervous system. Our team of experienced neurologists, neurosurgeons, and specialized healthcare professionals utilizes advanced diagnostic tools and innovative treatment approaches to address a wide range of neurological conditions, from common disorders to complex neurological diseases.",
    services: [
      {
        name: "Neurological Diagnostics",
        description:
          "Comprehensive neurological evaluations including EEG, EMG, nerve conduction studies, and advanced neuroimaging with MRI and CT scans.",
      },
      {
        name: "Stroke Care",
        description:
          "Rapid assessment, intervention, and rehabilitation for stroke patients, including thrombolytic therapy and specialized stroke recovery programs.",
      },
      {
        name: "Epilepsy Management",
        description:
          "Diagnosis and treatment of epilepsy and seizure disorders, including medication management, surgical options, and vagus nerve stimulation therapy.",
      },
      {
        name: "Movement Disorders",
        description:
          "Specialized care for Parkinson's disease, essential tremor, dystonia, and other movement disorders, including deep brain stimulation therapy.",
      },
      {
        name: "Headache and Pain Management",
        description:
          "Comprehensive evaluation and treatment for migraines, cluster headaches, and other neurological pain conditions.",
      },
      {
        name: "Neuromuscular Disorders",
        description:
          "Diagnosis and management of conditions affecting nerves and muscles, including multiple sclerosis, myasthenia gravis, and peripheral neuropathy.",
      },
    ],
    team: [
      {
        name: "Dr. Michael Chen",
        position: "Head of Neurology",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "Stroke and Cerebrovascular Disorders",
      },
      {
        name: "Dr. Rebecca Williams",
        position: "Senior Neurologist",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "Epilepsy and Seizure Disorders",
      },
      {
        name: "Dr. James Wilson",
        position: "Neurologist",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "Movement Disorders",
      },
      {
        name: "Dr. Sophia Martinez",
        position: "Neurologist",
        image: "/placeholder.svg?height=300&width=300",
        specialization: "Headache and Pain Management",
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
