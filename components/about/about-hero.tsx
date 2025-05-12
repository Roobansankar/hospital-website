interface AboutHeroProps {
  title: string
  subtitle: string
}

const AboutHero = ({ title, subtitle }: AboutHeroProps) => {
  return (
    <section className="bg-blue-800 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center" data-animation="fade-up">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="text-lg text-blue-100">{subtitle}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
