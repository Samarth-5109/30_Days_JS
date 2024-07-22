//task1
const taskOne = document.getElementById("task1");
taskOne.textContent = "Task1: text content changed by selecting ID";

//task2
const taskTwo = document.querySelector(".task2");
taskTwo.style.backgroundColor = "grey";

//task3
const elemDiv = document.createElement("div");
elemDiv.textContent = "Task3: append div in body";
document.body.appendChild(elemDiv);

//task4
const taskFour = document.querySelector(".task4");
const elemLi = document.createElement("li");
elemLi.textContent = "Task4: added new li in an existent ul list";
taskFour.appendChild(elemLi);

//task5
const taskFive = document.querySelector(".task5");
taskFive.remove();

//task6
const taskSix = document.querySelector(".task6");
taskSix.removeChild(taskSix.lastElementChild);
//console.log(taskSix.lastChild);

//task 7
const taskSeven = document.querySelector(".task7");
taskSeven.setAttribute(
  "src",
  "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
);

//task8
const taskEight = document.querySelector("#task8");
taskEight.classList.add("task8-style");

//task9
const taskNine = document.querySelector(".task9");
const taskNineBtn = document.querySelector(".addBtn");

taskNineBtn.addEventListener("click", function () {
  taskNine.textContent = "content changed on clicking btn";
  //console.log("clicked");
});

//task 10
const taskTen = document.querySelector(".task10");
taskTen.addEventListener("mouseover", function () {
  taskTen.style.border = "5px solid blue";
});
