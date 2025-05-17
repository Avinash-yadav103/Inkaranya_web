import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/language-toggle"

export function MainNav() {
  return (
    <nav className="flex items-center gap-2">
      <Button variant="outline" className="border-2 border-black">
        <Link href="/about">About Us</Link>
      </Button>
      <LanguageToggle />
      <Button variant="outline" className="border-2 border-black">
        <Link href="/auth">Login/Sign up</Link>
      </Button>
    </nav>
  )
}
