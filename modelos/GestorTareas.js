
import { Tarea } from "./Tarea.js";

export class GestorTareas {

    constructor() {
        this.tareas = [];
        this.cargarDatos();
    }

    agregarTarea(tarea) {
        this.tareas.push(tarea);
        this.guardarDatos();
    }

    obtenerTareas() {
        return this.tareas;
    }

    buscarTarea(id) {
        return this.tareas.find(t => t.id == id);
    }

    eliminarTarea(id) {
        this.tareas = this.tareas.filter(t => t.id != id);
        this.guardarDatos();
    }

    guardarDatos() {

        const datos = this.tareas.map(t => t.obtenerDatos());

        localStorage.setItem(
            "tareas",
            JSON.stringify(datos)
        );

    }

    cargarDatos() {

        const datos = JSON.parse(
            localStorage.getItem("tareas")
        ) || [];

        this.tareas = datos.map(t => {

            const nueva = new Tarea(
                t.id,
                t.titulo,
                t.descripcion,
                t.categoria
            );

            if (t.completada) {
                nueva.completar();
            }

            return nueva;

        });

    }

}