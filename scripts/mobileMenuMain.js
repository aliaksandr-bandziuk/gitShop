'use strict';

const mobileMenuMain = document.querySelector('.mobile-menu-main'),
      mobileMenuMainList = document.querySelector('.mobile-menu-main__list');

const toggleMobileMenu = () => mobileMenuMain.addEventListener('click', () => {
  mobileMenuMain.classList.toggle('mobile-menu-main__close');
  mobileMenuMainList.classList.toggle('mobile-menu-main__list-hidden');
})

toggleMobileMenu();