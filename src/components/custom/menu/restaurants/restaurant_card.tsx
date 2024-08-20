"use client";
import { RestaurantInfoType } from "@/app/(home)/restaurants/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Restaurant } from "@/data/restaurants_list";
import { Bike, ShoppingBagIcon, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type RestaurantPropsTypes = { resInfo: RestaurantInfoType };

const RestaurantCard = ({ resInfo: initialResInfo }: RestaurantPropsTypes) => {
  const [resInfo, setResInfo] = useState(initialResInfo);
  const toggleFavorite = () => {
    setResInfo((prevState) => ({
      ...prevState,
      isFavorite: !prevState.isFavorite,
    }));
    console.log(resInfo.isFavorite === true ? "yes" : "no");
  };
  return (
    <Card className="border-none  rounded-xl relative overflow-hidden shadow-sm shadow-primary/30">
      <span className="absolute  rounded-tr-lg rounded-br-lg bg-green-700 top-6    p-3  h-7 flex flex-col items-center justify-center text-sm text-white uppercase font-extrabold">
        {resInfo.isAvailable === true ? "Avialable" : "Closed"}
      </span>
      <>
        <CardHeader className="flex  items-start justify-center p-2 absolute bottom-16 l-[50%]  text-white ">
          {" "}
          <h2 className="text-sm md:text-xs lg:text-sm font-bold  ">
            {resInfo.name}
          </h2>
          <p className="text-xs lg:text-sm font-normal ">{resInfo.address}</p>
        </CardHeader>
        <CardContent className="p-0">
          <Image
            alt={resInfo.name}
            src="/restaurant.png"
            width={150}
            height={150}
            className="h-full w-full object-cover "
          ></Image>
        </CardContent>
      </>
      <CardContent className="h-16  flex justify-between items-center p-2 ">
        {/* <ul className="flex flex-col   gap-1  ">
          {resInfo.services.map((service, s) => {
            return (
              <li
                key={s}
                className="text-sm capitalize flex  gap-1   items-center"
              >
                {service === "delivery" && <Bike className="h-4 w-4" />}
                {service === "takeaway" && (
                  <ShoppingBagIcon className="h-4 w-4" />
                )}
                {service}
              </li>
            );
          })}
        </ul> */}
        <Button className="bg-white border-2 border-primary text-primary text-sm font-extrabold hover:border-none hover:text-white relative">
          <Link href={"/restaurants/restaurant/" + resInfo.id}>
            Menu
            <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75 "></span>
              <span className=" relative inline-flex rounded-full h-3 w-3 bg-primary "></span>
            </span>
          </Link>
        </Button>
        {/* <MenuButton onClick={() => console.log(99)}></MenuButton> */}
        <Button
          className="bg-gray-2100 rounded-full  hover:bg-gray-200"
          onClick={toggleFavorite}
        >
          {resInfo.isFavorite === false ? (
            <Star className="text-black cursor-pointer    hover:-scale-x-100 transition-all duration-1000 ease-in-out hover:animate-spin hover:stroke-black" />
          ) : (
            <Star className="text-primary  stroke-primary  fill-primary  cursor-pointer hover:-scale-x-100 transition-all duration-1000  ease-in-out hover:animate-spin hover:stroke-primary" />
          )}
        </Button>
        {/* <FavButton isFavorite={resInfo.isFavorite}></FavButton> */}
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
