import React from "react";
import teeChaAreasLists from "../../../../constants/teecha_areas_lists";
import services from "../../../../constants/services";
import GetTutor from "../../../composite/GetTutor";
import Icon from "../../../basic/Icon";
import wheelchair from "../../../../icons/services/wheelchair.svg";

const SpecialNeeds = () => {
  return (
      <div>
        <p>{services.specialNeeds[0]}</p>
        <div className={'display'}>
          {teeChaAreasLists.specialNeeds}
          <Icon src={wheelchair} height={15} units={'vw'} width={15}/>
        </div>
        <GetTutor link={"https://forms.gle/wWkfoAQbSgDzrtoY7"}/>
      </div>
  )
};

export default SpecialNeeds;
