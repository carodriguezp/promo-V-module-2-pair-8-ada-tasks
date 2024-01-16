'use strict';

//crear constantes

const addForm = document.querySelector('.js-add-form');
const inputAdd = document.querySelector('.js-input-add');
const buttonAdd = document.querySelector('.js-button-add');
const searchForm = document.querySelector('.js-search-form');
const inputSearch = document.querySelector('.js-input-search');
const buttonSearch = document.querySelector('.js-button-search');
const taskList = document.querySelector('.js-list');
const listInput = document.querySelector('.js-listInput');
///para el apartado 2.13
let tasks = [];
const messageTasks = document.querySelector(".js-total-tasks");
// let totalTasks = tasks.length;
// let completedTask = 0;
// let incompletedTask = 0;

///

// const tasks = [
// 	{ name: 'Recoger setas en el campo', completed: true },
// 	{ name: 'Comprar pilas', completed: true },
// 	{ name: 'Poner una lavadora de blancos', completed: true },
// 	{
// 		name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
// 		completed: false,
// 	},
// ];

//BOTÓN DE BUSCAR
function handleSearch(event) {
    event.preventDefault();
    const valueInput = inputSearch.value;
    const arraySearch = tasks.filter((task) => task.name.includes(valueInput));
    renderTask(arraySearch);
}
buttonSearch.addEventListener('click', handleSearch);

const listenCheck = () => {
    const checkbox = document.querySelectorAll('.js-checkbox');
    //hacer bucle para cada elemento del array de los checkbox.
    for (const box of checkbox) {
        box.addEventListener('change', handleCheck);
    }
};
function renderTask(tasks) {
    console.log(tasks)
    taskList.innerHTML = '';
    let totalTasks = tasks.length;
    let completedTask = 0;
    let incompletedTask = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed) {
            taskList.innerHTML += `<li class="js-listInput completed"><input class="js-checkbox" type="checkbox" id="${[
                i,
            ]}" checked >${tasks[i].name}</li>`;
            //aqui se suma la cantidad de tareas completadas
            completedTask++;

        } else {
            taskList.innerHTML += `<li class="js-listInput"><input class="js-checkbox" type="checkbox" id="${[
                i,
            ]}">${tasks[i].name}</li>`;
            //aqui se suma la cantidad de tareas NO completadas
            incompletedTask++;
        }
    }

    listenCheck();
    messageTasks.innerHTML = `Tienes ${totalTasks} tareas. ${completedTask} completadas y ${incompletedTask} por realizar.`;
    //Se mete dentro del for para que se siga la secuencia: pintar, escuchar eventos, cambiar los datos basados en el evento, volver a pintar y volver a escuchar
}
//OTRA FORMA DE HACER EL FOR DE ARRIBA:
/*for (let index = 0; index < tasks.length; index++) {
    let classCss = tasks[index].completed ? "completed" : null;
    taskList.innerHTML += `<li class= "${classCss}"> ${tasks[index].name} </li>`;
    
}*/

function handleCheck(event) {
    //COGEMOS EL ID DEL ELEMENTO CLICADO PARA SABER LA TAREA QUE TENGO QUE MODIFICAR, LA QUE ESTÉ EN LA MISMA POSICIÓN QUE EL ID QUE TENGO.
    const id = event.target.id;
    console.log(id);
    //CON LA EXCLAMACIÓN LE INDICAMOS QUE PONGA EL VALOR CONTRARIO AL QUE TIENE
    tasks[id].completed = !tasks[id].completed;
    renderTask(tasks);

}
//LA LLAMO FUERA PARA QUE SE EJECUTE LA FUNCIÓN DE PINTAR TAREAS AL CARGAR LA PÁGINA Y
renderTask(tasks);

//no se puede hacer un listener sobre un array
//checkbox.addEventListener('change', handleCheck);


///2.13 PETICIONES AL SERVIDOR:

const GITHUB_USER = 'carodriguezp';
const SERVER_URL = `https://dev.adalab.es/api/todo`;



fetch(SERVER_URL)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        //Guarda la respuesta obtenida enla variable para el listado de tareas: `tasks`
        tasks = data.results;
        renderTask(tasks);

    });

