"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Search, Calendar, Users } from "lucide-react"
import Image from "next/image"
import { EarthGlobe } from "./earth-globe"

export function ComingSoon() {
  const [isVisible, setIsVisible] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  const handleEnterSite = () => {
    setIsVisible(false)
    // We're removing the localStorage persistence so it will show on reload
  }

  // More aggressive approach to hiding all header search elements
  useEffect(() => {
    if (isVisible) {
      // Try multiple possible selectors to ensure we catch the search bar
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
      
      // Try to find and hide all potential search elements
      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el instanceof HTMLElement) {
            // Store original display value for restoration
            el.dataset.originalDisplay = el.style.display;
            el.style.display = "none";
          }
        });
      });
      
      // Also try to hide the entire header if needed
      const header = document.querySelector("header");
      if (header instanceof HTMLElement) {
        header.style.visibility = "hidden";
      }
    } else {
      // Restore all elements
      const hiddenElements = document.querySelectorAll("[data-original-display]");
      hiddenElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.display = el.dataset.originalDisplay || "";
          delete el.dataset.originalDisplay;
        }
      });
      
      // Restore header visibility
      const header = document.querySelector("header");
      if (header instanceof HTMLElement) {
        header.style.visibility = "";
      }
    }
    
    // Cleanup function
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
            backgroundImage: "linear-gradient(to right, #1e3a29, #2c4037, #3a4645, #2c4037, #1e3a29)",
            backgroundSize: "cover"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* 3D Earth Globe */}
          <EarthGlobe />
          
          {/* Background stripes like zoo image */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0" style={{ 
              backgroundImage: "repeating-linear-gradient(90deg, rgba(46, 125, 50, 0.3) 0px, rgba(76, 175, 80, 0.2) 50px, rgba(46, 125, 50, 0.3) 100px, rgba(27, 94, 32, 0.4) 150px)",
              opacity: 0.6
            }}></div>
          </div>
          
          {/* Bird decorations like in the zoo image */}
          <div className="absolute top-20 left-20 w-40 h-40">
            <Image 
              src="https://img.freepik.com/free-vector/cute-colorful-toucan-flat-design_23-2147912609.jpg?size=338&ext=jpg" 
              alt="Bird decoration" 
              width={140} 
              height={140}
              className="object-contain"
            />
          </div>
          
          <div className="absolute top-40 right-40 w-40 h-40">
            <Image 
              src="https://img.freepik.com/free-vector/cute-macaw-cartoon-illustration_138676-3255.jpg?size=338&ext=jpg" 
              alt="Bird decoration" 
              width={140} 
              height={140}
              className="object-contain"
            />
          </div>
          
          <div className="absolute bottom-40 left-40 w-40 h-40">
            <Image 
              src="https://img.freepik.com/free-vector/toucan-concept-illustration_114360-3391.jpg?size=338&ext=jpg" 
              alt="Bird decoration" 
              width={140} 
              height={140}
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-40 right-40 w-40 h-40">
            <Image 
              src="https://img.freepik.com/free-vector/cute-bird-cartoon-illustration_138676-3256.jpg?size=338&ext=jpg" 
              alt="Bird decoration" 
              width={140} 
              height={140}
              className="object-contain"
            />
          </div>

          {/* Main content */}
          <div className="container flex flex-col items-center justify-center h-screen max-w-6xl mx-auto px-4 z-10 text-center relative">
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
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">INKARANYA</h1>
              <p className="text-sm text-amber-200">educational exploration</p>
            </motion.div>
            
            {/* Big headline - styled like "EXPLORE THE WILD WITH US!" */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <h2 className="text-5xl md:text-7xl font-bold text-[#f8e3a3] tracking-wide leading-tight">
                COMING SOON
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-white max-w-2xl mx-auto mb-12"
            >
              Discover unique accommodations, experiences, and educational opportunities
            </motion.p>
            
            {/* Zoo-style Search Bar */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-full max-w-4xl mx-auto mb-12"
            >
              <div className="bg-white rounded-full shadow-xl overflow-hidden">
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
                      className="bg-[#5d8b2f] hover:bg-[#4a7023] text-white rounded-full px-8 py-5 font-medium w-full md:w-auto"
                    >
                      Browse Experiences
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Enter Site button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                onClick={handleEnterSite}
                size="lg"
                className="bg-[#5d8b2f] text-white hover:bg-[#4a7023] px-8 py-4 rounded-full font-medium"
              >
                Enter Site
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
