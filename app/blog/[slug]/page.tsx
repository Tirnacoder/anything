import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star, Check, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import NewsletterSignup from "@/components/newsletter-signup"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  // For demo purposes, we're returning a mock blog post
  return {
    title: "Universal Audio Apollo Twin X Review: The Ultimate Home Studio Interface?",
    date: "April 25, 2025",
    author: "Michael Rodriguez",
    category: "Studio Equipment",
    excerpt:
      "We put the latest Apollo Twin X to the test to see if it lives up to the hype. With improved AD/DA conversion and enhanced DSP power, is this the interface that will transform your home productions?",
    content: `
      <p>When Universal Audio released the original Apollo Twin, it quickly became a staple in home studios worldwide. The combination of high-quality preamps, excellent conversion, and real-time UAD processing made it a game-changer for many producers and engineers.</p>
      
      <p>Now, with the Apollo Twin X, Universal Audio has refined their formula with improved AD/DA conversion, more DSP power, and a sleeker design. But in an increasingly competitive market, does the Twin X still deserve its crown as the king of prosumer interfaces?</p>
      
      <h2>Build Quality and Design</h2>
      
      <p>The Apollo Twin X maintains the solid, tank-like construction of its predecessors. The all-metal chassis feels premium and durable, designed to withstand years of studio use. The large monitor knob remains a centerpiece of the design, offering precise level control with a satisfying feel.</p>
      
      <p>Universal Audio has made subtle refinements to the front panel layout, with clearer labeling and slightly more space between buttons. The LED metering is bright and responsive, making it easy to monitor levels at a glance.</p>
      
      <h2>Sound Quality</h2>
      
      <p>This is where the Twin X truly shines. The updated AD/DA converters offer noticeably improved clarity and detail compared to previous models. The noise floor is impressively low, and the overall sound character is clean and transparent without being clinical.</p>
      
      <p>The preamps deserve special mention. They offer up to 65dB of gain, which is plenty for even gain-hungry microphones like the Shure SM7B. The sound is detailed and present, with a subtle warmth that flatters most sources without coloring them too heavily.</p>
      
      <h2>UAD Processing</h2>
      
      <p>The Apollo Twin X comes in two DSP configurations: DUO (with 2 SHARC processors) and QUAD (with 4 SHARC processors). Our review unit was the QUAD version, which provides ample processing power for most home studio applications.</p>
      
      <p>The ability to track through UAD plugins with near-zero latency remains one of the Apollo's strongest selling points. Being able to commit to sounds during recording—whether it's a perfectly dialed-in LA-2A on vocals or a spot-on guitar amp simulation—can be both creatively inspiring and technically advantageous.</p>
      
      <h2>Software Integration</h2>
      
      <p>The Console software that accompanies the Apollo ecosystem continues to be refined with each update. The virtual mixer is intuitive and powerful, allowing for complex routing, monitoring, and processing chains.</p>
      
      <p>Integration with major DAWs is seamless, especially with the Console Recall plugin that allows you to save and recall your Console settings within your DAW projects.</p>
    `,
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
        title: "Solid State Logic SSL 2+ Review: Professional Sound on a Budget",
        slug: "/blog/ssl-2-plus-review",
        imageUrl: "/images/related-1.png",
      },
      {
        title: "Best Audio Interfaces for Home Studios in 2025",
        slug: "/blog/best-audio-interfaces-2025",
        imageUrl: "/images/related-2.png",
      },
      {
        title: "How to Choose the Right Audio Interface for Your Studio",
        slug: "/blog/how-to-choose-audio-interface",
        imageUrl: "/images/related-3.png",
      },
    ],
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src={post.imageUrl || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Badge className="bg-black hover:bg-black/80">{post.category}</Badge>
              <span className="text-white text-sm">{post.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
            <p className="text-lg md:text-xl text-white mb-4 max-w-3xl mx-auto">{post.excerpt}</p>
            <p className="text-gray-200">By {post.author}</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Product Details Card */}
          <div className="mt-12 border rounded-lg overflow-hidden shadow-lg" id="buy">
            <div className="bg-gray-50 p-6">
              <h2 className="text-2xl font-bold mb-2">{post.productDetails.name}</h2>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < Math.floor(post.productDetails.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{post.productDetails.rating.toFixed(1)}</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <span className="text-3xl font-bold">${post.productDetails.price}</span>
                <Button asChild className="bg-[#FF9900] hover:bg-[#E88B00] text-white">
                  <Link
                    href={post.productDetails.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    Buy on Amazon
                  </Link>
                </Button>
                <p className="text-xs text-gray-500">*As an Amazon Associate, we earn from qualifying purchases.</p>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-bold text-lg mb-4">Key Specifications</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                {post.productDetails.specs.map((spec, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black"></span>
                    {spec}
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Check size={20} className="text-green-600" />
                    Pros
                  </h3>
                  <ul className="space-y-2">
                    {post.productDetails.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <X size={20} className="text-red-600" />
                    Cons
                  </h3>
                  <ul className="space-y-2">
                    {post.productDetails.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <X size={18} className="text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {post.relatedPosts.map((relatedPost, index) => (
              <article
                key={index}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-card"
              >
                <Link href={relatedPost.slug}>
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.imageUrl || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{relatedPost.title}</h3>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 md:px-8 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  )
}
