
// for in loop

// used for  looping an object

const language = {
  name: "Spanish",
  nativeName: "Español",
  family: "Indo-European",
  branch: "Romance",
  spokenIn: ["Spain", "Mexico", "Argentina", "Colombia"],
  isOfficialIn: true,
  numberOfSpeakers: 486_000_000
};


// for the key
for (const key in language) {
    console.log(key);
}

// for the value
for (const key in language) {
    console.log(language[key]);
}