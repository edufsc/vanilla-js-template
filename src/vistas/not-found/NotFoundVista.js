import Vista from "../Vista.js";

export default class extends Vista {
    constructor() {
        super()
        this.setTitulo("404 Página no encontrada")
    }
    async getHTML() {
        super.getHTML("/not-found/not-found.html", "/not-found/not-found.js")
    }
}