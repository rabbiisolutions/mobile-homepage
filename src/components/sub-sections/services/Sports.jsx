import React from "react";
import teeChaAreasLists from "../../../constants/teecha_areas_lists";
import services from "../../../constants/services";

const Sports = () => {
  return (
      <div>
        <p>{services.sports[0]}</p>
        <p>{services.sports[1]}</p>
        {teeChaAreasLists.sports}
      </div>
  )
};

export default Sports;
