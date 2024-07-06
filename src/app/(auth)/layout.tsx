import React from "react";

import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container border-2 border-black w-full max-w-6xl min-h-[100vh] grid grid-cols-2 gap-2 overflow-hidden rounded-xl py-10 ">
      <div className=" h-full w-full">
        <Image
          src={"/auth-food-bg.jpg"}
          alt="food image"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        ></Image>
      </div>
      <>{children}</>
    </div>
  );
};

export default AuthLayout;
