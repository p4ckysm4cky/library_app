const title = document.getElementById("Title");
const author = document.getElementById("Author");
const pages = document.getElementById("Pages")
const status = document.getElementById("Status");
const submit = document.getElementById("Submit");

const table = document.getElementById("tableDisplay");


function resetForm() {
    title.value = "";
    author.value = "";
    pages.value = "";
    status.checked = false;
}


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
    removeBtn.value = "Remove";
    removeBtn.addEventListener("click", function(e) {
        if (confirm(`Are you sure you want to delete ${self.title} by ${self.author}?`)){
            newRow.remove();
        }
        
    });
    removeCell.appendChild(removeBtn);
}



submit.addEventListener("click" ,function(e) {
    e.preventDefault()
    if (title.value == "" || author.value == "") {
        alert("You cannot have empty Title or Author.");
    } else {
        newBook = new Book(title.value, author.value, pages.value, status.checked);
        newBook.addTr();
        resetForm();
    }
    
});




