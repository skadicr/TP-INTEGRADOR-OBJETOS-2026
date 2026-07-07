
export class Tarea {
    #id;
    #titulo;
    #descripcion;
    #categoria;
    #completada;

    constructor(id, titulo, descripcion, categoria) {
        this.#id = id;
        this.#titulo = titulo;
        this.#descripcion = descripcion;
        this.#categoria = categoria;
        this.#completada = false;
    }

    get id() {
        return this.#id;
    }

    get titulo() {
        return this.#titulo;
    }

    get descripcion() {
        return this.#descripcion;
    }

    get categoria() {
        return this.#categoria;
    }

    get completada() {
        return this.#completada;
    }

    completar() {
        this.#completada = !this.#completada;
    }

    editar(titulo, descripcion, categoria) {
        this.#titulo = titulo;
        this.#descripcion = descripcion;
        this.#categoria = categoria;
    }

    obtenerDatos() {
        return {
            id: this.#id,
            titulo: this.#titulo,
            descripcion: this.#descripcion,
            categoria: this.#categoria,
            completada: this.#completada
        };
    }
}