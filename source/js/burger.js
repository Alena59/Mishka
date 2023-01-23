let navMain = document.querySelector('.main-header__wrapper');
let navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-header__wrapper--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-header__wrapper--closed')) {
    navMain.classList.remove('main-header__wrapper--closed');
    navMain.classList.add('main-header__wrapper--open');
  } else {
    navMain.classList.add('main-header__wrapper--closed');
    navMain.classList.remove('main-header__wrapper--open');
  }
});
