"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import {
  AlignHorizontalJustifyEnd,
  Contact,
  HandPlatter,
  Info,
  InfoIcon,
  ScrollText,
  ShoppingBasket,
  Soup,
} from "lucide-react";
import { Button } from "../ui/button";

interface MenuItem {
  name: string;
  url: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Home",
    url: "/home",
    icon: "AlignHorizontalJustifyEnd",
  },
  { name: "About", url: "/about", icon: "Info" },
  { name: "Contact", url: "/contact", icon: "Contact" },
  { name: "Menu", url: "/menu", icon: "ScrollText" },
  { name: "Orders", url: "/orders", icon: "HandPlatter" },
];

const Header = () => {
  useEffect(() => {
    let menuBtn = document.querySelector(".menu-btn");
    let navMenu = document.querySelector(".nav-items-toogle");

    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        navMenu?.classList.toggle("active");
      });
    }

    return () => {
      if (menuBtn) {
        menuBtn.addEventListener("click", () => {
          menuBtn.classList.toggle("active");
          navMenu?.classList.toggle("active");
        });
      }
    };
  }, []);

  return (
    <header className="bg-white fixed z-10 w-full ">
      <nav className="container   py-5 flex items-center  justify-between  ">
        <Link href={"/"} className="flex items-center space-x-4 cursor-pointer">
          <Image
            src="food-logo.svg"
            alt="logo"
            height={90}
            width={130}
            className="bg-transparent w-20 h-10  "
          ></Image>
        </Link>
        <div className="menu-btn flex lg:hidden  gap-5 ">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="hidden md:hidden lg:flex items-center gap-8 ">
          <ul className="flex items-center font-medium  space-x-4">
            {menuItems.map((item, i) => {
              return (
                <li key={i}>
                  <Link className="hover:text-primary" href={item.url}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="gap-4 flex">
            <Select>
              <SelectTrigger className="w-[180px] focus:ring-0">
                <SelectValue placeholder="Select Restaurant" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cheesy-delight">Cheesy Delight</SelectItem>
                <SelectItem value="pizza-hut">Pizza Hut</SelectItem>
                <SelectItem value="kids-corner">Kids Corner</SelectItem>
              </SelectContent>
            </Select>
            <Button size={"sm"}>Sign In</Button>
            <Button size={"sm"} className="inline-flex">
              Sign Up
            </Button>
          </div>
          <div className="relative">
            <Link href="/cart">
              <ShoppingBasket className="hover:text-primary" />
            </Link>
            <span className="absolute -top-4 -right-4 items-center flex justify-center rounded-full bg-primary font-bold text-white w-6 h-6">
              3
            </span>
          </div>
        </div>
      </nav>
      <div className="nav-items-toogle flex lg:hidden absolute top-20 left-0 border-l-2 border-b-2 border-primary rounded-bl-2xl justify-center items-center h-auto w-full z-10 bg-[#ffefba]">
        <ul className="p-2 w-[20%] flex flex-col   gap-2 ml-10">
          {menuItems.map((item, i) => {
            return (
              <li className="" key={i}>
                <Link
                  className="hover:text-primary text-lg font-bold   w-full flex gap-4 md:gap-2"
                  href={item.url}
                >
                  <div className=" w-1/4">
                    {item.icon === "AlignHorizontalJustifyEnd" && (
                      <AlignHorizontalJustifyEnd />
                    )}
                    {item.icon === "Info" && <Info />}
                    {item.icon === "Contact" && <Contact />}
                    {item.icon === "ScrollText" && <ScrollText />}
                    {item.icon === "HandPlatter" && <HandPlatter />}
                  </div>
                  <div className=" w-3/4">{item.name}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
