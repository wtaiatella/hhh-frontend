import { Button } from "@/components/hhh/button";

export default function Patterns() {
  return (
    <div className="container pt-40 flex flex-col">
      <p>Button - Shadcn variants</p>
      <div className="flex gap-4">
        <Button>Default</Button>
        <Button variant="destructive">destructive</Button>
        <Button variant="outline">outline</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="link">link</Button>
      </div>

      <p>Button - Shadcn variants + size</p>
      <div className="flex gap-4">
        <Button>Default</Button>
        <Button variant="destructive" size="sm">
          destructive sm
        </Button>
        <Button variant="outline" size="lg">
          outline lg
        </Button>
      </div>

      <p className="mt-12">Button - HHH variants</p>
      <div className="flex gap-4">
        <Button variant="search">search</Button>
      </div>
    </div>
  );
}
