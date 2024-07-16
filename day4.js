//task 1
let num = 0;
for (let i = 0; i < 10; i++) {
  num = num + 1;
  console.log(num);
}

//task 2

let five = 5;
for (let i = 1; i <= 10; i++) {
  console.log(five * i);
}

//task 3
let sum = 0;
let i = 1;
while (i < 11) {
  sum = sum + i;
  console.log(sum);
  i++;
}

//task 4
let revNum = 10;
while (revNum > 0) {
  console.log(revNum);
  revNum--;
}

//task 5
let a = 1;
do {
  a++;
  console.log(a);
} while (a < 5);

//task 6
let fact = 5;
let b = 5;
do {
  b--;
  fact = fact * b;
} while (b > 1);
console.log(fact);

//task 7
let n = 5;
let str = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);

//task 8
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }

  console.log(i);
}

//task 9
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }

  console.log(i);
}
