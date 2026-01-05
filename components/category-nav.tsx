"use client"

import { Sparkles, Gem, Gift, Heart, Home, ShoppingBag, Star, Grid3x3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import { once } from "events"

const categories = [
  { icon: Gem, label: "Crystals", duration: 0.8, x: -50},
  { icon: Sparkles, label: "Jewelry", duration: 0.7, x: -50 },
  { icon: Gift, label: "Gift Sets", duration: 0.6, x: -50 },
  { icon: Heart, label: "Wellness", duration: 0.5, x: -50 },
  { icon: ShoppingBag, label: "Accessories", duration: 0.5, x: 50 },
  { icon: Home, label: "Home Decor", duration: 0.6, x: 50 },
  { icon: Star, label: "New Arrivals", duration: 0.7, x: 50 },
  { icon: Grid3x3, label: "All Category", duration: 0.8, x: 50 },
]

export function CategoryNav() {
  return (
    <motion.div 
      className="border-b border-border bg-card lg:flex hidden"   
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }} // <— important
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4 gap-2 mx-20">
          {categories.map((category) => (
            <motion.div
              initial={{ opacity: 0, x: category.x }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }} // <— important
              transition={{ duration: category.duration }}
            >
            <Button
              key={category.label}
              variant="ghost"
              className="flex flex-col items-center gap-2 h-auto py-3 px-4 hover:bg-secondary/50 group"
              
            >
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <category.icon className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-xs font-medium">{category.label}</span>
            </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
