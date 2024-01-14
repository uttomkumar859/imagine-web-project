$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 10,
    nav:false,
    autoplay : true,
    autoplaySpeed : 1000,
    responsive:{
        0:{
            items:1,
            dots : false,
        },
        420 :{
            items : 1
        },
        768:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})