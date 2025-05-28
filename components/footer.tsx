"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t py-8 md:py-12 mt-8 md:mt-12 bg-gradient-to-b from-white to-green-50">
      <div className="container px-4 mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-2 sm:col-span-2 md:col-span-1 mb-2 md:mb-0"
          >
            <h3 className="font-bold text-lg mb-3 font-serif text-[#1e583d]">INKARANYA</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Find your perfect stay and discover unique experiences around the world.
            </p>
          </motion.div>

          {/* Link sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h4 className="font-semibold mb-3 text-sm md:text-base">Explore</h4>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link href="/properties" className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/organizations" className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm">
                  organizations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h4 className="font-semibold mb-3 text-sm md:text-base">Host</h4>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link href="/host" className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm">
                  Become a Host
                </Link>
              </li>
              <li>
                <Link href="/host/resources" className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/host/community" className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/host/support" className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm">
                  Host Support
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-2 sm:col-span-2 md:col-span-1"
          >
            <h4 className="font-semibold mb-3 text-sm md:text-base">Support</h4>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-green-100 mt-6 md:mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} INKARANYA. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-[#1e583d] transition-colors" aria-label="Facebook">
              <Facebook className="h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-[#1e583d] transition-colors" aria-label="Twitter">
              <Twitter className="h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-[#1e583d] transition-colors" aria-label="Instagram">
              <Instagram className="h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </div>
        </div>
        
        {/* Back to top button - especially useful on mobile */}
        <div className="flex justify-center mt-6 md:hidden">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-[#1e583d] transition-colors"
          >
            <ArrowUp className="h-3 w-3" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
