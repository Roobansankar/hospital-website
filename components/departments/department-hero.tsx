interface DepartmentHeroProps {
  name: string
  description: string
}

const DepartmentHero = ({ name, description }: DepartmentHeroProps) => {
  return (
    <section className="bg-blue-800 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{name} Department</h1>
          <p className="text-lg text-blue-100">{description}</p>
        </div>
      </div>
    </section>
  )
}

export default DepartmentHero
