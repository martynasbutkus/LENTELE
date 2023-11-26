function add() {
    var nameInput = document.getElementById('nameInput');
    var surnameInput = document.getElementById('surnameInput');
    var ageInput = document.getElementById('ageInput');
    
    if (nameInput.value === ''|| surnameInput.value === '' || ageInput.value === '') {
        alert('Uzpildykite langelius!');
        return;
    }

    var table = document.getElementById('dataTable');
    var newTr = table.insertRow(table.rows.length);

    var names = newTr.insertCell(0);
    var surname = newTr.insertCell(1);
    var age = newTr.insertCell(2);

    names.innerHTML = nameInput.value;
    surname.innerHTML = surnameInput.value;
    age.innerHTML = ageInput.value;

    nameInput.value = '';
    surnameInput.value = '';
    ageInput.value = '';
}

function deleteFirst() {
    var table = document.getElementById('dataTable');
    if (table.rows.length > 2 || table.rows.length < 0 ) {
        table.deleteRow(1);
    }
}

function deleteLast() {
    var table = document.getElementById('dataTable');
    var lastRow = table.rows.length - 1;
    if (lastRow > 1) {
        table.deleteRow(lastRow);
    }
}
