import Link from "next/link"

export function ContactSection() {
  return (
    <div className="border-2 border-black p-4 max-w-xs">
      <h3 className="font-bold">Contact Us:</h3>
      <p>Address: 123 Main Street</p>
      <p>Email: contact@inkaranya.com</p>
      <div className="flex gap-2">
        <Link href="#" className="hover:underline">
          FB
        </Link>
        /
        <Link href="#" className="hover:underline">
          X
        </Link>
        /
        <Link href="#" className="hover:underline">
          IG
        </Link>
      </div>
    </div>
  )
}
