const menuBurger = document.querySelector ('.menu-burger');

const menu = document.querySelector ('.menu');

menuBurger.addEventListener('click', () => {
    menu.classList.toggle('active');
} )