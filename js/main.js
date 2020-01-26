// carousel
$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        dots: false,
        autoplayTimeout: 3000,
        nav: true,
        margin: 10,
        items: 2,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: {
            540: {
                items: 3,
            },
        }
    });

//animation
AOS.init({
    offset: 200,
    duration: 1000,
});

// menu
$('#toggle').click(function () {
    $('#nav').toggleClass('mobile');
});});
