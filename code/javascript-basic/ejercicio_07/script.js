var contactos = []

const guardar = () => {
    let nombre_ = document.getElementById('nombre').value
    let apellido_ = document.getElementById('apellido').value
    let correo_ = document.getElementById('correo').value

    alert( nombre_ )

    let objeto = {
        nombre: nombre_,
        apellido: apellido_,
        correo: correo,
    }

    contactos.push( objeto )
}