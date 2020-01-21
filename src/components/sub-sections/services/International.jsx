import React from "react";
import teeChaAreasLists from "../../../constants/teecha_areas_lists";
import services from "../../../constants/services";

const Inter = () => {
  return (
      <div>
        <p>{services.international[0]}</p>
        <p>{services.international[1]}</p>
        {teeChaAreasLists.international}
      </div>
  )
};

export default Inter;
