'use client'
import React,{useState} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuItem,NavbarMenu, NavbarMenuToggle} from "@nextui-org/react";
import Graveyard from "../Brand/Graveyard.jsx";

export default function NavbarMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
"About",
"Home",
"Contact",
"Login"
  ];

  return (
    <Navbar  onMenuOpenChange={setIsMenuOpen} className="mt-3" >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        
        <NavbarBrand>
        <Button as={Link} href="/" className="h-auto w-auto bg-transparent">
          <Graveyard width="65"/>
          </Button>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/signup" variant="flat">
            Sign Up
          </Button>
          
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="mt-4 ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 1 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
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
