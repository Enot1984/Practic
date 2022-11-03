let form = document.querySelector('#skill');
let input = document.querySelector('#input');
let p = document.querySelector('duplicateField');

input.addEventListener('keypress', (event) => {
    duplicateField.textContent = input.textContent + event.target.value + event.key;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(duplicateField.textContent);
    duplicateField.textContent = '';
    form.reset();
});
