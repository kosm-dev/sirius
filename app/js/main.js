"use strict";

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector('.header') || document.querySelector('.header-special')) {
    headerScroll('.header');
    headerScroll('.header-special');
  }


  function headerScroll(headerClass) {
    const header = document.querySelector(headerClass);
    window.onscroll = () => {
      if (window.scrollY > 0) {
        header.classList.add('header--scroll');
      }
      else {
        header.classList.remove('header--scroll');
      }
    };
  }

  const swiper = new Swiper('.faq-slider', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 18,
    grabCursor: 'true',
    // Navigation arrows
    navigation: {
      nextEl: '.faq-slider__arrow-right',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

  });

  // const element = document.querySelector('.user-select');
  // const choices = new Choices(element);

   // dropdowns
  // const dropdowns = document.querySelectorAll('.dropdown');
  // dropdowns.forEach(dropdown => {
  //   const select = dropdown.querySelector('.select'),
  //     caret = dropdown.querySelector('.caret'),
  //     menu = dropdown.querySelector('.menu'),
  //     options = dropdown.querySelectorAll('.menu a'),
  //     selected = dropdown.querySelector('.selected');

  //   select.addEventListener('click', () => {
  //     select.classList.toggle('select-clicked');
  //     caret.classList.toggle('caret-rotate');
  //     menu.classList.toggle('menu-open');
  //   });
  //   options.forEach(option => {
  //     option.addEventListener('click', () => {
  //       selected.innerText = option.innerText;

  //       select.classList.remove('select-clicked');
  //       caret.classList.remove('caret-rotate');
  //       menu.classList.remove('menu-open');

  //       options.forEach(option => {
  //         option.classList.remove('active');
  //       });
  //       option.classList.add('active');
  //     });
  //   });
  // });


});