const productTypeDiv = document.querySelector('.product-type');
const designRadio = document.querySelector('#design');
const questionRadio = document.querySelector('#question');

designRadio.addEventListener('click', () => {
    if (designRadio.checked) {
        productTypeDiv.style.display = 'block';
    }
});

questionRadio.addEventListener('click', () => {
    if (questionRadio.checked) {
        productTypeDiv.style.display = 'none';
    }
});