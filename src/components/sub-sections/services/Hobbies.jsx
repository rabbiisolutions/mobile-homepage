import React from "react";
import teeChaAreasLists from "../../../constants/teecha_areas_lists";
import services from "../../../constants/services";
import GetTutor from "../../composite/GetTutor";

const Hobbies = () => {
  return (
      <div>
        <p>{services.hobbies[0]}</p>
        <p>{services.hobbies[1]}</p>
        {teeChaAreasLists.hobbies}
        <GetTutor/>
      </div>
  )
};

export default Hobbies;