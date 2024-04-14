import useRestaurantData from "../../Hooks/useRestaurantData";
import Shimmer from "../Shimmer/Shimmer";
import RestaurantCard from "../RestaurantCard";
import useOnline from "../../Hooks/useOnline";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Body = () => {
  const resData = useRestaurantData([]);
  const isOnline = useOnline();
  const [searchVal, setSearchVal] = useState("");
  const [rating, setRating] = useState(1);
  const [filteredData, setFilterdData] = useState([]);
  const [costFilter, setCostFilter] = useState(false);
  const [filterPrice, setFilterPrice] = useState(10000);

  useEffect(() => {
    if (resData !== undefined) {
      setFilterdData(resData);
    }
  }, [resData]);

  useEffect(() => {
    const data = resData.filter(
      (eachItem) =>
        eachItem.info.name.toLowerCase().includes(searchVal.toLowerCase()) &&
        eachItem.info.avgRating >= rating &&
        parseInt(eachItem.info.costForTwo.split(" ")[0].slice(1, 4)) <
          filterPrice
    );

    setFilterdData(data);
  }, [searchVal, rating, costFilter]);

  if (!isOnline)
    return (
      <div>
        <h1>Oops Something went wrong!!!</h1>
        <h1>Looks like you're internet is not connected.</h1>
      </div>
    );

  if (resData.length === 0) return <Shimmer />;

  const handleCostFilter = () => {
    if (costFilter) {
      setFilterPrice(10000);
    } else {
      setFilterPrice(300);
    }
    setCostFilter(!costFilter);
  };

  return (
    <div className="flex flex-col pl-6">
      <h1 className="text-black font-bold text-xl self-start">
        Top Restaurant chains near by you.
      </h1>
      <div className="flex mt-6  w-6/12 justify-between">
        <input
          type="search"
          placeholder="Search for restaurant..."
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-60"
        />
        <div className="flex items-center">
          <select
            className="font-semibold shadow border rounded py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-30"
            onChange={(e) => setRating(e.target.value)}
          >
            <option className="font-bold" value={1}>
              {">"}1⭐
            </option>
            <option className="font-bold" value={2}>
              {">"}2⭐
            </option>
            <option className="font-bold" value={3}>
              {">"}3⭐
            </option>
            <option className="font-bold" value={4}>
              {">"}4⭐
            </option>
          </select>
        </div>
        <button
          className="cursor-pointer text-center border border-gray-300 rounded-2xl pl-4 pr-4 text-sm text-gray-600 font-semibold"
          onClick={handleCostFilter}
        >
          Less than Rs.300{" "}
          {costFilter && <button className="pl-1">{" X "}</button>}
        </button>
      </div>
      {filteredData.length === 0 ? (
        <div className="mt-4 text-gray-700 font-bold flex flex-col items-center justify-center">
          <h1>Sorry😔</h1>
          <p>No search results found!</p>
        </div>
      ) : (
        <ul className="flex flex-wrap mt-6 justify-center">
          {filteredData.map((restaurant) => (
            <Link
              to={"/food-delivery/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard
                restaurant={restaurant}
                key={restaurant.info.id}
              />
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Body;
