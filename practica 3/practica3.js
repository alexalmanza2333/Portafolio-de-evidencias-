function generarRFC() {
    const nombre = document.getElementById("nombre").value.trim().toUpperCase();
    const apellidoPaterno = document.getElementById("apellidoPaterno").value.trim().toUpperCase();
    const apellidoMaterno = document.getElementById("apellidoMaterno").value.trim().toUpperCase();
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    if (!nombre || !apellidoPaterno || !apellidoMaterno || !fechaNacimiento) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const year = fechaNacimiento.slice(2, 4);
    const month = fechaNacimiento.slice(5, 7);
    const day = fechaNacimiento.slice(8, 10);

    const rfc = apellidoPaterno.slice(0, 2) +
                apellidoMaterno.charAt(0) +
                nombre.charAt(0) +
                year + month + day;

    document.getElementById("rfcResultado").value = rfc;
}
