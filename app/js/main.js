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

  const selectRequest = new Choices('.userattackhub__select-request', {
    searchEnabled: false,
    allowHTML: true,
  });

  const selectMethod = new Choices('.userattackhub__select-method', {
    searchEnabled: false,
    allowHTML: true,
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


  // tabs
  const tabs = document.querySelectorAll('.tab__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tab__items');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show');

    });

    tabs.forEach(item => {
      item.classList.remove('tab__item--active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tab__item--active');
  }

  hideTabContent();

  showTabContent();
  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tab__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();

          showTabContent(i);
        }
      });
    }


  });


});