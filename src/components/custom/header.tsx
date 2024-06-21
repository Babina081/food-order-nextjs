import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  return (
    <header className="bg-white">
      <nav className="container py-5">
        <div className="flex items-center space-x-4">
          <Image src="food-logo.svg" alt="logo" height={90} width={130}></Image>
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
