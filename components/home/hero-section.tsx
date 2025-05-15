// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const HeroSection = () => {
//   return (
//     <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white md:py-32">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
//       </div>
//       <div className="container relative mx-auto px-4">
//         <div className="max-w-3xl">
//           <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
//             Your Health Is Our <span className="text-blue-300">Priority</span>
//           </h1>
//           <p className="mb-8 text-lg text-blue-100 md:text-xl">
//             MediCare Hospital provides world-class healthcare with compassion
//             and excellence. Our team of expert doctors and state-of-the-art
//             facilities ensure you receive the best care possible.
//           </p>
//           <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
//             <Button
//               size="lg"
//               className="bg-white text-blue-700 hover:bg-blue-50"
//             >
//               Book Appointment
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-white text-white hover:bg-white/10"
//             >
//               <Link href="/doctors">Find a Doctor</Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white md:py-32  overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://wallpaperaccess.com/full/136949.jpg')] bg-cover bg-center "></div>
      </div>
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl transform-gpu" data-aos="fade-left">
          {/* <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-black-600">
            Your Health Is Our Priority
          </h1> */}
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-blue-900">
            Your Health Is Our Priority
          </h1>

          <p
            className="mb-8 text-lg  md:text-xl transform-gpu  text-black"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            MediCare Hospital provides world-class healthcare with compassion
            and excellence...
          </p>
          <div
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 transform-gpu"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link href="/booking">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50"
              >
                Book Appointment
              </Button>
            </Link>
            <Link href="/doctors">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50"
              >
                Find a Doctor
              </Button>
            </Link>
            {/* <Button
              size="lg" */}
            {/* // variant="outline" */}
            {/* // className="border-white text-white hover:bg-white/10" */}
            {/* className="bg-white text-blue-700 hover:bg-blue-50" */}
            {/* > */}
            {/* <Link href="/doctors">Find a Doctor</Link> */}
            {/* </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
