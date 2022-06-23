/**
 * Tipos de datos primitivos
 */
// Tipo de dato numerico
var a = 10
console.log( a )
console.log( typeof a )
var b = 10.5
console.log( b )
console.log( typeof b )

// Tipo de dato cadena de caracteres
var c = 'Hola mundo'
console.log( c )
console.log( typeof c )

// Tipo de dato booleano
var d = true
console.log( d )
console.log( typeof d )

// Objeto
var e = null
// No se sabe que es (undefined)
var f
console.log(e)
console.log(typeof e)
console.log(f)
console.log(typeof f)

var g = undefined
console.log(g)
console.log(typeof g)

// Tipo de dato objeto
var persona = {
    nombre: 'Guillermo',
    apellido: 'Pizarro',
    ciudad: 'Guayaquil'
}
console.log(persona)
console.log(typeof persona)

persona.nombre = 'Guillermo Omar'
console.log(persona)
console.log( persona.nombre.length )

