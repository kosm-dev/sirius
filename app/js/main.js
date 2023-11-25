"use strict";

document.addEventListener("DOMContentLoaded", () => {


  if (document.querySelector('.header-special')) {
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



  if (document.querySelector('.editplan-slider')) {
    const editPlanSlider = new Swiper('.editplan-slider', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 32,
      navigation: {
        nextEl: '.editplan-slider__arrow-right',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      allowTouchMove: false, // запрещаем перемещение слайдов по умолчанию

    });

  }


  // selects
  if (document.querySelector('.custom-select')) {
    const customSelect = document.querySelectorAll('.custom-select');

    customSelect.forEach((select) => {
      new Choices(select, {
        searchEnabled: false,
        allowHTML: true,
        itemSelectText: ''
      });
    });
  }


  // dropdown


  if (document.querySelector('.user-dropdown')) {
    function UserDropdownComponent() {
      const dropdownHead = document.querySelector('.user-dropdown__head'),
        dropdownContent = document.querySelector('.user-dropdown__content'),
        dropdownIcon = document.querySelector('.user-dropdown__icon');

      // Обработчик события на клик
      dropdownHead.addEventListener('click', () => {
        // Добавляем/удаляем класс активности
        dropdownContent.classList.toggle('active');
        dropdownIcon.classList.toggle('active');
      });
    }

    // Инициализируем компонент
    UserDropdownComponent();
  }


// spoiler
  if (document.querySelector('.spoiler')) {
    function SpoilerComponent(spoilerElement) {
      const spoilerHead = spoilerElement.querySelector('.spoiler__head');
      const spoilerDescr = spoilerElement.querySelector('.spoiler__descr');
      const spoilerIcon = spoilerElement.querySelector('.spoiler__icon');

      spoilerHead.addEventListener('click', () => {
        spoilerDescr.classList.toggle('active');
        spoilerIcon.classList.toggle('active');
      });
    }

    const spoilerElements = document.querySelectorAll('.spoiler');

    spoilerElements.forEach((spoilerElement) => {
      SpoilerComponent(spoilerElement);
    });

  }


});