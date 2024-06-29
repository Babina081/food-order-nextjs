import { useParams } from "next/navigation";
import React from "react";

const RestaurantDetails = ({
  params,
}: {
  params: { restaurantId: string };
}) => {
  return <div>RestaurantDetails: {params.restaurantId}</div>;
};

export default RestaurantDetails;
