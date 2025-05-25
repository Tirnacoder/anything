"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="flex align-center justify-center sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium text-foreground transition-colors hover:text-primary">
                  Home
                </Link>
                <Link
                  href="/category/studio-equipment"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  Studio Equipment
                </Link>
                <Link
                  href="/category/synthesizers"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  Synthesizers
                </Link>
                <Link
                  href="/category/software"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  Software
                </Link>
                <Link
                  href="/category/live-performance"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  Live Performance
                </Link>
                <Link
                  href="/category/accessories"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  Accessories
                </Link>
                <Link href="/blog" className="text-lg font-medium text-foreground transition-colors hover:text-primary">
                  Blog
                </Link>
                <Link href="/about" className="text-lg font-medium text-foreground transition-colors hover:text-primary">
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-foreground">Music Tech Insider</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Home
          </Link>
          <Link
            href="/category/studio-equipment"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Studio Equipment
          </Link>
          <Link
            href="/category/synthesizers"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Synthesizers
          </Link>
          <Link
            href="/category/software"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Software
          </Link>
          <Link href="/blog" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="relative hidden md:flex items-center">
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] pl-8"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
            </div>
          ) : (
            <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Button variant="ghost" size="icon" asChild>
            <Link href="/search">
              <Search className="h-5 w-5 md:hidden" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
