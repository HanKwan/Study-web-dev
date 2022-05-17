const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger = addEventListener('click', dropDown);

function dropDown() {
    if (menu.classList.contain('hidden')) {
        menu.classList.remove('hidden');        
    } else {
        menu.classList.add('hidden');
    }
}