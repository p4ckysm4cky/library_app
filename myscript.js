const title = document.getElementById("Title")
const author = document.getElementById("Author")
const status = document.getElementById("Status")
const submit = document.getElementById("Submit")

const table = document.getElementById("tableDisplay")


// submit.addEventListener("click", function(e){
//     document.createElement("tr")

// })
let newRow = table.insertRow();
let newCell = newRow.insertCell();
newCell.innerText = "The Warehouse";

