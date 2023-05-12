function mostrarTexto(){
    let elDivTexto = document.getElementsByClassName('texto-imagenes');
    elDivTexto[0].style.display = 'block';
}

function ocultarTexto(){
    let elDivTexto = document.getElementsByClassName('texto-imagenes');
    elDivTexto[0].style.display = 'none';
}


function asignarEventos(){
    let elDivImagen = document.getElementById('imagenReactiva');
    elDivImagen.addEventListener('mouseover', mostrarTexto );
    elDivImagen.addEventListener('mouseout', ocultarTexto);
}