"use strict";

document.addEventListener("DOMContentLoaded", () => {
  headerScroll('.header');

  function headerScroll(headerClass) {
    const header = document.querySelector(headerClass);
    window.onscroll = () => {
      if (window.scrollY > 0) {
        header.classList.add('header--scroll');
        header.classList.remove('header-special');
        header.classList.add('fade-in');
      }
      else {
        header.classList.remove('header--scroll');
        header.classList.add('header-special');
        header.classList.remove('fade-in');
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

});