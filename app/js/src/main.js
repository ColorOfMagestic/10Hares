const body = document.querySelector('.page-body'),
btn_menu = document.querySelector('.btn_menu'),
nav_mobile = document.querySelector('.nav_mobile');

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

accordionSlide();