import Newsletter from "@/components/newsletter";
import Events from "./events";
import Introduction from "./introduction";
import Recipes from "./recipes";
import Suppliers from "./suppliers";

export default function Home() {
  return (
    <main>
      <Introduction />
      <Events />
      <Suppliers />
      <Recipes />
      <Newsletter />
    </main>
  );
}
