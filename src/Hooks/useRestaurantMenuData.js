import { useEffect, useState } from "react";

const useRestaurantMenuData = (url) => {
  const [resData, setResData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setResData(data.data);
    }
    fetchData();
  }, [url]);
  return resData;
};

export default useRestaurantMenuData;
