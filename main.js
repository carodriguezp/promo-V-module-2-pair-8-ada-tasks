'use strict'

//crear constantes

const addForm = document.querySelector(".js-add-form");
const inputAdd = document.querySelector(".js-input-add");
const buttonAdd = document.querySelector(".js-button-add");
const searchForm = document.querySelector(".js-search-form");
const inputSearch = document.querySelector(".js-input-search");
const buttonSearch = document.querySelector(".js-button-search");
const taskList = document.querySelector(".js-list");
const checkbox = document.querySelector('.js-checkbox');
const listInput = document.querySelector('.js-listInput');
///


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

for (let i = 0; i < tasks.length; i++) {
    taskList.innerHTML += `<li class="js-listInput"><input class="js-checkbox" type="checkbox" id="${[i]}">${tasks[i].name}</li>`
    // if (taskList.innerHTML === `<li class="js-listInput"><input class="js-checkbox" type="checkbox" id="${[i]}" checked>${tasks[i].name}</li>`) {
    //     listInput.classList.add('completed');
    // } else if (taskList.innerHTML === `<li class="js-listInput"><input class="js-checkbox" type="checkbox" id="${[i]}">${tasks[i].name}</li>`) {
    //     listInput.classList.remove('completed');
    // }
    
}

function handleCheck() {
    
}

checkbox.addEventListener('click', handleCheck);
//para el botón buscar