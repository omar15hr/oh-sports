import { CategoryCardsSection } from "@/components/home-page/CategoryCardsSection";
import { FeaturedProducts } from "@/components/home-page/FeaturedProducts";
import { HeroSection } from "@/components/home-page/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoryCardsSection />
      <FeaturedProducts />
    </div>
  );
}
