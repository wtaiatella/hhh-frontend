import Image from "next/image";
import Link from "next/link";
import HeaderNavigation from "./header-navigation";

export default function Header() {
  return (
    <header className="fixed t-0 l-0 mt-4 mx-0 w-full z-10">
      <div className="container relative">
        <div className="relative flex align-center items-center bg-black bg-opacity-50 dark:bg-opacity-90 rounded-[30px]">
          <Link href="/" className="md:ml-8 my-3 mx-auto md:w-content">
            <Image
              src="/logo-yellow.png"
              className="2sm:h-24 2sm:w-36 h-16 w-24 cursor-pointer"
              width={768}
              height={512}
              alt="hhh logo"
              priority
            />
          </Link>
          <HeaderNavigation />
        </div>
      </div>
    </header>
  );
}
