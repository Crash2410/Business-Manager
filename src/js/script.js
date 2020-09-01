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
  });
});
