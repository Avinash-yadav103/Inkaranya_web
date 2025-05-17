import Image from "next/image"

export function PartnerSection() {
  const partners = [1, 2, 3, 4]

  return (
    <section className="mt-8 border-2 border-black p-4">
      <h2 className="text-xl font-bold text-center mb-6">PARTNER UNIVERSITIES/ORGANIZATIONS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {partners.map((partner) => (
          <div key={partner} className="border-2 border-black aspect-[3/4] flex items-center justify-center">
            <Image
              src={`/placeholder.svg?height=200&width=150&text=Partner ${partner}`}
              alt={`Partner ${partner}`}
              width={150}
              height={200}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
