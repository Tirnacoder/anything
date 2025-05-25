import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock blog posts data - this would typically come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "Universal Audio Apollo Twin X Review: The Ultimate Audio Interface for Home Studios",
    excerpt: "Discover why the Universal Audio Apollo Twin X is considered the best audio interface for music production. Explore its features, sound quality, and value for home studios and professionals alike.",
    category: "Studio Equipment",
    date: "May 25, 2025",
    author: "DJ TIrna",
    imageUrl: "/Universal Audio Apollo Twin X.jpg",
    slug: "universal-audio-apollo-twin-x-review",
    featured: true
  },
  {
    id: 2,
    title: "Top 10 Synthesizers of 2025",
    excerpt: "Our comprehensive guide to the best synthesizers on the market this year, from budget-friendly options to high-end professional gear.",
    category: "Synthesizers",
    date: "April 20, 2025",
    author: "DJ TIrna",
    imageUrl: "/images/article-1.png",
    slug: "top-10-synthesizers-2025",
    featured: false
  },
  {
    id: 3,
    title: "Home Studio Setup Guide: From Beginner to Pro",
    excerpt: "Everything you need to know about setting up your home studio, with recommendations for every budget level.",
    category: "Studio Equipment",
    date: "April 18, 2025",
    author: "DJ TIrna",
    imageUrl: "/images/article-2.png",
    slug: "home-studio-setup-guide",
    featured: false
  },
  {
    id: 4,
    title: "Ableton Live 12 vs Logic Pro: Which DAW Reigns Supreme?",
    excerpt: "We compare the latest versions of two industry-standard DAWs to help you decide which is right for your workflow.",
    category: "Software",
    date: "April 15, 2025",
    author: "DJ TIrna",
    imageUrl: "/abletionpic.webp",
    slug: "ableton-live-12-vs-logic-pro",
    featured: false
  },
  {
    id: 5,
    title: "Solid State Logic SSL 2+ Review",
    excerpt: "Professional sound on a budget with the SSL 2+ interface. Is this the perfect entry-level pro audio interface?",
    category: "Studio Equipment",
    date: "April 10, 2025",
    author: "DJ TIrna",
    imageUrl: "/images/related-1.png",
    slug: "ssl-2-plus-review",
    featured: false
  },
  {
    id: 6,
    title: "Best Audio Interfaces for Home Studios in 2025",
    excerpt: "Discover the top audio interfaces of 2025 for every budget. From entry-level to professional grade equipment.",
    category: "Studio Equipment",
    date: "April 5, 2025",
    author: "DJ TIrna",
    imageUrl: "/images/related-2.png",
    slug: "best-audio-interfaces-2025",
    featured: false
  }
]

const categories = ["All", "Studio Equipment", "Synthesizers", "Software", "DJ Equipment"]

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Music Tech Blog</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            In-depth reviews, guides, and insights from the world of music technology
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-[300px] lg:h-auto">
              <Image 
                src={featuredPost.imageUrl || "/placeholder.svg"} 
                alt={featuredPost.title} 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-primary text-primary-foreground">{featuredPost.category}</Badge>
                  <span className="text-muted-foreground text-sm">{featuredPost.date}</span>
                  <span className="text-muted-foreground text-sm">By {featuredPost.author}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
              </div>
              <Button asChild className="w-fit bg-primary hover:bg-secondary text-primary-foreground">
                <Link href={`/blog/${featuredPost.slug}`}>
                  Read Full Article
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => {
            const getCategoryLink = (cat: string) => {
              if (cat === "All") return "/blog"
              if (cat === "Studio Equipment") return "/category/studio-equipment"
              if (cat === "Synthesizers") return "/category/synthesizers"
              if (cat === "Software") return "/category/software"
              if (cat === "DJ Equipment") return "/category/dj-equipment"
              return "/blog"
            }

            return (
              <Button
                key={category}
                variant="outline"
                className="border-border text-foreground hover:bg-muted"
                asChild
              >
                <Link href={getCategoryLink(category)}>
                  {category}
                </Link>
              </Button>
            )
          })}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article 
              key={post.id} 
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-card"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48">
                  <Image 
                    src={post.imageUrl || "/placeholder.svg"} 
                    alt={post.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-3">{post.excerpt}</p>
                  <span className="text-xs text-muted-foreground">By {post.author}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Load More */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <Button variant="outline" className="border-border text-foreground hover:bg-muted">
          Load More Articles
        </Button>
      </section>
    </div>
  )
}
