
$('#slider-area').owlCarousel({
    loop: true,
    autoplay: true,
    navigation: true,
    nav: true,
    autoplayTimeout: 9000,
    smartSpeed: 1000,
    // navText: ["<i class='icon-glyph-205'></i>", "<i class='icon-glyph-204'></i>"],
    navClass: ['owl-prev', 'owl-next'],
    responsive: {
        0: {
            items: 1
        },
        800: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


$('.slider_one').owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})



// client testimonail

$('.slider-two').owlCarousel({

    autoPlay: 3000, //Set AutoPlay to 5 seconds
    autoplay: true,
    smartSpeed: 2000, // Default is 250
    items: 4,
    loop: true,
    margin: 30,
    touchDrag: true,
    mouseDrag: true,
    pagination: false,
    nav: false,
    dots: false,
    responsive: {
        1200: {
            items: 1
        },
        992: {
            items: 1
        },
        768: {
            items: 1
        },
        480: {
            items: 1
        },
        320: {
            items: 1
        },
        280: {
            items: 1
        }
    }
});


