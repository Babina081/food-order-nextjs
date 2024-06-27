"use cient";
import React from "react";

const Loading = () => {
  return (
    <div className="load  h-[100vh] w-[100vw] flex flex-col justify-center items-center overflow-hidden">
      <div className="hamburger">
        <div className="top-bun"></div>
        <div className="pickle"></div>
        <div className="pickle"></div>
        <div className="tomato">
          <div></div>
        </div>
        <div className="tomato">
          <div></div>
        </div>

        <div className="cheese"></div>
        <div className="cheese"></div>

        <div className="beef"></div>

        <div className="bottom-bun"></div>
      </div>
      <h1 className="ham-h1">Loading...</h1>
    </div>
  );
};

export default Loading;
