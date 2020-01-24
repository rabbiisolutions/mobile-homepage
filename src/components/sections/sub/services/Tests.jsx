import React from "react";
import teeChaAreasLists from "../../../../constants/teecha_areas_lists";
import services from "../../../../constants/services";
import GetTutor from "../../../composite/GetTutor";
import Icon from "../../../basic/Icon";
import exam from "../../../../icons/services/exam.svg";

const Tests = () => {
  return (
      <div>
        <p>{services.tests[0]}</p>
        <p>{services.tests[1]}</p>
        <div className={'display'}>
          {teeChaAreasLists.tests}
          <Icon src={exam} height={15} units={'vw'} width={15}/>
        </div>
        <GetTutor link={"https://forms.gle/edZLndJ9WuNb48u39"}/>
      </div>
  )
};

export default Tests;
