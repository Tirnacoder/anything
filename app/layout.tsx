import "../styles/globals.css"
import type { ReactNode } from "react"
import { analytics } from "@/lib/firebase"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "My Music Tech Insider",
  description: "Next.js site with Firestore"
}

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  // analytics is initialized automatically above on client
  return (
    <html lang="en" className="dark">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}