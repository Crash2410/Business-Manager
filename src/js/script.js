$(document).ready(function () {
  //slider header

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

  // Tabs

  $("ul.solutions__tabs").on(
    "click",
    "li:not(.solutions__tab_active)",
    function () {
      $(this)
        .addClass("solutions__tab_active")
        .siblings()
        .removeClass("solutions__tab_active")
        .closest("div.container")
        .find("div.solutions__content")
        .removeClass("solutions__content_active")
        .eq($(this).index())
        .addClass("solutions__content_active");
    }
  );

  // Slider in Tabs

  $(".slider__solutions").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    speed: 500,
    prevArrow:
      '<button type="button" class="slick-prev" aria-label="Previous"><img src="./icons/arrow_right.png" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next" aria-label="Next"><img src="./icons/arrow_left.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          draggable: false,
          dots: true,
        },
      },
    ],
  });

  // Scroll UP

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }
  });

  // SlowScrolling

  function slowScrolling(item) {
    $(`a[href=${item}]`).click(function () {
      const _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
    });
  }

  slowScrolling("#up");

  // animate AOS.JS

  AOS.init();

  // Anim WOW.JS
  new WOW().init();
});

// Phone menu

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
