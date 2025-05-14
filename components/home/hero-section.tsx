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
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
      </div>
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl" data-aos="fade-up">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Your Health Is Our <span className="text-blue-300">Priority</span>
          </h1>
          <p
            className="mb-8 text-lg text-blue-100 md:text-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            MediCare Hospital provides world-class healthcare with compassion
            and excellence...
          </p>
          <div
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50"
            >
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/doctors">Find a Doctor</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
