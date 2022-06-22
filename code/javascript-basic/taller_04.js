// Tipos de funciones

// Funcion declarativa
function imprimir(nombre, apellido) {
    if (nombre != undefined && apellido != undefined)
        console.log(`${nombre} ${apellido}`)
    else 
        console.log('Por favor, ingresar nombre y apellido.')
}

imprimir('Ariana')
imprimir('Ariana', 'Tamayo')
imprimir(undefined, 'Tamayo')

// Funcion expresiva
const suma = function(a, b) {
    return (a + b)
}

console.log( suma(1, 2) )

// Funcion flecha
const suma2 = (a, b) => {
    return (a + b)
}

console.log( suma2(10, 2) )

const suma3 = (a, b) => console.log(`La suma de ${a} y ${b} es ${(a+b)}.`)

suma3(10, 20)

const suma4 = (a, b) => {
    let resultado = a + b
    console.log(`La suma de ${a} y ${b} es ${resultado}.`)
}

suma4(20, 30)