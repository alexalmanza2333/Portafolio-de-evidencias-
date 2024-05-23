function evalua() {
    const cadena = document.getElementById("cadena").value;
    const parrafo = document.getElementById("parrafo");
    
    if (!cadena) {
        parrafo.textContent = "Por favor, ingresa una cadena de caracteres.";
        return;
    }

    const tieneMayusculas = /[A-Z]/.test(cadena);
    const tieneMinusculas = /[a-z]/.test(cadena);

    if (tieneMayusculas && tieneMinusculas) {
        parrafo.textContent = "La cadena contiene minúsculas y mayúsculas.";
    } else if (tieneMayusculas) {
        parrafo.textContent = "La cadena contiene únicamente mayúsculas.";
    } else if (tieneMinusculas) {
        parrafo.textContent = "La cadena contiene únicamente minúsculas.";
    } else {
        parrafo.textContent = "La cadena no contiene letras.";
    }
}
