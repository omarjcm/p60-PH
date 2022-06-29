var monedas = null
var xhttp = null

function cargar_datos() {
    xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = obtener_respuesta
    xhttp.open('GET', 'https://rickandmortyapi.com/api/character/', true)
    xhttp.send()
}

function obtener_respuesta() {
    if (xhttp !=null && xhttp.readyState == 4 && xhttp.status == 200) {
        data = JSON.parse(xhttp.responseText)

        let documento = document.getElementById('documento')
        for (personaje of data.results) {

            let objeto = document.createElement('div')
            objeto.setAttribute('class', 'personaje')
            let h1 = document.createElement('h1')
            let texto = document.createTextNode(personaje.name)
            h1.appendChild(texto)
            objeto.appendChild(h1)
            let imagen = document.createElement('img')
            imagen.src = personaje.image
            objeto.appendChild(imagen)

            documento.appendChild(objeto)
        }
    }
}