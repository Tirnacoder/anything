"use client";
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star, Check, X, ChevronLeft } from "lucide-react" // add back arrow icon
import { Badge } from "@/components/ui/badge"
import NewsletterSignup from "@/components/newsletter-signup"
import { useAmazonDomain } from '@/lib/useAmazonDomain'
import { use } from 'react'  // use hook to unwrap promise-based params

const getBlogPost = (slug: string) => ({
  title: "Universal Audio Apollo Twin X Review: The Ultimate Audio Interface for Home Studios",
  date: "May 25, 2025",
  author: "DJ TIrna",
  category: "Studio Equipment",
  excerpt:
    "Discover why the Universal Audio Apollo Twin X is considered the best audio interface for music production. Explore its features, sound quality, and value for home studios and professionals alike.",
  imageUrl: "/public/Universal Audio Apollo Twin X.jpg",
  productDetails: {
    name: "Universal Audio Apollo Twin X QUAD",
    price: 1399,
    rating: 4.8,
    amazonLink: "https://www.amazon.com/example-affiliate-link",
    specs: [
      "2 premium mic/line preamps",
      "2 line outputs, 2 monitor outputs",
      "Optical ADAT input for 8 additional channels",
      "Thunderbolt 3 connectivity",
      "QUAD DSP processing (4 SHARC processors)",
      "24-bit/192 kHz audio conversion",
      "Unison™ technology for preamp modeling",
    ],
    pros: [
      "Exceptional sound quality",
      "Powerful UAD processing",
      "Robust build quality",
      "Excellent software integration",
      "Near-zero latency monitoring",
    ],
    cons: [
      "Premium price point",
      "Limited I/O for some applications",
      "Requires Thunderbolt connection",
      "UAD plugins are an additional investment",
    ],
  },
  relatedPosts: [
    {
      title: "Top 10 Synthesizers of 2025",
      slug: "/blog/top-10-synthesizers-2025",
      imageUrl: "/images/article-1.png",
    },
    {
      title: "Ableton Live 12 vs Logic Pro: Which DAW Reigns Supreme?",
      slug: "/blog/ableton-live-12-vs-logic-pro",
      imageUrl: "/abletionpic.webp",
    },
    {
      title: "Universal Audio Apollo Twin X Review: The Ultimate Audio Interface for Home Studios",
      slug: "/blog/universal-audio-apollo-twin-x-review",
      imageUrl: "/Universal Audio Apollo Twin X.jpg",
    },
  ],
})

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)  // unwrap params promise to get slug
  const post = getBlogPost(slug)  // fetch post data using resolved slug

  // const amazonDomain = useAmazonDomain()
  // const finalAmazonLink = post.productDetails.amazonLink.replace(
  //   /https?:\/\/www\\.amazon\\.(?:com|com\\.au|in)/,
  //   `https://www.amazon.${amazonDomain}`
  // )

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Back and Date */}
      <section className="py-8 px-4 max-w-3xl mx-auto flex items-center justify-between">
        <Link href="/blog"> <ChevronLeft className="w-6 h-6" /> </Link>  {/* back to blog list */}
        <span className="text-sm text-muted-foreground">{post.date}</span>  {/* display date */}
      </section>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-8 px-4 max-w-3xl mx-auto">{post.title}</h1>

      {/* Article Content */}
      <section className="prose prose-lg mx-auto max-w-3xl bg-white text-black px-8 py-12 space-y-8 rounded-lg">
        <p>Are you building your home studio and looking for the perfect audio interface that elevates your music production to professional standards? Look no further—the Universal Audio Apollo Twin X could be exactly what you need. This powerful yet compact audio interface has quickly become a favorite among home studio producers and audio enthusiasts alike. Let’s dive into why the Apollo Twin X deserves a spot in your home studio setup.</p>
        
        <h2 className="font-bold">Unmatched Audio Quality</h2>
        <p>The Apollo Twin X is renowned for its stellar audio quality, leveraging top-notch AD/DA converters and powerful UAD plugins. With its elite-class A/D and D/A conversion technology, this interface delivers pristine sound, capturing every nuance of your recordings. Whether you're tracking vocals, guitars, or synths, the clarity and detail offered by Apollo Twin X are truly exceptional.</p>

        <h2 className="font-bold">Real-Time UAD Processing</h2>
        <p>One of the standout features of the Apollo Twin X is its real-time UAD processing capability. Powered by the DUO or QUAD Core DSP processors, it allows users to run industry-leading UAD plugins directly on the interface with near-zero latency. This means you can record with professional-grade compressors, EQs, reverbs, and amp simulations in real-time, transforming your home studio into a pro-level recording environment.</p>

        <h2 className="font-bold">User-Friendly Design</h2>
        <p>Despite its powerful capabilities, the Apollo Twin X is remarkably user-friendly. Its intuitive interface, featuring a large central knob and clear LED displays, makes it easy for anyone to navigate. Whether you're new to recording or a seasoned audio engineer, you'll appreciate how seamlessly the Apollo integrates into your workflow.</p>

        <h2 className="font-bold">Versatile Connectivity</h2>
        <p>The Apollo Twin X offers robust connectivity options, including Thunderbolt 3, which ensures blazing-fast data transfer speeds and virtually eliminates latency issues. Additionally, its two Unison-enabled mic preamps can mimic the sound of classic analog gear, providing extraordinary versatility and creative possibilities for your recordings.</p>

        <h2 className="font-bold">Compact yet Powerful</h2>
        <p>While many professional-grade audio interfaces can be bulky, the Apollo Twin X maintains a sleek and compact footprint, perfect for home studios with limited space. Its robust build quality ensures it can withstand rigorous use, making it a reliable choice for serious producers and hobbyists alike.</p>

        <h2 className="font-bold">Is It Worth the Investment?</h2>
        <p>Undoubtedly, the Apollo Twin X represents a significant investment. However, its impressive sound quality, real-time DSP processing, intuitive usability, and compact design justify the price tag. For those serious about taking their music production to professional standards without the bulkiness or complexity of traditional studio setups, the Apollo Twin X is undoubtedly worth every penny.</p>

        <h2 className="font-bold">Final Thoughts</h2>
        <p>The Universal Audio Apollo Twin X truly stands out as an exceptional audio interface, balancing professional performance with user-friendly design. If you aim to produce top-tier audio recordings right from your home studio, there's little reason to look elsewhere. Equip your studio with the Apollo Twin X, and elevate your production capabilities to extraordinary heights.</p>
      </section>
    </div>
  )
}
