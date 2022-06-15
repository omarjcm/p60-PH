function agregar_elemento() {
    var texto_nuevo = document.getElementById('texto')

    var container = document.getElementById('container')
    container.outerHTML = '<h1>'+texto_nuevo.value+'</h1>'
}