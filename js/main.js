$(document).ready(function () {
    // owlCarousel script
    $('#mainSlider').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
    });

    $('._thumbSlider').owlCarousel({
        loop: true,
        // items: 4,
        margin: 20,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
            },
            768: {
                items: 4,
                nav: false,
            },
        },
    });

    $('._thumbSliderv2').owlCarousel({
        loop: true,
        // items: 3,
        margin: 20,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            768: {
                items: 3,
                nav: false,
            },
        },
    });

    $('._thumbSliderv3').owlCarousel({
        loop: true,
        // items: 4,
        margin: 20,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                center: true,
            },
            768: {
                items: 4,
                nav: false,
            },
        },
    });

    // scroll header event
    $(window).on('scroll', function () {
        let el = $(this).scrollTop();
        const header = $('.header');

        if (el >= 480) {
            header.addClass('bg-on');
        } else {
            header.removeClass('bg-on');
        }
    });
});
