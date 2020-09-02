$(document).ready(function () {
  $(".slider__inner").slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    speed: 500,
    prevArrow:
      '<button type="button" class="slick-prev" aria-label="Previous"><img src="./icons/arrow_white_right.png" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next" aria-label="Next"><img src="./icons/arrow_white_left.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          draggable: false,
        },
      },
    ],
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu_item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });

  menuItem.forEach(item => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    });
  });
});
