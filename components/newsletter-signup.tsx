"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your newsletter service
    console.log("Subscribing email:", email)
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-foreground">Stay Updated</h2>
      <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
        Subscribe to our newsletter and get the latest music tech news, reviews, and exclusive deals delivered to your
        inbox.
      </p>
      {isSubmitted ? (
        <div className="bg-green-900/30 p-4 rounded-lg max-w-md mx-auto">
          <p className="text-green-400 font-medium">
            Thanks for subscribing! Check your email to confirm your subscription and receive your free gear guide.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="relative flex-grow">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="email"
              placeholder="Your email address"
              className="pl-10 py-6 bg-input border-border text-foreground placeholder:text-muted-foreground"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="bg-primary text-primary-foreground hover:bg-secondary py-6">
            Subscribe
          </Button>
        </form>
      )}
      <p className="text-muted-foreground text-sm mt-4">
        Plus, get our FREE guide: "Essential Home Studio Gear for Every Budget"
      </p>
    </div>
  )
}
