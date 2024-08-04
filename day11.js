//task 1
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("task1 timeout");
    resolve();
  }, 2000);
});

promiseOne.then(function () {
  console.log("promise resolved!");
});

//task 2
const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve();
    } else {
      reject("something went wrong");
    }
  }, 2000);
});

promiseTwo
  .then(function () {
    console.log("promise resolved task 2");
  })
  .catch(function (error) {
    console.log(error);
  });

//task 3
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result);
    return result * 2;
  })
  .then(function (result) {
    console.log(result);
    return result * 2;
  })
  .then(function (result) {
    console.log(result);
    return result * 2;
  });

//task 4
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("promise resolved");
  }, 2000);
});

async function consumePromiseFour() {
  const response = await promiseFour;
  console.log("task four:", response);
}
consumePromiseFour();

//task 5
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      response("promise resolved");
    } else {
      reject("error: task 5 promise rejected!");
    }
  }, 2000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log("promise resolved");
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//task6
const url = "https://jsonplaceholder.typicode.com/posts";
function fetchUrl(apiUrl) {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}

fetchUrl(url);

//task 7
async function asyncFetch() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = response.json();
  console.log(data);
}
asyncFetch();

//task 8
const prom1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("prom1 resolved"), 2000);
});

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("prom2 resolved"), 4000);
});

Promise.all([prom1, prom2]).then((values) => {
  console.log(values);
});

//task9
const prom3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("prom3 resolved"), 5000);
});

const prom4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("prom4 resolved"), 6000);
});

const prom5 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("prom5 resolved"), 7000);
});

Promise.race([prom3, prom4, prom5]).then((e) => {
  console.log("first promise reolved: ", e);
});
