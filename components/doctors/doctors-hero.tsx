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
    // <section className="bg-blue-800 py-16 text-white overflow-hidden">
    //   <div className="container mx-auto px-4">
    //     <div className="mx-auto max-w-3xl text-center ">
    //       <div>
    //         <h1
    //           className="mb-4 text-4xl font-bold md:text-5xl transform-gpu"
    //           data-aos="fade-left"
    //         >
    //           Our Doctors
    //         </h1>
    //         <p
    //           className="text-lg text-blue-100 transform-gpu"
    //           data-aos="fade-right"
    //         >
    //           Meet our team of experienced and highly qualified medical
    //           professionals dedicated to providing you with the best healthcare
    //           services.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="bg-gradient-to-r from-sky-700 via-blue-600 to-indigo-700 py-16 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="mb-4 text-4xl font-extrabold md:text-5xl transform-gpu drop-shadow-lg"
            data-aos="zoom-in"
          >
            Meet <span className="text-yellow-300">Our Doctors</span>
          </h1>
          <p
            className="text-lg md:text-xl text-gray-100 transform-gpu drop-shadow-sm"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Discover our dedicated team of compassionate, experienced
            professionals committed to delivering exceptional care and medical
            excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoctorsHero;
