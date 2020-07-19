$(function () {
   $('.slider__for').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1500,
      asNavFor: '.slider__nav',
   });
   $('.slider__nav').slick({
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 6,
      asNavFor: '.slider__for',
      focusOnSelect: true
   });

   $('.menu-btn').on('click', function(){
      $('.menu ul').slideToggle();
   });
});

      