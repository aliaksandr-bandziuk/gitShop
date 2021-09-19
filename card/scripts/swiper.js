const swiper = new Swiper('.swiper-same', {
  slidesPerView: 4,
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  grabCursor: true,
  pagination: {
    el: '.slide__numbers',
    type: 'fraction',
    clickable: true,
    renderFraction: (currentClass, totalClass) => `
      <span class="${currentClass}"></span> /
      <span class="${totalClass}"></span>`,
  },
  on: {
    init() {
      setTimeout(updateFraction, 0, this)
    },
    slideChange() {
      updateFraction(this);
    },
    resize() {
      updateFraction(this);
    },
  },
  navigation: {
    nextEl: '.arrow__right',
    prevEl: '.arrow__left',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 20
    },
    630: {
      slidesPerView: 2,
      // spaceBetween: 30
    },
    1025: {
      slidesPerView: 3,
      // spaceBetween: 20
    },
    1100: {
      slidesPerView: 4,
      // spaceBetween: 20
    }
  }
});

// Функция, которая считает слайды
// Использовать с кодом внутри Swiper
function updateFraction(slider) {
  const { params, activeIndex } = slider;

  slider.$el
    .find(`.${params.pagination.currentClass}`)
    .text(`${activeIndex + 1} - ${activeIndex + params.slidesPerView}`);

  slider.$el
    .find(`.${params.pagination.totalClass}`)
    .text(slider.slides.length)
}