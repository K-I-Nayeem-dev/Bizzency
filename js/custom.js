$(function(){
    $(".ser-main").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed:1000,
        autoplay:false,
        nextArrow: '.next',
        prevArrow: false,
    })
    $(".port-main").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed:1000,
        autoplay:false,
        nextArrow: '.move',
        prevArrow: '.back',
    })
    $(".testi-main").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed:1000,
        autoplay:false,
        nextArrow: '.nexxt',
        prevArrow: '.bacck',
    })
    $(".blog-main").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed:1000,
        autoplay:false,
        nextArrow: '.movve',
        prevArrow: '.preev',
    })
})