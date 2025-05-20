"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"

type Testimonial = {
  id: number
  name: string
  role: string
  avatar: string
  quote: string
  rating: number
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "International Student",
      avatar: "/testimonials/student1.jpg",
      quote: "INKARANYA made my transition to Delhi University seamless. Their accommodation options near campus saved me hours of commuting time every week.",
      rating: 5
    },
    {
      id: 2,
      name: "Raj Malhotra",
      role: "Exchange Student",
      avatar: "/testimonials/student2.jpg",
      quote: "The cultural experiences arranged by INKARANYA helped me truly understand Indian culture beyond textbooks. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "Ananya Patel",
      role: "Graduate Student",
      avatar: "/testimonials/student3.jpg",
      quote: "As a graduate student, I needed a quiet place to study. My INKARANYA accommodation was perfect - peaceful, well-equipped, and close to campus.",
      rating: 4
    }
  ]
  
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000)
    
    return () => clearInterval(interval)
  }, [testimonials.length])
  
  return (
    <div className="h-full flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-6 text-[#1e583d]">What Our Users Say</h2>
      
      <motion.div 
        key={testimonials[currentIndex].id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg border border-green-100 p-6 mb-6"
      >
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Quote className="absolute -top-2 -left-2 h-6 w-6 text-[#2c7b50] opacity-30" />
            <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-[#2c7b50]">
              <Image 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].name}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 text-center italic">
          "{testimonials[currentIndex].quote}"
        </p>
        
        <div className="text-center">
          <p className="font-semibold text-[#1e583d]">{testimonials[currentIndex].name}</p>
          <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
          
          <div className="flex justify-center mt-2">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                className={`w-4 h-4 ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </motion.div>
      
      <div className="flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-[#2c7b50]' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="text-[#2c7b50] font-medium hover:underline">
            Read More Reviews
          </button>
        </motion.div>
      </div>
    </div>
  )
}