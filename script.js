

const addBookBtn = document.querySelector('.addBookBtn');
const addBookModal = document.querySelector('.addBookModal');
const addBookModalForm = document.querySelector('.addBookModal-form');
const modalSubmit = document.querySelector('.addBookModal-submit');
const bookGrid = document.querySelector('.bookGrid');

class Book {
    constructor(author,title,pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    }
}


function openModal(){
    addBookModal.classList.add('active');
}
function closeModal(e){
    addToGrid();
    addBookModal.classList.remove('active');
    e.preventDefault();
}
function addToGrid(){
    let newBook = new Book(addBookModalForm.author.value, addBookModalForm.title.value, addBookModalForm.pages.value);
    let newBookCard = document.createElement('div');
    newBookCard.classList.add('bookCard');
    newBookCard.innerHTML =  '<p>Title = '+newBook.title+' </p><p>Author ='+newBook.author+'</p><p>Pages = '+newBook.pages+'</p><button class = "removeBtn"> Remove</button>';
    bookGrid.appendChild(newBookCard);
    let removeBtns = document.querySelectorAll('.removeBtn');
    for (i=0;i<removeBtns.length;i++){
        removeBtns[i].addEventListener('click',removeFromGrid);
    }
}

function removeFromGrid(){
    bookGrid.removeChild(this.parentNode);
}

addBookBtn.addEventListener('click', openModal);
addBookModalForm.addEventListener('submit',closeModal);
modalSubmit.addEventListener('submit', closeModal);
