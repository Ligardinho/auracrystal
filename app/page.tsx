import { Header } from "@/components/header"
import { CategoryNav } from "@/components/category-nav"
import { HeroBanner } from "@/components/hero-banner"
import { FlashSale } from "@/components/flash-sale"
import { ProductGrid } from "@/components/product-grid"
import { FeaturedCollections } from "@/components/featured-collections"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen space-y-16">
      <Header />
      <CategoryNav />
      <HeroBanner />
      <FlashSale />
      <ProductGrid />
      <FeaturedCollections />
      <Footer />
    </div>
  )
}
