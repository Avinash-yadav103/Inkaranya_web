"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  MapPin, Phone, Mail, Clock, CheckCircle, Loader2
} from "lucide-react"

export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Show success message
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after submission
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1e583d]">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to learn more about our accommodations and services? 
            We'd love to hear from you.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-green-100"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#1e583d] mb-2">Thank You!</h3>
                <p className="text-gray-600 text-center">
                  We've received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#1e583d] font-medium">Full Name</Label>
                  <Input 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name" 
                    required 
                    className="focus-visible:ring-[#2c7b50]" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#1e583d] font-medium">Email Address</Label>
                  <Input 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    placeholder="your.email@example.com" 
                    required 
                    className="focus-visible:ring-[#2c7b50]" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-[#1e583d] font-medium">Subject</Label>
                  <Input 
                    id="subject" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="How can we help?" 
                    required 
                    className="focus-visible:ring-[#2c7b50]" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#1e583d] font-medium">Message</Label>
                  <Textarea 
                    id="message" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message..." 
                    required 
                    className="min-h-[120px] focus-visible:ring-[#2c7b50]" 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#2c7b50] hover:bg-[#23593b] text-white"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-green-100">
              <h3 className="text-xl font-bold mb-6 text-[#1e583d]">Contact Information</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-[#1e583d]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">123 Education Lane, New Delhi, India 110001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-[#1e583d]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-[#1e583d]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">contact@inkaranya.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Clock className="h-5 w-5 text-[#1e583d]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Business Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                    <p className="text-gray-600">Saturday: 10am - 4pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white p-4 rounded-xl shadow-lg border border-green-100 overflow-hidden">
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56066.66125310053!2d77.18115304650338!3d28.56413839026592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26f903969d7%3A0x76134pugRd4fac8!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1621845710000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="INKARANYA Location"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-6 md:p-8 rounded-xl shadow-lg border border-green-100"
        >
          <h3 className="text-2xl font-bold mb-8 text-[#1e583d] text-center">Frequently Asked Questions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">How can I find accommodation near a specific university?</h4>
              <p className="text-gray-600">
                You can use our search functionality to filter properties by university proximity or contact our team for personalized assistance.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">What payment methods do you accept?</h4>
              <p className="text-gray-600">
                We accept credit/debit cards, bank transfers, and various online payment platforms for your convenience.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">How do I become a host on INKARANYA?</h4>
              <p className="text-gray-600">
                Visit our "Become a Host" page or contact our partner relations team who will guide you through the process.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">Do you provide airport pickup services?</h4>
              <p className="text-gray-600">
                Yes, we can arrange airport pickups as an additional service when you book your accommodation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
