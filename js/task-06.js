const input = document.querySelector("#validation-input");
const validLength = Number(input.getAttribute("data-length"));

input.addEventListener("blur", onInputChangeColor);

function onInputChangeColor(event) {
  if (event.currentTarget.value.length === validLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
