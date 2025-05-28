"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

// Mock data for properties
const properties = [
  {
    id: 1,
    title: "Modern Apartment near University",
    location: "New Delhi, India",
    price: 6500,
    rating: 4.9,
    reviews: 128,
    image: "/placeholder.svg?height=300&width=400&text=Modern+Apartment",
    type: "apartment",
    featured: true,
  },
  {
    id: 2,
    title: "Cozy Studio in City Center",
    location: "Mumbai, India",
    price: 4950,
    rating: 4.7,
    reviews: 96,
    image: "/placeholder.svg?height=300&width=400&text=Cozy+Studio",
    type: "apartment",
  },
  {
    id: 3,
    title: "Luxury Villa with Pool",
    location: "Goa, India",
    price: 16800,
    rating: 4.95,
    reviews: 64,
    image: "/placeholder.svg?height=300&width=400&text=Luxury+Villa",
    type: "house",
    featured: true,
  },
  {
    id: 4,
    title: "Student Hostel near Campus",
    location: "Bangalore, India",
    price: 2700,
    rating: 4.5,
    reviews: 210,
    image: "/placeholder.svg?height=300&width=400&text=Student+Hostel",
    type: "hostel",
  },
  {
    id: 5,
    title: "Traditional Homestay Experience",
    location: "Jaipur, India",
    price: 5700,
    rating: 4.8,
    reviews: 87,
    image: "/placeholder.svg?height=300&width=400&text=Traditional+Homestay",
    type: "house",
  },
  {
    id: 6,
    title: "Modern House near Tech Park",
    location: "Hyderabad, India",
    price: 8400,
    rating: 4.6,
    reviews: 52,
    image: "/placeholder.svg?height=300&width=400&text=Modern+House",
    type: "house",
  },
  {
    id: 7,
    title: "Budget Friendly Hostel",
    location: "Kolkata, India",
    price: 1900,
    rating: 4.3,
    reviews: 175,
    image: "/placeholder.svg?height=300&width=400&text=Budget+Hostel",
    type: "hostel",
  },
  {
    id: 8,
    title: "Luxury Apartment with View",
    location: "Chennai, India",
    price: 9900,
    rating: 4.85,
    reviews: 43,
    image: "/placeholder.svg?height=300&width=400&text=Luxury+Apartment",
    type: "apartment",
    featured: true,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function PropertyGrid() {
  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-6">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Organizations
        </motion.h2>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/properties" className="text-primary hover:underline">
            View all
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {properties.map((property) => (
          <motion.div key={property.id} variants={item}>
            <Link href={`/properties/${property.id}`}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  {property.featured && <Badge className="absolute top-2 left-2 bg-primary">Featured</Badge>}
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold line-clamp-1">{property.title}</h3>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <span>{property.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{property.location}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <div>
                    <span className="font-semibold">₹{property.price.toLocaleString("en-IN")}</span>
                    <span className="text-sm text-muted-foreground"> / night</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{property.reviews} reviews</span>
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
