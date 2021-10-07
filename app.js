const newName = document.getElementById('new-name');
const nameOf = document.getElementById('name-of');
const submitButton = document.getElementById('submit-button');


submitButton.addEventListener('click', () => {
    // console.log('hello')
    const updatedName = newName.value;
    // console.log(updatedName)
    nameOf.textContent = updatedName;
});



