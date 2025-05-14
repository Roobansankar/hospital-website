// const DoctorsHero = () => {
//   return (
//     <section className="bg-blue-800 py-16 text-white">
//       <div className="container mx-auto px-4">
//         <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
//           <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Doctors</h1>
//           <p className="text-lg text-blue-100">
//             Meet our team of experienced and highly qualified medical professionals dedicated to providing you with the
//             best healthcare services.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default DoctorsHero

"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DoctorsHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-blue-800 py-16 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center ">
          <div>
            <h1
              className="mb-4 text-4xl font-bold md:text-5xl transform-gpu"
              data-aos="fade-left"
            >
              Our Doctors
            </h1>
            <p
              className="text-lg text-blue-100 transform-gpu"
              data-aos="fade-right"
            >
              Meet our team of experienced and highly qualified medical
              professionals dedicated to providing you with the best healthcare
              services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsHero;
