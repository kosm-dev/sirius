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

  // section-indicator





  if (document.querySelector('.section-indicator')) {
    // Получаем все секции на странице
    const sections = document.querySelectorAll('section');

    // Получаем элементы индикатора и счетчиков
    const currentSectionElement = document.getElementById('currentSection');
    const totalSectionsElement = document.getElementById('totalSections');

    // Функция для форматирования числа в формат "01"
    function formatNumber(number) {
      return number < 10 ? `0${number}` : number;
    }

    // Обновляем значения счетчиков
    function updateSectionCount() {
      const currentSection = Array.from(sections).findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > 0;
      }) + 1;

      const totalSections = sections.length;

      currentSectionElement.textContent = formatNumber(currentSection);
      totalSectionsElement.textContent = formatNumber(totalSections);
    }

    // Вызываем функцию обновления при загрузке страницы
    updateSectionCount();

    // Добавляем обработчик для события прокрутки
    window.addEventListener('scroll', function () {
      updateSectionCount();
    });

    // Добавляем обработчик для события изменения размеров окна
    window.addEventListener('resize', function () {
      updateSectionCount();
    });






    function handleScroll() {
      var indicator = document.querySelector('.section-indicator');
      var scrollPosition = window.scrollY;

      if (scrollPosition >= 100) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    }

    // Добавляем обработчик событий при скролле
    window.addEventListener('scroll', handleScroll);
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

  // support

  if (document.querySelector('.support')) {
    function supportBtn() {
      const supportBtn = document.querySelector('.support'),
        supportLink = document.querySelector('.support__link');

      // Обработчик события на клик
      supportBtn.addEventListener('click', () => {
        // Добавляем/удаляем класс активности
        supportLink.classList.toggle('active');
      });
    }

    // Инициализируем компонент
    supportBtn();
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
      const spoilerHead = spoilerElement.querySelector('.spoiler__head'),
        spoilerDescr = spoilerElement.querySelector('.spoiler__descr'),
        spoilerIcon = spoilerElement.querySelector('.spoiler__icon');

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