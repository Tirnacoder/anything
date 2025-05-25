import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted source for music technology reviews, guides, and insights
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Music Tech Insider, we're all about helping musicians, producers, and audio lovers stay ahead of the curve. We break down the latest music gear, software, and production techniques in a way that's clear, honest, and useful.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our goal is simple: make music tech exciting, accessible, and inspiring for everyone. Whether you're a home studio artist, a pro in the field, or just starting your creative journey, we're here to help you make the best sound possible.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/music studio.avif"
              alt="Music Studio Setup"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* What We Do Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">In-Depth Reviews</h3>
              <p className="text-muted-foreground">
                Comprehensive testing and analysis of the latest music gear, from audio interfaces to synthesizers and everything in between.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Expert Guides</h3>
              <p className="text-muted-foreground">
                Step-by-step tutorials and buying guides to help you make informed decisions about your music production setup.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Industry Insights</h3>
              <p className="text-muted-foreground">
                Latest trends, techniques, and innovations in music technology to keep you at the forefront of audio production.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="text-center">
            <div className="inline-block p-8 border rounded-lg bg-card">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <span className="text-4xl font-bold">DT</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">DJ TIrna</h3>
              <p className="text-muted-foreground mb-4">Founder & Chief Editor</p>
              <p className="text-muted-foreground max-w-md">
                With years of experience in music production and technology, DJ TIrna brings deep expertise and passion for helping fellow creators find the perfect tools for their musical journey.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Dive into our latest reviews, guides, and insights to discover the music technology that will take your creativity to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-secondary text-primary-foreground">
              <Link href="/blog">
                Read Our Blog
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-border text-foreground hover:bg-background">
              <Link href="/category/studio-equipment">
                Browse Recommended Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
