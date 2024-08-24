"use client";
import Image from "next/image";
import React, { useState } from "react";
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
  ScrollText,
  ShoppingBasket,
} from "lucide-react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useAuth, useUser } from "@clerk/nextjs";
import avatarImage from "../../../public/avatar.png";
import { useAppSelector } from "@/lib/store/hooks";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

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
  { name: "Restaurants", url: "/restaurants", icon: "ScrollText" },
  { name: "Orders", url: "/orders", icon: "HandPlatter" },
  { name: "About", url: "/about", icon: "Info" },
  { name: "Contact", url: "/contact", icon: "Contact" },
];

const Header = () => {
  const items = useAppSelector((state) => state.cart.items);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPathname = usePathname();
  const router = useRouter();
  const { isSignedIn, signOut } = useAuth();
  const { user } = useUser();
  // console.log("user", user);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleSignOut = async () => {
    await signOut();
    router.push("/home");
  };

  console.log(isSignedIn);

  return (
    <header className="bg-white fixed z-10 w-full ">
      <nav className="container   py-5 flex items-center  justify-between  ">
        <Link
          href={"/home"}
          className="flex items-center space-x-4 cursor-pointer"
          passHref
        >
          <Image
            src="food-logo.svg"
            alt="logo"
            height={90}
            width={130}
            className="bg-transparent w-20 h-10  "
          ></Image>
        </Link>
        <div
          className="menu-btn flex lg:hidden  gap-5 "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className="hidden md:hidden lg:flex items-center gap-8 ">
          <ul className="flex items-center font-medium  space-x-4  ">
            {menuItems.map((item, i) => {
              const isActive = currentPathname === item.url;
              return (
                <li key={i} className={`nav-item-${i}`}>
                  <Link
                    className={`hover:text-primary  ${
                      isActive
                        ? "text-primary border-b-2 border-b-primary"
                        : "border-b-transparent"
                    } transition-all translate-x-2  10s ease-in-out
                     `}
                    href={item.url}
                    passHref
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* <div className="gap-4 flex justify-center items-center">
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
          </div> */}
          {isSignedIn ? (
            <div className="flex items-center gap-1">
              <span className="font-bold tracking-tighter">Hello, {user?.firstName}</span>
              <Avatar>
                <AvatarImage
                  src={user?.imageUrl}
                  className="h-10 w-10 rounded-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Button className="cursor-pointer" onClick={handleSignOut}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex gap-2 justify-center items-center">
              <Button
                className="w-full cursor-pointer"
                onClick={() => router.push("/login")}
              >
                Login
              </Button>
              <Button
                className="w-full  cursor-pointer"
                onClick={() => router.push("/signup")}
              >
                Signup
              </Button>
            </div>
          )}

          <div className="relative">
            <Link href="/cart" passHref>
              <ShoppingBasket className="hover:text-primary" />
            </Link>
            <span className="absolute -top-4 -right-4 items-center flex justify-center rounded-full bg-primary font-bold text-white w-6 h-6">
              {items.length}
            </span>
          </div>
        </div>
      </nav>
      <div
        className={`nav-items-toogle flex lg:hidden absolute top-20 left-0 border-l-2 border-b-2 border-primary rounded-bl-2xl justify-center items-center h-auto w-full z-10 bg-[#ffefba] ${
          isMenuOpen ? "active" : ""
        }`}
      >
        <ul className="p-2 w-[20%] flex flex-col   gap-2 ml-10">
          {menuItems.map((item, i) => {
            return (
              <li className="" key={i} onClick={closeMenu}>
                <Link
                  className="hover:text-primary text-lg font-bold   w-full flex gap-4 md:gap-2"
                  href={item.url}
                  passHref
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

          <div className="flex gap-2 justify-center items-center">
            <Button className="w-full" onClick={() => router.push("/login")}>
              Login
            </Button>
            <Button className="w-full" onClick={() => router.push("/signup")}>
              Signup
            </Button>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
