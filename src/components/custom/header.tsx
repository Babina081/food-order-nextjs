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
  LogOut,
  ScrollText,
  ShoppingBasket,
} from "lucide-react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "../ui/checkbox";

interface MenuItem {
  name: string;
  url: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Home",
    url: "/",
    icon: "AlignHorizontalJustifyEnd",
  },
  { name: "About", url: "/about", icon: "Info" },
  { name: "Contact", url: "/contact", icon: "Contact" },
  { name: "Menu", url: "/menu", icon: "ScrollText" },
  { name: "Orders", url: "/orders", icon: "HandPlatter" },
];

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  fullname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  confirmPassword: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const currentPathname = usePathname();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <header className="bg-white fixed z-10 w-full ">
      <nav className="container   py-5 flex items-center  justify-between  ">
        <Link
          href={"/"}
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

          <div className="gap-4 flex justify-center items-center">
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

            {/* signin */}
            <Dialog>
              <DialogTrigger className="bg-primary text-white h-full rounded-lg py-1 px-3 text-lg font-semibold">
                {" "}
                Sign In{" "}
              </DialogTrigger>
              <DialogContent className="grid grid-cols-2 p-0 gap-0 min-h-screen max-w-3xl rounded-xl overflow-hidden ">
                <div className=" hidden md:flex overflow-hidden relative">
                  <Image
                    src={"/auth-food-bg.jpg"}
                    alt="auth-img"
                    width={300}
                    height={300}
                    className="object-cover w-full h-screen overflow-hidden opacity-50"
                  ></Image>
                  <div className="flex flex-col justify-center items-center gap-8 absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
                    {" "}
                    <Image
                      src={"/food-logo.svg"}
                      alt="auth-img"
                      width={300}
                      height={300}
                    ></Image>
                  </div>
                </div>
                <div className="bg-white flex justify-center items-center ">
                  {" "}
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-8 "
                    >
                      <h1 className="font-bold text-primary  text-3xl ">
                        Sign In
                      </h1>
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Email" {...field} />
                            </FormControl>{" "}
                            <FormControl className="relative">
                              <>
                                <Input
                                  type="password"
                                  placeholder="Password"
                                  {...field}
                                  className="relative"
                                  id="password"
                                ></Input>
                              </>
                            </FormControl>{" "}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full">
                        Sign In
                      </Button>
                      <p className="text-sm">
                        Dont have an account Yet!{" "}
                        <span className="text-blue-400 hover:underline cursor-pointer ">
                          Sign Up!
                        </span>
                      </p>
                    </form>
                  </Form>
                </div>
              </DialogContent>
            </Dialog>
            {/*signup  */}
            <Dialog>
              <DialogTrigger className="bg-primary text-white h-full rounded-lg py-1 px-3 text-lg font-semibold">
                {" "}
                Sign Up{" "}
              </DialogTrigger>
              <DialogContent className="grid grid-cols-2 p-0 gap-0 min-h-screen max-w-3xl rounded-xl overflow-hidden ">
                <div className=" hidden md:flex overflow-hidden relative">
                  <Image
                    src={"/auth-food-bg.jpg"}
                    alt="auth-img"
                    width={300}
                    height={300}
                    className="object-cover w-full h-screen overflow-hidden opacity-50"
                  ></Image>
                  <div className="flex flex-col justify-center items-center gap-8 absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
                    {" "}
                    <Image
                      src={"/food-logo.svg"}
                      alt="auth-img"
                      width={300}
                      height={300}
                    ></Image>
                  </div>
                </div>
                <div className="bg-white flex justify-center items-center ">
                  {" "}
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-8 "
                    >
                      <h1 className="font-bold text-primary  text-3xl ">
                        Sign Up
                      </h1>
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Full Name" {...field} />
                            </FormControl>
                            <FormControl>
                              <Input placeholder="Username" {...field} />
                            </FormControl>{" "}
                            <FormControl>
                              <Input placeholder="Email" {...field} />
                            </FormControl>{" "}
                            <FormControl className="relative">
                              <>
                                <Input
                                  type="password"
                                  placeholder="Password"
                                  {...field}
                                  className="relative"
                                  id="password"
                                ></Input>
                              </>
                            </FormControl>{" "}
                            <FormControl>
                              <Input
                                placeholder="Confirm Password"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex items-center  space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I accept terms and conditions
                        </label>
                      </div>
                      <Button type="submit" className="w-full">
                        Sign Up
                      </Button>
                      <p className="text-sm">
                        Already have an account?{" "}
                        <span className="text-blue-400 hover:underline cursor-pointer ">
                          Sign In!
                        </span>
                      </p>{" "}
                    </form>
                  </Form>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="relative">
            <Link href="/cart" passHref>
              <ShoppingBasket className="hover:text-primary" />
            </Link>
            <span className="absolute -top-4 -right-4 items-center flex justify-center rounded-full bg-primary font-bold text-white w-6 h-6">
              3
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
            <Button className="w-full">Login</Button>
            <Button className="w-full">Signup</Button>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
