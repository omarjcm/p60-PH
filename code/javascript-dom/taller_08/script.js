function presentar_opcion(opcion) {
    var opcion_1 = document.getElementById('opcion-1')
    var opcion_2 = document.getElementById('opcion-2')

    if (opcion == 1) {
        opcion_1.style.zIndex = 2
        opcion_2.style.zIndex = 1
        mover_izquierda(opcion_2)
        mover_izquierda(opcion_2)
        
    } else if (opcion == 2) {
        opcion_1.style.zIndex = 1
        opcion_2.style.zIndex = 2
    }
}

function mover_izquierda(capa) {
    paso = 10
    setTimeout(function(){
        let valor = parseInt(capa.offsetLeft)
        valor += paso
        capa.style.left = valor + 'px'
    }, 3000)
}