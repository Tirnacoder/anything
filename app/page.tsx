import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FeaturedPost from "@/components/featured-post"
import ProductCard from "@/components/product-card"
import CategoryPill from "@/components/category-pill"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src="/ChatGPT Image Apr 28, 2025, 01_13_21 PM.png"
          alt="Latest music technology"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Music Tech Insider</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Your trusted source for the latest music technology reviews, guides, and insights
          </p>
          <div className="relative w-full max-w-md">
            <Input
              type="text"
              placeholder="Search for gear, reviews, guides..."
              className="pl-10 pr-4 py-6 rounded-full text-base"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          <CategoryPill name="Studio Equipment" href="/category/studio-equipment" />
          <CategoryPill name="Synthesizers" href="/category/synthesizers" />
          <CategoryPill name="Software" href="/category/software" />
          <CategoryPill name="DJ Equipment" href="/category/dj-equipment" />
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Review</h2>
        <FeaturedPost
          title="Universal Audio Apollo Twin X Review: The Ultimate Home Studio Interface?"
          excerpt="We put the latest Apollo Twin X to the test to see if it lives up to the hype. With improved AD/DA conversion and enhanced DSP power, is this the interface that will transform your home productions?"
          imageUrl="/Universal Audio Apollo Twin X.jpg"
          category="Studio Equipment"
          date="April 25, 2025"
          slug="/blog/universal-audio-apollo-twin-x-review"
        />
      </section>

      {/* Trending Products */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Trending Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="Arturia MiniFreak"
              imageUrl="/arturia mini freak.jpg"
              category="Synthesizers"
              rating={4.8}
              price={599}
              slug="/blog/arturia-minifreak-review"
            />
            <ProductCard
              title="Native Instruments Komplete 15"
              imageUrl="/native instrument compete 15.jpg"
              category="Software"
              rating={4.9}
              price={599}
              slug="/blog/native-instruments-komplete-15-review"
            />
            <ProductCard
              title="Shure SM7B Microphone"
              imageUrl="shuresm7b.jpg"
              category="Studio Equipment"
              rating={4.7}
              price={399}
              slug="/blog/shure-sm7b-microphone-review"
            />
          </div>
          <div className="text-center mt-8">
            <Button asChild className="bg-black hover:bg-gray-800 text-white">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <Link href="/blog/top-10-synthesizers-2025">
              <div className="relative h-48">
                <Image src="/images/article-1.png" alt="Top 10 Synthesizers of 2025" fill className="object-cover" />
              </div>
              <div className="p-4">
                <span className="text-sm text-gray-500">April 20, 2025</span>
                <h3 className="text-xl font-semibold mt-2">Top 10 Synthesizers of 2025</h3>
                <p className="text-gray-600 mt-2 line-clamp-3">
                  Our comprehensive guide to the best synthesizers on the market this year, from budget-friendly options
                  to high-end professional gear.
                </p>
              </div>
            </Link>
          </article>
          <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <Link href="/blog/home-studio-setup-guide">
              <div className="relative h-48">
                <Image src="/images/article-2.png" alt="Home Studio Setup Guide" fill className="object-cover" />
              </div>
              <div className="p-4">
                <span className="text-sm text-gray-500">April 18, 2025</span>
                <h3 className="text-xl font-semibold mt-2">Home Studio Setup Guide: From Beginner to Pro</h3>
                <p className="text-gray-600 mt-2 line-clamp-3">
                  Everything you need to know about setting up your home studio, with recommendations for every budget
                  level.
                </p>
              </div>
            </Link>
          </article>
          <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <Link href="/blog/ableton-live-12-vs-logic-pro">
              <div className="relative h-48">
                <Image src="/images/article-3.png" alt="Ableton Live 12 vs Logic Pro" fill className="object-cover" />
              </div>
              <div className="p-4">
                <span className="text-sm text-gray-500">April 15, 2025</span>
                <h3 className="text-xl font-semibold mt-2">Ableton Live 12 vs Logic Pro: Which DAW Reigns Supreme?</h3>
                <p className="text-gray-600 mt-2 line-clamp-3">
                  We compare the latest versions of two industry-standard DAWs to help you decide which is right for
                  your workflow.
                </p>
              </div>
            </Link>
          </article>
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline" className="border-black text-black hover:bg-gray-100">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </section>

      
    </div>
  )
}
