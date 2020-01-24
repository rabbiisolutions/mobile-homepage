import React from "react";
import teeChaAreasLists from "../../../../constants/teecha_areas_lists";
import services from "../../../../constants/services";
import GetTutor from "../../../composite/GetTutor";
import Icon from "../../../basic/Icon";
import student from "../../../../icons/services/student.svg";

const KCSE = () => {
  return (
      <div>
        <p>{services.kcse[0]}</p>
        <p>{services.kcse[1]}</p>
        <div className={'display'}>
          {teeChaAreasLists.kcse}
          <Icon src={student} height={15} units={'vw'} width={15}/>
        </div>
        <GetTutor link={"https://forms.gle/rd339azC1NoXo1YB6"}/>
      </div>
  )
};

export default KCSE;
