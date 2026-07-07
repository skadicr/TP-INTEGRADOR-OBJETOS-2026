
export async function obtenerCategorias() {

    const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const datos = await respuesta.json();

    return datos.map(usuario => usuario.name);

}