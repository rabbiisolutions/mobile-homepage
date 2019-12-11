import texts from "./texts";

const featuredTutors = [
  {
    name: 'Miss Mutai Sharon', description: 'Masters Student, Mentor, 2 years of experience', key: "d1",
    stars: {
      shade: [texts.black, texts.black, texts.black, texts.black, texts.grey], key: 1
    }, comment: ['I am a passionate mathematics and physics teacher.I am currently a masters' +
    ' student ' +
        'at The University of Nairobi, pursuing MSc in Applied mathematics.Teaching for me is a' +
        ' Calling and helping students maximize their ability in learning.', ' I not only teach,' +
        ' but mentor my students .I am strongly attached to my students and that gives me a chance to' +
        ' deliver to the maximum.\n I have taught for two years in various schools in Nairobi,' +
        ' which includes St.Annes Girls and Nairobi School.\n'],
    areas: 'Secondary Mathematics and Physics', url: 'https://www.facebook.com/mutai.sharo',
  },
  {
    name: 'Mr. Calvin Okello', description: '6 years of experience, National Examiner, IT' +
        ' Educationist', key: "d3",
    stars: {
      shade: [texts.black, texts.black, texts.black, texts.black, texts.grey], key: 2
    }, comment: 'I am a passionate teacher of physics and mathematics with extra qualifications' +
        ' in integration of technology into teaching and learning. I am a trained Kenya National ' +
        'Examiner for physics paper with wealth of experience in Student assessment and learning' +
        ' experience of over 6 years\n',
    areas: 'Physics, Mathematics ', url: 'https://twitter.com/OkelloOnuko',
  }
];

export default featuredTutors;
