import React from "react";
import teeChaAreasLists from "../../../constants/teecha_areas_lists";
import services from "../../../constants/services";
import GetTutor from "../../composite/GetTutor";

const Inter = () => {
  return (
      <div>
        <p>{services.international[0]}</p>
        <p>{services.international[1]}</p>
        {teeChaAreasLists.international}
        <GetTutor/>
      </div>
  )
};

export default Inter;
