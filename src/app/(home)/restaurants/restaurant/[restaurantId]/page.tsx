"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";
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
  CircleX,
  ImageIcon,
  Map,
  Plus,
  Timer,
} from "lucide-react";
import { restaurantsInfo } from "@/data/restaurants_list";
import Image from "next/image";
import { FaSortDown, FaSortUp } from "react-icons/fa";

const RestaurantDetails = ({
  params,
}: {
  params: { restaurantId: string };
}) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [orderItems, setOrderItems] = useState<{
    [key: string]: { quantity: number; price: number };
  }>(() => {
    // Get initial state from local storage
    const savedOrderItems = localStorage.getItem("orderItems");
    return savedOrderItems ? JSON.parse(savedOrderItems) : {};
  });
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const restaurant = restaurantsInfo.find(
    (restaurant) => restaurant.id === Number(params?.restaurantId)
  );

  // Save orderItems to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("orderItems", JSON.stringify(orderItems));
  }, [orderItems]);

  if (!restaurant) {
    return <p>Restaurant not found.</p>;
  }

  const { name, address, minOrder, locationUrl, menuLists } = restaurant;

  // Function to toggle the open stateconst handleToggle = (category: string) => {
  const handleToggle = (category: string) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const handleAddToOrder = (itemName: string, price: number) => {
    setOrderItems((prevOrder) => {
      const updatedOrder = { ...prevOrder };
      if (updatedOrder[itemName]) {
        updatedOrder[itemName].quantity += 1;
      } else {
        updatedOrder[itemName] = { quantity: 1, price };
      }
      return updatedOrder;
    });
  };
  const handleIncreaseQuantity = (itemName: string) => {
    setOrderItems((prevOrder) => ({
      ...prevOrder,
      [itemName]: {
        ...prevOrder[itemName],
        quantity: prevOrder[itemName].quantity + 1,
      },
    }));
  };

  const handleDecreaseQuantity = (itemName: string) => {
    setOrderItems((prevOrder) => {
      const updatedOrder = { ...prevOrder };
      if (updatedOrder[itemName].quantity > 1) {
        updatedOrder[itemName].quantity -= 1;
      } else {
        delete updatedOrder[itemName];
      }
      return updatedOrder;
    });
  };

  const calculateTotal = () => {
    return Object.values(orderItems).reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const handleDeleteItem = (itemName: string) => {
    setOrderItems((prevOrder) => {
      const updatedOrder = { ...prevOrder };
      delete updatedOrder[itemName];
      return updatedOrder;
    });
  };

  const scrollToSection = (category: string) => {
    const section = sectionRefs.current[category];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      // Open the collapsible
      setOpenSections((prevState) => ({
        ...prevState,
        [category]: true,
      }));
    }
  };

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
                href={locationUrl}
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
            {/* image gallery */}
            <DialogContent className=" bg-green-500" id="dialog-description">
              <DialogTitle className="hidden">
                Are you absolutely sure?
              </DialogTitle>
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
                  onClick={() => scrollToSection(menu.category)}
                >
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
        <div className="md:row-span-2 rounded-2xl flex flex-col gap-4 p-2 flex-grow border border-primary shadow-md shadow-white/30">
          {menuLists.map((menu, id) => {
            return (
              <div
                key={id}
                ref={(el) => {
                  sectionRefs.current[menu.category] = el;
                }}
              >
                <Collapsible
                  key={menu.category}
                  open={openSections[menu.category]}
                >
                  <CollapsibleTrigger
                    className="flex justify-between items-center w-full py-2 bg-transparent h-full"
                    // onClick={() => scrollToSection(menu.category)}
                  >
                    <h1 className="text-lg md:text-xl font-bold cursor-pointer">
                      {menu.category}
                    </h1>

                    <div>
                      {" "}
                      {openSections[menu.category] ? (
                        <FaSortDown />
                      ) : (
                        <FaSortUp />
                      )}
                    </div>
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
                                  src={"/food1.png"}
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
                                <Button
                                  className="rounded-full "
                                  onClick={() =>
                                    handleAddToOrder(
                                      menu_item.name,
                                      menu_item.price
                                    )
                                  }
                                >
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
              </div>
            );
          })}
        </div>
        <div className="md:row-span-1   md:flex md:flex-col flex-row    justify-center flex-grow border border-primary shadow-md shadow-white/30 rounded-2xl overflow-hidden">
          <div className="w-full h-auto bg-primary p-2 text-center text-white">
            <h1 className="text-3xl font-bold ">Order Summary</h1>
          </div>
          <div className="flex flex-col gap-2 w-full px-8 justify-center h-auto ">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">Item</TableHead>
                  <TableHead className="text-center">Price</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(orderItems).map(
                  ([itemName, { quantity, price }]) => (
                    <TableRow key={itemName}>
                      <TableCell className="text-left">{itemName}</TableCell>
                      <TableCell className="text-center">Rs. {price}</TableCell>
                      <TableCell className="text-center flex items-center justify-center space-x-4">
                        {" "}
                        <Button
                          onClick={() => handleDecreaseQuantity(itemName)}
                          className="text-sm px-2 py-1 border rounded"
                        >
                          -
                        </Button>
                        <span>{quantity}</span>
                        <Button
                          onClick={() => handleIncreaseQuantity(itemName)}
                          className="text-sm px-2 py-1 border rounded"
                        >
                          +
                        </Button>
                      </TableCell>
                      <TableCell className="text-right">
                        Rs. {quantity * price}
                      </TableCell>
                      <TableCell className="text-center w-5">
                        <Button
                          onClick={() => handleDeleteItem(itemName)}
                          className="text-sm    text-black bg-transparent cursor-pointer hover:text-red-500 hover:bg-transparent"
                        >
                          <CircleX />
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
            <div className="flex justify-between font-bold text-xl px-4">
              <span>Total:</span>
              <span>Rs. {calculateTotal()}</span>
            </div>
            <Button className=" text-xl ">Checkout</Button>
            <span className="text-sm  text-center ">
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
