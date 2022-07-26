const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const menu2 = document.querySelector('#menu2');

burger.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('hidden');
});