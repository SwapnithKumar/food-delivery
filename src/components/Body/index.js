import useRestaurantData from "../../Hooks/useRestaurantData";
import Shimmer from "../Shimmer/Shimmer";
import RestaurantCard from "../RestaurantCard";
import useOnline from "../../Hooks/useOnline";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../../utils/userContext";

const Body = () => {
  const resData = useRestaurantData();
  const isOnline = useOnline();
  const { username, setUserName } = useContext(userContext);
  if (!isOnline)
    return (
      <div>
        <h1>Oops Something went wrong!!!</h1>
        <h1>Looks like you're internet is not connected.</h1>
      </div>
    );
  if (resData === undefined) return <Shimmer />;
  const restaurants =
    resData?.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  return (
    <div className="flex flex-col justify-center items-center pl-20">
      <div className="flex items-center self-start">
        <label>Username : </label>
        <input
          className=" border-solid border-black p-2"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <h1 className="text-black font-bold text-xl self-start">
        Top Restaurant chains near by you.
      </h1>
      <ul className="flex flex-wrap mt-6">
        {restaurants.map((restaurant) => (
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
