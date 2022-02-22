var selectedRow = null

function onFormSubmit() {
    
    var formData = readFormData();
    if (selectedRow == null){
            insertNewRecord(formData);
    }else{
            updateRecord(formData);
    }
    resetForm();
}
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["bookn"] = document.getElementById("bookn").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("bookList");
    var cell=table.rows.length;
    var newRow = table.insertRow(cell);
    newRow.insertCell(0).innerHTML=data.name;
    newRow.insertCell(1).innerHTML=data.email;
    newRow.insertCell(2).innerHTML=data.bookn;
    newRow.insertCell(3).innerHTML=data.price; 
    newRow.insertCell(4).innerHTML = `<a onClick="onEdit(this)">Edit</a>
                                      <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("bookn").value = "";
    document.getElementById("price").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value  = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("bookn").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.bookn;
    selectedRow.cells[3].innerHTML = formData.price;
}

function onDelete(td) {    
        row = td.parentElement.parentElement;
        document.getElementById("bookList").deleteRow(row.rowIndex);
        resetForm();
}