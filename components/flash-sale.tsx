"use client"

import { useState, useEffect } from "react"
import { Clock, ChevronLeft, ChevronRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const flashSaleProducts = [
  {
    id: 1,
    name: "Amethyst Geode Cluster",
    price: 89.0,
    originalPrice: 178.0,
    image: "/amethyst-geode.jpg",
    stock: "Limited Stock",
  },
  {
    id: 2,
    name: "Rose Quartz Heart Set",
    price: 45.0,
    originalPrice: 90.0,
    image: "/rose-quartz-heart.png",
    stock: "In Stock",
  },
  {
    id: 3,
    name: "Crystal Healing Wand",
    price: 65.0,
    originalPrice: 130.0,
    image: "/crystal-healing-wand.jpg",
    stock: "Selling Fast",
  },
  {
    id: 4,
    name: "Selenite Tower Collection",
    price: 75.0,
    originalPrice: 150.0,
    image: "/selenite-tower.jpg",
    stock: "In Stock",
  },
]

export function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 30 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-6">
            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
              <Clock className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold">Flash Sale</h2>
              <p className="text-muted-foreground">Ends in:</p>
            </div>
            <div className="flex gap-3">
              {[
                { value: timeLeft.hours, label: "H" },
                { value: timeLeft.minutes, label: "M" },
                { value: timeLeft.seconds, label: "S" },
              ].map((time, i) => (
                <div key={i} className="flex items-center gap-1">
                  <div className="bg-destructive text-destructive-foreground rounded-lg px-3 py-2 min-w-[48px] text-center">
                    <span className="text-xl font-bold">{time.value.toString().padStart(2, "0")}</span>
                  </div>
                  {i < 2 && <span className="text-2xl font-bold text-muted-foreground">:</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-lg bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-lg bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {flashSaleProducts.map((product) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden border-border hover:border-primary transition-all"
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
              >
                <Heart className="h-4 w-4" />
              </Button>

              <div className="aspect-square bg-secondary overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-5 space-y-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {product.stock}
                  </Badge>
                  <div className="h-1.5 flex-1 bg-secondary rounded-full mx-3 overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "60%" }} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
