import React from "react";
import { useState } from "react";

const FilterComponent = () => {
  const [resList, setResList] = useState([resList]);
  return (
    <button
      className="filter-btn"
      onClick={() => {
        const filteredList = resList.filter(
          (resData) => resData.info.avgRating > 4
        );
        console.log(filteredList);
        setResList(filteredList);
      }}
    >
      Top rated 4 star
    </button>
  );
};

export default FilterComponent;
