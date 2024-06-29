"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const CarouselBannerImage = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel className="overflow-hidden"
      plugins={[plugin.current]}
      orientation="vertical"
      opts={{
        align: "start",
        loop: true,
      }}
      // plugins={[
      //   Autoplay({
      //     delay: 2000,
      //   }),
      // ]}
    >
      <CarouselContent>
        <CarouselItem className="w">
          <Image
            src="/burger.svg"
            alt="burger"
            width={500}
            height={500}
          ></Image>
        </CarouselItem>
        <CarouselItem>
          {" "}
          <Image
            src="/burger.svg"
            alt="burger"
            width={500}
            height={500}
          ></Image>
        </CarouselItem>
        <CarouselItem>
          {" "}
          <Image
            src="/burger.svg"
            alt="burger"
            width={500}
            height={500}
          ></Image>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselBannerImage;
