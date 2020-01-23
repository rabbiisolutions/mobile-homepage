import React from "react";
import teeChaAreasLists from "../../../constants/teecha_areas_lists";
import services from "../../../constants/services";
import GetTutor from "../../composite/GetTutor";

const Tests = () => {
  return (
      <div>
        <p>{services.tests[0]}</p>
        <p>{services.tests[1]}</p>
          {teeChaAreasLists.tests}
        <GetTutor/>
      </div>
  )
};

export default Tests;
