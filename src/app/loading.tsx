"use client";
import React, { useEffect, useState } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
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
      )}
    </>
  );
}
