"use client"

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
import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/button';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User,} from "@nextui-org/react";

export const Navbar = () => {
  const [storedUser, setStoredUser] = useState<any>(null);

  useEffect(() => {
    // Tarayıcı tarafında çalıştığından emin ol
    const user = localStorage.getItem("user");
    if (user) {
      setStoredUser(user); // Sadece string olan değer atanır.
      console.log("userr", user);
    }

  }, [storedUser]);

  const handleLogout = () => {
    // localStorage'dan kullanıcıyı silme
    localStorage.removeItem('user');

    // Kullanıcı çıkış yapınca '/login' sayfasına yönlensin
    window.location.href = '/login';
  };


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


        <div className="flex gap-4 items-center ml-auto">
          {storedUser ? <div className="flex items-center gap-4">
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    src: "",

                  }}
                  className="transition-transform"
                  description="@ellewoods"
                  name="Elle Woods"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-bold">Signed in as</p>
                  <p className="font-bold">@ellewoods</p>
                </DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div> :
            (<>
              <a href="/login">
                <Button>
                  Login
                </Button></a>
              <a href="/signup">
                <Button>
                  Sign up
                </Button></a>
            </>)}
        </div>


      </NavbarContent>
    </NextUINavbar>
  );
}; 