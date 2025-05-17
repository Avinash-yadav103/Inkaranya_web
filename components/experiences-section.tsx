import Image from "next/image"

export function ExperiencesSection() {
  const experiences = [1, 2, 3, 4, 5]

  return (
    <section className="mt-8 border-2 border-black p-4">
      <h2 className="text-xl font-bold text-center mb-6">Experiences We Provide</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {experiences.map((experience) => (
          <div key={experience} className="border-2 border-black aspect-[3/5] flex items-center justify-center">
            <Image
              src={`/placeholder.svg?height=250&width=150&text=Experience ${experience}`}
              alt={`Experience ${experience}`}
              width={150}
              height={250}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
