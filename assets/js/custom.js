// js start here

$(document).ready(function(){
    $('.faq-slider').owlCarousel({
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
        dots: false,
        items: 1,
        loop: true,
        margin: 20,
        stagePadding: 20,
        autoplay: true,  
        autoplaySpeed: 1500,
        smartSpeed: 1800,
        responsive:{
            0:{
                items: 1,
            },
            650:{
                items: 2,
                stagePadding: 70,
            },
            991:{
                items: 3,
                stagePadding: 70,
            },
            1350:{
                items: 4,
                stagePadding: 70,
            }
        }
    });

    $('.header-slider').owlCarousel({
        nav: true,
        navText: ["<i class='fas fa-caret-left'></i>","<i class='fas fa-caret-right'></i>"],
        dots: false,
        items: 1,
        loop: true,
        margin: 0,
        stagePadding: 15,
        autoplay: true,  
        autoplaySpeed: 1500,
        smartSpeed: 1800,
        responsive:{
            0:{
                items: 1,
            },
            650:{
                items: 2,
                stagePadding: 70,
            },
            991:{
                items: 3,
                stagePadding: 70,
            },
            1199:{
                items: 4,
                stagePadding: 70,
            },
            1400:{
                items: 5,
                stagePadding: 70,
            }
        }
    });
});