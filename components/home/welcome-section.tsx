const WelcomeSection = () => {
  return (
    <section className="bg-white py-16 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center" data-animation="fade-up">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Welcome to MediCare Hospital
          </h2>
          <div className="mb-8 h-1 w-24 bg-blue-600 mx-auto"></div>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
            For over 25 years, MediCare Hospital has been at the forefront of medical excellence, providing
            compassionate care and innovative treatments to our community and beyond. Our commitment to patient-centered
            care, cutting-edge technology, and continuous improvement has established us as a trusted healthcare
            provider.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            With a team of renowned specialists, state-of-the-art facilities, and a holistic approach to healthcare, we
            strive to improve the quality of life for all our patients. At MediCare, we believe that every patient
            deserves personalized care that addresses not just their medical needs, but their overall wellbeing.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
