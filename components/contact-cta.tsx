"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

export function ContactCta() {
  return (
    <div className="my-16 flex justify-end">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="max-w-md shadow-lg border-primary/10 overflow-hidden">
          <CardContent className="p-6 bg-gradient-to-br from-white to-primary/5">
            <h3 className="text-xl font-bold mb-4 font-serif">Contact Us:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Address:</p>
                  <p className="text-muted-foreground">123 Main Street, New Delhi, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Email:</p>
                  <Link href="mailto:contact@inkaranya.com" className="text-primary hover:underline">
                    contact@inkaranya.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Phone:</p>
                  <Link href="tel:+911234567890" className="text-primary hover:underline">
                    +91 123 456 7890
                  </Link>
                </div>
              </div>

              <div className="pt-2">
                <p className="font-medium mb-2">Follow Us:</p>
                <div className="flex gap-4">
                  <Link href="#" className="text-primary hover:underline">
                    Facebook
                  </Link>
                  <Link href="#" className="text-primary hover:underline">
                    Twitter
                  </Link>
                  <Link href="#" className="text-primary hover:underline">
                    Instagram
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
