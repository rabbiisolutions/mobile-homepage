import React from "react";
import teeChaAreasLists from "../../../constants/teecha_areas_lists";
import services from "../../../constants/services";

const Hobbies = () => {
  return (
      <div>
        <p>{services.hobbies[0]}</p>
        <p>{services.hobbies[1]}</p>
        {teeChaAreasLists.hobbies}
      </div>
  )
};

export default Hobbies;
