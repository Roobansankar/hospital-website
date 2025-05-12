import Image from "next/image"

const ProfileContent = () => {
  const milestones = [
    {
      year: "1998",
      title: "Foundation",
      description: "MediCare Hospital was established with a vision to provide quality healthcare services to all.",
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Added new departments and increased bed capacity to serve more patients.",
    },
    {
      year: "2010",
      title: "Technology Upgrade",
      description: "Implemented state-of-the-art medical equipment and digital health records system.",
    },
    {
      year: "2015",
      title: "Research Center",
      description: "Established a dedicated medical research center to advance healthcare innovations.",
    },
    {
      year: "2020",
      title: "Telemedicine Launch",
      description: "Introduced comprehensive telemedicine services to reach patients remotely.",
    },
    {
      year: "2023",
      title: "International Accreditation",
      description: "Received prestigious international accreditation for excellence in healthcare services.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div data-animation="fade-right">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Our History</h2>
            <div className="mb-6 h-1 w-24 bg-blue-600"></div>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Founded in 1998, MediCare Hospital began as a small clinic with a team of dedicated healthcare
              professionals committed to serving the community. Over the years, we have grown into a comprehensive
              healthcare institution, expanding our services, facilities, and expertise.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Our journey has been marked by continuous improvement, innovation, and a steadfast commitment to patient
              care. From introducing cutting-edge medical technologies to establishing specialized departments, we have
              consistently evolved to meet the changing healthcare needs of our community.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Today, MediCare Hospital stands as a testament to our founding vision - a healthcare institution that
              combines medical excellence with compassionate care, making quality healthcare accessible to all.
            </p>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px]" data-animation="fade-left">
            <Image src="/placeholder.svg?height=800&width=1200" alt="Hospital History" fill className="object-cover" />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white" data-animation="fade-up">
            Our Journey
          </h2>
          <div className="mb-12 mx-auto h-1 w-24 bg-blue-600"></div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-blue-200 dark:bg-blue-900"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center`}
                  data-animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-delay={(index * 100).toString()}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                    <div className="mb-2 text-xl font-bold text-blue-600">{milestone.year}</div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{milestone.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                  </div>
                  <div className="absolute left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-white">
                    {index + 1}
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white" data-animation="fade-up">
            Key Achievements
          </h2>
          <div className="mb-12 mx-auto h-1 w-24 bg-blue-600"></div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800" data-animation="fade-up" data-delay="0">
              <div className="mb-4 text-3xl font-bold text-blue-600">25+</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Years of Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Providing quality healthcare services for over two decades.
              </p>
            </div>
            <div
              className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
              data-animation="fade-up"
              data-delay="100"
            >
              <div className="mb-4 text-3xl font-bold text-blue-600">100+</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Specialist Doctors</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Team of highly qualified medical professionals across various specializations.
              </p>
            </div>
            <div
              className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
              data-animation="fade-up"
              data-delay="200"
            >
              <div className="mb-4 text-3xl font-bold text-blue-600">500+</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Beds</h3>
              <p className="text-gray-600 dark:text-gray-400">
                State-of-the-art facilities to accommodate and care for patients.
              </p>
            </div>
            <div
              className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
              data-animation="fade-up"
              data-delay="300"
            >
              <div className="mb-4 text-3xl font-bold text-blue-600">50,000+</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Surgeries</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Successful surgical procedures performed by our expert surgeons.
              </p>
            </div>
            <div
              className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
              data-animation="fade-up"
              data-delay="400"
            >
              <div className="mb-4 text-3xl font-bold text-blue-600">15+</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Specialized Departments</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive healthcare services across multiple specialties.
              </p>
            </div>
            <div
              className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
              data-animation="fade-up"
              data-delay="500"
            >
              <div className="mb-4 text-3xl font-bold text-blue-600">20+</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Awards & Recognitions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Recognized for excellence in healthcare services and patient care.
              </p>
            </div>
          </div>
        </div>

        <div data-animation="fade-up">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">Our Commitment</h2>
          <div className="mb-12 mx-auto h-1 w-24 bg-blue-600"></div>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              At MediCare Hospital, we are committed to providing exceptional healthcare services with compassion,
              integrity, and excellence. Our patient-centered approach ensures that every individual receives
              personalized care that addresses their unique needs.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We continuously strive to enhance our services, adopt innovative medical technologies, and uphold the
              highest standards of healthcare. Our commitment extends beyond treatment to preventive care, health
              education, and community wellness initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileContent
