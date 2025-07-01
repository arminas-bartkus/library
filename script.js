bookArr = [];

revealBookFormButton = document.querySelector(".addBook");
addBookForm = document.querySelector(".addBookForm");

submitFormButton = document.querySelector(".submitBook")


// form inputs

bookTitleInput = document.querySelector("#bookTitle");
bookAuthorInput = document.querySelector("#bookAuthor");
numberOfPagesInput = document.querySelector("#noOfPages");
isBookReadInput = document.querySelector("input[name = 'hasUserRead'");



revealBookFormButton.addEventListener("click", function () {
    addBookForm.showModal();
});


function Book(title, author, numberOfPages, isRead) {
    
    this.title  = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
}

// function createBookListing(title, author, numberOfPages, isRead) {
//     //create Unique ID
// }

submitFormButton.addEventListener("click", function() {

    console.log(bookTitleInput.value)
    console.log(bookAuthorInput.value)
    console.log(numberOfPagesInput.value)
    console.log(isBookReadInput.value)

});
