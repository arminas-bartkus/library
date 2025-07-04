let bookArr = [];
let counter = 1;  
let allDeleteButtons = "";

revealBookFormButton = document.querySelector(".addBook");
addBookForm = document.querySelector(".addBookForm");

submitFormButton = document.querySelector(".submitBook")

// form inputs

bookTitleInput = document.querySelector("#bookTitle");
bookAuthorInput = document.querySelector("#bookAuthor");
numberOfPagesInput = document.querySelector("#noOfPages");
isBookReadInput = document.querySelector("#userRead");

tbodyRef = document.querySelector("table").getElementsByTagName("tbody")[0];

revealBookFormButton.addEventListener("click", function () {

    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    numberOfPagesInput.value = "";
    isBookReadInput.checked = true;
    
    addBookForm.showModal();
});


function Book(uniqueId, title, author, numberOfPages, isRead) {
    
    this.uniqueId = uniqueId;
    this.title  = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;

}

Book.prototype.toggleRead = function () {
    this.isRead = !this.isRead;
  
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
    
    bookIsRead = isBookReadInput.checked;

    bookArr.push(new Book(uniqueId, fetchedBookTitle, fetchedBookAuthor, fetchedPageCount, bookIsRead));

    // insert unique row, 

    let newRow = tbodyRef.insertRow(0);
    let lastObjToArr = Object.values(bookArr[bookArr.length-1]);
   
    //insert each object item from the latest book to table
    
    lastObjToArr.forEach((item) => {

            newCell = newRow.insertCell(i);

        if (item === true || item === false) {
            const readCheckbox = document.createElement("input");
            readCheckbox.type = "checkbox";
            readCheckbox.checked = item;

            readCheckbox.addEventListener("change", function() {
                const book = bookArr.find(book => book.uniqueId === lastObjToArr[0]);
                book.toggleRead();
            })

            newCell.appendChild(readCheckbox);
            
        }

        else {
            newCell.innerHTML = item;
        }
           
        i++
    
    });
        newCell = newRow.insertCell(-1);
        newCell.setAttribute("class", "deleteButtonCell")
        createDeleteButton();
        newCell.appendChild(deleteButton);
        
        // Make Delete Buttons Functional

        allDeleteButtons = document.querySelectorAll(".deleteRowButton");
        addDeleteListeners()

        counter++;
    }

function createDeleteButton() {
        
    deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteRowButton")
    deleteButton.setAttribute("type", "button")

    return deleteButton
}

function addDeleteListeners() {
    
    let tempBtnArray = Array.from(allDeleteButtons);
    let tempBtn = tempBtnArray[0];

    tempBtn.addEventListener("click", function() {
        tempBtn.parentElement.parentElement.remove();
    })

}

function createUniqueId() {
    let uniqueId = self.crypto.randomUUID();
    return uniqueId;
}

