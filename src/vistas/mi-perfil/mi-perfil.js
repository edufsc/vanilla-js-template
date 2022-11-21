
function getMiPerfil() {
    const usuarioGuardado = sessionStorage.getItem("miUsuario")
    if (usuarioGuardado == null) {
        alert("No has iniciado sesión!")
    } else {
        const miUsuario = JSON.parse(usuarioGuardado)
        console.log({ miUsuario })
        const idGestor = miUsuario.id
        fetch('http://localhost:8080/gestor/' + idGestor)
            .then(response => response.json())
            .then(gestor => {
                console.log({ gestor })
                // insertar nombre usuario en HTML
                const contenedorUsuario = document.getElementById("contenedor-usuario")
                contenedorUsuario.innerHTML = gestor.usuario
                // insertar correo en HTML
                const contenedorCorreo = document.getElementById("contenedor-correo")
                contenedorCorreo.innerHTML = gestor.email
            })
        escucharClickLogout()
    }

}
getMiPerfil()

function escucharClickLogout() {
    // obtener botón desde el HTML
    const botonLogout = document.getElementById("btn-logout")
    // escuchar clicks en el botón
    botonLogout.addEventListener("click", (_event) => {
        // borrar el contenido de sessionStorage
        // para cerrar sesión
        sessionStorage.clear()
        alert("Se ha cerrado sesión")
    })
}

