import { imagesArray } from "./const.js";

const cards = document.querySelector(".cards");
const buttons = document.querySelectorAll(".button");

imagesArray.forEach((element) => {
  const cardElem = document
    .querySelector(".card__template")
    .content.querySelector(".card")
    .cloneNode(true);

  cards.append(cardElem);
  cardElem.querySelector(".card__img").src = element.url;
});

buttons.forEach((element, index) => {
  // console.log("el: ", element, "index: ", index);
  if (index == 0) {
    element.addEventListener("click", (ev) => {
      cards.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
      buttons.forEach((el) => {
        el.classList.remove("button_active");
      });
      ev.currentTarget.classList.add("button_active");
    });
  } else if (index == 1) {
    element.addEventListener("click", (ev) => {
      cards.scrollTo({
        left: 405,
        top: 0,
        behavior: "smooth",
      });
      buttons.forEach((el) => {
        el.classList.remove("button_active");
      });
      ev.currentTarget.classList.add("button_active");
    });
  } else {
    element.addEventListener("click", (ev) => {
      cards.scrollTo({
        left: 810,
        top: 0,
        behavior: "smooth",
      });
      buttons.forEach((el) => {
        el.classList.remove("button_active");
      });
      ev.currentTarget.classList.add("button_active");
    });
  }
});


