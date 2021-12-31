$(function () {
    $('.header-slider').slick({
        vertical: true,
        verticalSwiping: true,
        autoplay: 3000,
        infinite: true,
        speed: 500,
        dots: true,
        dotsClass: 'header-dots',
        arrows: false,
    });
    $('.menu__btn').on('click', function() {
        $('.menu__list').slideToggle();
    })
})