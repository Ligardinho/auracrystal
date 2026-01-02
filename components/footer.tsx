import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-card to-secondary border-t border-border">
      <div className="container mx-auto py-16">
        {/* Quote Section */}
        <div className="text-center mb-16 py-12 border-y border-border/50">
          <blockquote className="text-3xl lg:text-4xl font-serif italic text-foreground max-w-4xl mx-auto">
            "Let's Discover Healing Beyond Material Boundaries"
          </blockquote>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 ml-40">
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">aura crystals</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              "Let's Discover Healing Beyond Material Boundaries"
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="h-5 w-5 text-foreground" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Twitter className="h-5 w-5 text-foreground" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-foreground" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Youtube className="h-5 w-5 text-foreground" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">About Aura Crystals</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Crystal Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  All Crystals
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Gift Sets
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Customer Care</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© 2001 - 2025, Aura Crystals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
