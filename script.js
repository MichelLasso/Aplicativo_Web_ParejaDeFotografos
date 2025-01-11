// Seleccionar los elementos
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

// Alternar el estado del menú
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
