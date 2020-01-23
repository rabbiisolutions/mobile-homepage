import React from "react";
import teeChaAreasLists from "../../../../constants/teecha_areas_lists";
import services from "../../../../constants/services";
import GetTutor from "../../../composite/GetTutor";

const Language = () => {
  return (
      <div>
        <p>{services.language[0]}</p>
        <p>{services.language[1]}</p>
        {teeChaAreasLists.language}
        <GetTutor link={"https://forms.gle/RFwpeWNTrf2kZTJ9A"}/>
      </div>
  )
};

export default Language;
