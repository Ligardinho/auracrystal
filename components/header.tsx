'use client'

import Link from "next/link"
import { ShoppingCart, User, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "motion/react"

export function Header() {
  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b border-border bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4 text-sm border-b border-border/50">
          <div className="flex items-center gap-8">
            <span className="text-muted-foreground">Download Our Mobile App</span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About Aura Crystals
            </Link>
            <Link href="/care" className="text-muted-foreground hover:text-foreground transition-colors">
              Crystal Care
            </Link>
            <Link href="/promo" className="text-muted-foreground hover:text-foreground transition-colors">
              Promo
            </Link>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-10">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>

            <Link href="/" className="flex items-center">
              <h1 className="text-3xl font-serif font-bold text-primary tracking-tight">aura crystals</h1>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-2 flex-1 max-w-xl mx-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products or crystal types..."
                className="pl-10 bg-secondary/50 border-border"
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5 lg:hidden" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                2
              </span>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
