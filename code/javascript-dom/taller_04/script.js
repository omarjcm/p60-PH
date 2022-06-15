function agregar_elemento() {
    var texto_nuevo = document.getElementById('texto')

    var h1 = document.createElement('h1')
    var texto = document.createTextNode( texto_nuevo.value )
    h1.appendChild(texto)
    
    var container = document.getElementById('container')
    container.appendChild(h1)
}

function eliminar_elemento() {
    var container = document.getElementById('container')
    container.removeChild( container.lastElementChild )
}