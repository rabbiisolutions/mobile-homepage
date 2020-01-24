import React from "react";
import teeChaAreasLists from "../../../../constants/teecha_areas_lists";
import services from "../../../../constants/services";
import GetTutor from "../../../composite/GetTutor";
import Icon from "../../../basic/Icon";
import drama from "../../../../icons/services/drama.svg";

const Hobbies = () => {
  return (
      <div>
        <p>{services.hobbies[0]}</p>
        <p>{services.hobbies[1]}</p>
        <div className={'display'}>
          {teeChaAreasLists.hobbies}
          <Icon src={drama} height={15} units={'vw'} width={15}/>
        </div>
        <GetTutor link={"https://forms.gle/EZZya9AMuVcqC2eh8"}/>
      </div>
  )
};

export default Hobbies;
