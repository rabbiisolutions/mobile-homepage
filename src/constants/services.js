import student from "../assets/icons/services/student.svg";
import graduated from "../assets/icons/services/graduated.svg";
import exam from "../assets/icons/services/exam.svg"
import cup from "../assets/icons/services/cup.svg";
import speak from "../assets/icons/services/speak.svg";
import drama from "../assets/icons/services/drama.svg";
import wheelchair from "../assets/icons/services/wheelchair.svg";
import proAppSw from "../assets/icons/services/interface.svg";
import course from "../assets/icons/services/course.svg";
import React from "react";

const ListItem = (props) => {
  let listItems = props.map(props => (
          <li key={props.key}>{props.text}</li>
      )
  );

  return (<ul>{listItems}</ul>);
};

const online = {
  title: '1. Online Classes', key: 'a19',
  icon: course,
  desc: [{key: 'x17',
    value: 'We have online classes through which your child has a video call with a tutor and has ' +
        'access to the notes prepared by the tutor. We are also able to provide for revision ' +
        'materials such as papers together with the marking schemes, plus notes to any topics. ' +
        'We also conduct an online assessment class for you and guide all the way.'},
    {key: 'x18', value: 'Sign up for our any classes:'}
  ],
  examples: ListItem(
      [
        {key: 'ha1', text: 'Primary school'}, {key: 'ha2', text: 'High school'},
        {key: 'ha3', text: 'International Curricular'}, {key: 'ha4', text: 'And many more'},
      ]
  ),
  links: [
    {key: 'k1', link: "https://forms.gle/3JZCSM2JJTPLTjP57", value: "Sign up"},
    {key: 'k2', link: "#", value: "Login"}
  ]
};
const kcse = {
  title: '2. Pass KCPE/KCSE',  key: 'a11',
  icon:  student,
  desc: [{key: 'x1',
    value: 'We provide competent teachers to help your child revise for the national exams'},
    {key: 'x2', value: 'Get a tutor for any class in:'}],
  examples: ListItem(
      [
        {key: 'aaa', text: 'Primary school'}, {key: 'aab', text: 'High school'},
        {key: 'aac', text: 'KCPE'}, {key: 'aae', text: 'KCSE'},
      ]
  ),
  links: [{key: "k1", link: "https://forms.gle/rd339azC1NoXo1YB6"}]
};
const international = {
  title: '3. Tutors for International School Systems', key: 'a12',
  icon: graduated,
  desc: [
    {key: 'x3',
      value: 'We provide teachers teaching different international schools & ready to help your child'},
    {key: 'x4', value: 'Get a tutor in:'}],
  examples: ListItem(
      [{key: 'c1', text: 'IGCSE'}, {key: 'c2', text: 'American'}, {key: 'c3', text: 'IB...etc'}]
  ),
  links: [{key: "i1", link: "https://forms.gle/7fkAVe5DHNwomAJWA"}]
};
const tests = {
  title: '4. Pass Your Tests', key: 'a13',
  icon: exam,
  desc: [
    {key: 'x5',
      value: 'We help you pass your KASNEB exams or any university exam ' +
          'or any tests to join universities abroad'},
    {key: 'x6', value: 'Get a tutor for:'}],
  examples: ListItem(
      [{key: 'd1', text: 'CPA exams'}, {key: 'd2', text: 'CIFA exams'}, {key: 'd3', text: 'SAT'},
        {key: 'd4', text: 'ACT'}, {key: 'd5', text: 'Statistics...etc'}]
  ),
  links: [{key: "t1", link: "https://forms.gle/edZLndJ9WuNb48u39"}]
};
const sports = {
  title: '5. Learn New Sports Games', key: 'a14',
  icon: cup,
  desc: [
    {key: 'x7',
      values: 'We provide professional trainers to help you or' +
          ' your child grow in certain sports & games.'},
    {key: 'x8', value: ' You can get a tutor in:'}],
  examples: ListItem(
      [{key: 'b1', text: 'Chess'}, {key: 'b2', text: 'Swimming'},
        {key: 'b3', text: 'Skating...etc'}]
  ),
  links: [{key: "ss1", link: "https://forms.gle/EZZya9AMuVcqC2eh8"}]
};
const language = {
  title: '6. Speak a Foreign Language', key: 'a15',
  icon: speak,
  desc: [
    {key: 'x9',
      values: 'We provide teachers in foreign language to' +
          ' help you learn or master a foreign language.'},
    {key: 'x10', value: 'You can get a tutor in:'}],
  examples: ListItem(
      [{key: 'a1', text: 'Chinese'}, {key: 'a2', text: 'French'},
        {key: 'a3', text: 'German etc'}]
  ),
  links: [{key: "l1", link: "https://forms.gle/RFwpeWNTrf2kZTJ9A"}]
};
const hobbies = {
  title: '7. Developing your Hobbies and Interests', key: 'a16',
  icon: drama,
  desc:[
    {key: 'x11', value: 'We provide trainers to help you grow & perfect a hobby you have.'},
    {key: 'x12', value: 'You can get a trainer in:'}],
  examples: ListItem(
      [{key: 'e4', text: 'Photography'}, {key: 'e5', text: 'Dance'},
        {key: 'e6', text: 'Music'}, {key: 'e7', text: 'Art'}, {key: 'e8', text: 'Vocals'},
        {key: 'e9', text: 'Dj...etc'}]
  ),
  links: [{key: "h1", link: "https://forms.gle/EZZya9AMuVcqC2eh8"}]
};
const specialNeeds = {
  title: '8. Special Needs', key: 'a17',
  icon: wheelchair,
  desc: [
    {key:'x13', value: 'You can get a qualified trained special needs' +
          ' teacher for your son or daughter at whatever ' +
  'level. We have teachers who are able to handle students' +
          ' who require different level of care in areas such as:'}],
  examples: ListItem(
      [{key: 'f4', text: 'Physical'}, {key: 'f5', text: 'Developmental'},
        {key: 'f6', text: 'Behavioural/Emotional'}, {key: 'f7', text: 'Sensory/Impaired...etc'}]
  ),
  links: [{key: "sn1", link: "https://forms.gle/wWkfoAQbSgDzrtoY7"}]
};
const proAppSoftware = {
  title: '9. Professional Application Software', key: 'a18',
  icon: proAppSw,
  desc: [
    {key:'x15', value: 'You can get a trainer to help you master or learn how to use any professional' +
          ' application software relevant in our career or any other field you may be interested in.'},
    {key: 'x16', value: 'You can get a tutor for:'}
  ],
  examples: ListItem(
      [{key: 'g4', text: 'Programming languages'}, {key: 'g5', text: 'CAD/CAM'},
        {key: 'g6', text: 'QuickBooks'}, {key: 'g7', text: 'SAGE … etc.'}]
  ),
  links: [{key: "pas1", link: "https://forms.gle/ZoG8L7RDwbCDEpkV8"}]
};

const services = [
    online, kcse, international, tests, sports, language,
  hobbies, specialNeeds, proAppSoftware
];

export default services;
