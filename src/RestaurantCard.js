import { RES_LOGO } from "../utility/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData.info);
  const { cloudinaryImageId, name, cuisines, locality, avgRating } =
    resData?.info;
  return (
    <div className="res-card">
      <img className="restaurant-img" src={RES_LOGO + cloudinaryImageId}></img>
      <h4>{name}</h4>
      <h6>{cuisines?.join(",")}</h6>
      <h6>{locality}</h6>
      <h6>{avgRating}</h6>
    </div>
  );
};

export default RestaurantCard;
