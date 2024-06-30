"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";

export type SearchProps = {
  onSearch: (value: string) => void;
};

const SearchForm = ({ onSearch }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <form className="p-4">
      <div className="bg-white border-2 shadow p-2 relative rounded-xl flex">
        <input
          type="text"
          placeholder="Look for Restaurants!"
          value={searchQuery}
          onChange={handleSearch}
          className=" border-white outline-none border-0 w-full rounded-xl p-2"
        />
        <span className="w-auto flex justify-end items-center text-gray-500 p-2">
          <Search />
        </span>
      </div>
    </form>
  );
};

export default SearchForm;
