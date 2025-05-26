import { PropertyFilters } from "@/components/property-filters"
import { PropertyGrid } from "@/components/property-grid"
import { Hero } from "@/components/hero"
import { ExperienceSection } from "@/components/experience-section"
import { PartnerUniversities } from "@/components/partner-universities"
import { ContactCta } from "@/components/contact-cta"
import { HomeTestimonial } from "@/components/home-testimonial"

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <div className="container px-4 mx-auto">
        <PropertyFilters />
        <PropertyGrid />
        <ExperienceSection />
        <PartnerUniversities />
        <HomeTestimonial />
        <ContactCta />
      </div>
    </div>
  )
}
