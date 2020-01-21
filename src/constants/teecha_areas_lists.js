import ListItem from "../components/utils/listItems";
import teeChaAreas from "./teecha_areas";

const kcse = ListItem(teeChaAreas.kcse);
const language = ListItem(teeChaAreas.language);
const sports = ListItem(teeChaAreas.sports);
const international = ListItem(teeChaAreas.international);
const tests = ListItem(teeChaAreas.tests);
const hobbies = ListItem(teeChaAreas.hobbies);
const specialNeeds = ListItem(teeChaAreas.specialNeeds);

const teeChaAreasLists = {
  kcse: kcse, language: language, sports: sports, international: international, tests: tests,
  hobbies: hobbies, specialNeeds: specialNeeds
};

export default teeChaAreasLists;
