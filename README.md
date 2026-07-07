## Nombre del proyecto

* Mis tareas

## Integrantes

* cecilia rodrigues

## Descripción

Este proyecto consiste en un gestor de tareas desarrollado en JavaScript aplicando los conceptos vistos durante la cursada de Desarrollo de Sistemas Orientado a Objetos.

El sistema permite crear, editar, eliminar y marcar tareas como completadas. Además, utiliza almacenamiento local (localStorage) para conservar la información y consume una API pública para obtener las categorías de las tareas.

## Funcionalidades

* Crear tareas.
* Mostrar todas las tareas.
* Editar tareas.
* Eliminar tareas.
* Marcar tareas como completadas.
* Guardar automáticamente la información en localStorage.
* Obtener categorías desde una API pública.
* Organización del proyecto mediante la arquitectura MVC.

## Tecnologías utilizadas

* HTML
* JavaScript 
* LocalStorage
* API
* Arquitectura MVC

## Estructura del proyecto
trabajo integrador de objetos/

│── index.html
│── style.css
│── main.js

├── modelos/
│   ├── Tarea.js
│   └── GestorTareas.js

├── vistas/
│   └── VistaTareas.js

├── controladores/
│   └── ControladorTareas.js

├── api/
│   └── categoriasApi.js

└── README.md
```

## Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Ejecutar el proyecto utilizando la extensión **Live Server**.
4. Abrir el navegador y comenzar a utilizar el sistema.

## Conceptos aplicados

* Programación Orientada a Objetos.
* Clases y objetos.
* Encapsulación.
* Modularización.
* Arquitectura MVC.
* Persistencia con LocalStorage.
* Consumo de APIs mediante Fetch.

## API utilizada

https://jsonplaceholder.typicode.com/users
