'use strict'

//crear constantes

const addForm = document.querySelector(".js-add-form");
const inputAdd = document.querySelector(".js-input-add");
const buttonAdd = document.querySelector(".js-button-add");
const searchForm = document.querySelector(".js-search-form");
const inputSearch = document.querySelector(".js-input-search");
const buttonSearch = document.querySelector(".js-button-search");
const taskList = document.querySelector(".js-list");

///

taskList.innerHTML = `<li class="completed">Recoger setas en el campo</li>`;

///para el boton agregar


const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
        name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
        completed: false,
    },
];

//para el botón buscar