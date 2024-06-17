import Newsletter from "@/components/newsletter";
import Events from "./events";
import HeroSection from "./HeroSection";
import Recipes from "./recipes";
import Suppliers from "./suppliers";
import AnimatedTextSection from "./animatedTextSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AnimatedTextSection />
      <Events />
      <Suppliers />
      <Recipes />
      <Newsletter />
    </main>
  );
}
