const body = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

btnChangeColor.addEventListener("click", changeBtnColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBtnColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = body.style.backgroundColor;
}
