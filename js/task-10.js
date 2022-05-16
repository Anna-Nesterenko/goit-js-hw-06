const refs = {
  input: document.querySelector("#controls input"),
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.create.addEventListener("click", amountItem);
refs.destroy.addEventListener("click", onDestroyBoxes);

function amountItem() {
  const amount = refs.input.value;
  onCreateBoxes(amount);
}

const baseBoxSize = 30;

function onCreateBoxes(amount) {
  const newArr = [];
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.background = getRandomHexColor();
    newBox.style.height = `${baseBoxSize + 10 * i}px`;
    newBox.style.width = `${baseBoxSize + 10 * i}px`;
    newArr.push(newBox);
  }
  refs.boxes.append(...newArr);
}

function onDestroyBoxes() {
  refs.boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
