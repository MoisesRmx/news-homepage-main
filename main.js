const boton = document.querySelector('.boton');
const menu = document.querySelector('.menu');

boton.addEventListener('click', () => {
  boton.classList.toggle('switch')
  menu.classList.toggle('menu-switch')
});
