// indicamos que es una clase
export default class {
    constructor() {
        // por ahora vacío
    }

    // actualizamos el título del navegador
    setTitulo(titulo) {
        document.title = titulo
    }

    // obtenemos el HTML con ajax y lo insertamos en el index.html
    // es asýnc porque realiza una consulta HTTP, así podemos esperar a que se resuelva
    async getHTML(rutaHtml, rutaScript) {
        const xhr = new XMLHttpRequest();
        const rutaVistas = "/src/vistas"
        xhr.open("GET", rutaVistas + rutaHtml, true);
        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return;
            if (this.status !== 200) return;
            const contenedorPagina = document.getElementById("contenedor-pagina")
            contenedorPagina.innerHTML = this.responseText;
            // preparamos el JS creando un nuevo script, para que se ejecute al insertarlo
            const scriptPagina = document.createElement("script")
            scriptPagina.setAttribute("src", rutaVistas + rutaScript)
            // insertamos el nuevo script al final del contenedor de página
            contenedorPagina.appendChild(scriptPagina)

        };
        xhr.send();
    }
}