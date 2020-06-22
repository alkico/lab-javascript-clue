// ITERATION 1

// Suspects Collection

const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    src:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",
  },

  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    src: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white",
  },

  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    src:
      "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple",
  },

  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    src: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
  },

  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    src: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
  },

  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description:
      "He is a former football player who tries to get by on his former glory",
    src:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
  },
];

// Rooms Collection
const roomsArray = [
  "Dining Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Pati",
];

// Weapons Collection
const weaponsArray = [
  { tool: "rope", weight: 10 },
  { tool: "knife", weight: 8 },
  { tool: "candlestick", weight: 2 },
  { tool: "dumbbell", weight: 30 },
  { tool: "poison", weight: 2 },
  { tool: "axe", weight: 15 },
  { tool: "bat", weight: 13 },
  { tool: "trophy", weight: 25 },
  { tool: "pistol", weight: 20 },
];

// ITERATION 2
function selectRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let card = arr[randomIndex];
  console.log(card);
  return card;
}

function pickMystery() {
  const mystery = {
    suspect: selectRandom(suspectsArray),
    room: selectRandom(roomsArray),
    weapon: selectRandom(weaponsArray),
  };
  return mystery;
}

// ITERATION 3
let envelope = pickMystery();

function revealMystery(obj) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.tool} in the ${envelope.room}!`;
}

revealMystery(envelope);
