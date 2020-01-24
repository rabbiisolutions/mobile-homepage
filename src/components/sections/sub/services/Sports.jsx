import React from "react";
import teeChaAreasLists from "../../../../constants/teecha_areas_lists";
import services from "../../../../constants/services";
import GetTutor from "../../../composite/GetTutor";
import Icon from "../../../basic/Icon";
import cup from "../../../../icons/services/cup.svg"

const Sports = () => {
  return (
      <div>
        <p>{services.sports[0]}</p>
        <p>{services.sports[1]}</p>
        <div className={'display'}>
          {teeChaAreasLists.sports}
          <Icon src={cup} height={15} units={'vw'} width={15}/>
        </div>
        <GetTutor link={"https://forms.gle/EZZya9AMuVcqC2eh8"}/>
      </div>
  )
};

export default Sports;
