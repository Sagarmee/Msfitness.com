'use strict'

const openmenu = document.querySelector(".openMenu")
const navbar = document.querySelector(".nvbar")
const closemenu = document.querySelector(".closeMenu")


openmenu.addEventListener("click", function () {
    navbar.style.display = 'flex';
    navbar.style.top = '0'
})

closemenu.addEventListener("click", function () {
    navbar.style.top = '-100%';
})

//popup image///

const selectimg = document.querySelectorAll(".image-collection img")
const popup = document.querySelector(".popup-image")
const pop_img = document.querySelector(".popup-image img")
const check = document.querySelector(".popup-image span")


check.addEventListener('click', () => {
    popup.style.display = "none"
})

selectimg.forEach((img) => {
    img.addEventListener("click", () => {
        popup.style.display = "block"

        pop_img.src = img.getAttribute("src");
    })
})

//counter

$.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 800,
        complete: ''
    }, options);

    var thisElement = $(this);

    $({ count: settings.start }).animate({ count: settings.end }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({ end: 5, duration: 3000 });
$('#number2').jQuerySimpleCounter({ end: 450, duration: 3000 });
$('#number3').jQuerySimpleCounter({ end: 385, duration: 2000 });
$('#number4').jQuerySimpleCounter({ end: 400, duration: 2500 });



/* AUTHOR LINK */
$('.about-me-img').hover(function () {
    $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
}, function () {
    $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
});

