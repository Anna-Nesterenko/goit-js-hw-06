const fontControl = document.querySelector("#font-size-control");
// console.log(fontControl);
const text = document.querySelector("#text");
// console.log(text);

function onChangeFontSize(event) {
  const textSize = event.currentTarget.value;
  text.style.fontSize = textSize + "px";
}

fontControl.addEventListener("input", onChangeFontSize);
