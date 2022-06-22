var div_cajita = document.getElementById('cajita')
var es_presionada = false
var distancia = [0, 0]

div_cajita.addEventListener('mousedown', function(e){
    es_presionada = true

    let cajita_top = div_cajita.offsetTop
    let cajita_left = div_cajita.offsetLeft
    let mouse_x = e.clientX
    let mouse_y = e.clientY

    distancia = [
        e.clientX - this.offsetLeft,
        e.clientY - this.offsetTop,
    ]
})

div_cajita.addEventListener('mousemove', function(e){
    if (es_presionada) {
        div_cajita.style.left = (e.clientX - distancia[0]) + 'px'
        div_cajita.style.top = (e.clientY - distancia[1]) + 'px'
    }   
})

div_cajita.addEventListener('mouseup', function(e){
    es_presionada = false
})