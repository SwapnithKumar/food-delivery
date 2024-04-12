import React from "react";
import { ITEM_IMG } from "../../utils/constants";

const Recommendations = (recommendedData) => {
  const { description, imageId, isVeg, name, price } = recommendedData.eachItem;
  const itemPrice = price / 100;
  console.log(recommendedData);
  const vegNonVeg =
    isVeg === 1 ? (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBOC07mef2w3vwb2iNWrs-4EKkQscmcxyepcXcozMN8g&s"
        alt="Veg"
        className="w-4"
      />
    ) : (
      <img
        src="https://m.media-amazon.com/images/I/41aq8MYGoNL._AC_UF350,350_QL80_.jpg"
        alt="Non Veg"
        className="w-4"
      />
    );
  return (
    <div className="mb-6 w-8/12">
      <div className="flex justify-between mb-4">
        <div className="flex flex-col items-start w-9/12">
          {vegNonVeg}
          <p className="font-bold">{name}</p>
          <p>₹{itemPrice}</p>
          <p className="text-gray-500 text-xs pl-0 ml-0 text-left">
            {description}
          </p>
        </div>
        <div className="flex items-end justify-end w-3/12">
          {imageId !== undefined ? (
            <img
              src={ITEM_IMG + imageId}
              alt={name}
              className="h-28 rounded-2xl w-32"
            />
          ) : null}
        </div>
      </div>
      <hr className="border-b" />
    </div>
  );
};

export default Recommendations;
