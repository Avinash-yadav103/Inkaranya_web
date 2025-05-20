"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageToggle() {
  const [language, setLanguage] = useState<"INR" | "Eng">("INR")

  const toggleLanguage = (newLang: "INR" | "Eng") => {
    setLanguage(newLang)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="hover:bg-purple-100 hover:text-purple-700 px-3 flex items-center gap-2"
        >
          <Globe className="h-4 w-4" />
          <span>{language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => toggleLanguage("INR")}>INR</DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleLanguage("Eng")}>Eng</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
