import React from "react";
import teeChaAreasLists from "../../../../constants/teecha_areas_lists";
import services from "../../../../constants/services";
import GetTutor from "../../../composite/GetTutor";
import Icon from "../../../basic/Icon";
import speak from "../../../../icons/services/speak.svg";

const Language = () => {
  return (
      <div>
        <p>{services.language[0]}</p>
        <p>{services.language[1]}</p>
        <div className={'display'}>
          {teeChaAreasLists.language}
          <Icon src={speak} height={15} units={'vw'} width={15}/>
        </div>
        <GetTutor link={"https://forms.gle/RFwpeWNTrf2kZTJ9A"}/>
      </div>
  )
};

export default Language;
