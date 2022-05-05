const liItemElem = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItemElem.length}`);

const categoriesArr = [...liItemElem]
  .map(
    (categories) =>
      `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length} `
  )
  .join("\n");

console.log(categoriesArr);
