'use strict';

const cardOption1 = document.querySelector('.card__option1');
const cardOption2 = document.querySelector('.card__option2');
const costNumber1 = document.querySelector('.cost__number1');
const costNumber2 = document.querySelector('.cost__number2');
const btnMinus = document.querySelector('.btn__minus');
const btnPlus = document.querySelector('.btn__plus');
let inputNumber = document.querySelector('.input__number');

const cardOptionToggle = () => {
  cardOption2.addEventListener('click', () => {
    if (cardOption1.classList.contains('card__option-active')) {
      cardOption1.classList.remove('card__option-active');
      cardOption2.classList.add('card__option-active');
      costNumber2.classList.remove('cost__number-hidden');
      costNumber1.classList.add('cost__number-hidden');
    }
  });
  cardOption1.addEventListener('click', () => {
    if (cardOption2.classList.contains('card__option-active')) {
      cardOption2.classList.remove('card__option-active');
      cardOption1.classList.add('card__option-active');
      costNumber1.classList.remove('cost__number-hidden');
      costNumber2.classList.add('cost__number-hidden');
    }
  })
}
cardOptionToggle();

const getAmount = () => {
  
  for( i = 0; i < 1; i++) {
    btnPlus.addEventListener('click', () => {
      inputNumber.value++;
    })
  }
  btnMinus.addEventListener('click', () => {
    inputNumber.value--;
  })
  
}

getAmount();