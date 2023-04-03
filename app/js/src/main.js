const body = document.querySelector('.page-body'),
    template = document.querySelector('main'),
    btn_menu = document.querySelector('.btn_menu'),
    nav_mobile = document.querySelector('.nav_mobile'),
    map_button = document.querySelector('.footer_map button'),
    map_button2 = document.querySelector('.contacts_map button'),
    map_info = document.querySelector('.map_info'),
    add_file = document.querySelector('.add-file'),
    add_file_input = document.querySelector('.add-file__input'),
    catalog_cards_wrapper = document.querySelector('.catalog_cards_wrapper'),
    row_layout_btns = document.querySelectorAll(' [data-role="row"]'),
    square_layout_btns = document.querySelectorAll(' [data-role="square"]'),
    open_filters_btns = document.querySelectorAll(' [data-role="open_filters"]'),
    filters_mobile = document.querySelector('.filters_mobile_wrapper');

const ODInputs = document.querySelectorAll('.order_data-form .place');

// modals trigger btns
const callMeHeaderBtns = document.querySelectorAll('[data-role="call_me_header"]'),
thanks_1Btns = document.querySelectorAll('[data-role="thanks_1"]'),
thanks_mk = document.querySelectorAll('[data-role="think_mk"]'),
singUp1btn = document.querySelectorAll('[data-role="sing_up_1"]'),
feedbackFullBtns = document.querySelectorAll('[data-role="feedback_full"]'),
feedbackLeaveBtns = document.querySelectorAll('[data-role="leave"]'),
leaveThanksBtns = document.querySelectorAll('[data-role="leave_thanks"]'),
modalCloseBtns = document.querySelectorAll('.modal__close');

// modals
const modalsAll = document.querySelectorAll('.modal'),
modalCall = document.querySelector('.modal_call'),
modal_mk = document.querySelector('.modal_mk'),
modalSuccess = document.querySelector('.modal_success'),
modalFeedbackFull = document.querySelector('.modal_feedback_full'),
modalLeave = document.querySelector('.modal_feedback'),
modalLeaveThanks = document.querySelector('.modal_leave_thanks'),
modalThanks = document.querySelector('.modal_thanks');


const toggleMenu = () => {
    body.classList.toggle('body--hidden');
    btn_menu.classList.toggle('open');
    nav_mobile.classList.toggle('nav_mobile--open');
};
btn_menu.addEventListener('click', toggleMenu);

const accordionSlide = () => {
    var acc = document.getElementsByClassName('accordion_item-trigger');
    let i;
    for (const item of acc) {
        const panel = item.nextElementSibling;
        if (item.classList.contains('active')) {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }

        item.addEventListener('click', function () {
            this.classList.toggle('active');
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    }
};

const showMapInfo = () => {
    map_button.addEventListener('click', () => {
        map_info.classList.toggle('map_info--visible');
    });
};

ODInputs.forEach((item) => {
    const sibling = item.nextElementSibling;
    const hidden = () => {
        sibling.classList.add('hide');
        item.classList.remove('colored');
        if (!item.value) {
            sibling.classList.remove('hide');
        }
    };
    const coloredBorder = () => {
        item.classList.add('colored');
    };

    item.addEventListener('focusin', coloredBorder);
    item.addEventListener('focusout', hidden);
});

const changesLayuotCatalogCards = () => {
    if (row_layout_btns.length === 0 || square_layout_btns.length === 0) {
        return;
    }

    row_layout_btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            catalog_cards_wrapper.classList.add('row_layout');
        });
    });

    square_layout_btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            catalog_cards_wrapper.classList.remove('row_layout');
        });
    });
};

const inputsRange = () => {

    let sliderOne = document.getElementById('slider-1');
    let sliderTwo = document.getElementById('slider-2');
    let displayValOne = document.getElementById('min');
    let displayValTwo = document.getElementById('max');
    let minGap = 0;
    let sliderTrack = document.querySelector('.slider-track');

    let sliderMaxValue = sliderOne.max;

    window.addEventListener('DOMContentLoaded', function fillColor() {
        displayValOne.value = `${sliderOne.value} ₽`;
        displayValTwo.value = `${sliderTwo.value} ₽`;

        const percent1 = (sliderOne.value / sliderMaxValue) * 100;
        const percent2 = (sliderTwo.value / sliderMaxValue) * 100;
        sliderTrack.style.background = `linear-gradient(to right, #efefef ${percent1}% , #d6373e ${percent1}% , #d6373e ${percent2}%, #efefef ${percent2}%)`;
    });


    sliderOne.addEventListener('input', function slideOne() {
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
            sliderOne.value = parseInt(sliderTwo.value) - minGap;
        }
        displayValOne.value = `${sliderOne.value} ₽`;
        fillColor();
    });
    sliderTwo.addEventListener('input', function slideTwo() {
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
            sliderTwo.value = parseInt(sliderOne.value) + minGap;
        }
        displayValTwo.value = `${sliderTwo.value} ₽`;
        fillColor();
    });

    function fillColor() {
        const percent1 = (sliderOne.value / sliderMaxValue) * 100;
        const percent2 = (sliderTwo.value / sliderMaxValue) * 100;
        sliderTrack.style.background = `linear-gradient(to right, #efefef ${percent1}% , #d6373e ${percent1}% , #d6373e ${percent2}%, #efefef ${percent2}%)`;
    }
};

const openCatalogFilters = () => {
    

  open_filters_btns.forEach(btn => {
    
    btn.addEventListener('click', () => {
        let text = {
            open: ` Открыть фильтр`,
            close: 'Закрыть фильтр',
        };

        let icon = {
            open: ` <svg class="icon">
            <use xlink:href="img/sprite.svg#filter"></use>
          </svg>`,
            close:  ` <svg class="icon icon_close">
            <use xlink:href="img/sprite.svg#close"></use>
          </svg>`,
        };

        if (filters_mobile.classList.contains('slide_on')) {
            btn.innerHTML = `${icon.open} ${text.open}`;
        } else {
            btn.innerHTML = `${icon.close} ${text.close}`;
        }
        filters_mobile.classList.toggle('slide_on');
    });
  })
};

add_file.addEventListener('click', () => add_file_input.click());

showMapInfo();
accordionSlide();


if(template.classList.contains('catalog_page')) {
    inputsRange();
    changesLayuotCatalogCards();
    openCatalogFilters();
}

const modals = () => {

    const openModal = (btnsList, modal) => {
        btnsList.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                body.classList.add('body--hidden');
                modal.classList.add('modal--active');
            })
        });
    };
    const openModalThank = (btnsList, modal, modal2) => {
        btnsList.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                body.classList.add('body--hidden');
                modal.classList.add('modal--active');
                modal2.classList.remove('modal--active');
            })
        });
    };

    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', ()=> {
            body.classList.remove('body--hidden');
            modalsAll.forEach(modal => {
                modal.classList.remove('modal--active')
            });
        } );
    })
    

    openModal(callMeHeaderBtns,modalCall);
    openModal(singUp1btn,modal_mk);
    openModal(feedbackFullBtns,modalFeedbackFull);
    openModal(feedbackLeaveBtns,modalLeave);


    openModalThank(thanks_1Btns,modalThanks, modalCall);
    openModalThank(thanks_mk,modalSuccess, modal_mk);
    openModalThank(leaveThanksBtns,modalLeaveThanks, modalLeave);

};

modals();


