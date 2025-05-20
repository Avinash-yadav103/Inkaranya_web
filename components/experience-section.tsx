"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

// Mock data for experiences
const experiences = [
	{
		id: 1,
		title: "Traditional Cooking Class",
		location: "New Delhi, India",
		price: 3450,
		rating: 4.9,
		reviews: 87,
		image: "/experiences/cooking-class.jpg",
		duration: "3 hours",
	},
	{
		id: 2,
		title: "Historical Walking Tour",
		location: "Mumbai, India",
		price: 1900,
		rating: 4.8,
		reviews: 124,
		image: "/placeholder.svg?height=300&width=400&text=Walking+Tour",
		duration: "2 hours",
	},
	{
		id: 3,
		title: "Yoga by the Beach",
		location: "Goa, India",
		price: 2300,
		rating: 4.95,
		reviews: 56,
		image: "/placeholder.svg?height=300&width=400&text=Yoga+Session",
		duration: "1.5 hours",
	},
	{
		id: 4,
		title: "Wildlife Photography",
		location: "Ranthambore, India",
		price: 9200,
		rating: 4.7,
		reviews: 42,
		image: "/placeholder.svg?height=300&width=400&text=Wildlife+Photography",
		duration: "Full day",
	},
	{
		id: 5,
		title: "Music in India Workshop",
		location: "Varanasi, India",
		price: 3050,
		rating: 4.85,
		reviews: 38,
		image: "/placeholder.svg?height=300&width=400&text=Music+Workshop",
		duration: "2 hours",
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

export function ExperienceSection() {
	return (
		<div className="my-16">
			<div className="flex justify-between items-center mb-6">
				<motion.h2
					className="text-2xl font-bold"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					Experiences We Provide
				</motion.h2>
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Link href="/experiences" className="text-primary hover:underline">
						View all
					</Link>
				</motion.div>
			</div>

			<motion.div
				className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, margin: "-100px" }}
			>
				{experiences.map((experience) => (
					<motion.div key={experience.id} variants={item}>
						<Link href={`/experiences/${experience.id}`}>
							<Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
								<div className="relative aspect-[3/4]">
									<Image
										src={experience.image || "/placeholder.svg"}
										alt={experience.title}
										fill
										className="object-cover"
									/>
									<Badge className="absolute top-2 left-2 bg-primary/90">
										{experience.duration}
									</Badge>
								</div>
								<CardContent className="p-4">
									<div className="flex justify-between items-start">
										<h3 className="font-semibold line-clamp-1">
											{experience.title}
										</h3>
										<div className="flex items-center gap-1 text-sm">
											<Star className="h-4 w-4 fill-amber-500 text-amber-500" />
											<span>{experience.rating}</span>
										</div>
									</div>
									<p className="text-sm text-muted-foreground">
										{experience.location}
									</p>
								</CardContent>
								<CardFooter className="p-4 pt-0">
									<div>
										<span className="font-semibold">
											₹{experience.price.toLocaleString("en-IN")}
										</span>
										<span className="text-sm text-muted-foreground">
											{" "}
											/ person
										</span>
									</div>
								</CardFooter>
							</Card>
						</Link>
					</motion.div>
				))}
			</motion.div>
		</div>
	)
}
