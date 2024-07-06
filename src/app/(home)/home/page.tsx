import BannerSection from "@/components/custom/home/banner_section";
import MenuSection from "@/components/custom/home/menu_section";
import ProgressBar from "@/components/custom/progress_bar";
import ProgressCircle from "@/components/custom/progress_circle";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <ProgressBar />
      <ProgressCircle />
      <BannerSection />
      <MenuSection />
    </div>
  );
};

export default HomePage;
