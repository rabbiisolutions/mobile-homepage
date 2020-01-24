import React from "react";
import teeChaAreasLists from "../../../../constants/teecha_areas_lists";
import services from "../../../../constants/services";
import GetTutor from "../../../composite/GetTutor";
import Icon from "../../../basic/Icon";
import graduated from "../../../../icons/services/graduated.svg";

const Inter = () => {
  return (
      <div>
        <p>{services.international[0]}</p>
        <p>{services.international[1]}</p>
        <div className={'display'}>
          {teeChaAreasLists.international}
          <Icon src={graduated} height={15} units={'vw'} width={15}/>
        </div>
        <GetTutor link={"https://forms.gle/7fkAVe5DHNwomAJWA"}/>
      </div>
  )
};

export default Inter;
