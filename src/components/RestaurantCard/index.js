import React from "react";
import { CLOUDINARY_URL } from "../../utils/constants";
import { FaRegStar } from "react-icons/fa";

const RestaurantCard = (restaurant) => {
  const {
    name,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    avgRatingString,
    areaName,
    sla,
  } = { ...restaurant.restaurant.info };
  const { slaString } = sla;
  const url = CLOUDINARY_URL + cloudinaryImageId;
  return (
    <div className="mr-5 mb-5 shadow-lg hover:shadow-md transform hover:scale-95 hover:bg-opacity-50 transition ease-out duration-300 cursor-pointer rounded-2xl">
      <div className="w-52 ">
        <img src={url} className="rounded-2xl h-36 w-full" alt={name} />
      </div>
      <div className="flex flex-col items-start pl-2 pb-2">
        <h1 className="font-semibold text-gray-700">{name.substring(0, 12)}</h1>
        <div className="flex justify-center items-center text-gray-700 font-semibold ">
          <FaRegStar className="text-green-700" />
          <p>{avgRatingString}</p>
          <p>~</p>
          <p>{slaString}</p>
        </div>
        <p className="text-sm">{cuisines.join(",").substring(0, 30)}</p>
        <p className="text-gray-600 ">{costForTwo}</p>
        <p className="text-gray-600 text-sm">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
