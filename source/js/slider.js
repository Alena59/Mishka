var quotesSwiper = new Swiper ('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
   delay: 3000,
   },
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
});

quotesSwiper.init();
