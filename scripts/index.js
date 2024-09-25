const button = document.querySelector('.menu-button'); 
const hidden_menu = document.querySelector(".hidden-menu")

button.addEventListener('click', () => {
  button.classList.toggle('activated');
  hidden_menu.classList.toggle('show') 
});