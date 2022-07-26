const addBookBtn = document.querySelector('.addBookBtn')
const addBookModal = document.querySelector('.addBookModal')

function openModal(){
    addBookModal.classList.add('active')
}
addBookBtn.addEventListener('click', openModal)
