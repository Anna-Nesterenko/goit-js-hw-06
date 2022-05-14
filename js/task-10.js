// *запускает только один цикл
const input = document.querySelector("#controls input");

const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", amountItem);
destroy.addEventListener("click", onDestroyBoxes);

function inputChange(event) {
  input.setAttribute("count", Number(event.currentTarget.value));
  console.log(Number(event.currentTarget.value));
}

input.addEventListener("input", inputChange);

function amountItem() {
  const amount = input.value;
  onCreateBoxes(amount);
}

function onCreateBoxes(amount) {
  const baseBoxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    //  baseBoxSize += 10;
    const newBox = document.createElement("div");
    newBox.style.background = getRandomHexColor();
    newBox.style.height = `${baseBoxSize + i * 10}px`;
    newBox.style.width = `${baseBoxSize + i * 10}px`;
    boxes.append(newBox);
  }
}

function onDestroyBoxes() {
  boxes.remove();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
