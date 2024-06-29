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

import Link from "next/link";
import Image from "next/image";
import { ChevronsDown, ImageIcon, Plus, Timer } from "lucide-react";

const RestaurantDetails = ({
  params,
}: {
  params: { restaurantId: string };
}) => {
  return (
    <section className="container relative flex flex-col">
      <div className="bg-rose-300 flex flex-row  justify-between items-end h-auto p-10">
        <div className="flex flex-col gap-2 text-white">
          <h1 className="text-3xl font-bold ">ABC restaurant</h1>
          <p className="text-xl ">
            abc location -{" "}
            <span>
              <Link href="#">Get Direction</Link>
            </span>
          </p>
          <p className="text-lg">Min Order : Rs. 100</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-gray-500 ">
            <ImageIcon /> View Photo
          </Button>
          <div className="bg-green-500 flex items-center justify-center p-2 text-white rounded-lg">
            <Timer /> Available
          </div>
        </div>
      </div>

      <>
        <Tabs
          defaultValue="momo"
          className="w-full mt-4 py-10 bg-rose-300 gap-2 p-2"
        >
          {" "}
          <div className="overflow-x-auto flex flex-nowrap ">
            <TabsList className="w-full flex gap-4">
              <TabsTrigger value="momo">Momo</TabsTrigger>
              <TabsTrigger value="chowmin">Chowmin</TabsTrigger>
              <TabsTrigger value="chowmin">Chowmin</TabsTrigger>{" "}
              <TabsTrigger value="chowmin">Chowmin</TabsTrigger>{" "}
              <TabsTrigger value="chowmin">Chowmin</TabsTrigger>{" "}
              <TabsTrigger value="chowmin">Chowmin</TabsTrigger>{" "}
              <TabsTrigger value="chowmin">Chowmin</TabsTrigger>{" "}
              <TabsTrigger value="chowmin">Chowmin</TabsTrigger>{" "}
              <TabsTrigger value="chowmin">Chowmin</TabsTrigger>{" "}
              <TabsTrigger value="chowmin">Chowmin</TabsTrigger>{" "}
              <TabsTrigger value="chowmin">Chowmin</TabsTrigger>{" "}
              <TabsTrigger value="chowmin">Chowmin</TabsTrigger>{" "}
              <TabsTrigger value="chowmin">Chowmin</TabsTrigger>{" "}
              <TabsTrigger value="chowmin">Chowmin</TabsTrigger>{" "}
              <TabsTrigger value="chowmin">Chowmin</TabsTrigger>{" "}
              <TabsTrigger value="chowmin">Chowmin</TabsTrigger>{" "}
              <TabsTrigger value="chowmin">Chowmin</TabsTrigger>{" "}
              <TabsTrigger value="chowmin">Chowmin</TabsTrigger>
            </TabsList>
            <TabsContent value="momo">
              Make changes to your momo here.
            </TabsContent>
            <TabsContent value="chowmin">Change your chowmin here.</TabsContent>
          </div>
        </Tabs>
      </>
      <div className="grid grid-cols-2  gap-8 py-10">
        <div className="bg-red-100 flex flex-col gap-4 p-2 flex-grow">
          <Collapsible>
            <CollapsibleTrigger className="flex justify-between items-center w-full">
              <h1 className="text-3xl font-bold cursor-pointer">Momo</h1>
              <ChevronsDown className="hover:animate-bounce" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="">Item</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Order</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CollapsibleContent>
          </Collapsible>

          {/* chowmin */}
          <Collapsible>
            <CollapsibleTrigger className="flex justify-between items-center w-full">
              <h1 className="text-3xl font-bold cursor-pointer">Momo</h1>
              <ChevronsDown className="hover:animate-bounce" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="">Item</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Order</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CollapsibleContent>
          </Collapsible>

          {/*  */}
          <Collapsible>
            <CollapsibleTrigger className="flex justify-between items-center w-full">
              <h1 className="text-3xl font-bold cursor-pointer">Momo</h1>
              <ChevronsDown className="hover:animate-bounce" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="">Item</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Order</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Summer Combo 1 Tandoori Chicken Half - 1 Plain Kulcha - 2
                      Butter Roti - 2 Mughlai Chicken
                    </TableCell>
                    <TableCell> Rs. 1275</TableCell>
                    <TableCell>
                      <Button className="rounded-full h-10 w-10">
                        <Plus />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="bg-green-100 flex flex-col   gap-8 justify-center flex-grow">
          <div className="w-full h-auto bg-primary p-2 text-center text-white">
            <h1 className="text-3xl font-bold ">Order Summary</h1>
          </div>
          <div className="flex flex-col gap-2 w-full px-6 justify-center h-auto">
            <Button className="w-full text-xl">Checkout</Button>
            <span>Delivery Charge will be calculated on next step</span>
          </div>
        </div>
      </div>
    </section>
  );
};
//
export default RestaurantDetails;
