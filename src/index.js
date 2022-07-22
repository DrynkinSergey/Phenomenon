'use strict'
const burger = document.querySelector('.menu-btn'),
    closeBtn = document.querySelector('.modal__close'),
    modal = document.querySelector('.modal');

burger.addEventListener('click', () => {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
})
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
})
