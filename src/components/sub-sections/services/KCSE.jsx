import React from "react";
import teeChaAreasLists from "../../../constants/teecha_areas_lists";
import services from "../../../constants/services";
import GetTutor from "../../composite/GetTutor";

const KCSE = () => {
  return (
      <div>
        <p>{services.kcse[0]}</p>
        <p>{services.kcse[1]}</p>
        {teeChaAreasLists.kcse}
        <GetTutor/>
      </div>
  )
};

export default KCSE;
