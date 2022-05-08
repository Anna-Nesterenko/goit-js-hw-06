const liItemElem = document.querySelectorAll("li.item");

console.log(`Number of categories: ${liItemElem.length}`);

const ulItemElem = document.querySelectorAll("#categories>li");

ulItemElem.forEach((el) => {
  console.log(
    `Category: ${el.firstElementChild.textContent}
Elements: ${el.lastElementChild.children.length}`
  );
});
