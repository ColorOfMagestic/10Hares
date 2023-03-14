const intro = new Swiper('.intro_banner-swiper', {
    loop: true,
    spaceBetween: 10,
    autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: `[data-role="intro_banner-next"]`,
        prevEl: `[data-role="intro_banner-prev"]`,
    },
});

const main_gallery = new Swiper('.gallery_mobile-swiper', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1.2,
    breakpoints: {
        375: {
            slidesPerView: 1.3,
        },
        576: {
            slidesPerView: 1.6,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: `[data-role="gallery_mobile-next"]`,
        prevEl: `[data-role="gallery_mobile-prev"]`,
    },
});

const main_gallery_desk = new Swiper('.gallery_desktop-swiper', {
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: `[data-role="gallery_desktop-next"]`,
        prevEl: `[data-role="gallery_desktop-prev"]`,
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
const feedback = new Swiper('.feedback-swiper', {
    loop: true,
    // spaceBetween: 30,
    navigation: {
        nextEl: `[data-role="feedback-next"]`,
        prevEl: `[data-role="feedback-prev"]`,
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
