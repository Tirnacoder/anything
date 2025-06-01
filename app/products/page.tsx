import React from "react"
import ProductCard from "@/components/product-card"
import Link from "next/link"

const allProducts = [
  // Studio Equipment
  {
    title: "Universal Audio Apollo Twin X",
    imageUrl: "/Universal Audio Apollo Twin X.jpg",
    category: "Audio Interfaces",
    rating: 4.8,
    price: 1399,
    slug: "/blog/universal-audio-apollo-twin-x-review",
    buyLink: "https://www.amazon.com.au/s?k=Universal+Audio+Apollo+Twin+X",
  },
  {
    title: "Shure SM7B Microphone",
    imageUrl: "/shuresm7b.jpg",
    category: "Microphones",
    rating: 4.7,
    price: 399,
    slug: "/blog/shure-sm7b-microphone-review",
    buyLink: "https://www.amazon.com.au/s?k=Shure+SM7B+Microphone",
  },
  {
    title: "Genelec 8030C Monitors",
    imageUrl: "/genelec 8030C.jpg",
    category: "Studio Monitors",
    rating: 4.9,
    price: 1590,
    slug: "/blog/genelec-8030c-monitors-review",
    buyLink: "https://www.amazon.com.au/s?k=Genelec+8030C+Studio+Monitors",
  },
  {
    title: "Focusrite Scarlett 2i2",
    imageUrl: "/Focusrite Scarlett 2i2.jpg",
    category: "Audio Interfaces",
    rating: 4.6,
    price: 179,
    slug: "/blog/focusrite-scarlett-2i2-review",
    buyLink: "https://www.amazon.com.au/s?k=Focusrite+Scarlett+2i2",
  },
  {
    title: "Neumann TLM 103 Microphone",
    imageUrl: "/Neumann TLM 103 Microphone.jpg",
    category: "Microphones",
    rating: 4.9,
    price: 1299,
    slug: "/blog/neumann-tlm-103-review",
    buyLink: "https://swamp.net.au/search?q=Neumann+TLM+103",
  },
  {
    title: "Avid Pro Tools",
    imageUrl: "/Avid Pro Tools.png",
    category: "Software",
    rating: 4.5,
    price: 599,
    slug: "/blog/avid-pro-tools-review",
    buyLink: "https://www.amazon.com.au/s?k=Avid+Pro+Tools",
  },
  // Synthesizers
  {
    title: "Arturia MiniFreak",
    imageUrl: "/arturia mini freak.jpg",
    category: "Digital Synthesizers",
    rating: 4.8,
    price: 599,
    slug: "/blog/arturia-minifreak-review",
    buyLink: "https://www.amazon.com.au/s?k=Arturia+MiniFreak",
  },
  {
    title: "Moog Subsequent 37",
    imageUrl: "/Moog Subsequent 37.jpg",
    category: "Analog Synthesizers",
    rating: 4.9,
    price: 1799,
    slug: "/blog/moog-subsequent-37-review",
    buyLink: "https://www.amazon.com.au/s?k=Moog+Subsequent+37",
  },
  {
    title: "Sequential Prophet-6",
    imageUrl: "/Sequential Prophet-6.jpg",
    category: "Analog Synthesizers",
    rating: 4.9,
    price: 3499,
    slug: "/blog/sequential-prophet-6-review",
    buyLink: "https://swamp.net.au/search?q=Sequential+Prophet+6",
  },
  {
    title: "Korg Minilogue XD",
    imageUrl: "/Korg Minilogue XD.jpg",
    category: "Analog Synthesizers",
    rating: 4.7,
    price: 649,
    slug: "/blog/korg-minilogue-xd-review",
    buyLink: "https://www.amazon.com.au/s?k=Korg+Minilogue+XD",
  },
  {
    title: "Elektron Digitone",
    imageUrl: "/Elektron Digitone.jpg",
    category: "Digital Synthesizers",
    rating: 4.8,
    price: 799,
    slug: "/blog/elektron-digitone-review",
    buyLink: "https://swamp.net.au/search?q=Elektron+Digitone",
  },
  {
    title: "Behringer Poly D",
    imageUrl: "/Behringer Poly D.jpg",
    category: "Analog Synthesizers",
    rating: 4.5,
    price: 699,
    slug: "/blog/behringer-poly-d-review",
    buyLink: "https://www.amazon.com.au/s?k=Behringer+Poly+D",
  },
  // Software
  {
    title: "Native Instruments Komplete 15",
    imageUrl: "/Komplete15.jpeg",
    category: "Virtual Instruments",
    rating: 4.9,
    price: 599,
    slug: "/blog/native-instruments-komplete-15-review",
    buyLink: "https://www.native-instruments.com/en/products/komplete/bundles/komplete-15/",
  },
  {
    title: "Ableton Live 12",
    imageUrl: "/abletionpic.webp",
    category: "DAWs",
    rating: 4.8,
    price: 749,
    slug: "/blog/ableton-live-12-review",
    buyLink: "https://www.ableton.com/en/live/",
  },
  {
    title: "FabFilter Pro Bundle",
    imageUrl: "/fabfilter pro.webp",
    category: "Plugins",
    rating: 4.9,
    price: 749,
    slug: "/blog/fabfilter-pro-bundle-review",
    buyLink: "https://www.fabfilter.com/shop",
  },
  {
    title: "Spectrasonics Omnisphere 3",
    imageUrl: "/omnishpere.jpeg",
    category: "Virtual Instruments",
    rating: 4.9,
    price: 499,
    slug: "/blog/spectrasonics-omnisphere-3-review",
    buyLink: "https://www.spectrasonics.net/products/omnisphere/",
  },
  {
    title: "Logic Pro",
    imageUrl: "/logic pro.jpeg",
    category: "DAWs",
    rating: 4.7,
    price: 199,
    slug: "/blog/logic-pro-review",
    buyLink: "https://apps.apple.com/us/app/logic-pro/id634148309",
  },
  {
    title: "Waves Complete Bundle",
    imageUrl: "/wavescomplete.jpeg",
    category: "Plugins",
    rating: 4.6,
    price: 499,
    slug: "/blog/waves-complete-bundle-review",
    buyLink: "https://www.waves.com/bundles/waves-complete",
  },
]

export default function AllProductsPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-foreground">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              imageUrl={product.imageUrl}
              category={product.category}
              rating={product.rating}
              price={product.price}
              slug={product.slug}
              buyLink={product.buyLink}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
