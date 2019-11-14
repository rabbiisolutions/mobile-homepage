import ListItem from "../components/utils/listItems";
import teeChaAreas from "./teeChaAreas";

const academics = ListItem(teeChaAreas.academics);
const fl = ListItem(teeChaAreas.fl);
const gs = ListItem(teeChaAreas.gs);

const teeChaAreasLists = {
  academics: academics, fl: fl, gs: gs
};

export default teeChaAreasLists;
