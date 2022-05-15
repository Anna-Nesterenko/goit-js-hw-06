const input = document.querySelector("#controls input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", amountItem);
destroy.addEventListener("click", onDestroyBoxes);

// function inputChange(event) {
//   input.setAttribute("count", Number(event.currentTarget.value));
//   console.log(Number(event.currentTarget.value));
// }
// input.addEventListener("input", inputChange);

function amountItem() {
  const amount = input.value;
  onCreateBoxes(amount);
}
const baseBoxSize = 30;

function onCreateBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.background = getRandomHexColor();
    newBox.classList.add("new-box");
    newBox.style.height = `${baseBoxSize + 10 * i}px`;
    newBox.style.width = `${baseBoxSize + 10 * i}px`;

    boxes.append(newBox);
  }
}
//     if (amount !== 0) {
//       newBox.style.height = `${baseBoxSize + 10 * i}px`;
//       newBox.style.width = `${baseBoxSize + 10 * i}px`;
//     } else {
//       newBox.style.height = `${baseBoxSize}px`;
//       newBox.style.width = `${baseBoxSize}px`;
//     }

function onDestroyBoxes() {
  const allNewBoxes = document.querySelectorAll(".new-box");
  // console.log(allNewBoxes);
  for (let allNewBoxe of allNewBoxes) {
    boxes.removeChild(allNewBoxe);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
