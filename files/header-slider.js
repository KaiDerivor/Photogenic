const btnDown = document.querySelector(".box-content__button");
const btnUp = document.querySelector(".box-img__button");

btnDown.addEventListener("click", slideDownHandler);
btnUp.addEventListener("click", slideUpHandler);

let iteratorSlideText = 1;
let iteratorSlideImg = 1;
let divs = document.querySelectorAll(".box-content__slide");
let imgs = document.querySelectorAll(".box-img__item");
let totalSlides = divs.length;
prepareImg();
let timeAnimation = parseFloat(getComputedStyle(divs[0]).transitionDuration); //from css
var t1 = timeAnimation / totalSlides; // time increase for large slide
var t2 = `all 0.4s ease`; //settings standart animation
var t3 = `all ${0.4}s ease`; //settings for last/first slide

function slideDownHandler() {
  //box-content
  if (iteratorSlideText == 1) {
    let i = 1;
    for (const div of divs) {
      div.style.transition = `all ${iteratorSlideText * t1}s linear`;
      div.style.transform = `translateY(-${iteratorSlideText * 100}%)`;
      iteratorSlideText++;
      i++;
    }
    iteratorSlideText = 1;
    divs[totalSlides - 1].style.transform = `translateY(-${
      (totalSlides - 1) * 100
    }%)`;
    divs[totalSlides - 1].style.transition = t3;
    divs[0].style.transition = t3;

    setTimeout(() => {
      for (const div of divs) {
        div.style.transition = t2;
      }
    }, 0);
    iteratorSlideText = totalSlides;
  } else {
    iteratorSlideText--;

    divs.forEach((elem) => {
      elem.style.transform = `translateY(-${(iteratorSlideText - 1) * 100}%)`;
    });
  }
  //   box-img
  if (iteratorSlideImg == totalSlides) {
    imgs.forEach((elem) => {
      elem.style.transform = `translateY(${0}%)`;
      elem.style.transition = t2;
    });
    imgs[0].style.transition = t2;
    imgs[totalSlides - 1].style.transition = t3;
    iteratorSlideImg = 1;
  } else {
    imgs.forEach((elem) => {
      elem.style.transform = `translateY(-${iteratorSlideImg * 100}%)`;
    });
    // if (iteratorSlideImg > 1) {
    //   imgs[0].style.transform = `translateY(-100%)`;
    // }
    iteratorSlideImg++;
  }
}

function slideUpHandler() {
  //box-content__slide
  if (iteratorSlideText == totalSlides) {
    divs.forEach((elem) => {
      elem.style.transform = `translateY(${0}%)`;
    });
    iteratorSlideText = 0;
  }

  divs.forEach((elem) => {
    elem.style.transform = `translateY(-${iteratorSlideText * 100}%)`;
  });
  // if (iteratorSlideText > 1) {
  //   divs[0].style.transform = `translateY(-100%)`;
  // }
  iteratorSlideText++;

  //box-img
  if (iteratorSlideImg == 1) {
    iteratorSlideImg = 1;
    for (const img of imgs) {
      img.style.transition = `all ${iteratorSlideImg * t1 + 0.3}s linear`;
      img.style.transform = `translateY(-${iteratorSlideImg * 100}%)`;
      iteratorSlideImg++;
    }
    iteratorSlideImg = 1;
    imgs[totalSlides - 1].style.transform = `translateY(-${
      (totalSlides - 1) * 100
    }%)`;
    imgs[totalSlides - 1].style.transition = t3;
    imgs[0].style.transition = t3;

    setTimeout(() => {
      for (const img of imgs) {
        img.style.transition = t2;
      }
    }, 0);
    iteratorSlideImg = totalSlides;
  } else {
    iteratorSlideImg--;
    imgs.forEach((elem) => {
      elem.style.transform = `translateY(-${(iteratorSlideImg - 1) * 100}%)`;
    });
  }
}

function prepareImg() {
  imgs.forEach((elem) => {
    // elem.style.transition = "0s";
    elem.style.transform = `translateY(-${(totalSlides - 1) * 100}%)`;
  });
  // imgs.forEach((elem) => {
  //   elem.style.transition = t2;
  // });

  iteratorSlideImg = totalSlides;
}
