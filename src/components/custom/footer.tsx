import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";


const Footer = () => {
  return (
    <footer className="container text-white flex-col flex text-center ">
      <div className="container bg-primary pb-2 pt-8  grid md:grid-cols-3 text-center   rounded-t-3xl gap-8 md:gap-0">
        <div className="flex flex-col gap-4 justify-between">
          <p className="text-sm text-justify">
            <span className="font-bold">Food Order</span> is a convenient and
            easy-to-use web application that aims to transform your food
            ordering experience. Our platform bridges the gap between you and a
            vast selection of local restaurants and eateries, offering a diverse
            range of culinary options right at your fingertips. With a
            user-friendly interface, you can effortlessly browse menus, place
            orders, and have delicious meals delivered directly to your
            location.{" "}
          </p>
          <>
            <div className="flex    border-t-2 border-b-2 border-white pt-4 pb-4 justify-evenly  items-center">
              <Link
                href="#"
                className="hover:bg-slate-100 hover:text-primary hover:opacity-50 transition-all ease-in-out duration-1000 transform  hover:scale-125 p-2 rounded-full"
              >
                <Facebook className="h-8 w-8" />
              </Link>
              <Link
                href="#"
                className="hover:bg-slate-100 hover:text-primary hover:opacity-50 transition-all ease-in-out duration-1000 transform  hover:scale-125 p-2 rounded-full"
              >
                <Instagram className="h-8 w-8" />
              </Link>
              <Link
                href="#"
                className="hover:bg-slate-100 hover:text-primary hover:opacity-50 transition-all ease-in-out duration-1000 transform  hover:scale-125 p-2 rounded-full"
              >
                <Twitter className="h-8 w-8" />
              </Link>
              <Link
                href="#"
                className="hover:bg-slate-100 hover:text-primary hover:opacity-50 transition-all ease-in-out duration-1000 transform  hover:scale-125 p-2 rounded-full "
              >
                <Linkedin className="h-8 w-8" />
              </Link>
            </div>
            <div className=" border-white text-center md:text-left ">
              <h1 className="font-bold text-lg ">Download From</h1>
              <div className="flex items-center justify-center md:justify-start">
                <Button className="bg-white border-2 b text-primary hover:bg-primary hover:border-white hover:text-white mr-4 font-extrabold  hover:scale-110 transition-all ease-out delay-150 duration-700">
                  Google Play
                </Button>
                <Button className="bg-white border-2 b text-primary hover:bg-primary hover:border-white hover:text-white font-extrabold  hover:scale-110 transition-all ease-in-out delay-150 duration-700">
                  App Store
                </Button>
              </div>
            </div>
          </>
        </div>
        <div className="flex items-center flex-col">
          <h1 className="font-bold text-lg border-b-4 border-white">
            Quick Links
          </h1>
          <ul className="grid grid-cols-2 items-center text-center md:flex md:flex-col font-medium  pt-4 cursor-pointer gap-4">
            <li className="hover:border-fade transition hover:duration-300 ease-in-out   hover:-translate-y-2 hover:scale-125   hover:rounded-xl  ">
              <Link href="#">FAQs</Link>
            </li>

            <li className="transition hover:duration-300 ease-in-out    hover:-translate-y-2 hover:scale-125   hover:rounded-xl   ">
              <Link href="#">About Us</Link>
            </li>
            <li className="transition hover:duration-300 ease-in-out    hover:-translate-y-2 hover:scale-125   hover:rounded-xl  ">
              <Link href="#">Contact Us</Link>
            </li>
            <li className="transition hover:duration-300 ease-in-out    hover:-translate-y-2 hover:scale-125   hover:rounded-xl  ">
              <Link href="#">Privacy Policy</Link>
            </li>
            <li className="transition hover:duration-300 ease-in-out    hover:-translate-y-2 hover:scale-125   hover:rounded-xl  ">
              <Link href="#">Terms And Conditions</Link>
            </li>
            <li className="transition hover:duration-300 ease-in-out    hover:-translate-y-2 hover:scale-125   hover:rounded-xl  ">
              <Link href="#">Cancellation Policy</Link>
            </li>
            <li className="transition hover:duration-300 ease-in-out    hover:-translate-y-2 hover:scale-125   hover:rounded-xl  ">
              <Link href="#">Shipping Policy</Link>
            </li>
            <li className="transition hover:duration-300 ease-in-out    hover:-translate-y-2 hover:scale-125   hover:rounded-xl  ">
              <Link href="#">Refund Policy</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center  flex-col">
          {" "}
          <h1 className="font-bold text-lg border-b-4 border-white">
            Contact Info
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.681518425699!2d83.98369517427567!3d28.21698720283188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995944d76693d11%3A0xf1f006d89be13640!2sNew%20Rd%2C%20Pokhara%2033700!5e0!3m2!1sen!2snp!4v1719243319513!5m2!1sen!2snp"
            className="w-full  mt-4  rounded-xl object-center object-cover border-1 border-white"
            loading="lazy"
          ></iframe>
          <ul className=" flex flex-col font-medium gap-2 pt-4  mx-auto ">
            <li className=" flex  gap-2 p-2 items-center justify-start">
              <MapPin className="h-5 w-5 transform  animateMapIcon" />
              <>NewRoad, Pokhara</>
            </li>
            <li className=" flex  gap-2 p-2 items-center justify-start">
              <Mail className="h-5 w-5" />
              <>foodorder@gmail.com</>
            </li>
            <li className="  flex  gap-2 p-2 items-center justify-start">
              <Phone className="h-5 w-5" />
              <>(+977) 9812345678</>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black w-full pt-2 pb-2 text-primary">
        <h1 className="font-semibold text-lg">
          &copy; 2024 All Rights Reserved.{" "}
        </h1>
        <p className="text-sm ">
          Created By:{" "}
          <span className="uppercase animate-pulse">Babina Gurung</span>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
