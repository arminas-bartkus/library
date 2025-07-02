let bookArr = [];
let counter = 1;  

revealBookFormButton = document.querySelector(".addBook");
addBookForm = document.querySelector(".addBookForm");

submitFormButton = document.querySelector(".submitBook")


// form inputs

bookTitleInput = document.querySelector("#bookTitle");
bookAuthorInput = document.querySelector("#bookAuthor");
numberOfPagesInput = document.querySelector("#noOfPages");
isBookReadInput = document.querySelector("#userRead");

// table definitions for table manipulation

libraryTable = document.querySelector("table");



revealBookFormButton.addEventListener("click", function () {
    
    // Make function for this

    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    numberOfPagesInput.value = "";
    isBookReadInput.checked;
    
    addBookForm.showModal();
});


function Book(title, author, numberOfPages, isRead, uniqueId) {
    
    this.title  = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
    this.uniqueId = uniqueId;
}

submitFormButton.addEventListener("click", function() {
    
    let uniqueId = createUniqueId()
    addBookToLibrary(uniqueId)
});

function addBookToLibrary(uniqueId) {
    let i = 0;
    let bookIsRead = false;
    let fetchedBookTitle = bookTitleInput.value;
    let fetchedBookAuthor = bookAuthorInput.value;
    let fetchedPageCount = numberOfPagesInput.value;
    
    if (isBookReadInput.checked) {
        bookIsRead = "Yes"
    }
    else {bookIsRead = "No"}

    bookArr.push(new Book(uniqueId, fetchedBookTitle, fetchedBookAuthor, fetchedPageCount, bookIsRead));


    let newRow = libraryTable.insertRow(counter);
    newRow.classList.add("row" + counter.toString());
    counter++;
    
    let lastObjToArr = Object.values(bookArr[bookArr.length-1]);
   

    
    lastObjToArr.forEach((item) => {
        
        if (bookIsRead) {
            bookIsRead = "Yes"
        }
        else {
            bookIsRead = "No"
        }
        

        newCell = newRow.insertCell(i);
        newCell.innerHTML = item;
        i++
    });
    
    // for (i = 0; i <= 4; i++) {
    //     newCell = newRow.insertCell(i);
    //     newCell.innerHTML = fetchedBookTitle;
    // }

    // Create empty data Cells
    // create unique row with unique class? make like 5 td in it, and then iteratively add the items one by 1
    // Loop to add to table

    // with unique classes, it will be easy to remove an entire row for example,

    // insertrow() at 0 (always at top) (have a separate counter that counts the number of rows used to give them unique class names)
    // will make easier to delete
    // insert cell for items in object, i.e. create cell with cell index = item.count-1 and insert item property.value into said cell.
}

function createUniqueId() {
    let uniqueId = self.crypto.randomUUID();
    return uniqueId;
}

