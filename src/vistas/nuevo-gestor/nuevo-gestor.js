function escucharClickBoton() {

    // obtener botón desde el HTML
    const botonGuardar = document.getElementById("btn-guardar-gestor")

    // escuchar clicks en el botón
    botonGuardar.addEventListener("click", (_event) => {
        console.log("Click!")
        const usuarioInput = document.querySelector("[name='usuario']")
        const correoInput = document.querySelector("[name='correo']")
        const passInput = document.querySelector("[name='pass']")

        // gestor para guardar
        const nuevoGestor = {
            usuario: usuarioInput.value,
            email: correoInput.value,
            password: passInput.value
        }

        console.log({ nuevoGestor })

        // para pasarlo como parámetro al fetch
        // indicamos el método de petición (method),
        // el cuerpo (body) y los encabezados (headers)
        const opcionesPost = {
            method: "POST",
            body: JSON.stringify(nuevoGestor),
            headers: { "Content-type": "application/json" }
        }

        // consulta con las opcionesPost
        fetch('http://localhost:8080/gestor', opcionesPost)
            .then(response => response.json())
            .then(gestorGuardado => {
                console.log({ gestorGuardado })
                // limpiamos inputs
                usuarioInput.value = ""
                correoInput.value = ""
                passInput.value = ""
            })
    })

}

escucharClickBoton()