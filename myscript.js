// DOM elements

const title = document.getElementById("Title");
const author = document.getElementById("Author");
const pages = document.getElementById("Pages")
const status = document.getElementById("Status");
const submit = document.getElementById("Submit");

const table = document.getElementById("tableDisplay");



// Book Class
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

    // Toggle between read and not read
    statusBtn.addEventListener("click", function(e) {
        if (statusBtn.value === "Read") {
            statusBtn.value = "Not Read";
            self.hasRead = false;
        } else {
            statusBtn.value = "Read";
            self.hasRead = true;
        }
        updateMyLibrary()
    });
    statusCell.appendChild(statusBtn);


    const removeCell = newRow.insertCell();
    const removeBtn = document.createElement("input");
    removeBtn.type = "button";
    removeBtn.className = "removeBtn";
    removeBtn.value = "Remove";

    // Remove entry with confirmation
    removeBtn.addEventListener("click", function(e) {
        if (confirm(`Are you sure you want to delete ${self.title} by ${self.author}?`)){
            newRow.remove();
            myLibrary.splice(myLibrary.indexOf(self), 1)
            updateMyLibrary()
        }
        
    });
    removeCell.appendChild(removeBtn);
}
// Functions


function resetForm() {
    title.value = "";
    author.value = "";
    pages.value = "";
    status.checked = false;
}

// Used to recreate Books that was parsed from localstorage when reopening website
function installBooks() {
    parsedLibrary = JSON.parse(window.localStorage.getItem("myLibrary"));
    for (i = 0; i < parsedLibrary.length; i ++) {
        aBook = new Book(parsedLibrary[i]["title"], parsedLibrary[i]["author"], parsedLibrary[i]["pages"], parsedLibrary[i]["hasRead"]);
        myLibrary.push(aBook);
    }
}

// Used to render stored Books when reopening website
function render() {
    for (i = 0; i < myLibrary.length; i++) {
        myLibrary[i].addTr();
    }
}

// Stores the library array into json for localstorage
function updateMyLibrary() {
    let stringifyMyLibrary = JSON.stringify(myLibrary);
    localStorage.setItem("myLibrary", stringifyMyLibrary)
}


if (window.localStorage.length !== 0) {
    myLibrary = [];
    installBooks();
    render();

} else {
    myLibrary = [];
}






submit.addEventListener("click" ,function(e) {
    e.preventDefault()
    if (title.value == "" || author.value == "") {
        alert("You cannot have empty Title or Author.");
    } else {
        newBook = new Book(title.value, author.value, pages.value, status.checked);
        myLibrary.push(newBook);
        newBook.addTr();
        resetForm();
        updateMyLibrary();
    }
    
});




