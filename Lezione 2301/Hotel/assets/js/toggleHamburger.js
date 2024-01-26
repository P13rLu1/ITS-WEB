// Toggle Hamburger Icon
(() => {const ul = document.querySelector('.header-nav-lists');

const hamburger = document.querySelector('.header-hamburger-icon');

hamburger.addEventListener('click', () => {
ul.classList.toggle('show');
hamburger.classList.toggle('show');
})})()
