const designRadio = document.getElementById('design');
const productTypeDiv = document.querySelector('.product-type');

designRadio.addEventListener('click', () => {
    productTypeDiv.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', () => {
    if (designRadio.checked) {
        productTypeDiv.style.display = 'block';
    } else {
        productTypeDiv.style.display = 'none';
    }
});