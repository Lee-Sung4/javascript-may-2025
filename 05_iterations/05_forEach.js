//forEach in-build loop

let fruits = ["apple", "banana", "cherry", "date"];

fruits.forEach( (item) => {
    console.log(item);
    
})


fruits.forEach((item, index, array) => {
    console.log(item, index, array);
    
})


// some real world example

const oldbooks = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction"
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Classic"
  }
];

oldbooks.forEach((item) => {
    console.log(item.year);
    
})

