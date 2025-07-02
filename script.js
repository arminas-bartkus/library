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

allDeleteButtons = document.querySelectorAll(".deleteRowButton");





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

    // insert unique row, 

    let newRow = libraryTable.insertRow(1);
    newRow.classList.add("row" + counter.toString());
    
    let lastObjToArr = Object.values(bookArr[bookArr.length-1]);
   
    //insert each object item from the latest book to table
    
    lastObjToArr.forEach((item) => {

        newCell = newRow.insertCell(i);
        newCell.innerHTML = item;
        i++
    });

        newCell = newRow.insertCell(-1);
        deleteButton = document.createElement("button");

        deleteButton.classList.add("row" + counter.toString());
        deleteButton.classList.add("deleteRowButton")
        deleteButton.setAttribute("type", "button")
        counter++;
        newCell.appendChild(deleteButton);
                
        deleteButton.addEventListener("click", function() {

            deleteButtonRow = deleteButton.classList[0]
            elementsToDelete = document.getElementsByClassName(deleteButtonRow);
            elementsToDelete[0].remove();
        
          
        })
        
       

    }




function createUniqueId() {
    let uniqueId = self.crypto.randomUUID();
    return uniqueId;
}

