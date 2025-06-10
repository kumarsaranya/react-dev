import React, { useEffect } from "react";
import { useState } from "react";
import FilterComponent from "./FilterComponent";
import resList from "../utility/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./ShimmerComponent";
import { Link } from "react-router";

const RestaurantContainer = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredestaurant] = useState(resList);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9235541&lng=79.1330768&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const apiDataJson = await apiData.json();
    console.log("Api fetch"); //"restaurant_grid_listing_v2"
    console.log(apiDataJson);
    console.log(
      apiDataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    let restaurants =
      apiDataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    restaurants =
      restaurants && restaurants.length > 0
        ? restaurants
        : apiDataJson?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

    restaurants = !restaurants && resList;

    setListOfRestaurant(restaurants);
  };
  // conditional rendering
  if (listOfRestaurant?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <input
        type="text"
        className="search-box"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      ></input>
      <button
        className="search-btn"
        onClick={() => {
          const filteredList = listOfRestaurant.filter((resData) =>
            resData.info.name.includes(searchText)
          );
          console.log("filteredList");
          console.log(filteredList);
          setFilteredestaurant(filteredList);
        }}
      >
        Search
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          console.log("filter clicked");
          const filteredList = listOfRestaurant.filter(
            (resData) => resData.info.avgRating > 4
          );
          console.log(filteredList);
          setFilteredestaurant(filteredList);
        }}
      >
        Top rated 4 star
      </button>

      <div className="restaurant-container">
        {filteredRestaurant?.map((resData) => (
          <Link key={resData.info.id} to={"/restaurants/" + resData.info.id}>
            <RestaurantCard resData={resData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantContainer;
