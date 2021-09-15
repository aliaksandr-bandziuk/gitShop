'use strict';

const mobileMenu = document.querySelector('.mobile-menu'),
      mobileMenuList = document.querySelector('.mobile-menu__list');

const toggleMenu = () => mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu__close');
  mobileMenuList.classList.toggle('mobile-menu__list-hidden');
})

toggleMenu();