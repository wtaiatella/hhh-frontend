import Newsletter from "@/components/newsletter";
import Events from "./events";
import Recipes from "./recipes";
import Suppliers from "./suppliers";
import HeroSection from "./heroSection";
import AnimatedTextSection from "./animatedTextSection";
import IllustrativeSection from "./illustrativeSection";
import EventSection from "./eventSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AnimatedTextSection />
      <IllustrativeSection />
      <EventSection />
      <Events />
      <Suppliers />
      <Recipes />
      <Newsletter />
    </main>
  );
}
