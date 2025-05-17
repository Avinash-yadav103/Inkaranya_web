"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, MapPin, Users, Home, Wifi, Car, Utensils, Tv, Coffee } from "lucide-react"
import { motion } from "framer-motion"

// Mock property data
const property = {
  id: 1,
  title: "Modern Apartment near University",
  description:
    "This beautiful modern apartment is located just a 5-minute walk from the university campus. It features a spacious living area, fully equipped kitchen, and a comfortable bedroom with study space. Perfect for students or visiting faculty.",
  location: "New Delhi, India",
  price: 6500,
  rating: 4.9,
  reviews: 128,
  images: [
    "/placeholder.svg?height=500&width=800&text=Modern+Apartment+1",
    "/placeholder.svg?height=500&width=800&text=Modern+Apartment+2",
    "/placeholder.svg?height=500&width=800&text=Modern+Apartment+3",
    "/placeholder.svg?height=500&width=800&text=Modern+Apartment+4",
  ],
  type: "apartment",
  featured: true,
  host: {
    name: "Priya Sharma",
    image: "/placeholder.svg?height=100&width=100&text=PS",
    rating: 4.95,
    reviews: 312,
    superhost: true,
  },
  amenities: [
    "Wifi",
    "Free parking",
    "Kitchen",
    "TV",
    "Air conditioning",
    "Washing machine",
    "Study desk",
    "Coffee maker",
  ],
  bedrooms: 2,
  bathrooms: 1,
  maxGuests: 4,
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div className="mb-6" initial="hidden" animate="visible" variants={fadeIn}>
        <Link href="/properties" className="text-primary hover:underline mb-2 inline-block">
          ← Back to properties
        </Link>
        <h1 className="text-3xl font-bold">{property.title}</h1>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500 mr-1" />
            <span className="font-medium">{property.rating}</span>
            <span className="text-muted-foreground ml-1">({property.reviews} reviews)</span>
          </div>
          <span className="text-muted-foreground">•</span>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{property.location}</span>
          </div>
          {property.featured && (
            <>
              <span className="text-muted-foreground">•</span>
              <Badge className="bg-primary">Featured</Badge>
            </>
          )}
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="lg:col-span-2 row-span-2">
          <div className="relative aspect-[4/3] w-full h-full overflow-hidden rounded-l-lg">
            <Image
              src={property.images[0] || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
        <div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-tr-lg">
            <Image
              src={property.images[1] || "/placeholder.svg"}
              alt={`${property.title} image 2`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
        <div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-br-lg">
            <Image
              src={property.images[2] || "/placeholder.svg"}
              alt={`${property.title} image 3`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex justify-between items-start border-b pb-6 mb-6">
            <div>
              <h2 className="text-xl font-semibold">
                {property.type.charAt(0).toUpperCase() + property.type.slice(1)} hosted by {property.host.name}
              </h2>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{property.maxGuests} guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  <span>{property.bedrooms} bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{property.bathrooms} bathrooms</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src={property.host.image || "/placeholder.svg"}
                  alt={property.host.name}
                  fill
                  className="object-cover"
                />
              </div>
              {property.host.superhost && <Badge variant="outline">Superhost</Badge>}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">About this place</h3>
            <p className="text-muted-foreground">{property.description}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">What this place offers</h3>
            <div className="grid grid-cols-2 gap-4">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2">
                  {amenity === "Wifi" && <Wifi className="h-5 w-5 text-primary" />}
                  {amenity === "Free parking" && <Car className="h-5 w-5 text-primary" />}
                  {amenity === "Kitchen" && <Utensils className="h-5 w-5 text-primary" />}
                  {amenity === "TV" && <Tv className="h-5 w-5 text-primary" />}
                  {amenity === "Coffee maker" && <Coffee className="h-5 w-5 text-primary" />}
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <Tabs defaultValue="reviews">
            <TabsList>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
            </TabsList>
            <TabsContent value="reviews" className="py-4">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                <span className="font-medium text-lg">{property.rating}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{property.reviews} reviews</span>
              </div>
              <div className="space-y-6">
                {/* Mock reviews */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden bg-muted">
                      <Image
                        src="/placeholder.svg?height=40&width=40&text=JD"
                        alt="John Doe"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-muted-foreground">March 2025</p>
                    </div>
                  </div>
                  <p>
                    Great location near the university. The apartment was clean and had everything I needed for my stay.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden bg-muted">
                      <Image
                        src="/placeholder.svg?height=40&width=40&text=AS"
                        alt="Anita Singh"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Anita Singh</p>
                      <p className="text-sm text-muted-foreground">February 2025</p>
                    </div>
                  </div>
                  <p>Perfect for my university visit. The host was very responsive and helpful throughout my stay.</p>
                </div>
              </div>
              <Button variant="outline" className="mt-6">
                Show all {property.reviews} reviews
              </Button>
            </TabsContent>
            <TabsContent value="location" className="py-4">
              <div className="relative aspect-[16/9] w-full mb-4">
                <Image
                  src="/placeholder.svg?height=400&width=800&text=Map+Location"
                  alt="Property location map"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h4 className="font-semibold mb-2">{property.location}</h4>
              <p className="text-muted-foreground mb-4">
                The property is located in a quiet neighborhood, just a 5-minute walk from the university campus. There
                are several restaurants, cafes, and shops within walking distance.
              </p>
              <Button variant="outline">Get directions</Button>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="sticky top-24 shadow-lg border-primary/10">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-2xl font-bold">₹{property.price.toLocaleString("en-IN")}</span>
                  <span className="text-muted-foreground"> / night</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500 mr-1" />
                  <span>{property.rating}</span>
                </div>
              </div>

              <div className="border rounded-lg mb-4 overflow-hidden shadow-sm">
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-3 bg-primary/5">
                    <p className="text-sm font-medium">CHECK-IN</p>
                    <p>20/05/2025</p>
                  </div>
                  <div className="p-3 bg-primary/5">
                    <p className="text-sm font-medium">CHECKOUT</p>
                    <p>25/05/2025</p>
                  </div>
                </div>
                <div className="border-t p-3">
                  <p className="text-sm font-medium mb-1">GUESTS</p>
                  <div className="flex justify-between">
                    <p>2 guests</p>
                    <button className="text-sm text-primary hover:underline">Edit</button>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <p>₹{property.price.toLocaleString("en-IN")} x 5 nights</p>
                  <p>₹{(property.price * 5).toLocaleString("en-IN")}</p>
                </div>
                <div className="flex justify-between">
                  <p>Cleaning fee</p>
                  <p>₹2,500</p>
                </div>
                <div className="flex justify-between">
                  <p>Service fee</p>
                  <p>₹1,800</p>
                </div>
              </div>

              <div className="flex justify-between font-bold pt-4 border-t">
                <p>Total</p>
                <p>₹{(property.price * 5 + 2500 + 1800).toLocaleString("en-IN")}</p>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <motion.div className="w-full" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button className="w-full bg-primary hover:bg-primary/90">Reserve</Button>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
