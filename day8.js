//task 1
const name = "Ajay";
const age = 25;
console.log(`Hello my name is ${name} and I am ${age} years old`);

//task 2
console.log(`Hello my name is ${name} and ${age} years old.
I wanted to be a software enginner.
Currently doing my graduation.`);

//task 3
const arr = [1, 2, 3, 4];
const [a, b] = arr;
console.log(`first: ${a}, second: ${b}`);

//task 4
const book = {
  title: "wings of fire",
  author: "apj abdul kalam",
  year: 2000,
};
const { title, author } = book;
console.log(`title is: ${title}, author name: ${author}`);

//task 5
const myArray = [1, 2, 3];
const newArray = [...myArray, 4, 5, 6];
console.log(`new array: ${newArray}`);

//task 6
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));

//task 7
function product(num1, num2 = 1) {
  return `product is ${num1 * num2}`;
}
console.log(product(5));

//task 8
const company = "Acer";
const model = "Aspire 3";
const processor = "Intel i3";

const message = function () {
  console.log("some details about my laptop");
};

const laptop = { company, model, processor, message };
console.log("object using enhanced object literal:", laptop);

//task 9
const key1 = "brand";
const key2 = "brandModel";
const key3 = "year";
const key4 = "colour";

const vehicle = {
  [key1]: "Honda",
  [key2]: "City",
  [key3]: 2024,
  [key4]: "silver",
};
console.log("object is:", vehicle);
