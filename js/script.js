$('.main-slider-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    smartSpeed: 1000,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 5000, // Set timeout to 5000ms
    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        800: {
            items: 1
        },
        1024: {
            items: 1
        },
        1200: {
            items: 1
        },
        1500: {
            items: 1
        }
    }
});