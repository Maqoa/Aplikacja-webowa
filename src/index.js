'use strict';
var id = 0;
var counter = 0;

function addRow() {
    var title  = document.getElementById("title").value;
    var autor = document.getElementById("autor").value;
    var category = document.getElementById("category").value;
    var priority  = document.getElementById("priority ").value;
    var newRow = document.createElement("tr");
    newRow.id = ++id;
    newRow.innerHTML = "<td>" + title  + "</td><td>" + autor + "</td><td>" + category + "</td><td>" + priority  + "</td>" + "<td>" + "<button onclick=deleteRow(" + id + ");>usuń</button>" + "</td>";
    var rowAdd = document.getElementById('library');
    rowAdd.appendChild(newRow);
    counter++;
    container.textContent = counter;
}

function deleteRow(id) {
    var rowToDelete = document.getElementById(id);
    rowToDelete.remove();
    counter--;
    container.textContent = counter;
}


function addCategory(){
    var categoryName = document.getElementById("newCategory").value;
    var categories = document.getElementById("category");
    var newCategory = document.createElement("option");
    newCategory.value = categoryName;
    newCategory.text = categoryName;
    categories.appendChild(newCategory);
   
}