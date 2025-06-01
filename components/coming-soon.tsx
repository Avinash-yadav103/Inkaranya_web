"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Image from "next/image"
import { EarthGlobe } from "./earth-globe"

export function ComingSoon() {
  const [isVisible, setIsVisible] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  const handleEnterSite = () => {
    setIsVisible(false)
  }

  // Hide header elements when coming soon is visible
  useEffect(() => {
    if (isVisible) {
      const selectors = [
        "header .search-container",
        "header input[type='search']",
        "header input[type='text']",
        "header form",
        ".header-search",
        "[role='search']",
        ".search-wrapper",
        "nav",
        ".navbar",
        ".topbar"
      ];
      
      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el instanceof HTMLElement) {
            el.dataset.originalDisplay = el.style.display;
            el.style.display = "none";
          }
        });
      });
      
      const header = document.querySelector("header");
      if (header instanceof HTMLElement) {
        header.style.visibility = "hidden";
      }
    } else {
      const hiddenElements = document.querySelectorAll("[data-original-display]");
      hiddenElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.display = el.dataset.originalDisplay || "";
          delete el.dataset.originalDisplay;
        }
      });
      
      const header = document.querySelector("header");
      if (header instanceof HTMLElement) {
        header.style.visibility = "";
      }
    }
    
    return () => {
      const hiddenElements = document.querySelectorAll("[data-original-display]");
      hiddenElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.display = el.dataset.originalDisplay || "";
          delete el.dataset.originalDisplay;
        }
      });
      
      const header = document.querySelector("header");
      if (header instanceof HTMLElement) {
        header.style.visibility = "";
      }
    };
  }, [isVisible])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #e8fff2 0%, #cdfff3 20%, #b0f5e6 50%, #8cefdb 70%, #cdfff3 100%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* Positioned Earth Globe at bottom with less height to avoid overlap */}
          <div className="absolute bottom-0 w-full h-[60vh] overflow-hidden opacity-80">
            <EarthGlobe />
          </div>
          
          {/* Main content with improved z-index */}
          <div className="container flex flex-col items-center justify-center h-screen max-w-6xl mx-auto px-4 z-20 text-center relative">
            {/* Logo & Title area with claymorphism */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-white/80 backdrop-blur-md p-8 rounded-[28px] shadow-claymorphic transform transition-all duration-300 mx-auto max-w-2xl">
                <Image 
                  src="/logo.jpg" 
                  alt="INKARANYA Logo"
                  width={150}
                  height={150}
                  className="rounded-2xl mb-4 object-contain mx-auto shadow-md"
                />
                <h1 className="text-5xl md:text-6xl font-bold text-[#1e583d] mb-3 font-serif">INKARANYA</h1>
                <p className="text-sm md:text-base text-[#1e583d] font-medium font-sans"> 
                  The First Global Platform for Experiential Learning
                </p>
              </div>
            </motion.div>
            
            {/* Coming Soon headline with improved contrast and claymorphism */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: [1, 1.03, 1],
                opacity: 1 
              }}
              transition={{ 
                scale: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2.5,
                  ease: "easeInOut"
                },
                opacity: { duration: 0.8, delay: 0.2 }
              }}
              className="mb-12"
            >
              <div className="bg-[#1e583d]/90 backdrop-blur-md px-10 py-6 rounded-[24px] shadow-claymorphic-dark transform transition-all duration-300">
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-wide leading-tight font-serif"> 
                  COMING SOON
                </h2>
              </div>
            </motion.div>
            
            {/* Description with claymorphic design */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="mb-12 max-w-2xl mx-auto"
            >
              <div className="bg-white/95 backdrop-blur-md px-10 py-6 rounded-[22px] shadow-claymorphic border border-red-200/50 transform transition-all duration-300">
                <p className="text-lg md:text-xl font-semibold text-red-700 font-sans">
                  An Initiative by the School of Liberal Arts, Bennett University
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
