'use strict'

//crear constantes

const addForm = document.querySelector(".js-add-form");
const inputAdd = document.querySelector(".js-input-add");
const buttonAdd = document.querySelector(".js-button-add");
const searchForm = document.querySelector(".js-search-form");
const inputSearch = document.querySelector(".js-input-search");
const buttonSearch = document.querySelector(".js-button-search");
const taskList = document.querySelector(".js-list");
const checkbox = document.querySelectorAll('.js-checkbox');
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

    if (tasks[i].completed) {
        taskList.innerHTML += `<li class="js-listInput completed"><input class="js-checkbox" type="checkbox" id="${[i]}" checked >${tasks[i].name}</li>`

    } else {
        taskList.innerHTML += `<li class="js-listInput"><input class="js-checkbox" type="checkbox" id="${[i]}">${tasks[i].name}</li>`

    }

}

function addNewTask() {
    for (let i = 0; i < tasks.length; i++) {

        if (tasks[i].completed) {
            taskList.innerHTML += `<li class="js-listInput completed"><input class="js-checkbox" type="checkbox" id="${[i]}" checked >${tasks[i].name}</li>`

        } else {
            taskList.innerHTML += `<li class="js-listInput"><input class="js-checkbox" type="checkbox" id="${[i]}">${tasks[i].name}</li>`

        }

    }
}

function handleCheck() {

    // TENEMOS QUE MODIFICAR ELA ARRAY TASKA Para cambiar la propiedad COMPLETED para cambiarlo segun el estado del checkbox
    //TENEMOS QUE VOLVER A PINTAR LA LISTA DE TAREAS
    //NO TIENE QUE TENER UN FOR ESTA FUNCIÓN

    addNewTask()
}



//hacer bucle para cada elemento del array de los checkbox
for (const box of checkbox) {
    box.addEventListener('change', handleCheck);

}





//no se puede hacer un listener sobre un array
//checkbox.addEventListener('change', handleCheck); NO SE PUEDE HACEEEEEEEEER
