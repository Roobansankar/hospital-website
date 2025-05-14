// interface FacilityHeroProps {
//   title: string
//   description: string
// }

// const FacilityHero = ({ title, description }: FacilityHeroProps) => {
//   return (
//     <section className="bg-blue-800 py-16 text-white">
//       <div className="container mx-auto px-4">
//         <div className="mx-auto max-w-3xl text-center">
//           <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>
//           <p className="text-lg text-blue-100">{description}</p>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default FacilityHero

"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface FacilityHeroProps {
  title: string;
  description: string;
}

const FacilityHero = ({ title, description }: FacilityHeroProps) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-blue-800 py-16 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="mb-4 text-4xl font-bold md:text-5xl transform-gpu"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            {title}
          </h1>
          <p
            className="text-lg text-blue-100 transform-gpu"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FacilityHero;
