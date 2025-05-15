"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import DoctorCard from "./doctor-card";

const DoctorsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      image:
        "https://img.freepik.com/premium-photo/beautiful-smiling-female-doctor-stand-office_151013-12509.jpg?w=2000",
      education: "MD, Harvard Medical School",
      experience: "15+ years",
      description:
        "Dr. Johnson is a board-certified cardiologist specializing in interventional cardiology and heart failure management.",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      image: "https://www.sonicseo.com/wp-content/uploads/2020/07/surgeon.jpg",
      education: "MD, Johns Hopkins University",
      experience: "12+ years",
      description:
        "Dr. Chen specializes in neurological disorders, stroke management, and neurodegenerative diseases.",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      image:
        "https://segurancadotrabalhosempre.com/wp-content/uploads/2016/08/O6T8LS01.jpg",
      education: "MD, Stanford University",
      experience: "10+ years",
      description:
        "Dr. Rodriguez is dedicated to providing comprehensive care for children from infancy through adolescence.",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedics",
      image: "https://www.stockvault.net/data/2015/09/01/177580/preview16.jpg",
      education: "MD, Yale University",
      experience: "18+ years",
      description:
        "Dr. Wilson specializes in joint replacement, sports medicine, and orthopedic trauma.",
    },
    {
      id: 5,
      name: "Dr. Priya Patel",
      specialty: "Dermatology",
      image:
        "http://pluspng.com/img-png/png-woman-doctor-health-savings-accounts-667.png",
      education: "MD, University of California",
      experience: "8+ years",
      description:
        "Dr. Patel specializes in medical and cosmetic dermatology, treating various skin conditions.",
    },
    {
      id: 6,
      name: "Dr. Robert Thompson",
      specialty: "General Surgery",
      image:
        "http://preemploymentscreen.com/wp/wp-content/uploads/2014/11/Medical-Doctor.jpg",
      education: "MD, Columbia University",
      experience: "20+ years",
      description:
        "Dr. Thompson is an experienced surgeon specializing in minimally invasive and robotic surgical procedures.",
    },
    {
      id: 7,
      name: "Dr. Lisa Wong",
      specialty: "Obstetrics & Gynecology",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.lIBNn1Wfle5T9VT1EyzQSQAAAA&pid=Api&P=0&h=180",
      education: "MD, Duke University",
      experience: "14+ years",
      description:
        "Dr. Wong provides comprehensive women's health services, including prenatal care and gynecological procedures.",
    },
    {
      id: 8,
      name: "Dr. David Miller",
      specialty: "Psychiatry",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.rkTbYoJIRGJFyA0jmf6rEwHaE7&pid=Api&P=0&h=180",
      education: "MD, University of Pennsylvania",
      experience: "16+ years",
      description:
        "Dr. Miller specializes in mood disorders, anxiety, and psychotherapy for adults and adolescents.",
    },
    {
      id: 9,
      name: "Dr. Sophia Martinez",
      specialty: "Endocrinology",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.wbZBGL1zXorjfgj5GLWnmwHaLH&pid=Api&P=0&h=180",
      education: "MD, Northwestern University",
      experience: "11+ years",
      description:
        "Dr. Martinez specializes in diabetes management, thyroid disorders, and hormonal imbalances.",
    },
    {
      id: 10,
      name: "Dr. John Kim",
      specialty: "Pulmonology",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.4oymuJKjWMVg85osaWIcwwHaFX&pid=Api&P=0&h=180",
      education: "MD, University of Chicago",
      experience: "13+ years",
      description:
        "Dr. Kim specializes in respiratory diseases, sleep disorders, and critical care medicine.",
    },
  ];

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row transform-gpu"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl transform-gpu custom-text-shadow text-blue-600">
            Find <span className="text-orange-600">Your Doctor</span>
          </h2>
          <div className="relative w-full max-w-md ">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by name or specialty..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {filteredDoctors.length === 0 ? (
          <div className="rounded-lg bg-white p-8 text-center shadow-md dark:bg-gray-800">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              No doctors found matching your search criteria. Please try a
              different search term.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredDoctors.map((doctor, index) => (
              <div
                key={doctor.id}
                data-aos="fade-left"
                data-aos-delay={`${index * 50}`}
                className="transform-gpu"
              >
                <DoctorCard doctor={doctor} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorsList;
