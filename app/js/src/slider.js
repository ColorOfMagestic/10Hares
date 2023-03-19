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

const feed = new Swiper('.feedback-swiper', {
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        375: {
            slidesPerView: 1.2,
        },
        576: {
            slidesPerView: 1.7,
        },
        768: {
            slidesPerView: 2.2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 1.7,
            spaceBetween: 30,
        },
    },
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: `[data-role="feedback-next"]`,
        prevEl: `[data-role="feedback-prev"]`,
    },
});

const feedDesk = new Swiper('.feedback_desktop-swiper', {
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: `[data-role="feedback_desktop-next"]`,
        prevEl: `[data-role="feedback_desktop-prev"]`,
    },
});

const request = new Swiper('.request-swiper', {
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: `[data-role="request-swiper-next"]`,
        prevEl: `[data-role="request-swiper-prev"]`,
    },
});
const product = new Swiper('.product-swiper', {
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        375: {
            slidesPerView: 1.4,
        },
        576: {
            slidesPerView: 2.2,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1900: {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: false,
        }
    },

    
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: `[data-role="product-swiper-next"]`,
        prevEl: `[data-role="product-swiper-prev"]`,
    },
});
