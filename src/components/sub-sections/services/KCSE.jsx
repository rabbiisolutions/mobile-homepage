import React from "react";
import teeChaAreasLists from "../../../constants/teecha_areas_lists";
import services from "../../../constants/services";

const KCSE = () => {
  return (
      <div>
        <p>{services.kcse[0]}</p>
        {teeChaAreasLists.kcse}
      </div>
  )
};

export default KCSE;
