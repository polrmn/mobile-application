new Swiper('.swiper', {
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    // },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    autoplay: {
        delay: 10000,
        stopOnLastSlide: true,
        disableOnInteraction: true
    }
});

