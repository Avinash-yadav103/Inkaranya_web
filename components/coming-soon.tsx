"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ComingSoon() {
  const [isVisible, setIsVisible] = useState(true)
  const [countdown, setCountdown] = useState({
    days: 30,
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        const newSeconds = prev.seconds - 1

        if (newSeconds < 0) {
          const newMinutes = prev.minutes - 1

          if (newMinutes < 0) {
            const newHours = prev.hours - 1

            if (newHours < 0) {
              const newDays = prev.days - 1
              return {
                days: newDays,
                hours: 23,
                minutes: 59,
                seconds: 59,
              }
            }

            return {
              ...prev,
              hours: newHours,
              minutes: 59,
              seconds: 59,
            }
          }

          return {
            ...prev,
            minutes: newMinutes,
            seconds: 59,
          }
        }

        return {
          ...prev,
          seconds: newSeconds,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleEnterSite = () => {
    setIsVisible(false)
    // Store in localStorage so it doesn't show again on refresh
    localStorage.setItem("comingSoonDismissed", "true")
  }

  // Check if already dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem("comingSoonDismissed")
    if (dismissed === "true") {
      setIsVisible(false)
    }
  }, [])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-rose-900 z-50 flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: `${Math.random() * 6 + 1}px`,
                    height: `${Math.random() * 6 + 1}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animation: `twinkle ${Math.random() * 5 + 5}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif tracking-tight">INKARANYA</h1>
              <p className="text-xl md:text-2xl text-rose-100 max-w-2xl mx-auto font-light">
                Discover unique accommodations, experiences, and educational opportunities
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-white">
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-6xl font-bold font-mono">{countdown.days}</span>
                  <span className="text-sm uppercase tracking-wider mt-1 text-rose-200">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-6xl font-bold font-mono">{countdown.hours}</span>
                  <span className="text-sm uppercase tracking-wider mt-1 text-rose-200">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-6xl font-bold font-mono">{countdown.minutes}</span>
                  <span className="text-sm uppercase tracking-wider mt-1 text-rose-200">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-6xl font-bold font-mono">{countdown.seconds}</span>
                  <span className="text-sm uppercase tracking-wider mt-1 text-rose-200">Seconds</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <form className="max-w-md mx-auto mb-10">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email for updates"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-rose-400"
                  />
                  <Button className="bg-rose-500 hover:bg-rose-600 text-white">Notify Me</Button>
                </div>
              </form>

              <Button
                onClick={handleEnterSite}
                size="lg"
                className="bg-white text-rose-900 hover:bg-rose-100 transition-all duration-300 group"
              >
                Preview Site
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
