import React from "react";
import { ITEM_IMG } from "../../utils/constants";

const ListItems = (data) => {
  const items = data.data;
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="mb-5">
          <div className="flex justify-between mb-8">
            <div className="flex flex-col items-start w-9/12">
              {item.card.info.isVeg === 1 ? (
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
              )}
              <p className="font-bold text-gray-700 text-sm">
                {item.card.info.name}
              </p>
              <p className="font-semibold text-gray-700 text-sm pb-2">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
              <p className="text-gray-500 text-sm pl-0 ml-0 text-left">
                {item.card.info.description}
              </p>
            </div>
            <div className="flex justify-end w-3/12 relative">
              <div className="relative">
                {item.card.info.imageId !== undefined ? (
                  <img
                    src={ITEM_IMG + item.card.info.imageId}
                    alt={item.card.info.name}
                    className="h-28 rounded-2xl w-full"
                  />
                ) : null}

                <div className="absolute bottom-0 top-24   left-1/2 transform -translate-x-1/2">
                  <button className="text-green-400 font-bold bg-white rounded shadow-lg w-20">
                    Add
                  </button>
                  <p className="text-gray-500 text-xs">Customisable</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-b" />
        </div>
      ))}
    </div>
  );
};

export default ListItems;
