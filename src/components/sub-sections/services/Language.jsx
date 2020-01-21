import React from "react";
import teeChaAreasLists from "../../../constants/teecha_areas_lists";
import services from "../../../constants/services";

const Language = () => {
  return (
      <div>
        <p>{services.language[0]}</p>
        <p>{services.language[1]}</p>
        {teeChaAreasLists.language}
      </div>
  )
};

export default Language;
