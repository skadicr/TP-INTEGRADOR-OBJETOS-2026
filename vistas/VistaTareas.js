
export class VistaTareas {

    mostrarTareas(tareas) {

        const lista = document.getElementById("listaTareas");

        lista.innerHTML = "";

        tareas.forEach(tarea => {

            const li = document.createElement("li");

            li.innerHTML = `
                <h3>${tarea.titulo}</h3>

                <p>${tarea.descripcion}</p>

                <p>Categoría: ${tarea.categoria}</p>

                <p>
                    Estado:
                    ${tarea.completada ? "✅ Completada" : "⏳ Pendiente"}
                </p>

                <button class="completar" data-id="${tarea.id}">
                    Cambiar estado
                </button>

                <button class="eliminar" data-id="${tarea.id}">
                    Eliminar
                </button>

                <button class="editar" data-id="${tarea.id}">
                    Editar
                </button>

                <hr>
            `;

            lista.appendChild(li);

        });

    }

}