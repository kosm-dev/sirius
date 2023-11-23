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

  if (document.querySelector('.userattackhub__select-request')) {
    const selectRequest = new Choices('.userattackhub__select-request', {
      searchEnabled: false,
      allowHTML: true,
      itemSelectText: '',
    });
  }

  if (document.querySelector('.userattackhub__select-method')) {
    const selectMethod = new Choices('.userattackhub__select-method', {
      searchEnabled: false,
      allowHTML: true,
      itemSelectText: '',
    });
  }

  if (document.querySelector('.userattackhub__select-layer4')) {
    const selectMethodLayer = new Choices('.userattackhub__select-layer4', {
      searchEnabled: false,
      allowHTML: true,
      itemSelectText: '',
    });

  }



  if (document.querySelector('.user-dropdown__head')) {
    var userDropdownHead = document.querySelector('.user-dropdown__head');

    userDropdownHead.addEventListener('click', function () {
      userDropdownHead.classList.toggle('active');
    });

  }





  // переписать ввиде функции
  // пофиксить спойлер


  // const spoilerContent = document.querySelectorAll(".spoiler__content");

  // spoilerContent.forEach((item) => {
  //   let spoilerHead = item.querySelector(".spoiler__head");
  //   spoilerHead.addEventListener("click", () => {
  //     item.classList.toggle("open");

  //     let spoilerArrow = item.querySelector(".spoiler__icon"),
  //       spoilerDescr = item.querySelector(".spoiler__descr");

  //     spoilerArrow.classList.toggle("open");

  //     if (item.classList.contains("open")) {
  //       spoilerDescr.style.height = `${spoilerDescr.scrollHeight}px`;
  //       spoilerDescr.classList.add('active');
  //     } else {
  //       spoilerDescr.style.height = "0px";
  //       spoilerDescr.classList.remove('active');
  //     }
  //   });

  // });


  // function toggleSpoiler(item, headClass, iconClass, descrClass) {
  //   item.classList.toggle("open");

  //   let spoilerArrow = item.querySelector(`.${iconClass}`),
  //     spoilerDescr = item.querySelector(`.${descrClass}`);

  //   spoilerArrow.classList.toggle("open");

  //   if (item.classList.contains("open")) {
  //     spoilerDescr.style.height = `${spoilerDescr.scrollHeight}px`;
  //     spoilerDescr.classList.add("active");
  //   } else {
  //     spoilerDescr.style.height = "0px";
  //     spoilerDescr.classList.remove("active");
  //   }
  // }

  // function handleSpoilerClick(item, headClass, iconClass, descrClass) {
  //   return () => {
  //     toggleSpoiler(item, headClass, iconClass, descrClass);
  //   };
  // }

  // const spoilerContent = document.querySelectorAll(".spoiler__content");

  // spoilerContent.forEach((item) => {
  //   let spoilerHead = item.querySelector(".spoiler__head"),
  //     spoilerIcon = item.querySelector(".spoiler__icon"),
  //     spoilerDescr = item.querySelector(".spoiler__descr");

  //   spoilerHead.addEventListener("click", handleSpoilerClick(item, "spoiler__head", "spoiler__icon", "spoiler__descr"));
  //   // Можете подставить свои классы вместо "spoiler__head", "spoiler__icon", "spoiler__descr"
  // });




});