import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About INKARANYA</h1>

        <div className="relative aspect-[16/9] w-full mb-8">
          <Image
            src="/placeholder.svg?height=500&width=1000&text=About+INKARANYA"
            alt="About INKARANYA"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg leading-relaxed">
            INKARANYA is a platform connecting students and professionals with universities, organizations, and
            accommodations around the world. We make global education and career opportunities more accessible by
            creating a centralized platform where users can discover and connect with institutions and find comfortable
            places to stay.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p>
            Our mission is to break down barriers to global education and professional growth. We believe that
            geographical boundaries shouldn't limit your opportunities for learning and development. By connecting
            people with universities, organizations, and accommodations worldwide, we aim to foster cultural exchange,
            knowledge sharing, and personal growth.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">For Students & Professionals</h3>
              <ul className="space-y-2">
                <li>Access to global universities and educational institutions</li>
                <li>Connections with organizations offering internships and job opportunities</li>
                <li>Verified accommodations near your place of study or work</li>
                <li>Cultural experiences and local activities</li>
                <li>Community of like-minded individuals</li>
              </ul>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">For Hosts & Organizations</h3>
              <ul className="space-y-2">
                <li>Platform to showcase your property to international students</li>
                <li>Tools to manage bookings and communicate with guests</li>
                <li>Opportunity to connect with talented individuals</li>
                <li>Promote your university or organization to a global audience</li>
                <li>Build international partnerships and collaborations</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Team</h2>
          <p>
            INKARANYA was founded by a team of education enthusiasts and travel lovers who experienced firsthand the
            challenges of finding accommodations and opportunities abroad. Our diverse team comes from various countries
            and backgrounds, bringing together a wealth of experience in education, technology, and hospitality.
          </p>

          <div className="my-8 text-center">
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
