"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SearchSection() {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="w-full mt-4">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <div className="flex gap-2">
          <div className="border-2 border-black p-2">
            <Input
              placeholder="From"
              className="border-none p-0 h-6"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="border-2 border-black p-2">
            <Input
              placeholder="To"
              className="border-none p-0 h-6"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 border-2 border-black p-2">
          <Input
            placeholder="Search organizations, universities, opportunities (ex. music in India)"
            className="border-none p-0 h-6"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="border-2 border-black">
          <Select>
            <SelectTrigger className="border-none min-w-[150px]">
              <SelectValue placeholder="Search by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="location">Location</SelectItem>
              <SelectItem value="university">University</SelectItem>
              <SelectItem value="organization">Organization</SelectItem>
              <SelectItem value="opportunity">Opportunity</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  )
}
