window.addEventListener('DOMContentLoaded', function() {
    'use strict';


    // Popup
    const wrapper = document.querySelector('.wrapper'),
          popupBtn = document.querySelector('.popup-button'),
          popupForm = document.querySelector('.popup'),
          close = document.querySelector('.form__close');

    popupBtn.addEventListener('click', function() {
        popupForm.classList.add('open');
        wrapper.classList.add('overflow-hidden');
    });

    close.addEventListener('click', function() {
        popupForm.classList.remove('open');
        wrapper.classList.remove('overflow-hidden');
    });


    const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
        Dots: false,
        Navigation: false,
    });
      
    const smallCarousel = new Carousel(document.querySelector("#smallCarousel"), {
        Sync: {
          target: mainCarousel,
        },
        Dots: false,
        Navigation: false,
      
        infinite: false,
        center: true,
        slidesPerPage: 1,
    });


    // Мобильное меню
    // const hamburger = document.querySelector('.hamburger'),
    //       menu = document.querySelector('.menu');

    // hamburger.addEventListener('click', function() {
    //     if (hamburger.classList.contains('active')) {
    //         hamburger.classList.remove('active');
    //         menu.classList.remove('open');
    //     } else {
    //         hamburger.classList.add('active');
    //         menu.classList.add('open');
    //     }
    // });

    
});