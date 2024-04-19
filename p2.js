function evaluarCadena() {
    var cadena = document.getElementById("cadena").value;
    var resultado = document.getElementById("resultado");

    if (cadena.match(/[A-Z]/) && cadena.match(/[a-z]/)) {
        resultado.textContent = "La cadena contiene tanto mayúsculas como minúsculas.";
    } else if (cadena.match(/[A-Z]/)) {
        resultado.textContent = "La cadena contiene solo mayúsculas.";
    } else if (cadena.match(/[a-z]/)) {
        resultado.textContent = "La cadena contiene solo minúsculas.";
    } else {
        resultado.textContent = "La cadena no contiene ni mayúsculas ni minúsculas.";
    }
}