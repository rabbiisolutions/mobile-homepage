import React from "react";
import teeChaAreasLists from "../../../constants/teecha_areas_lists";
import services from "../../../constants/services";
import GetTutor from "../../composite/GetTutor";
import Icon from "../../basic/icon";
import tests from "../../../icons/pawn.svg"

const Tests = () => {
  return (
      <div>
        <p>{services.tests[0]}</p>
        <p>{services.tests[1]}</p>
        <div className={'display'}>
          {teeChaAreasLists.tests}
          <Icon src={tests} height={2} units={'vw'}/>
        </div>
        <GetTutor/>
      </div>
  )
};

export default Tests;
