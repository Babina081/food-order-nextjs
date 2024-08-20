import React from "react";

import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container  w-full max-w-6xl h-screen grid grid-cols-1 sm:grid-cols-2  rounded-xl ">
      <div className=" hidden sm:flex overflow-hidden relative">
        <Image
          src={"/auth-food-bg.jpg"}
          alt="auth-img"
          width={300}
          height={300}
          className="object-cover w-full h-screen overflow-hidden opacity-50 py-10"
        ></Image>
        <div className="flex flex-col justify-center items-center gap-8 absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
          {" "}
          <Image
            src={"/food-logo.svg"}
            alt="auth-img"
            width={300}
            height={300}
          ></Image>
        </div>
      </div>
      <div className=" w-full max-w-3xl ">
        {children}
        </div>
    </div>
  );
};

export default AuthLayout;
