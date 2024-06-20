import { fontSerifBitter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Button } from "@/components/hhh/button";
import { Input } from "@/components/hhh/input";

export default function Newsletter() {
  return (
    <div className="container max-w-sm mt-16 lg:mt-20 mb-20">
      <h1
        className={cn(
          "mx-auto max-w-max font-serifBitter text-4xl text-center leading-tight font-semibold text-primary",
          fontSerifBitter.variable
        )}
      >
        Stay informed, join out newsletter!
      </h1>
      <div className="flex w-full max-w-lg items-center space-x-2 mx-auto mt-4">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  );
}
