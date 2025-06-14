"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data - in a real app, this would come from a database or API
const mockProducts = [
  {
    id: 1,
    title: "Universal Audio Apollo Twin X",
    category: "Studio Equipment",
    imageUrl: "/images/product-apollo.png",
    slug: "/blog/universal-audio-apollo-twin-x-review",
  },
  {
    id: 2,
    title: "Arturia MiniFreak",
    category: "Synthesizers",
    imageUrl: "/images/product-1.png",
    slug: "/blog/arturia-minifreak-review",
  },
  {
    id: 3,
    title: "Native Instruments Komplete 15",
    category: "Software",
    imageUrl: "/images/product-2.png",
    slug: "/blog/native-instruments-komplete-15-review",
  },
  {
    id: 4,
    title: "Shure SM7B Microphone",
    category: "Studio Equipment",
    imageUrl: "/images/product-3.png",
    slug: "/blog/shure-sm7b-microphone-review",
  },
  {
    id: 5,
    title: "Ableton Live 12",
    category: "Software",
    imageUrl: "/images/product-ableton.png",
    slug: "/blog/ableton-live-12-review",
  },
  {
    id: 6,
    title: "Moog Subsequent 37",
    category: "Synthesizers",
    imageUrl: "/images/product-moog.png",
    slug: "/blog/moog-subsequent-37-review",
  },
]

const mockArticles = [
  {
    id: 1,
    title: "Universal Audio Apollo Twin X Review: The Ultimate Audio Interface for Home Studios",
    category: "Studio Equipment",
    date: "May 25, 2025",
    imageUrl: "/Universal Audio Apollo Twin X.jpg",
    excerpt: "Discover why the Universal Audio Apollo Twin X is considered the best audio interface for music production. Explore its features, sound quality, and value for home studios and professionals alike.",
    slug: "/blog/universal-audio-apollo-twin-x-review",
  },
  {
    id: 2,
    title: "Top 10 Synthesizers of 2025",
    category: "Synthesizers",
    date: "April 20, 2025",
    imageUrl: "/images/article-1.png",
    excerpt: "Our comprehensive guide to the best synthesizers on the market this year, from budget-friendly options to high-end professional gear.",
    slug: "/blog/top-10-synthesizers-2025",
  },
  {
    id: 3,
    title: "Ableton Live 12 vs Logic Pro: Which DAW Reigns Supreme?",
    category: "Software",
    date: "April 15, 2025",
    imageUrl: "/abletionpic.webp",
    excerpt: "We compare the latest versions of two industry-standard DAWs to help you decide which is right for your workflow.",
    slug: "/blog/ableton-live-12-vs-logic-pro",
  },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredProducts = mockProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredArticles = mockArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const allResults = [
    ...filteredProducts.map((p) => ({ ...p, type: "product" })),
    ...filteredArticles.map((a) => ({ ...a, type: "article" })),
  ]

  return (
    <div className="min-h-screen bg-background py-12 px-4 md:px-8 text-foreground">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Search Music Tech Insider</h1>

        <div className="relative mb-8">
          <Input
            type="text"
            placeholder="Search for products, reviews, guides..."
            className="pl-10 py-6 text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
        </div>

        <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all">All Results</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {searchQuery && allResults.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold mb-2">No results found</h2>
                <p className="text-gray-600 mb-4">Try adjusting your search terms or browse our categories</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted">
                    <Link href="/category/studio-equipment">Studio Equipment</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted">
                    <Link href="/category/synthesizers">Synthesizers</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted">
                    <Link href="/category/software">Software</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <>
                {filteredProducts.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProducts.map((product) => (
                        <Link
                          key={product.id}
                          href={product.slug}
                          className="flex items-center gap-4 p-4 border border-border bg-card rounded-lg hover:bg-muted hover:shadow-md transition-shadow"
                        >
                          <div className="relative h-16 w-16 flex-shrink-0">
                            <Image
                              src={product.imageUrl || "/placeholder.svg"}
                              alt={product.title}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium text-foreground">{product.title}</h3>
                            <p className="text-sm text-muted-foreground">{product.category}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {filteredArticles.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredArticles.map((article) => (
                        <Link
                          key={article.id}
                          href={article.slug}
                          className="flex flex-col md:flex-row gap-4 p-4 border border-border bg-card rounded-lg hover:bg-muted hover:shadow-md transition-shadow"
                        >
                          <div className="relative h-40 md:h-auto md:w-40 flex-shrink-0">
                            <Image
                              src={article.imageUrl || "/placeholder.svg"}
                              alt={article.title}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm text-muted-foreground">{article.date}</span>
                              <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">{article.category}</span>
                            </div>
                            <h3 className="font-medium mb-2">{article.title}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </TabsContent>

          <TabsContent value="products">
            {searchQuery && filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold mb-2">No products found</h2>
                <p className="text-gray-600 mb-4">Try adjusting your search terms or browse our product categories</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted">
                    <Link href="/category/studio-equipment">Studio Equipment</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted">
                    <Link href="/category/synthesizers">Synthesizers</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted">
                    <Link href="/category/software">Software</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={product.slug}
                    className="flex items-center gap-4 p-4 border border-border bg-card rounded-lg hover:bg-muted hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image
                        src={product.imageUrl || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{product.title}</h3>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="articles">
            {searchQuery && filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold mb-2">No articles found</h2>
                <p className="text-gray-600 mb-4">Try adjusting your search terms or browse our latest articles</p>
                <Button asChild className="bg-black hover:bg-gray-800 text-white">
                  <Link href="/blog">View All Articles</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={article.slug}
                    className="flex flex-col md:flex-row gap-4 p-4 border border-border bg-card rounded-lg hover:bg-muted hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-40 md:h-auto md:w-40 flex-shrink-0">
                      <Image
                        src={article.imageUrl || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-muted-foreground">{article.date}</span>
                        <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">{article.category}</span>
                      </div>
                      <h3 className="font-medium mb-2">{article.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
