const title = document.getElementById("Title");
const author = document.getElementById("Author");
const status = document.getElementById("Status");
const submit = document.getElementById("Submit");

const table = document.getElementById("tableDisplay");
let myLibrary = [];



function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}


// Used to add row to table
Book.prototype.addTr = function() {
    const newRow = table.insertRow();
    const titleCell = newRow.insertCell();
    titleCell.innerText = this.title;
    const authorCell = newRow.insertCell();
    authorCell.innerText = this.author;
    const pagesCell = newRow.insertCell();
    pagesCell.innerText = this.pages;


    let self = this
    const statusCell = newRow.insertCell();
    const statusBtn = document.createElement("input");
    statusBtn.type = "button";
    statusBtn.className = "statusBtn";    
    if (this.hasRead) {
        statusBtn.value = "Read";
    } else {
        statusBtn.value = "Not Read";
    }
    statusBtn.addEventListener("click", function(e) {
        if (statusBtn.value === "Read") {
            statusBtn.value = "Not Read";
            self.hasRead = false;
        } else {
            statusBtn.value = "Read";
            self.hasRead = true;
        }
    });
    statusCell.appendChild(statusBtn);


    const removeCell = newRow.insertCell();
    const removeBtn = document.createElement("input");
    removeBtn.type = "button";
    removeBtn.className = "removeBtn";
    removeBtn.value = "remove";
    removeBtn.addEventListener("click", function(e) {
        newRow.remove();
    });
    removeCell.appendChild(removeBtn);


}




const book1 = new Book("Hello", "Mike", 215, true)
book1.addTr()



// let newRow = table.insertRow();
// let newTitleCell = newRow.insertCell();
// newTitleCell.innerText = "The Warehouse";
// let newAuthorCell = newRow.insertCell();
// newAuthorCell.innerText = "Mike Pike"
// let newPagesCell = newRow.insertCell();
// newPagesCell.innerText = "213"


// let newStatusCell = newRow.insertCell();
// var btn = document.createElement('input');
// btn.type = "button";
// newStatusCell.appendChild(btn);
// btn.value = "Read" 

