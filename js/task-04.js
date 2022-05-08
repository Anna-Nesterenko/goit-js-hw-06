let counterValue = 0;
const decrementBtn = document.querySelector("#counter").firstElementChild;
const incrementBtn = document.querySelector("#counter").lastElementChild;
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", function () {
  //   console.log("кликнули на минус");
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrementBtn.addEventListener("click", function () {
  //   console.log("кликнули на плюс");
  counterValue += 1;
  valueEl.textContent = counterValue;
});
