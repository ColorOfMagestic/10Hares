const body = document.querySelector('.page-body'),
btn_menu = document.querySelector('.btn_menu'),
nav_mobile = document.querySelector('.nav_mobile'),
map_button = document.querySelector('.footer_map button'),
map_button2 = document.querySelector('.contacts_map button'),
map_info = document.querySelector('.map_info'),
add_file = document.querySelector('.add-file'),
add_file_input = document.querySelector('.add-file__input');

const ODInputs = document.querySelectorAll('.order_data-form .place');
const toggleMenu =()=> {
  body.classList.toggle('body--hidden');
  btn_menu.classList.toggle('open');
  nav_mobile.classList.toggle('nav_mobile--open');
}
btn_menu.addEventListener('click', toggleMenu);

const accordionSlide = ()=> {
  var acc = document.getElementsByClassName('accordion_item-trigger');
  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function(){
      this.classList.toggle('active');
  
      const panel = this.nextElementSibling;
  
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }
}

const showMapInfo = () => {
  map_button.addEventListener('click', ()=> {
    map_info.classList.toggle('map_info--visible');
  })
};


ODInputs.forEach(item => {
  const sibling = item.nextElementSibling;
  const hidden = () => {
    sibling.classList.add('hide');
    item.classList.remove('colored');
    if(!item.value) {
      sibling.classList.remove('hide');
    }
  }
  const coloredBorder = () => {
    item.classList.add('colored');
  }

  item.addEventListener('focusin', coloredBorder);
  item.addEventListener('focusout', hidden);
})

add_file.addEventListener("click", () => add_file_input.click());

showMapInfo();
accordionSlide();