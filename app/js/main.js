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


  if (document.querySelector('.faq-slider')) {
    const faqSlider = new Swiper('.faq-slider', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 18,
      grabCursor: 'true',
      navigation: {
        nextEl: '.faq-slider__arrow-right',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },

    });

  }



  if (document.querySelector('.userpurchase-slider')) {
    const userpurchaseSlider = new Swiper('.userpurchase-slider', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 70,
      grabCursor: 'true',
      navigation: {
        nextEl: '.userpurchase-slider__arrow-right',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },

    });

  }

  // const element = document.querySelector('.userattackhub-select');
  const choices = new Choices('.userattackhub-select', {
    searchEnabled: false,
  });



  // переписать ввиде функции
  // пофиксить спойлер
  const spoilerContent = document.querySelectorAll(".spoiler__content");

  spoilerContent.forEach((item) => {
    let spoilerHead = item.querySelector(".spoiler__head");
    spoilerHead.addEventListener("click", () => {
      item.classList.toggle("open");

      let spoilerArrow = item.querySelector(".spoiler__icon"),
        spoilerDescr = item.querySelector(".spoiler__descr");

      spoilerArrow.classList.toggle("open");

      if (item.classList.contains("open")) {
        spoilerDescr.style.height = `${spoilerDescr.scrollHeight}px`;
        spoilerDescr.classList.add('active');
      } else {
        spoilerDescr.style.height = "0px";
        spoilerDescr.classList.remove('active');
      }
    });

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