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
      text: "Some text about Joseph",
      img: "/img/IMG_5309.JPG",
    },
    {
      first_name: "Axel",
      last_name: "Irias",
      text: "Some text about Axel",
      img: "/img/IMG_0717.jpeg",
    },
  ];

const seedPersonData = () => Person.bulkCreate(personData);

module.exports = seedPersonData;
