let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let scaleToggle = document.querySelector('.example__scale-inner');
let scaleBar = document.querySelector('.example__scale-bar');
let picBlock = document.querySelector('.example__pic-block');

navToggle.classList.remove('main-nav__toggle--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

scaleBar.addEventListener('click', function() {
    if (scaleToggle.classList.contains('example__scale-inner--before')) {
        scaleToggle.classList.remove('example__scale-inner--before');
        scaleToggle.classList.add('example__scale-inner--after');
        picBlock.classList.remove('example__pic-block--before');
        picBlock.classList.add('example__pic-block--after');
    } else {
        scaleToggle.classList.add('example__scale-inner--before');
        scaleToggle.classList.remove('example__scale-inner--after');
        picBlock.classList.remove('example__pic-block--after');
        picBlock.classList.add('example__pic-block--before');
    }
  });
