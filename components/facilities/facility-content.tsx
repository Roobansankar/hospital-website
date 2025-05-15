// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Image from "next/image";
// import { Check } from "lucide-react";

// interface FacilityContentProps {
//   facility: {
//     title: string;
//     image: string;
//     content: {
//       title: string;
//       description: string;
//     }[];
//     features: string[];
//   };
// }

// const FacilityContent = ({ facility }: FacilityContentProps) => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
//     AOS.refresh();
//   }, []);

//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">
//         <div className="mb-16">
//           <div
//             className="relative mx-auto h-[300px] overflow-hidden rounded-lg md:h-[500px]"
//             data-aos="fade-left"
//             data-aos-delay="300"
//           >
//             <Image
//               src={facility.image || "/placeholder.svg"}
//               alt={facility.title}
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>

//         <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
//           <div data-aos="fade-right">
//             <h2
//               className="mb-6 text-3xl font-bold text-gray-900 dark:text-white"
//               data-aos="fade-right"
//               data-aos-delay="300"
//             >
//               About Our {facility.title}
//             </h2>
//             <div className="mb-6 h-1 w-24 bg-blue-600"></div>
//             <div className="space-y-6">
//               {facility.content.map((item, index) => (
//                 <div
//                   key={index}
//                   data-aos="fade-up"
//                   data-aos-delay={`${index * 100}`}
//                 >
//                   <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-700 dark:text-gray-300">
//                     {item.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div
//             className="rounded-lg bg-blue-50 p-6 dark:bg-blue-950"
//             data-aos="fade-left"
//           >
//             <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
//               Key Features
//             </h3>
//             <ul className="space-y-4">
//               {facility.features.map((feature, index) => (
//                 <li
//                   key={index}
//                   className="flex items-start"
//                   data-aos="fade-up"
//                   data-aos-delay={`${index * 50}`}
//                 >
//                   <Check className="mr-2 h-5 w-5 shrink-0 text-blue-600" />
//                   <span className="text-gray-700 dark:text-gray-300">
//                     {feature}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div data-aos="fade-up">
//           <h2
//             className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white"
//             data-aos="fade-right"
//             data-aos-delay="400"
//           >
//             Our Commitment to Excellence
//           </h2>
//           <div className="mb-8 mx-auto h-1 w-24 bg-blue-600"></div>
//           <p className="mx-auto max-w-3xl text-center text-lg text-gray-700 dark:text-gray-300">
//             At MediCare Hospital, we are committed to providing the highest
//             quality care in our {facility.title.toLowerCase()}. Our team of
//             dedicated healthcare professionals works tirelessly to ensure that
//             every patient receives personalized attention and the most advanced
//             treatment available. We continuously invest in the latest medical
//             technologies and training to maintain our standards of excellence.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FacilityContent;

"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Check } from "lucide-react";

interface FacilityContentProps {
  facility: {
    title: string;
    image: string;
    content: {
      title: string;
      description: string;
    }[];
    features: string[];
  };
}

const FacilityContent = ({ facility }: FacilityContentProps) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div
            className="relative mx-auto h-[300px] overflow-hidden rounded-lg md:h-[500px] transform-gpu"
            data-aos="fade-left"
            // data-aos-delay="300"
          >
            <Image
              src={facility.image || "/placeholder.svg"}
              alt={facility.title}
              fill
              className="object-cover transform-gpu"
              data-aos="fade-left"
              // data-aos-delay="300"
            />
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div data-aos="fade-right" className="transform-gpu">
            <h2
              className="mb-6 text-3xl font-bold text-gray-900 dark:text-white custom-text-shadow"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              About Our{" "}
              <span className="text-orange-600">{facility.title} </span>
            </h2>
            <div className="mb-6 h-1 w-24 bg-blue-600"></div>
            <div className="space-y-6">
              {facility.content.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                  className="transform-gpu"
                >
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-lg bg-blue-50 p-6 dark:bg-blue-950 transform-gpu"
            data-aos="fade-left"
          >
            <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
              Key Features
            </h3>
            <ul className="space-y-4">
              {facility.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start transform-gpu"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 50}`}
                >
                  <Check className="mr-2 h-5 w-5 shrink-0 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div data-aos="fade-up" className="transform-gpu">
          <h2
            className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white custom-text-shadow"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <span className="text-orange-600"> Our Commitment </span> to
            Excellence
          </h2>
          <div className="mb-8 mx-auto h-1 w-24 bg-blue-600"></div>
          <p className="mx-auto max-w-3xl text-center text-lg text-gray-700 dark:text-gray-300">
            At MediCare Hospital, we are committed to providing the highest
            quality care in our {facility.title.toLowerCase()}. Our team of
            dedicated healthcare professionals works tirelessly to ensure that
            every patient receives personalized attention and the most advanced
            treatment available. We continuously invest in the latest medical
            technologies and training to maintain our standards of excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FacilityContent;
