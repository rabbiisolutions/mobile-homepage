import texts from "./texts";

const clientReviews = [
  {
    name: 'Chris Mutunga', description: 'Buruburu', key: "ab",
    social:{
      url: 'mailto:mkatola@associate.crcna.org', color: 'azure'
    },
    stars: {
      shade: [texts.black, texts.black, texts.black, texts.black, texts.grey],
      size: "2", mobileSize: "1", key: 11
    }, comment: 'I’m grateful for the good tutoring work you are doing. (Parent)'
  },
  {
    name: 'Akinyi Sharon', description: 'Kasarani', key: "ac",
    social:{
      url: 'https://www.facebook.com/mutai.sharo', color: 'facebook'
    },
    stars: {
      shade:[texts.black, texts.black, texts.black, texts.black, texts.black],
      size: "2", mobileSize: "1", key: 12
    }, comment: 'Rabbii  is a very good educational company,I love how they have good relationship ' +
        'between the teachers and parents.They are well organized, determined in fulfilling their' +
        ' goals and vision.\n Working with them has been easy for me. I highly recommend the' +
        ' company for their work.\n (Teacher)'
  },
  {
    name: 'Mr. Bonface Okello', description: 'Starehe', key: "ad",
    social:{
      url: 'https://twitter.com/OkelloOnuko', color: 'twitter'
    },
    stars: {
      shade: [texts.black, texts.black, texts.black, texts.black, texts.grey],
      size: "2", mobileSize: "1", key: 13
    }, comment: 'Rabbii has provided a remarkable teaching and learning experience where' +
        ' resources and teaching services are provided to learners at the comfort of their' +
        ' homes. (Teacher)'
  },
  {
    name: 'John Mwendwa', description: 'Kahawa Wendani', key: "ae",
    social:{
      url: 'https://www.facebook.com/john.mwendwa.33', color: 'facebook'
    },
    stars: {
      shade: [texts.black, texts.black, texts.black, texts.grey, texts.grey],
      size: "2", mobileSize: "1", key: 14
    }, comment: 'I appreciate the professionalism applied to the TeeCha process, from' +
        ' registration, scrutiny of tutors and clients to the management of the tuition process.' +
        ' (Parent)'
  }
];

export default clientReviews;
