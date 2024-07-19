//task 1

const book = {
  title: "Steve Jobs",
  author: "Walter Isaacson",
  year: "2011",
  method1() {},
};
console.log(book);

//task 2
console.log(`book title: ${book.title}, and author: ${book.author}`);

//task 3 and 7
const book2 = {
  title: "wings of fire",
  author: "apj abdul kalam",
  year: "2000",
  printMsg: function () {
    return `title is : ${this.title}, author is ${this.author}`;
  },
};

console.log(book2.printMsg());

//task 4
const book3 = {
  title: "wings of fire",
  author: "apj abdul kalam",
  year: "2000",
  changeYear: function (year) {
    return (this.year = year);
  },
};
book3.changeYear(2003);
console.log("updated object with date", book3);

//task 5 and task 6
const library = {
  name: "national",
  books: [
    {
      title: "let us c",
      author: "yashwant kanetkar",
      year: 2002,
    },
    {
      title: "eloquent JS",
      author: "marijin javerbeke",
      year: "2018",
    },
  ],
};
console.log("library object", library);

console.log(library.name);
console.log(
  "books title:",
  library.books[0].title,
  ",",
  library.books[1].title
);

//task 8

const book4 = {
  title: "Harry Potter and the Philosopher's Stone",
  author: "J. K. Rowling",
  year: "1997",
};

console.log("logging property and value using for...in:");

for (const property in book4) {
  console.log(` ${property}: ${book4[property]}`);
}

//task 9

const book5 = {
  title: "Harry Potter and the Philosopher's Stone",
  author: "J. K. Rowling",
  year: "1997",
};

console.log("logging property and value using object.keys and .value:");

console.log(Object.keys(book5));
console.log(Object.values(book5));
