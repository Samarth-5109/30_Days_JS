// Task 1
const num1 = 10;

if (num1 > 0) {
  console.log("number is positive");
} else if (num1 < 0) {
  console.log("number is negative");
} else {
  console.log("number is zero");
}

//Task 2
const age = 17;
if (age >= 18) {
  console.log("can vote");
} else {
  console.log("can't vote");
}

//task 3
const a = 6;
const b = 55;
const c = 16;

if (a >= b && a >= c) {
  console.log("largest is a");
} else if (b >= a && b >= c) {
  console.log("b is the largest");
} else {
  console.log("c is largest");
}

//task 4
const dayNumber = 5;

switch (dayNumber) {
  case 1:
    console.log("monday");
    break;

  case 2:
    console.log("tuesday");
    break;

  case 3:
    console.log("wednesday");
    break;

  case 4:
    console.log("thursday");
    break;

  case 5:
    console.log("friday");
    break;

  case 6:
    console.log("saturday");
    break;

  case 7:
    console.log("sunday");
    break;
}

//task5
const score = 6;
switch (score) {
  case 0:
  case 1:
  case 2:
    console.log("Grade F");
    break;
  case 3:
  case 4:
    console.log("Grade D");
    break;
  case 5:
  case 6:
    console.log("Grade C");
    break;
  case 7:
  case 8:
    console.log("Grade B");
    break;
  case 9:
  case 10:
    console.log("Grade A");
    break;
}

// task 6
const evenOdd = 6;
const result =
  evenOdd % 2 === 0 ? "Given number is even" : "given number is odd";
console.log(result);

// task 7
const year = 2032;
if (year % 4 === 0 && year % 100 != 0) {
  console.log("year is a leap year");
} else if (year % 400 === 0) {
  console.log("year is a leap year");
} else {
  console.log("year is not a leap year");
}
