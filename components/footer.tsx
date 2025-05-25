import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4">Music Tech Insider</h3>
          <p className="text-gray-400 mb-4">Your trusted source for music technology reviews, guides, and insights.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Categories</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/category/studio-equipment" className="text-gray-400 hover:text-white">
                Studio Equipment
              </Link>
            </li>
            <li>
              <Link href="/category/live-performance" className="text-gray-400 hover:text-white">
                Live Performance
              </Link>
            </li>
            <li>
              <Link href="/category/software" className="text-gray-400 hover:text-white">
                Software
              </Link>
            </li>
            <li>
              <Link href="/category/accessories" className="text-gray-400 hover:text-white">
                Accessories
              </Link>
            </li>
            <li>
              <Link href="/category/dj-equipment" className="text-gray-400 hover:text-white">
                DJ Equipment
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
        <p>DJ TIrna All rights reserved</p>
      </div>
    </footer>
  )
}
