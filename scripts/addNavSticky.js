'use strict';

const addNavSticky = () => {
  
  const startCount = 100;
  let navigation = document.querySelector('.navigation');

  if(window.pageYOffset > startCount) {
    navigation.classList.add('navigation__active');
  } else {
    navigation.classList.remove('navigation__active');
  }

}

window.onscroll = addNavSticky;
addNavSticky();