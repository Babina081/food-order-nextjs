import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-white">
      <div className="container flex items-center justify-between py-24">
        <div>
          <h1 className="text-7xl font-black font-sans ">
            Delivering satisfaction everyday
            <br />
            <span className="text-primary">You call, we deliver !</span>
          </h1>
          <p className="text-2xl mt-8 max-w-lg leading-snug">
            Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
          </p> 
          <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">
            Get Your Pizza Now
          </Button>
        </div>
        <div>
          <Image
            src="/burger.svg"
            alt="burger"
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
    </section>
  );
}
