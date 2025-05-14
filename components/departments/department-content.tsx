// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// interface DoctorType {
//   name: string;
//   position: string;
//   image: string;
//   specialization: string;
// }

// interface ServiceType {
//   name: string;
//   description: string;
// }

// interface DepartmentContentProps {
//   department: {
//     name: string;
//     image: string;
//     overview: string;
//     services: ServiceType[];
//     team: DoctorType[];
//   };
// }

// const DepartmentContent = ({ department }: DepartmentContentProps) => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
//     AOS.refresh();
//   }, []);
//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">
//         <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
//           <div data-animation="fade-right">
//             <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
//               Department Overview
//             </h2>
//             <div className="mb-6 h-1 w-24 bg-blue-600"></div>
//             <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
//               {department.overview}
//             </p>
//             <Button asChild>
//               <Link href="/doctors">Meet Our Specialists</Link>
//             </Button>
//           </div>
//           <div
//             className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px]"
//             data-animation="fade-left"
//           >
//             <Image
//               src={department.image || "/placeholder.svg"}
//               alt={`${department.name} Department`}
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>

//         <div className="mb-16">
//           <h2
//             className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white"
//             data-animation="fade-up"
//           >
//             Our Services
//           </h2>
//           <div className="mb-12 mx-auto h-1 w-24 bg-blue-600"></div>
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {department.services.map((service, index) => (
//               <div
//                 key={index}
//                 className="rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 dark:bg-gray-800"
//                 data-animation="fade-up"
//                 data-delay={`${index * 100}`}
//               >
//                 <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
//                   {service.name}
//                 </h3>
//                 <p className="text-gray-700 dark:text-gray-300">
//                   {service.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <h2
//             className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white"
//             data-animation="fade-up"
//           >
//             Meet Our Team
//           </h2>
//           <div className="mb-12 mx-auto h-1 w-24 bg-blue-600"></div>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {department.team.map((doctor, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-800"
//                 data-animation="fade-up"
//                 data-delay={`${index * 100}`}
//               >
//                 <div className="mb-4 h-32 w-32 overflow-hidden rounded-full">
//                   <Image
//                     src={doctor.image || "/placeholder.svg"}
//                     alt={doctor.name}
//                     width={150}
//                     height={150}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//                 <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
//                   {doctor.name}
//                 </h3>
//                 <p className="mb-2 text-blue-600 dark:text-blue-400">
//                   {doctor.position}
//                 </p>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   Specialization: {doctor.specialization}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DepartmentContent;

"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DoctorType {
  name: string;
  position: string;
  image: string;
  specialization: string;
}

interface ServiceType {
  name: string;
  description: string;
}

interface DepartmentContentProps {
  department: {
    name: string;
    image: string;
    overview: string;
    services: ServiceType[];
    team: DoctorType[];
  };
}

const DepartmentContent = ({ department }: DepartmentContentProps) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Overview Section */}
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div data-aos="fade-right" className="transform-gpu">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              Department Overview
            </h2>
            <div className="mb-6 h-1 w-24 bg-blue-600"></div>
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              {department.overview}
            </p>
            <Button asChild>
              <Link href="/doctors">Meet Our Specialists</Link>
            </Button>
          </div>
          <div
            className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px] transform-gpu"
            data-aos="fade-left"
          >
            <Image
              src={department.image || "/placeholder.svg"}
              alt={`${department.name} Department`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2
            className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white transform-gpu"
            data-aos="fade-right"
          >
            Our Services
          </h2>
          <div className="mb-12 mx-auto h-1 w-24 bg-blue-600"></div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {department.services.map((service, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 dark:bg-gray-800 transform-gpu"
                data-aos="fade-left"
                data-aos-delay={`${index * 100}`}
              >
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {service.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2
            className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white transform-gpu"
            data-aos="fade-right"
          >
            Meet Our Team
          </h2>
          <div className="mb-12 mx-auto h-1 w-24 bg-blue-600"></div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {department.team.map((doctor, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-800 transform-gpu"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    width={150}
                    height={150}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
                  {doctor.name}
                </h3>
                <p className="mb-2 text-blue-600 dark:text-blue-400">
                  {doctor.position}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Specialization: {doctor.specialization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentContent;
