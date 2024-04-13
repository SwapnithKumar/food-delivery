import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";
import useRestaurantMenuData from "../../Hooks/useRestaurantMenuData";
import RestaurantCategory from "../RestaurantCategory";
import ShimmerMenuItems from "../ShimmerMenuItems/ShimmerMenuItems";
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
  return (
    <div className="flex flex-col">
      <h1 className="self-start font-bold mb-10">Menu Items</h1>
      <div className="flex justify-center">
        {
          <ul className="w-7/12">
            {categories.map((category, index) => (
              <RestaurantCategory
                data={category?.card?.card}
                key={category.card.card.title}
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
  );
};

export default RestaurantMenu;
