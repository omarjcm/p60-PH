var articulos = [
    { nombre: 'Bicicleta', modelo: 'BMX', color: 'Azul', costo: 150 },
    { nombre: 'TV Sony', modelo: 'XBR-85Z8H', color: 'negro', costo: 7000  },
    { nombre: 'Laptop i5 16GB 14"', modelo: 'Lenovo', color: 'gris', costo: 860  },
    { nombre: 'Laptop i5 16GB 15"', modelo: 'Lenovo', color: 'gris', costo: 1100  },
    { nombre: 'Laptop i5 16GB 14"', modelo: 'DELL', color: 'gris', costo: 1100  },
    { nombre: 'Laptop i5 16GB 15"', modelo: 'DELL', color: 'gris', costo: 1300  },
    { nombre: 'Auriculares Cancel Noise', modelo: 'Sony', color: 'blanco', costo: 150  },
    { nombre: 'Audifonos Cancel Noise', modelo: 'Sony', color: 'azul', costo: 200  },
    { nombre: 'Mouse inalambrico', modelo: 'Kensington', color: 'negro', costo: 50  },
    { nombre: 'Mouse inalambrico', modelo: 'Havic', color: 'rojo', costo: 15  },
    { nombre: 'Tablet', modelo: 'Samsung', color: 'gris', costo: 400  },
]

articulos.forEach( function(elemento) {
    console.log(`${elemento.nombre} tiene el costo de $ ${elemento.costo}.`)
} )

console.log('+++++++++++++++++++++++++++++++++')

articulos.forEach( (dato) => console.log(`${dato.nombre} tiene el costo de $ ${dato.costo}.`) )

console.log('+++++++++++++++++++++++++++++++++')

var  costos_modificados = articulos.map((dato) => dato.costo + 100)
console.log( costos_modificados )

var  articulos_modificados = articulos.map((dato) => {
    let elemento = { ... dato }
    elemento.nombre = elemento.nombre.toUpperCase()
    elemento.costo = elemento.costo + 100
    return elemento
})
console.log( articulos_modificados )

var centinela = articulos.some((dato) => dato.costo <= 50)
console.log( centinela )

var articulos_baratos = articulos.filter( (dato) => dato.costo <= 50 )
console.log( articulos_baratos )

var articulo = articulos.find( (elemento) => elemento.nombre == 'Laptop i5 16GB 14"' )
console.log( articulo )
