import { Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Black Tourmaline Protection Set",
    price: 52.0,
    originalPrice: 89.0,
    rating: 4.5,
    reviews: 128,
    image: "/1.jpg",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Citrine Abundance Crystal",
    price: 38.0,
    originalPrice: null,
    rating: 4.8,
    reviews: 95,
    image: "/2.jpg",
    badge: null,
  },
  {
    id: 3,
    name: "Lapis Lazuli Meditation Stone",
    price: 42.0,
    originalPrice: 68.0,
    rating: 4.6,
    reviews: 210,
    image: "/3.jpg",
    badge: "Hot Deal",
  },
  {
    id: 4,
    name: "Chakra Balancing Crystal Set",
    price: 95.0,
    originalPrice: null,
    rating: 4.9,
    reviews: 342,
    image: "/4.jpg",
    badge: "Featured",
  },
  {
    id: 5,
    name: "Clear Quartz Pyramid",
    price: 58.0,
    originalPrice: null,
    rating: 4.7,
    reviews: 156,
    image: "/5.jpg",
    badge: null,
  },
  {
    id: 6,
    name: "Moonstone Harmony Bracelet",
    price: 68.0,
    originalPrice: null,
    rating: 4.8,
    reviews: 89,
    image: "/6.jpg",
    badge: "New",
  },
  {
    id: 7,
    name: "Tigers Eye Confidence Stone",
    price: 35.0,
    originalPrice: null,
    rating: 4.5,
    reviews: 178,
    image: "/7.jpg",
    badge: null,
  },
  {
    id: 8,
    name: "Obsidian Protection Pendant",
    price: 72.0,
    originalPrice: 120.0,
    rating: 4.9,
    reviews: 267,
    image: "/8.jpg",
    badge: "Sale",
  },
]

const tabs = ["Best Seller", "Keep Energy", "Special Discount", "Gift Sets", "Curated Products"]

export function ProductGrid() {
  return (
    <div className="py-16 bg-foreground">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-serif font-bold mb-8 text-background">Explore Our Collection</h2>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant={tab === "Best Seller" ? "default" : "outline"}
                className="rounded-full whitespace-nowrap"
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
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

              {product.badge && (
                <Badge className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground">{product.badge}</Badge>
              )}

              <div className="aspect-square bg-secondary overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-5 space-y-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
