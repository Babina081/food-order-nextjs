import React from "react";

interface OpenCloseStatusProps {
  onFilterChange: (isAvailable: boolean | null) => void;
}

const OpenCloseStatus = ({ onFilterChange }: OpenCloseStatusProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "open") {
      onFilterChange(true);
    } else if (value === "closed") {
      onFilterChange(false);
    } else {
      onFilterChange(null); // Clear filter if "all" is selected
    }
  };
  return (
    <ul className="flex flex-col gap-3 ">
      <li>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            name="availability"
            value="open"
            id="open"
            className="w-4 h-4"
            onChange={handleChange}
          />
          <label htmlFor="open">Available</label>
        </div>
      </li>
      <li>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            name="availability"
            value="closed"
            id="closed"
            className="w-4 h-4"
            onChange={handleChange}
          />
          <label htmlFor="closed">Unavailable</label>
        </div>
      </li>
      <li>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            name="availability"
            value="all"
            id="all"
            className="w-4 h-4"
            onChange={handleChange}
          />
          <label htmlFor="all">All</label>
        </div>
      </li>
    </ul>
  );
};

export default OpenCloseStatus;
