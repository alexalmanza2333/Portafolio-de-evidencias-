document.getElementById('generateTableBtn').addEventListener('click', function() {
    const number = prompt('Introduce un número:');
    if (number !== null && !isNaN(number) && number.trim() !== '') {
        generateTable(parseInt(number));
    } else {
        alert('Por favor, introduce un número válido.');
    }
});

function generateTable(number) {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const header = document.createElement('th');
    header.colSpan = 2;
    header.innerText = `Tabla de Multiplicar del ${number}`;
    headerRow.appendChild(header);
    table.appendChild(headerRow);

    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        cell1.innerText = `${number} x ${i}`;
        cell2.innerText = number * i;
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    }

    tableContainer.appendChild(table);
}
