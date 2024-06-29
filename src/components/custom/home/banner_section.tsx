"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

const BannerSection = () => {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    const words = ["You Call ! ", "We Deliver ! "];
    let mainTimeline = gsap.timeline({
      repeat: -1,
    });
    words.forEach((word) => {
      let textTimeline = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 3,
      });

      textTimeline.to("#typewriter", {
        text: word,
        duration: 1,
        onUpdate: () => {
          cusrsorTimeline.restart();
          cusrsorTimeline.pause();
        },
        onComplete: () => {
          cusrsorTimeline.play();
        },
      });

      mainTimeline.add(textTimeline);
    });

    // blinking cursor
    let cusrsorTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.8,
    });

    cusrsorTimeline
      .to("#typewriter-cursor", {
        opacity: 1,
        duration: 0,
      })
      .to("#typewriter-cursor", {
        opacity: 0,
        duration: 0,
        delay: 0.8,
      });
  }, []);

  return (
    <section className=" pt-[3rem] pb-[3rem] relative z-0 container">
      <div className="flex flex-col md:flex-row items-center justify-between overflow-hidden gap-4 w-full">
        <div className=" text-center md:text-left  w-auto md:w-2/4  lg:w-[60%] ">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black font-sans pr-4">
            Delivering satisfaction everyday
            <br />
            <span className="text-primary" id="typewriter"></span>
            <span id="typewriter-cursor" className="text-primary">
              |
            </span>
          </h1>
          <p className="text-lg lg:text-2xl mt-8 max-w-lg leading-snug">
            Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
          </p>
          <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">
            Order Now
          </Button>
        </div>

        <div className=" w-auto md:w-2/4  lg:w-[40%]">
          {/* <CarouselBannerImage /> */}
          <Image
            src="/burger.svg"
            alt="burger"
            width={400}
            height={400}
            className="w-full h-full  "
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
