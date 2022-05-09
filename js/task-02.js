const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulList = document.querySelector("#ingredients");
// *вариант 1
// const makeLiSeparate = (elements) =>
//   elements.forEach((element) => {
//     const liElem = document.createElement("li");
//     liElem.classList.add("item");
//     liElem.innerHTML = element;
//     ulList.append(liElem);
//   });

// makeLiSeparate(ingredients);

// *вариант 2
const makeLiSeparate = (element) => {
  const liElem = document.createElement("li");
  liElem.classList.add("item");
  liElem.textContent = element;
  return liElem;
};

const elements = ingredients.map(makeLiSeparate);
ulList.append(...elements);
