"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Award, Star, Trophy, Shield } from "lucide-react";

const AwardsContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);
  const majorAwards = [
    {
      icon: <Trophy className="h-12 w-12 text-blue-600" />,
      title: "Excellence in Patient Care",
      organization: "National Healthcare Association",
      year: "2023",
      description:
        "Awarded for exceptional patient satisfaction scores and innovative approaches to patient-centered care.",
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Quality and Safety Award",
      organization: "Healthcare Safety Council",
      year: "2022",
      description:
        "Recognized for implementing rigorous safety protocols and maintaining the highest standards of care quality.",
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: "Best Hospital of the Year",
      organization: "Regional Medical Excellence Awards",
      year: "2021",
      description:
        "Named the top healthcare provider in the region based on clinical outcomes, patient experience, and innovation.",
    },
  ];

  const recentAwards = [
    {
      title: "Top 50 Hospitals",
      organization: "Healthcare Review Magazine",
      year: "2023",
    },
    {
      title: "Innovation in Telemedicine",
      organization: "Digital Health Association",
      year: "2023",
    },
    {
      title: "Environmental Sustainability Award",
      organization: "Green Healthcare Initiative",
      year: "2022",
    },
    {
      title: "Best Workplace in Healthcare",
      organization: "Employer Excellence Awards",
      year: "2022",
    },
    {
      title: "Community Service Excellence",
      organization: "Community Health Foundation",
      year: "2021",
    },
    {
      title: "Research Contribution Award",
      organization: "Medical Research Council",
      year: "2021",
    },
  ];

  return (
    // <section className="py-16">
    //   <div className="container mx-auto px-4">
    //     <div className="mb-16">
    //       <h2
    //         className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white"
    //         data-animation="fade-up"
    //       >
    //         Major Recognitions
    //       </h2>
    //       <div className="mb-12 mx-auto h-1 w-24 bg-blue-600"></div>
    //       <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
    //         {majorAwards.map((award, index) => (
    //           <div
    //             key={index}
    //             className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg dark:bg-gray-800"
    //             data-animation="fade-up"
    //             data-delay={`${index * 100}`}
    //           >
    //             <div className="mb-4">{award.icon}</div>
    //             <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
    //               {award.title}
    //             </h3>
    //             <div className="mb-2 flex items-center justify-center">
    //               <span className="mr-2 text-blue-600">
    //                 {award.organization}
    //               </span>
    //               <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
    //                 {award.year}
    //               </span>
    //             </div>
    //             <p className="text-gray-600 dark:text-gray-400">
    //               {award.description}
    //             </p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="mb-16">
    //       <h2
    //         className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white"
    //         data-animation="fade-up"
    //       >
    //         Recent Achievements
    //       </h2>
    //       <div className="mb-12 mx-auto h-1 w-24 bg-blue-600"></div>
    //       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    //         {recentAwards.map((award, index) => (
    //           <div
    //             key={index}
    //             className="flex items-center rounded-lg bg-white p-4 shadow-md dark:bg-gray-800"
    //             data-animation="fade-up"
    //             data-delay={`${index * 100}`}
    //           >
    //             <Star className="mr-4 h-8 w-8 text-blue-600" />
    //             <div>
    //               <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
    //                 {award.title}
    //               </h3>
    //               <div className="flex items-center">
    //                 <span className="mr-2 text-sm text-gray-600 dark:text-gray-400">
    //                   {award.organization}
    //                 </span>
    //                 <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
    //                   {award.year}
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div data-animation="fade-up">
    //       <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
    //         Our Commitment to Excellence
    //       </h2>
    //       <div className="mb-8 mx-auto h-1 w-24 bg-blue-600"></div>
    //       <p className="mx-auto max-w-3xl text-center text-lg text-gray-700 dark:text-gray-300">
    //         At MediCare Hospital, we are honored to be recognized for our
    //         dedication to providing exceptional healthcare services. These
    //         awards reflect our team's commitment to excellence, innovation, and
    //         patient-centered care. While we appreciate the recognition, our
    //         greatest reward is the trust our patients place in us and the
    //         positive impact we make in their lives every day.
    //       </p>
    //     </div>
    //   </div>
    // </section>
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2
            className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white transform-gpu"
            data-aos="fade-up"
          >
            Major Recognitions
          </h2>
          <div className="mb-12 mx-auto h-1 w-24 bg-blue-600 transform-gpu"></div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {majorAwards.map((award, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg dark:bg-gray-800 transform-gpu"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="mb-4">{award.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {award.title}
                </h3>
                <div className="mb-2 flex items-center justify-center">
                  <span className="mr-2 text-blue-600">
                    {award.organization}
                  </span>
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {award.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2
            className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white transform-gpu"
            data-aos="fade-up"
          >
            Recent Achievements
          </h2>
          <div className="mb-12 mx-auto h-1 w-24 bg-blue-600 transform-gpu"></div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentAwards.map((award, index) => (
              <div
                key={index}
                className="flex items-center rounded-lg bg-white p-4 shadow-md dark:bg-gray-800 transform-gpu"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <Star className="mr-4 h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {award.title}
                  </h3>
                  <div className="flex items-center">
                    <span className="mr-2 text-sm text-gray-600 dark:text-gray-400">
                      {award.organization}
                    </span>
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {award.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" className="transform-gpu">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Our Commitment to Excellence
          </h2>
          <div className="mb-8 mx-auto h-1 w-24 bg-blue-600 transform-gpu"></div>
          <p className="mx-auto max-w-3xl text-center text-lg text-gray-700 dark:text-gray-300">
            At MediCare Hospital, we are honored to be recognized for our
            dedication to providing exceptional healthcare services. These
            awards reflect our team's commitment to excellence, innovation, and
            patient-centered care. While we appreciate the recognition, our
            greatest reward is the trust our patients place in us and the
            positive impact we make in their lives every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AwardsContent;
