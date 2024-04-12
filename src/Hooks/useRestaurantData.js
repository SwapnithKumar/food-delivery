import { useEffect, useState } from "react";

const useRestaurantData = () => {
  const [resData, setResData] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      setResData(data.data);
    }
    fetchData();
  }, []);
  return resData;
};

export default useRestaurantData;
