import { fontSerifBitter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function EventSection() {
  return (
    <div className="mt-12 lg:mt-20 container grid grid-cols-1 md:grid-cols-2 justify-items-center gap-16 text-center ">
      <div>
        <Image
          src="/assets/event-beer-party.jpeg"
          className="2sm:h-80 2sm:w-120 h-16 w-24 fill object-cover rounded-3xl shadow-2xl"
          width={1200}
          height={800}
          alt="hhh logo"
          priority
        />
      </div>
      <div className="self-center">
        <div className="ml-4 flex gap-4 items-center ">
          <Image
            src="/assets/logo-head.png"
            className="2sm:h-15 2sm:w-12 h-16 w-24 cursor-pointer"
            width={350}
            height={435}
            alt="hhh logo"
            priority
          />

          <h1
            className={cn(
              "font-serifBitter text-4xl lg:text-5xl font-semibold text-primary",
              fontSerifBitter.variable
            )}
          >
            Hoppy Happenings
          </h1>
        </div>
        <p className="text-xl lg:text-2xl mt-4">
          At Hop Head Hub, we&apos;re all about connecting bee lovers with the
          best suppliers. Explore, find, and visit your nearest store for
          everything you need, supplies, gifts, accessories, and more!
        </p>
      </div>
    </div>
  );
}
