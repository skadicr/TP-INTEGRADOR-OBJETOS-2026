
import { GestorTareas } from "../modelos/GestorTareas.js";
import { Tarea } from "../modelos/Tarea.js";
import { VistaTareas } from "../vistas/VistaTareas.js";
import { obtenerCategorias } from "../api/categoriasApi.js";

export class ControladorTareas {

    constructor() {

        this.gestor = new GestorTareas();
        this.vista = new VistaTareas();

    }

    iniciar() {

        document
            .getElementById("btnAgregar")
            .addEventListener("click", () => this.crearTarea());
        this.actualizar();
        this.cargarCategorias();

    }

    async cargarCategorias() {

    const categorias = await obtenerCategorias();

    const select = document.getElementById("categoria");

    select.innerHTML = "";

    categorias.forEach(categoria => {

        const opcion = document.createElement("option");

        opcion.value = categoria;

        opcion.textContent = categoria;

        select.appendChild(opcion);

    });

}

    crearTarea() {

        const titulo = document.getElementById("titulo").value;
        const descripcion = document.getElementById("descripcion").value;
        const categoria = document.getElementById("categoria").value;

        const tarea = new Tarea(
            Date.now(),
            titulo,
            descripcion,
            categoria
        );

        this.gestor.agregarTarea(tarea);
        this.actualizar();
    }
    actualizar() {

    this.vista.mostrarTareas(
        this.gestor.obtenerTareas()
    );

    this.agregarEventos();

}

    agregarEventos() {

    document
        .querySelectorAll(".eliminar")
        .forEach(btn => {

            btn.onclick = () => {

                this.gestor.eliminarTarea(
                    Number(btn.dataset.id)
                );

                this.actualizar();

            };

        });

    document
        .querySelectorAll(".completar")
        .forEach(btn => {

            btn.onclick = () => {

                const tarea = this.gestor.buscarTarea(
                    Number(btn.dataset.id)
                );

                tarea.completar();

                this.gestor.guardarDatos();

                this.actualizar();

            };

        });

    document
        .querySelectorAll(".editar")
        .forEach(btn => {

            btn.onclick = () => {

               const tarea =
                this.gestor.buscarTarea(
                    Number(btn.dataset.id)
                );


               const nuevoTitulo =
                prompt(
                    "Nuevo título:",
                    tarea.titulo
                );


               const nuevaDescripcion =
                prompt(
                    "Nueva descripción:",
                    tarea.descripcion
                );


               const nuevaCategoria =
                prompt(
                    "Nueva categoría:",
                    tarea.categoria
                );


            tarea.editar(
                nuevoTitulo,
                nuevaDescripcion,
                nuevaCategoria
            );


            this.gestor.guardarDatos();

            this.actualizar();

        };

    });

}
}