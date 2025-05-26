"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function HomeTestimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "International Student",
      quote: "INKARANYA made my transition to Delhi University seamless. The accommodation was perfect!",
      rating: 5
    },
    {
      id: 2,
      name: "Raj Malhotra",
      role: "Exchange Student",
      quote: "The cultural experiences arranged by INKARANYA helped me truly understand Indian culture.",
      rating: 5
    }
  ]

  const [current, setCurrent] = useState(0)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-lg border border-green-100"
    >
      <h2 className="text-xl font-bold mb-4 text-[#1e583d]">What Our Students Say</h2>
      
      <div className="mb-4">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
            <Quote className="h-4 w-4 text-[#2c7b50]" />
          </div>
          <div>
            <p className="text-sm italic text-gray-600">"{testimonials[current].quote}"</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-[#1e583d]">{testimonials[current].name}</p>
            <p className="text-xs text-gray-500">{testimonials[current].role}</p>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                className={`w-4 h-4 ${i < testimonials[current].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <button 
          onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
          className="text-[#2c7b50] hover:underline text-sm"
        >
          Previous
        </button>
        <div className="flex space-x-1">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full ${current === i ? 'bg-[#2c7b50]' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button 
          onClick={() => setCurrent((current + 1) % testimonials.length)}
          className="text-[#2c7b50] hover:underline text-sm"
        >
          Next
        </button>
      </div>
    </motion.div>
  )
}