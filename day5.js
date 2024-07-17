//task 1
function evenOdd(num) {
  if (num % 2 === 0) {
    console.log("num is even");
  } else {
    console.log("num is odd");
  }
}
evenOdd(10);

//task 2
function squarNum(num) {
  return num * num;
}

const result = squarNum(7);
console.log(result);

//task 3
const maxNum = function (num1, num2) {
  return num1 > num2
    ? console.log("num 1 is greater")
    : num2 > num1
    ? console.log("num 2 is greater")
    : console.log("both num are equal!");
};
maxNum(5, 8);

//task 4
const concatStr = function (str1, str2) {
  return str1.concat(" ", str2);
};
console.log(concatStr("Hello", "World!"));

//task 5
const sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(2, 6));

// task 6
const trueFalse = (str) => {
  return str.includes("a");
};
console.log(trueFalse("name"));

//task 7
function prodNum(num1, num2 = 5) {
  return num1 * num2;
}
console.log(prodNum(7));

//task 8
function message(name, age = 25) {
  return ` ${name}, is ${age} years old!`;
}
console.log(message("Samarth"));

//task 9
function hello() {
  return "Hello world!";
}
function highOrder(helloMsg, num) {
  for (let i = 0; i < num; i++) {
    console.log(helloMsg());
  }
}
highOrder(hello, 5);

// task 10
function firstFunc(num1) {
  return num1;
}

function secondFunc(valueFirst) {
  const sum = 9 + valueFirst;
  console.log(`sum is ${sum}`);
}

function highOrder2(func1, func2, value) {
  secondFunc(firstFunc(value));
}

highOrder2(firstFunc, secondFunc, 5);
