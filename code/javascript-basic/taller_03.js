// Especificacion ECMAScript
var libro = {
    titulo: 'Algoritmos Geneticos con Python',
    autores: ['Daniel Gutierrez', 'Alejandro Tapia', 'Alvaro Rodriguez'],
    editorial: 'Marcombo',
    anio: 2020,
    imprimir: function() {
        console.log( `Titulo: ${this.titulo}, Editorial: ${this.editorial}. Anio: ${this.anio}.` )
    }
}

console.log( libro.titulo )
libro.imprimir()
console.log( typeof libro )

// Especificacion Nativa de Javascript
function Libro(titulo, autores, editorial, anio ) {
    this.titulo = titulo
    this.autores = autores
    this.editorial = editorial
    this.anio = anio
    this.imprimir = function() {
        console.log( `Titulo: ${this.titulo}, Editorial: ${this.editorial}. Anio: ${this.anio}.` )
    }
}

var otroLibro = new Libro('Building Java Programs', ['Stuart Reges', 'Marty Stepp'], 'Pearson', 2011)
otroLibro.imprimir()
console.log( typeof otroLibro )
