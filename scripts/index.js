const button = document.querySelector('.menu-button'); // Corrected class selector

button.addEventListener('click', () => {
  button.classList.toggle('activated'); 
});
