//testimoinials

let standartWidthImg = getComputedStyle(
  document.querySelector(".item.center > img")
).width; //widht img from css
let standartWidthItem = getComputedStyle(
  document.querySelector(".item.center")
).width; //widht img from css
let heightTestimonialSection = getComputedStyle(
  document.querySelector(".testimonials")
).height;
const people = document.querySelectorAll(".item");
people.forEach((elem) => {
  elem.addEventListener("click", replaceHumanHandler);
});

function replaceHumanHandler(element) {
  let item = element.target.parentNode;
  if (!item.classList.contains("side")) {
    return;
  }
  //recheck height
  let height = (heightTestimonialSection = getComputedStyle(
    document.querySelector(".testimonials .item.center")
  ).height);
  if (height > heightTestimonialSection) {
    heightTestimonialSection = document.querySelector(
      ".testimonials"
    ).style.height = height;
  }

  let imgWidth = getComputedStyle(element.target).width;
  let shiftTop = getComputedStyle(item).top;
  let shiftLeft = getComputedStyle(item).left;

  const currentItem = document.querySelector(".item.center");

  currentItem.childNodes[1].style.width = imgWidth;
  currentItem.style.width = imgWidth;

  item.classList.toggle("center");
  item.classList.toggle("side");
  item.style.zIndex = 2;
  item.style.width = standartWidthItem;
  item.childNodes[1].style.width = standartWidthImg;

  currentItem.style.left = shiftLeft;
  currentItem.style.top = shiftTop;
  currentItem.style.zIndex = 4;
  currentItem.classList.toggle("center");
  currentItem.classList.toggle("side");
}
