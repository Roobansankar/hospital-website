import { Target, Heart, Award, Users, Shield, Lightbulb } from "lucide-react"

const VisionMissionContent = () => {
  const values = [
    {
      icon: <Heart className="h-12 w-12 text-blue-600" />,
      title: "Compassion",
      description:
        "We treat every patient with kindness, empathy, and respect, recognizing their individual needs and concerns.",
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: "Excellence",
      description: "We strive for the highest standards in medical care, service quality, and professional competence.",
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Teamwork",
      description: "We collaborate effectively across disciplines to provide comprehensive and coordinated care.",
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Integrity",
      description: "We uphold ethical principles, transparency, and accountability in all our actions and decisions.",
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-blue-600" />,
      title: "Innovation",
      description: "We embrace new ideas, technologies, and approaches to continuously improve healthcare delivery.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-20 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-lg dark:bg-gray-800">
            <Target className="mb-6 h-16 w-16 text-blue-600" />
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
            <div className="mb-6 h-1 w-24 bg-blue-600"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              To be the leading healthcare institution recognized for excellence in patient care, medical innovation,
              and community wellness, setting the standard for compassionate and comprehensive healthcare services.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-lg dark:bg-gray-800">
            <Heart className="mb-6 h-16 w-16 text-blue-600" />
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
            <div className="mb-6 h-1 w-24 bg-blue-600"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              To provide exceptional healthcare services that improve the quality of life for our patients and community
              through compassionate care, medical expertise, and continuous innovation, while maintaining the highest
              standards of ethics and professionalism.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">Our Core Values</h2>
          <div className="mb-12 mx-auto h-1 w-24 bg-blue-600"></div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md transition-transform duration-300 hover:-translate-y-2 dark:bg-gray-800"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-blue-50 p-8 dark:bg-blue-950">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">Our Commitment to You</h2>
          <div className="mb-8 mx-auto h-1 w-24 bg-blue-600"></div>
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300">At MediCare Hospital, we are committed to:</p>
            <ul className="space-y-4 text-left text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Providing patient-centered care that respects individual needs, preferences, and values</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Ensuring the highest standards of quality and safety in all our services</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Embracing innovation and continuous improvement in healthcare delivery</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Fostering a collaborative environment that values teamwork and professional excellence</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Contributing to community health through education, prevention, and outreach programs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Maintaining transparency, integrity, and ethical standards in all our operations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMissionContent
