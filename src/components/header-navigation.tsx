"use client";

import Link from "next/link";
import { Menu, UserRound } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "./hhh/navigation-menu";

export default function HeaderNavigation() {
  return (
    <>
      {/*mobile menu*/}
      <NavigationMenu className="absolute md:relative md:hidden ml-2 ">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Menu className="text-headertext size-10" />
            </NavigationMenuTrigger>

            <NavigationMenuContent className="list-none w-full p-2">
              <NavigationMenuItems />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/*desktop menu*/}
      <NavigationMenu className="hidden md:block max-w-none ">
        <NavigationMenuList className="text-headertext">
          <NavigationMenuItems />
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

function NavigationMenuItems() {
  return (
    <>
      <div className="w-full md:flex md:justify-around grow ">
        <NavigationMenuItem>
          <Link href="/events" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Events
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/suppliers" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Suppliers
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/recipes" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Recipes
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </div>

      <div className="h-1 bg-zinc-200 dark:bg-zinc-800" />

      <NavigationMenuItem className="flex items-center md:pr-2">
        <UserRound className="md:text-headertext size-5 inline-block" />
        <Link href="/login" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Enter or Register
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </>
  );
}
