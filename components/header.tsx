"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { UserNav } from "@/components/user-nav"
import { LanguageToggle } from "@/components/language-toggle"
import { Search, Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <AnimatePresence>
      <motion.header
        className={`sticky top-0 z-50 w-full backdrop-blur transition-all duration-300 ${
          scrolled ? "bg-white/90 shadow-sm" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container flex h-16 items-center px-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-semibold">
                  Home
                </Link>
                <Link href="/about" className="text-lg font-semibold">
                  About Us
                </Link>
                <Link href="/partner" className="text-lg font-semibold">
                  Partner With Us
                </Link>
                <Link href="/properties" className="text-lg font-semibold">
                  Properties
                </Link>
                <Link href="/experiences" className="text-lg font-semibold">
                  Experiences
                </Link>
                <Link href="/universities" className="text-lg font-semibold">
                  Universities
                </Link>
                <Link href="/contact" className="text-lg font-semibold">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <motion.div
            className="flex items-center gap-2 mr-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logo.jpg" 
                alt="INKARANYA Logo"
                width={40}
                height={40}
                className="rounded-md object-contain"
              />
              <div className="font-serif font-bold text-xl md:text-2xl text-[#1e583d]">INKARANYA</div>
            </Link>
          </motion.div>

          <motion.div
            className="hidden md:flex flex-1 items-center gap-2 mx-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search destinations, properties..."
                className="pl-8 w-full rounded-full border-primary/20 focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="hidden md:flex md:space-x-4">
              <Button variant="ghost" asChild className="hover:bg-green-100 hover:text-[#1e583d] px-3">
                <Link href="/about">About Us</Link>
              </Button>
              <Button variant="ghost" asChild className="hover:bg-green-100 hover:text-[#1e583d] px-3 min-w-[140px]">
                <Link href="/partner">Partner With Us</Link>
              </Button>
              <div className="px-1">
                <LanguageToggle />
              </div>
              <Button variant="ghost" asChild className="hover:bg-green-100 hover:text-[#1e583d] px-3">
                <Link href="/host">Become a Host</Link>
              </Button>
            </div>
            <UserNav />
          </motion.div>
        </div>
      </motion.header>
    </AnimatePresence>
  )
}
