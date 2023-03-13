
const swiper = new Swiper('.intro_banner-swiper', {
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
