"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"

interface ProductCardProps {
  title: string
  imageUrl: string
  category: string
  rating: number
  price: number
  slug: string
  buyLink?: string
}

export default function ProductCard({ title, imageUrl, category, rating, price, slug, buyLink }: ProductCardProps) {
  const router = useRouter()

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent navigation if clicking on the button
    if ((e.target as HTMLElement).closest("button") || (e.target as HTMLElement).closest("a")) {
      return
    }
    router.push(slug)
  }

  return (
    <div
      className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative h-48 bg-muted">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-contain p-4" />
      </div>
      <div className="p-4">
        <span className="text-sm text-muted-foreground">{category}</span>
        <h3 className="text-lg font-semibold mt-1">{title}</h3>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-foreground">{rating.toFixed(1)}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-lg text-foreground">${price}</span>
          <Button asChild variant="outline" size="sm" className="text-foreground border-border hover:bg-muted">
            <Link href={buyLink ? buyLink : `${slug}#buy`} target={buyLink ? "_blank" : "_self"} rel={buyLink ? "noopener noreferrer" : ""}>
              <ShoppingCart size={16} className="mr-2" />
              Buy
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
