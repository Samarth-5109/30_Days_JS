// Task 1
const numArray = [1, 2, 3, 4, 5];
console.log(numArray);

//task 2
const arr = [1, 2, 3, 4, 5];
console.log(`first element ${arr[0]}, second element is ${[arr[4]]}`);

//task 3
const pushArr = [1, 2, 3, 4, 5];
const newPushArr = pushArr.push(6); // returns length of new array, or pushArr.push(6)
console.log(pushArr);

//task 4
const popArr = [1, 2, 3, 4, 5];
popArr.pop();
console.log(popArr);

//task 5
const shiftArr = [1, 2, 3, 4, 5];
const firstElement = shiftArr.shift();
console.log(shiftArr);

//task 6
const unshiftArr = [1, 2, 3, 4, 5];
const addElement = unshiftArr.unshift(0);
console.log(unshiftArr);

// task 7
const arr1 = [2, 5, 8, 10];
const doubArr = arr1.map((x) => x * 2);
console.log(doubArr);

//task 8
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArr = arr2.filter((x) => x % 2 === 0);
console.log(evenArr);

//task 9
const myArray = [1, 2, 3, 4, 5];
const sumArray = myArray.reduce(function (accumulator, currValue) {
  return accumulator + currValue;
}, 0);
console.log(sumArray);

//task 10
const myArray2 = [1, 2, 3, 4, 5];
for (let i = 0; i <= myArray2.length; i++) {
  console.log(myArray2[i]);
}

//task 11
const myArray3 = [11, 22, 33, 44, 55];
myArray3.forEach((element) => console.log(element));

//task 12
const twoDArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < twoDArray.length; i++) {
  for (let j = 0; j < twoDArray[i].length; j++) {
    console.log(twoDArray[i][j]);
  }
}

//task13
const twoDim = [
  [11, 22, 33],
  [44, 55, 66],
  [77, 88, 99],
];
console.log(twoDim[1][2]);
