import React from "react";
import teeChaAreasLists from "../../../constants/teecha_areas_lists";
import services from "../../../constants/services";

const SpecialNeeds = () => {
  return (
      <div>
        <p>{services.specialNeeds[0]}</p>
        {teeChaAreasLists.specialNeeds}
      </div>
  )
};

export default SpecialNeeds;
