"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

// Mock data for partner universities
const universities = [
  {
    id: 1,
    name: "Delhi University",
    location: "New Delhi, India",
    image: "/placeholder.svg?height=200&width=200&text=Delhi+University",
    programs: 45,
  },
  {
    id: 2,
    name: "Mumbai University",
    location: "Mumbai, India",
    image: "/placeholder.svg?height=200&width=200&text=Mumbai+University",
    programs: 38,
  },
  {
    id: 3,
    name: "IIT Bangalore",
    location: "Bangalore, India",
    image: "/placeholder.svg?height=200&width=200&text=IIT+Bangalore",
    programs: 24,
  },
  {
    id: 4,
    name: "Madras University",
    location: "Chennai, India",
    image: "/placeholder.svg?height=200&width=200&text=Madras+University",
    programs: 32,
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

export function PartnerUniversities() {
  return (
    <div className="my-16">
      <div className="flex justify-between items-center mb-6">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Partner Universities/Organizations
        </motion.h2>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/universities" className="text-primary hover:underline">
            View all
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {universities.map((university) => (
          <motion.div key={university.id} variants={item}>
            <Link href={`/universities/${university.id}`}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex justify-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 transition-all duration-300 group-hover:from-primary/10 group-hover:to-primary/20">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Image
                      src={university.image || "/placeholder.svg"}
                      alt={university.name}
                      width={150}
                      height={150}
                      className="object-contain transition-all duration-300"
                    />
                  </motion.div>
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold">{university.name}</h3>
                  <p className="text-sm text-muted-foreground">{university.location}</p>
                  <p className="text-sm mt-2 text-primary">{university.programs} programs available</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
