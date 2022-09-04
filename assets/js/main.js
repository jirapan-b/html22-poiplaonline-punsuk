window.onload = function() {
    // script
};

$(function () {
    ("use strict");
    // script
});

$(document).ready(function () {

    $.scrollIt({
        easing: 'linear',
        topOffset: -100 
    });

    $('.top-graphic .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        focusOnSelect: true,
        touchMove: true,
        autoplay: false,
        autoplaySpeed: 5000,
    });
});