import BannerSection from "@/components/custom/home/banner_section";
import MenuSection from "@/components/custom/home/menu_section";
import ProgressBar from "@/components/custom/progress_bar";
import ProgressCircle from "@/components/custom/progress_circle";
import React from "react";
// import axios from "axios";

// const getMenuItems = async () => {
//   const response = await axios.get("http://localhost:3000/api/v1/menu");
//   console.log(response.data);
// };
export default async function HomePage() {
  // const menu = await getMenuItems();
  return (
    <div>
      <ProgressBar />
      <ProgressCircle />
      <BannerSection />
      <MenuSection />
    </div>
  );
}
