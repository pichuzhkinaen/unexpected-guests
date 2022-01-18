window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Carousel
    const myCarousel = new Carousel(document.querySelector(".carousel"), {
        
    });


    // Popup
    const popupBtn = document.querySelector('.popup-button'),
          popupForm = document.querySelector('.popup');

    popupBtn.addEventListener('click', function() {
        popupForm.classList.add('open');
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


$(window).on("resize", function() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', vh + 'px');
	addClassDevice();
});
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh + 'px');