function mostrarTexto(){
    let elDivTexto = document.getElementsByClassName('texto-imagenes');
    elDivTexto[0].classList.remove('d-none');

    let laImagen = document.getElementById('imagenReactiva');
    laImagen.style.opacity = 0.2;
}

function ocultarTexto(){
    let elDivTexto = document.getElementsByClassName('texto-imagenes');
    elDivTexto[0].classList.add('d-none');

    let laImagen = document.getElementById('imagenReactiva');
    laImagen.style.opacity = 1;
}


function cambiarContenidos(){

    let laImagen = document.getElementById('imagenReactiva');
    
    
    let valorLista = document.getElementById('listaActividad').value;
    let elTituloImagen = document.getElementById('tituloImagen');
    let elSubtituloImagen = document.getElementById('subtituloImagen');
    let laDescripcion = document.getElementById('textoDescripcion');

    if(valorLista==1){
        elTituloImagen.innerText= 'TREKKING';
        elSubtituloImagen.innerText = 'Volcan Villarica';
        laDescripcion.innerText = 'Texto sobre trekking';
        laImagen.style.backgroundImage = "url('assets/img/volcan.jpg')";
    }
    else if(valorLista==2){
        elTituloImagen.innerText= 'NATACION';
        elSubtituloImagen.innerText = 'Lago Cochrane';
        laDescripcion.innerText = 'Texto sobre natación';
        laImagen.style.backgroundImage = "url('assets/img/lago.jpg')";
    }
    else if(valorLista==3){
        elTituloImagen.innerText= 'FERRY';
        elSubtituloImagen.innerText = 'Lago Llanquihue';
        laDescripcion.innerText = 'Texto sobre ferry';
        laImagen.style.backgroundImage = "url('assets/img/lagoLlanquihue.jpg')";
    }
   
}


function asignarEventos(){
    let elDivImagen = document.getElementById('imagenReactiva');
    elDivImagen.addEventListener('mouseover', mostrarTexto );
    elDivImagen.addEventListener('mouseout', ocultarTexto);


    let laLista = document.getElementById('listaActividad');
    laLista.addEventListener('change', cambiarContenidos);
}