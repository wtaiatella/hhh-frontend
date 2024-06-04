import Newsletter from "@/components/newsletter";
import Events from "./events";
import HeroSection from "./HeroSection";
import Recipes from "./recipes";
import Suppliers from "./suppliers";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Events />
      <Suppliers />
      <Recipes />
      <Newsletter />
    </main>
  );
}
