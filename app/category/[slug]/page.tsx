import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import CategoryPill from "@/components/category-pill"

// This would typically come from a CMS or database
const getCategoryData = (slug: string) => {
  const categories = {
    "studio-equipment": {
      title: "Studio Equipment",
      description: "Discover the best audio interfaces, microphones, monitors, and more for your recording studio.",
      imageUrl: "/music studio.avif",
      products: [
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
      ],
      relatedCategories: [
        { name: "Microphones", href: "/category/microphones" },
        { name: "Audio Interfaces", href: "/category/audio-interfaces" },
        { name: "Studio Monitors", href: "/category/studio-monitors" },
        { name: "Headphones", href: "/category/headphones" },
        { name: "Acoustic Treatment", href: "/category/acoustic-treatment" },
      ],
    },
    synthesizers: {
      title: "Synthesizers",
      description: "Explore the world of analog and digital synthesizers, from vintage classics to modern innovations.",
      imageUrl: "/synthesizers.avif",
      products: [
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
      ],
      relatedCategories: [
        { name: "Analog Synthesizers", href: "/category/analog-synthesizers" },
        { name: "Digital Synthesizers", href: "/category/digital-synthesizers" },
        { name: "Modular Synthesizers", href: "/category/modular-synthesizers" },
        { name: "MIDI Controllers", href: "/category/midi-controllers" },
        { name: "Drum Machines", href: "/category/drum-machines" },
      ],
    },
    software: {
      title: "Music Software",
      description: "Find the best DAWs, plugins, virtual instruments, and sound libraries for music production.",
      imageUrl: "/software.avif",
      products: [
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
      ],
      relatedCategories: [
        { name: "DAWs", href: "/category/daws" },
        { name: "Plugins", href: "/category/plugins" },
        { name: "Virtual Instruments", href: "/category/virtual-instruments" },
        { name: "Sample Libraries", href: "/category/sample-libraries" },
        { name: "Mastering Software", href: "/category/mastering-software" },
      ],
    },
  }

  // Default to studio equipment if category not found
  return categories[slug as keyof typeof categories] || categories["studio-equipment"]
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryData(params.slug)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src={category.imageUrl || "/placeholder.svg"}
          alt={category.title}
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{category.title}</h1>
            <p className="text-lg md:text-xl text-white mb-4 max-w-3xl mx-auto">{category.description}</p>
          </div>
        </div>
      </section>

      

      {/* Products Grid */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Top {category.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product, index) => (
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
      </section>

      {/* Featured Articles */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-card">
              <Link href="/blog/universal-audio-apollo-twin-x-review">
                <div className="relative h-48">
                  <Image
                    src="/Universal Audio Apollo Twin X.jpg"
                    alt="Universal Audio Apollo Twin X Review"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="text-sm text-gray-500">May 25, 2025</span>
                  <h3 className="text-xl font-semibold mt-2">Universal Audio Apollo Twin X Review: The Ultimate Audio Interface for Home Studios</h3>
                  <p className="text-gray-600 mt-2 line-clamp-3">
                    Discover why the Universal Audio Apollo Twin X is considered the best audio interface for music production. Explore its features, sound quality, and value for home studios and professionals alike.
                  </p>
                </div>
              </Link>
            </article>
            <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-card">
              <Link href="/blog/top-10-synthesizers-2025">
                <div className="relative h-48">
                  <Image
                    src="/images/article-1.png"
                    alt="Top 10 Synthesizers of 2025"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="text-sm text-gray-500">April 20, 2025</span>
                  <h3 className="text-xl font-semibold mt-2">Top 10 Synthesizers of 2025</h3>
                  <p className="text-gray-600 mt-2 line-clamp-3">
                    Our comprehensive guide to the best synthesizers on the market this year, from budget-friendly options to high-end professional gear.
                  </p>
                </div>
              </Link>
            </article>
            <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-card">
              <Link href="/blog/ableton-live-12-vs-logic-pro">
                <div className="relative h-48">
                  <Image
                    src="/abletionpic.webp"
                    alt="Ableton Live 12 vs Logic Pro"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="text-sm text-gray-500">April 15, 2025</span>
                  <h3 className="text-xl font-semibold mt-2">Ableton Live 12 vs Logic Pro: Which DAW Reigns Supreme?</h3>
                  <p className="text-gray-600 mt-2 line-clamp-3">
                    We compare the latest versions of two industry-standard DAWs to help you decide which is right for your workflow.
                  </p>
                </div>
              </Link>
            </article>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-border text-white hover:bg-muted hover:text-white">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
