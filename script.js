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
    
        bookIsRead = document.createElement('input');
        bookIsRead.setAttribute("type", "checkbox");
        bookIsRead.setAttribute("name", "readCheckbox");

    if (!isBookReadInput.checked) {
         bookIsRead.value = "off";
    }
 
    bookArr.push(new Book(uniqueId, fetchedBookTitle, fetchedBookAuthor, fetchedPageCount, bookIsRead));

    // insert unique row, 

    let newRow = libraryTable.insertRow(1);
    
    let lastObjToArr = Object.values(bookArr[bookArr.length-1]);
   
    //insert each object item from the latest book to table
    
    lastObjToArr.forEach((item) => {

        if (item.name === "readCheckbox") {
            newCell = newRow.insertCell(i);

            if (item.value === "on") {
                
                item.checked = true;
                newCell.appendChild(item);
                i++
            }
            else {
                newCell.appendChild(item);
                i++
            }

           
        }
        
        else {
            newCell = newRow.insertCell(i);
            newCell.innerHTML = item;
            i++
             
        }
    });

        newCell = newRow.insertCell(-1);

        deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteRowButton")
        deleteButton.setAttribute("type", "button")
       
        newCell.appendChild(deleteButton);
        
        allDeleteButtons = document.querySelectorAll(".deleteRowButton");
        addDeleteListeners()

        counter++;

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

