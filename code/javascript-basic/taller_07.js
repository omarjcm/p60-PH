class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`Hola soy ${this.nombre} ${this.apellido}`)
    }

    soy_alto() {
        if (this.altura >= 1.7) {
            console.log(`Mi altura es ${this.altura} y soy alto.`)
        } else {
            console.log(`Mi altura es ${this.altura} y no soy alto.`)
        }
    }
}

class Deportista extends Persona {
    constructor(nombre, apellido) {
        super(nombre, apellido)
    }

    saludar() {
        console.log(`Hola soy ${this.nombre} ${this.apellido} y soy deportista.`)
    }
}

let objeto1 = new Persona('Anthony', 'Yagual', 1.60)
objeto1.saludar()
objeto1.soy_alto()

let objeto2 = new Deportista('Ariana', 'Tamayo')
objeto2.saludar()
objeto2.altura = 1.8
objeto2.soy_alto()