import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface FeaturedPostProps {
  title: string
  excerpt: string
  imageUrl: string
  category: string
  date: string
  slug: string
}

export default function FeaturedPost({ title, excerpt, imageUrl, category, date, slug }: FeaturedPostProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-[300px] lg:h-auto">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">{category}</span>
            <span className="text-gray-500 text-sm">{date}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
          <p className="text-gray-600 mb-6">{excerpt}</p>
        </div>
        <Button asChild className="w-fit bg-black hover:bg-gray-800 text-white">
          <Link href={slug} className="flex items-center gap-2">
            Read Full Review <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </div>
  )
}
