import { useEffect, useState } from "react";
import Shimmer from "./ShimmerComponent";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const resMenuApi =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9362717&lng=79.14215329999999&restaurantId=" +
      resId +
      "&catalog_qa=undefined&submitAction=ENTER";

    const resMenu = await fetch(resMenuApi);

    const json = await resMenu.json();

    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) <Shimmer />;
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card
      .itemCards;
  console.log(itemCards);

  //   console.log(resInfo?.cards[2]?.card?.card?.info);
  //   const { name, cuisine, areaName, costForTwoMessage } =
  //     resInfo?.cards[2]?.card?.card?.info;

  return (
    <div>
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <div>
        {resInfo?.cards[2]?.card?.card?.info.cuisines +
          " - " +
          resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}
      </div>
      <h3>{resInfo?.cards[2]?.card?.card?.info?.areaName}</h3>
      <h3> Menu </h3>
      <ul>
        {itemCards?.map((itemCard) => (
          <li>
            {itemCard?.card?.info?.name +
              " - Rs." +
              itemCard?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
