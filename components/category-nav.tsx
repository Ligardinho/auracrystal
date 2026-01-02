import { Sparkles, Gem, Gift, Heart, Home, ShoppingBag, Star, Grid3x3 } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { icon: Gem, label: "Crystals" },
  { icon: Sparkles, label: "Jewelry" },
  { icon: Gift, label: "Gift Sets" },
  { icon: Heart, label: "Wellness" },
  { icon: ShoppingBag, label: "Accessories" },
  { icon: Home, label: "Home Decor" },
  { icon: Star, label: "New Arrivals" },
  { icon: Grid3x3, label: "All Category" },
]

export function CategoryNav() {
  return (
    <div className="border-b border-border bg-card">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4 gap-2 mx-20">
          {categories.map((category) => (
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
          ))}
        </div>
      </div>
    </div>
  )
}
