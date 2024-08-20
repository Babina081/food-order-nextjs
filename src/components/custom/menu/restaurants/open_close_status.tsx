import React from "react";

const OpenCloseStatus = () => {
  return (
    <ul className="flex flex-col gap-3 ">
      <li>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            name=""
            value="open"
            id="open"
            className="w-4 h-4"
          />
          <label htmlFor="open">Available</label>
        </div>
      </li>
      <li>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            name=""
            value="closed"
            id="closed"
            className="w-4 h-4"
          />
          <label htmlFor="closed">Unavailable</label>
        </div>
      </li>
    </ul>
  );
};

export default OpenCloseStatus;
