"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/banners/hero.jpg')",
          filter: "brightness(0.7)",
        }}
      />
      {/* Green overlay gradient */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: "linear-gradient(135deg, rgba(30, 58, 41, 0.7) 0%, rgba(44, 64, 55, 0.6) 50%, rgba(30, 58, 41, 0.7) 100%)",
          mixBlendMode: "multiply"
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Find Your Perfect Stay</h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Discover unique accommodations and experiences around the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-[#2c7b50] hover:bg-[#23593b] text-white" asChild>
                <Link href="/properties">Browse Experiences</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-[#4a7b63] hover:bg-white/20 hover:border-white" asChild>
                <Link href="/host">Become a Host</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
