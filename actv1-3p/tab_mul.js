function generarTabla() {
    var numero = prompt("Ingrese un número para generar la tabla de multiplicar:");

    if (numero !== null && numero !== "") {
        var tablaHTML = "<h2>Tabla de Multiplicar del " + numero + "</h2>";
        tablaHTML += "<table>";
        for (var i = 1; i <= 10; i++) {
            tablaHTML += "<tr><td>" + numero + " x " + i + "</td><td>=</td><td>" + (numero * i) + "</td></tr>";
        }
        tablaHTML += "</table>";

        document.getElementById("tablaContainer").innerHTML = tablaHTML;
    } else {
        alert("Debe ingresar un número válido.");
    }
}

document.getElementById("generarTablaBtn").addEventListener("click", generarTabla);