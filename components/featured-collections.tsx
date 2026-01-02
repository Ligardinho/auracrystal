import { ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const collections = [
  {
    id: 1,
    name: "Crystal Boutique - Downtown",
    location: "Serenity District",
    description: "Premium Crystal Selection",
    products: [
      { price: 125.0, image: "/amethyst-cluster.jpg" },
      { price: 89.0, image: "/rose-quartz.png" },
      { price: 156.0, image: "/clear-quartz.jpg" },
    ],
  },
  {
    id: 2,
    name: "Healing Stones Gallery",
    location: "Zen Gardens Area",
    description: "Meditation & Energy",
    products: [
      { price: 95.0, image: "/selenite-wand.png" },
      { price: 78.0, image: "/black-obsidian.jpg" },
      { price: 112.0, image: "/labradorite.jpg" },
    ],
  },
  {
    id: 3,
    name: "Mystic Crystal Emporium",
    location: "Sacred Heart District",
    description: "Rare & Exotic Finds",
    products: [
      { price: 205.0, image: "/azurite.jpg" },
      { price: 168.0, image: "/malachite.jpg" },
      { price: 142.0, image: "/placeholder.svg?height=150&width=150" },
    ],
  },
  {
    id: 4,
    name: "Celestial Stone Collection",
    location: "Luna District",
    description: "Jewelry & Accessories",
    products: [
      { price: 89.0, image: "/placeholder.svg?height=150&width=150" },
      { price: 65.0, image: "/placeholder.svg?height=150&width=150" },
      { price: 125.0, image: "/placeholder.svg?height=150&width=150" },
    ],
  },
]

export function FeaturedCollections() {
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold mb-4">Featured Collections</h2>
          <p className="text-muted-foreground">Curated selections from our premium partners</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card className="p-10 bg-gradient-to-br from-card to-secondary border-border">
            <div className="text-center mb-10">
              <div className="inline-block p-10 bg-secondary rounded-2xl mb-8">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Collection"
                  className="w-48 h-48 object-contain"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">Aura Crystals Collection</h3>
              <p className="text-muted-foreground mb-8">Discover, Explore, and Embrace the Magic of Natural Healing</p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>

          <div className="space-y-6">
            {collections.map((collection) => (
              <Card key={collection.id} className="p-5 border-border hover:border-primary transition-all group">
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {collection.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {collection.location} • {collection.description}
                    </p>

                    <div className="flex gap-3">
                      {collection.products.map((product, idx) => (
                        <div key={idx} className="flex-1">
                          <div className="aspect-square bg-secondary rounded-lg overflow-hidden mb-2">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt="Product"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-xs font-semibold text-center">${product.price.toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
