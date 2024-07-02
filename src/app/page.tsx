import CarouselBannerImage from "./(home)/components/carousel-banner-image";

import BannerSection from "@/components/custom/home/banner_section";
import MenuSection from "@/components/custom/home/menu_section";
import ProgressBar from "@/components/custom/progress_bar";
import ProgressCircle from "@/components/custom/progress_circle";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <ProgressCircle />
      <BannerSection />
      <MenuSection />
    </>
  );
}
