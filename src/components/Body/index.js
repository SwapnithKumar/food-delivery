import useRestaurantData from "../../Hooks/useRestaurantData";
import Shimmer from "../Shimmer/Shimmer";
import RestaurantCard from "../RestaurantCard";
import useOnline from "../../Hooks/useOnline";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import userContext from "../../utils/userContext";

const Body = () => {
  const resData = useRestaurantData([]);
  const isOnline = useOnline();
  const { username, setUserName } = useContext(userContext);
  const [searchVal, setSearchVal] = useState("");
  const [filteredData, setFilterdData] = useState([]);

  useEffect(() => {
    if (resData !== undefined) {
      setFilterdData(resData);
    }
  }, [resData]);

  useEffect(() => {
    const data = resData.filter((eachItem) =>
      eachItem.info.name.toLowerCase().includes(searchVal.toLowerCase())
    );
    setFilterdData(data);
  }, [searchVal]);

  if (!isOnline)
    return (
      <div>
        <h1>Oops Something went wrong!!!</h1>
        <h1>Looks like you're internet is not connected.</h1>
      </div>
    );

  if (resData.length === 0) return <Shimmer />;

  return (
    <div className="flex flex-col pl-6">
      {/* <div className="flex items-center self-start">
        <label>Username : </label>
        <input
          className=" border-solid border-black p-2"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div> */}
      <h1 className="text-black font-bold text-xl self-start">
        Top Restaurant chains near by you.
      </h1>
      <div className="flex mt-6">
        <input
          type="search"
          placeholder="Search for restaurant..."
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-60"
        />
      </div>
      <ul className="flex flex-wrap mt-6 justify-center">
        {filteredData.map((restaurant) => (
          <Link
            to={"/food-delivery/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard restaurant={restaurant} key={restaurant.info.id} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Body;
