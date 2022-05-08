const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imgGallery = document.querySelector(".gallery");
// *Вариант 1
imgGallery.setAttribute(
  "style",
  "list-style-type:none; display: flex; padding: 0; justify-content: space-around;"
);
// *Вариант 2
// imgGallery.style.display = "flex";
// imgGallery.style.listStyleType = "none";
// imgGallery.style.justifyContent = "space-around";
// imgGallery.style.padding = "0";

const makeGallery = (elements) => {
  elements.forEach((el) => {
    imgGallery.insertAdjacentHTML(
      "afterbegin",
      `<li><img src = "${el.url}" alt = "${el.alt}" width = "200" height = "130"/><li>`
    );
  });
};

makeGallery(images);
