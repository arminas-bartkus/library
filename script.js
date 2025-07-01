bookArr = [];

revealBookFormButton = document.querySelector(".addBook");
addBookForm = document.querySelector(".addBookForm");

submitFormButton = document.querySelector(".submitBook")


// form inputs

bookTitleInput = document.querySelector("#bookTitle");
bookAuthorInput = document.querySelector("#bookAuthor");
numberOfPagesInput = document.querySelector("#noOfPages");
isBookReadInput = document.querySelector("#userRead");



revealBookFormButton.addEventListener("click", function () {
    addBookForm.showModal();
});


function Book(title, author, numberOfPages, isRead) {
    
    this.title  = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
}

submitFormButton.addEventListener("click", function() {
    addBookToLibrary()
});

function addBookToLibrary() {
        
    let bookIsRead = false;
    let fetchedBookTitle = bookTitleInput.value;
    let fetchedBookAuthor = bookAuthorInput.value;
    let fetchedPageCount = numberOfPagesInput.value;
    
    if (isBookReadInput.checked) {
        bookIsRead = true;
    }
    else {}

    bookArr.push(new Book(fetchedBookTitle, fetchedBookAuthor, fetchedPageCount, bookIsRead));

}