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
          {/* Earth Globe component */}
          <EarthGlobe />
          
          {/* Main content */}
          <div className="container flex flex-col items-center justify-center h-screen max-w-6xl mx-auto px-4 z-20 text-center relative">
            {/* Logo & Title area */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Image 
                src="/logo.jpg" 
                alt="INKARANYA Logo"
                width={80}
                height={80}
                className="rounded-md mb-4 object-contain mx-auto"
              />
              <h1 className="text-3xl md:text-4xl font-bold text-[#1e583d] mb-2 drop-shadow-md">INKARANYA</h1>
              <p className="text-sm text-[#1e583d] font-medium">educational exploration</p>
            </motion.div>
            
            {/* Coming Soon headline - Added background and shadow for better visibility */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <h2 className="text-5xl md:text-7xl font-bold text-[#1e583d] tracking-wide leading-tight drop-shadow-lg" 
                 style={{ textShadow: "0 4px 10px rgba(255, 255, 255, 0.6)" }}>
                COMING SOON
              </h2>
            </motion.div>
            
            {/* Description - Added semi-transparent background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white/40 backdrop-blur-sm px-6 py-3 rounded-xl mb-12 max-w-2xl mx-auto"
            >
              <p className="text-lg text-[#1e583d] font-medium">
                Discover unique accommodations, experiences, and educational opportunities
              </p>
            </motion.div>
            
            {/* Search Bar */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-full max-w-4xl mx-auto mb-12"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-xl overflow-hidden border border-green-100">
                <div className="flex flex-col md:flex-row">
                  {/* First section - Search */}
                  <div className="flex items-center pl-6 py-3 md:py-4 flex-1 border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="flex items-center text-gray-600">
                      <Search className="h-5 w-5 mr-3" />
                      <input
                        type="text"
                        placeholder="Search organizations"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent border-none outline-none w-full text-gray-700 placeholder:text-gray-500"
                      />
                    </div>
                  </div>
                  
                  {/* Second section - Organization Type */}
                  <div className="flex items-center pl-6 py-3 md:py-4 border-b md:border-b-0 md:border-r border-gray-200">
                    <select className="appearance-none bg-transparent border-none outline-none pr-12 text-gray-700 w-full">
                      <option value="">Organization Type</option>
                      <option value="non-profit">Non-Profit</option>
                      <option value="corporate">Corporate</option>
                      <option value="educational">Educational</option>
                      <option value="governmental">Governmental</option>
                    </select>
                  </div>
                  
                  {/* Button */}
                  <div className="p-2">
                    <Button
                      className="bg-[#2c7b50] hover:bg-[#23593b] text-white rounded-full px-8 py-5 font-medium w-full md:w-auto"
                    >
                      Browse Experiences
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Enter Site button and Initiative text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <Button
                onClick={handleEnterSite}
                size="lg"
                className="bg-[#2c7b50] text-white hover:bg-[#23593b] px-8 py-4 rounded-full font-medium mb-4"
              >
                Enter Site
              </Button>
              
              {/* Added background for better visibility */}
              <div className="bg-white/60 backdrop-blur-sm px-6 py-2 rounded-full">
                <p className="text-[#1e583d] font-medium text-sm">
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
