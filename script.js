

const addBookBtn = document.querySelector('.addBookBtn');
const addBookModal = document.querySelector('.addBookModal');
const modalSubmit = document.querySelector('.addBookModal-submit');




function openModal(){
    addBookModal.classList.add('active');
}
function closeModal(){
    addBookModal.classList.remove('active');
}
addBookBtn.addEventListener('click', openModal);
modalSubmit.addEventListener('click', closeModal);
