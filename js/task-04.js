let counterValue = 0;
const decrementBtn = document.querySelector("[data-action = 'decrement']");
const incrementBtn = document.querySelector("[data-action = 'increment']");
const valueEl = document.querySelector("#value");

const onDecrementClick = () => {
  //   console.log("кликнули на минус");
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const onIncrementClick = () => {
  //   console.log("кликнули на плюс");
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", onDecrementClick);
incrementBtn.addEventListener("click", onIncrementClick);
