import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";
import useRestaurantMenuData from "../../Hooks/useRestaurantMenuData";
import RestaurantCategory from "../RestaurantCategory";
import ShimmerMenuItems from "../ShimmerMenuItems/ShimmerMenuItems";
import { FaRegStar } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState();
  const { resId } = useParams();
  const url = MENU_API + resId;
  const restaurantData = useRestaurantMenuData(url);
  const categories =
    restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  if (categories === undefined) return <ShimmerMenuItems />;
  const restaurantDetails = restaurantData.cards[2].card.card.info;
  console.log(restaurantDetails);
  console.log("Hello");
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-7/12 self-center shadow-2xl p-4 rounded-xl mb-2">
        <div className="flex flex-col  border-b">
          <h1 className="text-left font-bold text-lg">
            {restaurantDetails.name}
          </h1>
          <div className="mt-4 mb-4">
            <div className="flex  text-gray-700 items-center font-semibold ">
              <FaRegStar className="text-green-700" />
              <p>{restaurantDetails.avgRatingString}</p>
              <p>~</p>
              <p>({restaurantDetails.totalRatingsString})</p>
            </div>
            <div className="text-left">
              <p className="text-orange-500 text-sm font-semibold">
                {restaurantDetails.cuisines.join(",")}
              </p>
              <p className="text-sm font-semibold">
                Outlet : {restaurantDetails.areaName}
              </p>
              <p className="text-sm font-semibold">
                {restaurantDetails.sla.slaString}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-1">
          <IoIosBicycle />
          <p className="text-start text-gray-500 text-sm">
            {restaurantDetails.sla.lastMileTravelString}
            {" | "}₹{restaurantDetails.feeDetails.totalFee / 100} Delivery fee
            will apply
          </p>
        </div>
      </div>
      <div className="">
        <h1 className="font-bold mb-10">Menu Items</h1>
        <div className="flex justify-center">
          {
            <ul className="w-7/12">
              {categories.map((category, index) => (
                <RestaurantCategory
                  data={category?.card?.card}
                  key={category?.card?.card?.title}
                  showItems={index === showIndex ? true : false}
                  setShowIndex={() => {
                    if (showIndex === index) {
                      setShowIndex(-1);
                    } else {
                      setShowIndex(index);
                    }
                  }}
                />
              ))}
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
