function cargar_elemento() {
    var h1 = document.createElement('h1')
    var texto = document.createTextNode('UPS')
    h1.appendChild(texto)
    
    var container = document.getElementById('container')
    container.appendChild(h1)
}