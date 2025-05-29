// filter
// easier 

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNum.filter((item) => {
    return item > 4
})

console.log(newNums);




// using forEach 
const goNums = []

myNum.forEach((item) => {
    if (item > 4) {
        goNums.push(item)
    }
} )

console.log(goNums);



// exercise

const books = [
  {
    title: "The Name of the Wind",
    author: {
      firstName: "Patrick",
      lastName: "Rothfuss"
    },
    year: 2007,
    genres: ["Fantasy", "Adventure"],
    available: true,
    rating: 4.8
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: {
      firstName: "Yuval",
      lastName: "Harari"
    },
    year: 2011,
    genres: ["Non-fiction", "History", "Science"],
    available: false,
    rating: 4.6
  },
  {
    title: "Atomic Habits",
    author: {
      firstName: "James",
      lastName: "Clear"
    },
    year: 2018,
    genres: ["Self-help", "Productivity", "Psychology"],
    available: true,
    rating: 4.9
  },
  {
    title: "The Midnight Library",
    author: {
      firstName: "Matt",
      lastName: "Haig"
    },
    year: 2020,
    genres: ["Fiction", "Fantasy", "Philosophy"],
    available: true,
    rating: 4.2
  }
];

const userbooks = books.filter(   (bk) => {
    return bk.genres.includes('Fantasy') && bk.rating >= 4.5
    // && used for checking two or multiple values
})

console.log(userbooks);


