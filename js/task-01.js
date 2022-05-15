const liItemElem = document.querySelectorAll("#categories>li");

console.log(`Number of categories: ${liItemElem.length}`);

liItemElem.forEach((el) => {
  console.log(
    `Category: ${el.firstElementChild.textContent}
Elements: ${el.lastElementChild.children.length}`
  );
});
