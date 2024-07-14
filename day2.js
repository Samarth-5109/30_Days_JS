//Task 1
const num1 = 2;
const num2 = 3;
const add = num1 + num2;
console.log(add);

//task 2
const num3 = 10;
const num4 = 5;
const sub = num3 - num4;
console.log(sub);

//task 3
const num5 = 2;
const num6 = 5;
const mul = num5 * num6;
console.log(mul);

//task 4
const num7 = 10;
const num8 = 11;
const div = num7 / num8;
console.log(div);

//task 5
const num9 = 20;
const num10 = 10;
const rem = num9 % num10;
console.log(rem);

//task 6
const num11 = 20;
num11 += 30;
console.log(num11);

//task 7
const num12 = 40;
num12 -= 20;
console.log(num12);

//task 8
const num13 = 10;
const num14 = 20;
console.log("num13 is < than num14: " + num13 < num14);
console.log("num14 is > than num13: " + num14 > num13);

//task 9
const num15 = 10;
const num16 = 16;
console.log(num15 >= num16);
console.log(num15 <= num16);

//task 10
const num17 = 13;
const num18 = "45";
console.log(num17 == num18);
console.log(num17 === num18);

//task 11
const x = 5;
const y = 10;
if (x < 10 && y > 1) {
  console.log("true");
} else if (x < 10 && y < 1) {
  console.log("false");
}

//task 12
const a = 6;
const b = 3;
if (a == 5 || b == 5) {
  console.log("false");
} else if (a == 6 || b == 0) {
  console.log("true");
}

//task 13
const c = 6;
const d = 3;
console.log(!(x === y));

//task 14
const e = 6;
const result = e < 0 ? "num is negative" : "num is positive";
console.log(result);
