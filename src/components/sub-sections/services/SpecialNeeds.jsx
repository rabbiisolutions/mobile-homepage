import React from "react";
import teeChaAreasLists from "../../../constants/teecha_areas_lists";
import services from "../../../constants/services";

const SpecialNeeds = () => {
  return (
      <div>
        <p>{services.specialNeeds[0]}</p>
        <p>{services.specialNeeds[1]}</p>
        {teeChaAreasLists.specialNeeds}
      </div>
  )
};

export default SpecialNeeds;
