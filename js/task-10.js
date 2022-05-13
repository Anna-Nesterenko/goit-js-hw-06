// Не работает. Подумаю позже
// const input = document.querySelector("#controls input");
// const create = document.querySelector("[data-create]");
// const destroy = document.querySelector("[data-destroy]");
// const boxes = document.querySelector("#boxes");

// const inputChange = (event) => {
//   input.setAttribute("count", Number(event.currentTarget.value));
//   console.log(Number(event.currentTarget.value));
// };

// input.addEventListener("input", inputChange);

// create.addEventListener("click", onCreateBoxes);
// destroy.addEventListener("click", onDestroyBoxes);

// let baseBoxSize = 30;

// function onCreateBoxes() {
//   let amount = Number(input.getAttribute("count"));
//   for (let i = 0; i < amount; i += 1) {
//     baseBoxSize += 10;
//     const newBox = document.createElement("div");
//     newBox.style.background = getRandomHexColor();
//     newBox.style.height = baseBoxSize + "px";
//     newBox.style.width = baseBoxSize + "px";
//     boxes.append(newBox);
//   }
// }

// function onDestroyBoxes() {
//   boxes.innerHTML === "";
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
