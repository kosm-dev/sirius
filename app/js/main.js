"use strict";

document.addEventListener("DOMContentLoaded", () => {
  headerScroll('.header');

  headerScroll('.header-special');

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

});