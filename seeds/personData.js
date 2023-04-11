const { Person } = require('../models');

const personData = [
    {
      first_name: "Iaroslav",
      last_name: "Lasiichuk",
      text: "Something about me.",
      img: "/img/8L0A0474.jpg",
    },
    {
      first_name: "Sutton",
      last_name: "Charpentier",
      text: "Some text about Sutton",
      img: "/img/20230409_111908.jpg",
    },
    {
      first_name: "Joseph",
      last_name: "S.Ortega",
      text: "Joseph graduated from the University of Denver with a Business Degree and is currently practicing Full Stack Web Development at his Alma Mater.",
      img: "/img/IMG_5309.JPG",
    },
    {
      first_name: "Axel",
      last_name: "Irias",
      text: "Iam currently in construction doing Fire Sprinkler Installing, needed a change so i enrolled to become a Full stack developer",
      img: "/img/IMG_0717.jpeg",
    },
  ];

const seedPersonData = () => Person.bulkCreate(personData);

module.exports = seedPersonData;
