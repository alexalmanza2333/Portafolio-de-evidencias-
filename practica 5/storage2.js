function iniciar(){
    var boton = document.getElementById('grabar');
    boton.addEventListener('click', nuevoitem, false);
    mostrar();
}

function nuevoitem(){
    var clave = document.getElementById('clave').value;
    var valor = document.getElementById('texto').value;
    if(clave && valor) {
        localStorage.setItem(clave, valor);
        mostrar();
        document.getElementById('clave').value = '';
        document.getElementById('texto').value = '';
    } else {
        alert("Por favor, complete ambos campos.");
    }
}

function mostrar(){
    var cajadatos = document.getElementById('cajadatos');
    cajadatos.innerHTML = '';
    if(localStorage.length === 0) {
        cajadatos.innerHTML = 'No hay publicaciones disponibles';
    } else {
        for(var f = 0; f < localStorage.length; f++){
            var clave = localStorage.key(f);
            var valor = localStorage.getItem(clave);
            cajadatos.innerHTML += '<div><h2>' + clave + '</h2><p>' + valor + '</p></div>';
        }
    }
}

window.addEventListener('load', iniciar, false);
