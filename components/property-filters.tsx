"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon, Search } from "lucide-react"
import { format } from "date-fns"
import { motion } from "framer-motion"

export function PropertyFilters() {
  const [location, setLocation] = useState("")
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [guests, setGuests] = useState(1)
  const [priceRange, setPriceRange] = useState([3000, 15000])
  const [propertyType, setPropertyType] = useState("all")

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 mb-8 -mt-16 relative z-10 max-w-5xl mx-auto border border-primary/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Tabs defaultValue="stay" className="w-full">
        <TabsList className="mb-4 bg-primary/10">
          <TabsTrigger value="stay" className="data-[state=active]:bg-primary">
            Stays
          </TabsTrigger>
          <TabsTrigger value="experience" className="data-[state=active]:bg-primary">
            Experiences
          </TabsTrigger>
          <TabsTrigger value="university" className="data-[state=active]:bg-primary">
            Universities
          </TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <Label htmlFor="location" className="text-sm font-medium">
              Location
            </Label>
            <Input
              id="location"
              placeholder="Where are you going?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label className="text-sm font-medium">Check-in Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal mt-1">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label htmlFor="guests" className="text-sm font-medium">
              Guests
            </Label>
            <Input
              id="guests"
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(Number.parseInt(e.target.value))}
              className="mt-1"
            />
          </div>

          <div className="flex items-end">
            <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
              <Search className="h-4 w-4" />
              Search
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="border-primary/20 text-primary">
                Price Range
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4 p-2">
                <h4 className="font-medium">Price Range</h4>
                <div className="px-1">
                  <Slider
                    defaultValue={priceRange}
                    max={50000}
                    step={1000}
                    onValueChange={(value) => setPriceRange(value as number[])}
                    className="[&>span:nth-child(3)]:bg-primary [&>span:nth-child(5)]:bg-primary"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">₹{priceRange[0].toLocaleString("en-IN")}</div>
                  <div className="font-medium">₹{priceRange[1].toLocaleString("en-IN")}</div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="border-primary/20 text-primary">
                Property Type
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56">
              <div className="space-y-2">
                <Button
                  variant={propertyType === "all" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setPropertyType("all")}
                >
                  All
                </Button>
                <Button
                  variant={propertyType === "house" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setPropertyType("house")}
                >
                  House
                </Button>
                <Button
                  variant={propertyType === "apartment" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setPropertyType("apartment")}
                >
                  Apartment
                </Button>
                <Button
                  variant={propertyType === "hostel" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setPropertyType("hostel")}
                >
                  Hostel
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </Tabs>
    </motion.div>
  )
}
