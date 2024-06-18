import { fontSerifBitter } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function IllustrativeSection() {
  return (
    <div className="mt-12 lg:mt-20 container grid grid-cols-1 md:grid-cols-2 justify-items-center gap-16 text-center ">
      <div>
        <h1
          className={cn(
            "font-serifBitter text-4xl lg:text-5xl font-semibold text-primary",
            fontSerifBitter.variable
          )}
        >
          Build community
        </h1>
        <p className="text-xl lg:text-2xl mt-4">
          By sharing your experiences, your events, and your business, you will
          help to connect and foster a local homebrewing community. It&apos;s a
          great way to meet new people and build a stronger community!
        </p>
      </div>
      <div>
        <h1
          className={cn(
            "font-serifBitter text-4xl lg:text-5xl font-semibold text-primary",
            fontSerifBitter.variable
          )}
        >
          Discover locally
        </h1>
        <p className="text-xl lg:text-2xl mt-4">
          At Hop Head Hub, we&apos;re all about connecting bee lovers with the
          best suppliers. Explore, find, and visit your nearest store for
          everything you need, supplies, gifts, accessories, and more!
        </p>
      </div>
    </div>
  );
}
