console.log( 1 == 1 )
console.log( 1 === 1 )
console.log( 1 == '1' )
console.log( 1 === '1' )

//console.log( 1 = 1 )

console.log(1 == true)
console.log(0 == false)

console.log(1 === true)
console.log(0 === false)

console.log(0 == null)
console.log(0 == undefined)
console.log(null == undefined)
console.log(null === undefined)

console.log(false == null)
console.log(null)
console.log(!null)
console.log(!!null)
console.log(0 == !!null)

console.log(undefined)
console.log(!undefined)
console.log(!!undefined)
console.log(0 == !!undefined)

var obj1 = {nombre: 'Andres'}
var obj2 = {nombre: 'Andy'}
var obj3 = {nombre: 'Andy'}
// Asignacion por referencia
var obj4 = obj3
// Asignacion por valor
var obj5 = {
    ... obj3
}

console.log(obj1 == obj2)
console.log(obj2 == obj3)
console.log(obj4 == obj3)
console.log(obj5 == obj3)
console.log(obj5 == obj4)

obj3.nombre = 'Andy Omar'
console.log(obj4)
console.log(obj4 == obj3)

console.log(obj5.nombre)

var cadena1 = 'Hola'
var cadena2 = String('Hola')
var cadena3 = new String('Hola')

console.log( cadena1 )
console.log( cadena2 )
console.log( cadena3 )

console.log( typeof cadena1 )
console.log( typeof cadena2 )
console.log( typeof cadena3 )

console.log(cadena1 == cadena2)
console.log(cadena1 === cadena2)
console.log(cadena3 == cadena2)
console.log(cadena3 === cadena2)

cadena3 = cadena3.concat('')
console.log(cadena3 === cadena2)

var fecha = new Date()
console.log( fecha )
console.log( typeof fecha )
var fecha_ = fecha.toString()
console.log( fecha_ )

console.log( fecha == fecha_ )
console.log( fecha === fecha_ )