import { Button } from "@/components/hhh/button";
import { Input } from "@/components/hhh/input";
import { ArrowDownWideNarrow, SlidersHorizontal } from "lucide-react";

export default function SearchSection() {
  return (
    <section className="container">
      <div className="flex mt-10 px-4 gap-12 max-w-4xl mx-auto text-2xl">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="inline" size={24} />
          <span>Filter</span>
        </div>
        <Input variant="search" type="email" placeholder="Search events" />
        <div className="flex items-center gap-2">
          <span>Order</span>
          <ArrowDownWideNarrow className="inline" size={24} />
        </div>
        <Button variant="search" className="flex items-center gap-2">
          filter <ArrowDownWideNarrow className="inline" size={24} />
        </Button>
      </div>
      <div>blocos busca</div>
      <div>opções</div>
    </section>
  );
}
