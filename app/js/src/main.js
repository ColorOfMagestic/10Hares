const body = document.querySelector('.page-body'),
btn_menu = document.querySelector('.btn_menu'),
nav_mobile = document.querySelector('.nav_mobile'),
map_button = document.querySelector('.footer_map button'),
map_button2 = document.querySelector('.contacts_map button'),
map_info = document.querySelector('.map_info'),
add_file = document.querySelector('.add-file'),
add_file_input = document.querySelector('.add-file__input');

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

add_file.addEventListener("click", () => add_file_input.click());
add_file_input.addEventListener("change", loadImage);
function loadImage() {
  let file = add_file_input.files[0];
  if (!file) return;
  console.log(file);
}
showMapInfo();
accordionSlide();