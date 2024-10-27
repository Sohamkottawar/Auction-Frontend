"use client"

import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
// import { AcmeLogo } from "./AcmeLogo.jsx";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "Today's Auction",
    "Upcoming Auction",
    "Pricing",
    "Dashboard",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="w-[70%] absolute left-36 top-6 rounded-full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          {/* <p className="font-bold text-inherit">ACME</p> */}
        </NavbarBrand>
      </NavbarContent>

      {/* Center Navbar Items */}
      <NavbarContent className="hidden sm:flex gap-16" justify="center">
        {/* Gap increased to 8 for spacing between items */}
        <NavbarItem>
          <Link color="foreground" href="#" className="hover:text-red-700 font-bold">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="#" className="hover:text-red-700 font-bold">
            Today's Auction
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="hover:text-red-700 font-bold">
            Upcoming Auction
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="hover:text-red-700 font-bold">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="hover:text-red-700 font-bold ">
            Dashboard
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Right-side items */}
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#" className="hover:text-danger font-bold">
            Login
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Button 
            as={Link} 
            color="danger" 
            href="#" 
            variant="flat" 
            className=" rounded-lg font-bold text-white px-6 py-2 hover:bg-danger-dark transition-all"
          >
            Sign up
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full hover:text-danger font-bold"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
