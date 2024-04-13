import React from "react";
import ListItems from "../ListItems";

const RestaurantCategory = ({ data, setShowIndex, showItems }) => {
  const { title, itemCards } = data;
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className=" bg-gray-100  m-auto p-4 my-4 rounded-sm">
      <div
        className="flex justify-between mb-4 cursor-pointer"
        onClick={handleClick}
      >
        <h1 className="font-bold">
          {title} ({itemCards.length})
        </h1>
        <h1>⬇️</h1>
      </div>
      <div>{showItems && <ListItems data={itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
