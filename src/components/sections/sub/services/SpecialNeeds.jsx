import React from "react";
import teeChaAreasLists from "../../../../constants/teecha_areas_lists";
import services from "../../../../constants/services";
import GetTutor from "../../../composite/GetTutor";

const SpecialNeeds = () => {
  return (
      <div>
        <p>{services.specialNeeds[0]}</p>
        {teeChaAreasLists.specialNeeds}
        <GetTutor link={"https://forms.gle/wWkfoAQbSgDzrtoY7"}/>
      </div>
  )
};

export default SpecialNeeds;
