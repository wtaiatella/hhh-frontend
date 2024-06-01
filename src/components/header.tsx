import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed t-0 l-0 mt-4 mx-0 w-full z-10 text-white">
      <div className="container relative">
        <div className="mx-4 relative flex align-center gap-4 items-center justify-between bg-black bg-opacity-50 rounded-[30px]">
          <div className="flex grow gap-4 items-center justify-between">
            <div className="mr-8 flex flex-col">
              <p className="grow">Welcome :)</p>
              <Link className="hover:underline" href="/login">
                Enter or Register
              </Link>
            </div>

            <div className="flex grow justify-around gap-4 text-xl mx-4">
              <div>
                <Link href="/events">Events</Link>
              </div>
              <div>
                <Link href="/suppliers">Suppliers</Link>
              </div>
              <div>
                <Link href="/recipes">Recipes</Link>
              </div>
            </div>
          </div>
          <Link href="/" className="ml-8 my-3">
            <Image
              src="/logo-yellow.png"
              className="h-24 w-36 min-w-36 cursor-pointer"
              width={768}
              height={512}
              alt="hhh logo"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
