import Vista from "../Vista.js";

export default class extends Vista {
    constructor() {
        super()
        this.setTitulo("Login")
    }
    async getHTML() {
        super.getHTML("/login/login.html", "/login/login.js")
    }
}