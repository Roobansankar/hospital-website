"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { useEffect } from "react";

const LeadershipContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);
  const executiveTeam = [
    {
      name: "Dr. Richard Anderson",
      position: "Chief Executive Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dr. Anderson has over 25 years of experience in healthcare management and is committed to advancing MediCare Hospital's mission of providing exceptional patient care. Under his leadership, the hospital has achieved numerous accreditations and expanded its services significantly.",
      education: "MD, MBA - Harvard University",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "richard.anderson@medicarehospital.com",
      },
    },
    {
      name: "Dr. Jennifer Williams",
      position: "Chief Medical Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dr. Williams oversees all medical operations and ensures the highest standards of clinical care across all departments. With her extensive background in internal medicine and healthcare quality, she has implemented numerous initiatives to enhance patient outcomes and safety.",
      education: "MD - Johns Hopkins University",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "jennifer.williams@medicarehospital.com",
      },
    },
    {
      name: "Robert Chen",
      position: "Chief Financial Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Robert brings over 20 years of financial expertise to MediCare Hospital. He is responsible for the hospital's financial strategy, ensuring sustainable growth while maintaining accessibility of care for all patients. His innovative financial models have strengthened the hospital's position in the healthcare market.",
      education: "MBA - Stanford University",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "robert.chen@medicarehospital.com",
      },
    },
  ];

  const boardMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Chairperson",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dr. Johnson has been with MediCare Hospital since its founding and has played a pivotal role in shaping its growth and direction. Her vision for accessible, quality healthcare continues to guide the hospital's strategic initiatives.",
      education: "MD, PhD - Yale University",
    },
    {
      name: "Michael Thompson",
      position: "Vice Chairperson",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With a background in healthcare policy and administration, Michael brings valuable insights to the board. He is particularly focused on community outreach and ensuring MediCare Hospital meets the evolving needs of the population it serves.",
      education: "MPA - Columbia University",
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Board Member",
      image: "/placeholder.svg?height=400&width=400",
      bio: "As a renowned pediatrician and public health advocate, Dr. Rodriguez contributes significantly to the hospital's pediatric services and community health initiatives. Her research in childhood healthcare has been internationally recognized.",
      education: "MD, MPH - University of California",
    },
    {
      name: "James Wilson",
      position: "Board Member",
      image: "/placeholder.svg?height=400&width=400",
      bio: "James brings extensive experience in healthcare technology and innovation. His expertise has been instrumental in modernizing the hospital's technological infrastructure and implementing digital health solutions.",
      education: "MS - Massachusetts Institute of Technology",
    },
  ];

  const departmentHeads = [
    {
      name: "Dr. David Miller",
      position: "Head of Cardiology",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dr. Miller leads our cardiology department with distinction. His pioneering work in interventional cardiology has established MediCare Hospital as a center of excellence for cardiac care.",
      education: "MD - Duke University",
    },
    {
      name: "Dr. Lisa Wong",
      position: "Head of Pediatrics",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Under Dr. Wong's leadership, our pediatrics department has expanded its services and implemented family-centered care approaches that have significantly improved patient experience and outcomes.",
      education: "MD - University of Pennsylvania",
    },
    {
      name: "Dr. Mark Johnson",
      position: "Head of Surgery",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dr. Johnson oversees all surgical departments, bringing his expertise in minimally invasive and robotic surgical techniques. He has trained numerous surgeons and contributed to advancing surgical practices.",
      education: "MD - Northwestern University",
    },
    {
      name: "Dr. Priya Patel",
      position: "Head of Neurology",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dr. Patel has transformed our neurology department with her expertise in neurological disorders and innovative treatment approaches. Her research in neurodegenerative diseases has received international recognition.",
      education: "MD, PhD - University of Chicago",
    },
  ];

  return (
    // <section className="py-16 overflow-hidden">
    //   <div className="container mx-auto px-4">
    //     <div className="mb-16">
    //       <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
    //         Executive Leadership
    //       </h2>
    //       <div className="mb-12 mx-auto h-1 w-24 bg-blue-600"></div>
    //       <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
    //         {executiveTeam.map((leader, index) => (
    //           <div
    //             key={index}
    //             className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg dark:bg-gray-800"
    //           >
    //             <div className="mb-4 h-48 w-48 overflow-hidden rounded-full">
    //               <Image
    //                 src={leader.image || "/placeholder.svg"}
    //                 alt={leader.name}
    //                 width={200}
    //                 height={200}
    //                 className="h-full w-full object-cover"
    //               />
    //             </div>
    //             <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
    //               {leader.name}
    //             </h3>
    //             <p className="mb-4 text-blue-600 dark:text-blue-400">
    //               {leader.position}
    //             </p>
    //             <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
    //               {leader.education}
    //             </p>
    //             <p className="mb-6 text-gray-700 dark:text-gray-300">
    //               {leader.bio}
    //             </p>
    //             <div className="flex space-x-4">
    //               <a
    //                 href={leader.social.linkedin}
    //                 className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
    //                 aria-label="LinkedIn"
    //               >
    //                 <Linkedin className="h-5 w-5" />
    //               </a>
    //               <a
    //                 href={leader.social.twitter}
    //                 className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
    //                 aria-label="Twitter"
    //               >
    //                 <Twitter className="h-5 w-5" />
    //               </a>
    //               <a
    //                 href={`mailto:${leader.social.email}`}
    //                 className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
    //                 aria-label="Email"
    //               >
    //                 <Mail className="h-5 w-5" />
    //               </a>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="mb-16">
    //       <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
    //         Board of Directors
    //       </h2>
    //       <div className="mb-12 mx-auto h-1 w-24 bg-blue-600"></div>
    //       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
    //         {boardMembers.map((member, index) => (
    //           <div
    //             key={index}
    //             className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-800"
    //           >
    //             <div className="mb-4 h-32 w-32 overflow-hidden rounded-full">
    //               <Image
    //                 src={member.image || "/placeholder.svg"}
    //                 alt={member.name}
    //                 width={150}
    //                 height={150}
    //                 className="h-full w-full object-cover"
    //               />
    //             </div>
    //             <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
    //               {member.name}
    //             </h3>
    //             <p className="mb-3 text-blue-600 dark:text-blue-400">
    //               {member.position}
    //             </p>
    //             <p className="mb-4 text-xs text-gray-600 dark:text-gray-400">
    //               {member.education}
    //             </p>
    //             <p className="text-sm text-gray-700 dark:text-gray-300">
    //               {member.bio}
    //             </p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div>
    //       <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
    //         Department Heads
    //       </h2>
    //       <div className="mb-12 mx-auto h-1 w-24 bg-blue-600"></div>
    //       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
    //         {departmentHeads.map((head, index) => (
    //           <div
    //             key={index}
    //             className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-800"
    //           >
    //             <div className="mb-4 h-32 w-32 overflow-hidden rounded-full">
    //               <Image
    //                 src={head.image || "/placeholder.svg"}
    //                 alt={head.name}
    //                 width={150}
    //                 height={150}
    //                 className="h-full w-full object-cover"
    //               />
    //             </div>
    //             <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
    //               {head.name}
    //             </h3>
    //             <p className="mb-3 text-blue-600 dark:text-blue-400">
    //               {head.position}
    //             </p>
    //             <p className="mb-4 text-xs text-gray-600 dark:text-gray-400">
    //               {head.education}
    //             </p>
    //             <p className="text-sm text-gray-700 dark:text-gray-300">
    //               {head.bio}
    //             </p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Executive Leadership */}
        <div className="mb-16" data-aos="fade-up" className="transform-gpu">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Executive Leadership
          </h2>
          <div className="mb-12 mx-auto h-1 w-24 bg-blue-600"></div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {executiveTeam.map((leader, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg dark:bg-gray-800 transform-gpu"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4 h-48 w-48 overflow-hidden rounded-full">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                  {leader.name}
                </h3>
                <p className="mb-4 text-blue-600 dark:text-blue-400">
                  {leader.position}
                </p>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  {leader.education}
                </p>
                <p className="mb-6 text-gray-700 dark:text-gray-300">
                  {leader.bio}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={leader.social.linkedin}
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={leader.social.twitter}
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${leader.social.email}`}
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Board of Directors */}
        <div className="mb-16" data-aos="fade-up" className="transform-gpu">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Board of Directors
          </h2>
          <div className="mb-12 mx-auto h-1 w-24 bg-blue-600"></div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-800 transform-gpu"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="mb-3 text-blue-600 dark:text-blue-400">
                  {member.position}
                </p>
                <p className="mb-4 text-xs text-gray-600 dark:text-gray-400">
                  {member.education}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Department Heads */}
        <div data-aos="fade-up" className="transform-gpu">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Department Heads
          </h2>
          <div className="mb-12 mx-auto h-1 w-24 bg-blue-600"></div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {departmentHeads.map((head, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-800 transform-gpu"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={head.image || "/placeholder.svg"}
                    alt={head.name}
                    width={150}
                    height={150}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
                  {head.name}
                </h3>
                <p className="mb-3 text-blue-600 dark:text-blue-400">
                  {head.position}
                </p>
                <p className="mb-4 text-xs text-gray-600 dark:text-gray-400">
                  {head.education}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {head.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipContent;
