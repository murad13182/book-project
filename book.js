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
    formData["aname"] = document.getElementById("aname").value.trim();
    formData["bookid"] = document.getElementById("bookid").value;
    formData["bookn"] = document.getElementById("bookn").value.trim();
    formData["price"] = document.getElementById("price").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("bookList");
    var cell=table.rows.length;
    var newRow = table.insertRow(cell);
    newRow.insertCell(0).innerHTML=data.aname;
    newRow.insertCell(1).innerHTML=data.bookid;
    newRow.insertCell(2).innerHTML=data.bookn;
    newRow.insertCell(3).innerHTML=data.price; 
    newRow.insertCell(4).innerHTML = `<a onClick="onEdit(this)">Edit</a>
                                      <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("aname").value = "";
    document.getElementById("bookid").value = "";
    document.getElementById("bookn").value = "";
    document.getElementById("price").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("aname").value  = selectedRow.cells[0].innerHTML;
    document.getElementById("bookid").value = selectedRow.cells[1].innerHTML;
    document.getElementById("bookn").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.aname;
    selectedRow.cells[1].innerHTML = formData.bookid;
    selectedRow.cells[2].innerHTML = formData.bookn;
    selectedRow.cells[3].innerHTML = formData.price;
}

function onDelete(td) {    
        row = td.parentElement.parentElement;
        document.getElementById("bookList").deleteRow(row.rowIndex);
        resetForm();
}

function validate(){
    
}