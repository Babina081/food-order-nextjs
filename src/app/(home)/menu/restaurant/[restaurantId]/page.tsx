import { Button } from "@/components/ui/button";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Link from "next/link";
import {
  ChevronsDown,
  ChevronsUp,
  ImageIcon,
  Map,
  Plus,
  Timer,
} from "lucide-react";
import { restaurantsInfo } from "@/data/restaurants_list";
import Image from "next/image";

const RestaurantDetails = ({
  params,
}: {
  params: { restaurantId: string };
}) => {
  const restaurant = restaurantsInfo.find(
    (restaurant) => restaurant.id === Number(params?.restaurantId)
  );

  if (!restaurant) {
    return <p>Restaurant not found.</p>;
  }

  const { name, address, minOrder, location, menuLists } = restaurant;

  return (
    <section className="container relative flex flex-col">
      <div
        className=" text-black  flex flex-row  justify-between items-end h-auto  rounded-xl pt-24 pb-2 "
        style={{
          backgroundImage: "url('/food-restro.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(5px)",
        }}
      >
        <div className="flex flex-col gap-2 text-primary p-2 justify-start items-start">
          <h1 className="text-xl md:text-3xl font-bold ">{name}</h1>
          <p className="text-sm md:text-lg ">
            {address} - <br />
            <span className=" uppercase  rounded-lg text-lg  font-bold ">
              <Link
                href={location}
                className="text-white hover:text-primary transition-all duration-500 ease-in-out hover:underline flex gap-2 justify-start items-center"
              >
                <Map className="h-5 w-5" />
                Get Direction
              </Link>
            </span>
          </p>
          <p className="text-[12px] md:text-sm">Min Order : Rs. {minOrder}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 p-2">
          <Dialog>
            <DialogTrigger className="bg-gray-400 rounded-lg flex items-center justify-center p-2 text-white gap-2">
              {" "}
              <ImageIcon /> View Photo
            </DialogTrigger>

            <DialogContent className=" bg-green-500">
              <div className="carousel ">
                <div className="carousel__item carousel__item--left">
                  <Image
                    width={300}
                    height={400}
                    src={"/food1.png"}
                    alt="dog"
                  />
                  <div className="carousel__text">
                    <h3>Cute Puppy</h3>
                    <p> it is cute?!</p>
                  </div>
                </div>
                <div className="carousel__item carousel__item--main">
                  <Image
                    width={300}
                    height={400}
                    src={"/food1.png"}
                    alt="dog"
                  />
                  <div className="carousel__text">
                    <h3>Cute Puppy</h3>
                    <p> it is cute?!</p>
                  </div>
                </div>
                <div className="carousel__item carousel__item--right">
                  <Image
                    width={300}
                    height={400}
                    src={"/food1.png"}
                    alt="dog"
                  />
                  <div className="carousel__text">
                    <h3>Cute Puppy</h3>
                    <p> it is cute?!</p>
                  </div>
                </div>
                <div className="carousel__item">
                  <Image
                    width={300}
                    height={400}
                    src={"/food1.png"}
                    alt="dog"
                  />
                  <div className="carousel__text">
                    <h3>Cute Puppy</h3>
                    <p> it is cute?!</p>
                  </div>
                </div>
                <div className="carousel__item">
                  <Image
                    width={300}
                    height={400}
                    src={"/food1.png"}
                    alt="dog"
                  />
                  <div className="carousel__text">
                    <h3>Cute Puppy</h3>
                    <p> it is cute?!</p>
                  </div>
                </div>
                <div className="carousel__item">
                  <Image
                    width={300}
                    height={400}
                    src={"/food1.png"}
                    alt="dog"
                  />
                  <div className="carousel__text">
                    <h3>Cute Puppy</h3>
                    <p> it is cute?!</p>
                  </div>
                </div>
                <div className="carousel__btns">
                  <button className="carousel__btn" id="leftBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z"
                      />
                    </svg>
                  </button>
                  <button className="carousel__btn" id="rightBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <div className="bg-green-500 flex items-center justify-center p-2 text-white rounded-lg gap-2">
            <Timer /> Available
          </div>
        </div>
      </div>

      <>
        <Tabs defaultValue="momo" className="w-full  py-4 gap-2 ">
          {" "}
          <div className="overflow-x-auto flex flex-nowrap ">
            <TabsList className="w-full flex gap-6 md:gap-4 font-bold text-black ">
              {menuLists.map((menu, id) => (
                <TabsTrigger
                  value={menu.category}
                  key={id}

                  className="border-1 border-black 
                  border-transparent hover:text-primary transition-all duration-300 ease-in-out text-xl h-full"
                >
                  {id}
                  {menu.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* {menuLists.map((menu, id) => (
              <TabsContent value={menu.category} key={id}>{menu.category}</TabsContent>
            ))} */}
          </div>
        </Tabs>
      </>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 py-4">
        <div className="md:row-span-2 rounded-2xl flex flex-col gap-4 p-2 flex-grow border-2 border-primary shadow-md shadow-white/30">
          {menuLists.map((menu, id) => {
            return (
              <>
                <Collapsible>
                  <CollapsibleTrigger className="flex justify-between items-center w-full p-4 bg-transparent">
                    <h1 className="text-lg md:text-xl font-bold cursor-pointer">
                      {menu.category}
                    </h1>

                    <ChevronsDown className="hover:animate-bounce" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="">Image</TableHead>
                          <TableHead className="">Item</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Order</TableHead>
                        </TableRow>
                      </TableHeader>
                      {menu.items.map((menu_item, i) => {
                        return (
                          <TableBody key={i}>
                            <TableRow className="w-full">
                              <TableCell className="font-medium w-1/6">
                                <Image
                                  src={"/menu_item.image"}
                                  alt="menu item image"
                                  height={100}
                                  width={100}
                                ></Image>
                              </TableCell>
                              <TableCell className="font-medium">
                                {menu_item.name}
                              </TableCell>
                              <TableCell className="w-1/6">
                                {" "}
                                {menu_item.price}
                              </TableCell>
                              <TableCell className="w-1/6">
                                <Button className="rounded-full ">
                                  <Plus className="h-full w-full font-bold" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        );
                      })}
                    </Table>
                  </CollapsibleContent>
                </Collapsible>
              </>
            );
          })}
        </div>
        <div className="md:row-span-1 bg-green-100  md:flex md:flex-col flex-row   gap-8 justify-center flex-grow ">
          <div className="w-full h-auto bg-primary p-2 text-center text-white">
            <h1 className="text-3xl font-bold ">Order Summary</h1>
          </div>
          <div className="flex flex-col gap-2 w-full px-8 justify-center h-auto my-4">
            <Button className="w-full text-xl">Checkout</Button>
            <span className="text-sm md:text-xl text-center ">
              Delivery Charge will be calculated on next step
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
//
export default RestaurantDetails;
