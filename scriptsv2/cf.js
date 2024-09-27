const productTypeDiv = document.querySelector('.product-type');
const designRadio = document.querySelector('#design');
const questionRadio = document.querySelector('#question');

designRadio.addEventListener('click', () => {
    if (designRadio.checked) {
        productTypeDiv.style.display = 'block';  // Make the div visible
        document.getElementById('product-type').required = true;  // Make the select required
    }
});

questionRadio.addEventListener('click', () => {
    if (questionRadio.checked) {
        productTypeDiv.style.display = 'none';  // Hide the div
        document.getElementById('product-type').required = false;  // Remove required attribute
    }
});
