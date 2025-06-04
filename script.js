function validacion() {
    let nombre = document.getElementById('nombre').Value;
    let email = document.getElementById('correo').value;
    let imagen = document.getElementById('imagen').value;

    if (nombre=="" || email=="" || imagen==""){
        alert('Todos los cambios son obligatorios');
        return false;
    }
    return true;
}
function mostrarImagen(event){
    let imagen = document.getElementById('verImagen');
    imagen.src=URL.createObjectURL(event.target.files[0])
}