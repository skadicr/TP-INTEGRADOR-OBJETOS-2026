
import { obtenerCategorias } from "./api/categoriasApi.js";
import { ControladorTareas } from "./controladores/ControladorTareas.js";
import "./styles/styles.css";

obtenerCategorias()
.then(categorias => {

    console.log(categorias);

});

const app = new ControladorTareas();

app.iniciar();