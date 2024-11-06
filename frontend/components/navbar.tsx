import '../styles/globals.css'

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";



export const Navbar = () => {
  return (
    <NextUINavbar className='bg-stone-300 bg-opacity-20 ' maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full " justify="start">

        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <img className="w-6 " src="/images/cake.png" alt="cake" />
            <p className="font-hand-write font-bold text-inherit text-3xl">CAKES</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium font"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>



        <div className="flex gap-4 items-center ml-auto ">
          <Avatar showFallback src=' ' alt='de' />
        </div>

      </NavbarContent>
    </NextUINavbar>
  );
}; 