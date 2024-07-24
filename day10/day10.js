//task1
const taskOne = document.querySelector(".task1");
const btnOne = document.querySelector(".task1_btn");

btnOne.addEventListener("click", function () {
  taskOne.textContent = "task1: content changed on clicking!";
});

//task2
const taskTwo = document.querySelector(".task2");
const btnTwo = document.querySelector(".task2_btn");

btnTwo.addEventListener("click", function () {
  taskTwo.style.visibility === "hidden"
    ? (taskTwo.style.visibility = "visible")
    : (taskTwo.style.visibility = "hidden");
});

//task3
const taskThree = document.querySelector(".task3");

taskThree.addEventListener("mouseover", function () {
  taskThree.style.backgroundColor = "grey";
});

//task4
const taskFour = document.querySelector(".task4");

taskFour.addEventListener("mouseout", function () {
  taskFour.style.backgroundColor = "white";
});

//task5
const taskFive = document.querySelector(".task5");

taskFive.addEventListener("keydown", function (event) {
  console.log(event.key);
});

//task6
const taskSix = document.querySelector(".task6");
const inputTask6 = document.querySelector(".task6_value");

taskSix.addEventListener("keyup", function (event) {
  inputTask6.textContent = event.key;
});

//task7
const taskSeven = document.querySelector("#task7");
const submitBtn = document.querySelector("#btn_task7");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(taskSeven.element.username.value);
});

//task8
const smartphoneSelect = document.querySelector("#smartphone");
const taskEight = document.querySelector(".task8");

smartphoneSelect.addEventListener("change", function () {
  const selectValue = smartphoneSelect.value;
  taskEight.textContent = "task8, selected value is: " + selectValue;
});

//task9
const taskNine = document.querySelector(".task9");

taskNine.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});

//task10
const taskTen = document.querySelector(".task10");
const taskTen_Btn = document.querySelector(".task10_btn");
let count = 2;

taskTen_Btn.addEventListener("click", function () {
  count++;
  const newLi = document.createElement("li");
  newLi.textContent = "child " + count;
  taskTen.appendChild(newLi);
});
